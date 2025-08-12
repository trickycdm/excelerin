import { NextResponse } from 'next/server'
import { validateContactPayload } from '@/lib/validation/contact'

// Simple in-memory rate limit per IP (cold-start reset acceptable for Netlify/Edge)
const RATE_LIMIT_WINDOW_MS = 60 * 1000
const RATE_LIMIT_MAX = 5
const requests = new Map()

function rateLimited (ip) {
  const now = Date.now()
  const bucket = requests.get(ip) || []
  const recent = bucket.filter((t) => now - t < RATE_LIMIT_WINDOW_MS)
  recent.push(now)
  requests.set(ip, recent)
  return recent.length > RATE_LIMIT_MAX
}

export async function POST (req) {
  try {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
    if (rateLimited(ip)) {
      return NextResponse.json({ ok: false, message: 'Too many requests' }, { status: 429 })
    }

    const json = await req.json()
    const { ok, errors, data } = validateContactPayload(json || {})
    if (!ok) {
      return NextResponse.json({ ok: false, errors, message: 'Validation failed' }, { status: 400 })
    }

    const serverToken = process.env.POSTMARK_SERVER_TOKEN
    const toEmail = process.env.CONTACT_TO_EMAIL
    const fromEmail = process.env.CONTACT_FROM_EMAIL
    const siteUrl = process.env.SITE_URL || 'https://www.excelerin.co.uk'

    if (!serverToken || !toEmail || !fromEmail) {
      return NextResponse.json({ ok: false, message: 'Email not configured' }, { status: 500 })
    }

    const ua = req.headers.get('user-agent') || 'unknown'
    const timestamp = new Date().toISOString()
    const subject = `[Excelerin] Website enquiry — ${data.name}`
    const textBody = `New enquiry\n\n` +
      `Name: ${data.name}\n` +
      `Company: ${data.company}\n` +
      `Email: ${data.email}\n` +
      (data.phone ? `Phone: ${data.phone}\n` : '') +
      `Service: ${data.service}\n` +
      `Consented: ${data.consent ? 'Yes' : 'No'}\n` +
      `Message:\n${data.message}\n\n` +
      `Meta: ${timestamp} | IP: ${ip} | UA: ${ua}`

    // Send via Postmark
    const res = await fetch('https://api.postmarkapp.com/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-Postmark-Server-Token': serverToken
      },
      body: JSON.stringify({
        From: fromEmail,
        To: toEmail,
        ReplyTo: data.email,
        Subject: subject,
        TextBody: textBody,
        MessageStream: 'outbound'
      })
    })

    if (!res.ok) {
      const errJson = await res.json().catch(() => ({}))
      return NextResponse.json({ ok: false, message: 'Email send failed', details: errJson }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    return NextResponse.json({ ok: false, message: 'Unexpected server error' }, { status: 500 })
  }
}


