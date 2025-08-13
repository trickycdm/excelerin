import { NextResponse } from 'next/server'
import { validateContactPayload } from '@/lib/validation/contact'
import { ServerClient } from 'postmark'

export const runtime = 'nodejs'

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
    // Non-secret config kept in code per request
    const toEmail = 'col@luupdin.com'
    const fromEmail = 'hello@excelerin.com'
    const siteUrl = 'https://www.excelerin.co.uk'

    if (!serverToken) {
      return NextResponse.json({ ok: false, message: 'Email not configured' }, { status: 500 })
    }

    const ua = req.headers.get('user-agent') || 'unknown'
    const timestamp = new Date().toISOString()
    const subject = `[Excelerin] Website enquiry — ${data.name} (${data.email})`
    const textBody = `New enquiry\n\n` +
      `Name: ${data.name}\n` +
      `Company: ${data.company}\n` +
      `Email: ${data.email}\n` +
      (data.phone ? `Phone: ${data.phone}\n` : '') +
      `Service: ${data.service}\n` +
      `Message:\n${data.message}\n\n` +
      `Meta: ${timestamp} | IP: ${ip} | UA: ${ua}`

    // Send via Postmark official client
    const client = new ServerClient(serverToken)
    const fromDisplayName = data.name ? `${data.name} via Excelerin` : 'Excelerin Website'
    const fromField = `${fromDisplayName} <${fromEmail}>`
    try {
      await client.sendEmail({
        From: fromField,
        To: toEmail,
        ReplyTo: data.email,
        Subject: subject,
        TextBody: textBody,
        MessageStream: 'outbound',
        Metadata: {
          source: 'website',
          siteUrl,
          service: data.service
        },
        Tag: 'contact-form'
      })
    } catch (e) {
      return NextResponse.json({ ok: false, message: 'Email send failed', details: e?.message || 'postmark_error' }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    return NextResponse.json({ ok: false, message: 'Unexpected server error' }, { status: 500 })
  }
}


