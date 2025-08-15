import { NextResponse } from 'next/server'
import { ServerClient } from 'postmark'

export const runtime = 'nodejs'

// Simple in-memory idempotency cache (best-effort only; resets on cold start)
const idempotencyCache = new Map()

function extractApiKey(req) {
    const keyFromHeader = req.headers.get('x-api-key') || ''
    if (keyFromHeader) return keyFromHeader.trim()
    const auth = req.headers.get('authorization') || ''
    if (auth.toLowerCase().startsWith('bearer ')) return auth.slice(7).trim()
    return ''
}

function getAllowedApiKey() {
    return process.env.AI_READINESS_API_KEY || '123ngh-skfng57-fnab019'
}

export async function POST(req) {
    try {
        // Auth check (supports X-API-Key and Authorization: Bearer ...)
        const providedKey = extractApiKey(req)
        const allowedKey = getAllowedApiKey()
        if (!providedKey || providedKey !== allowedKey) {
            return NextResponse.json({ error: 'unauthorized', message: 'Invalid API key' }, { status: 401 })
        }

        // Idempotency handling
        const idemKey = req.headers.get('idempotency-key')?.trim() || ''
        if (idemKey && idempotencyCache.has(idemKey)) {
            return NextResponse.json(idempotencyCache.get(idemKey), { status: 200 })
        }

        // Parse (accept whatever the LLM sends). No strict validation.
        const payload = await req.json().catch(() => ({}))

        // Prepare email via Postmark
        const serverToken = process.env.POSTMARK_SERVER_TOKEN
        const toEmail = process.env.AI_READINESS_TO_EMAIL || 'col@luupdin.com'
        const fromEmail = process.env.POSTMARK_FROM_EMAIL || 'hello@excelerin.com'
        const messageStream = process.env.POSTMARK_MESSAGE_STREAM || 'outbound'
        const siteUrl = 'https://api.luupdin.com/excelerin/ai-readiness'

        if (!serverToken) {
            return NextResponse.json({ error: 'server_error', message: 'Email not configured' }, { status: 500 })
        }

        const id = Math.random().toString(16).slice(2, 10)
        const storedAt = new Date().toISOString()

        const sessionId = typeof payload?.sessionId === 'string' && payload.sessionId.trim() ? payload.sessionId.trim() : 'unknown'
        const contact = payload?.contact && typeof payload.contact === 'object' ? payload.contact : null
        const report = payload?.report && typeof payload.report === 'object' ? payload.report : null

        const fmtList = (arr) => (Array.isArray(arr) && arr.length ? arr.map(i => `- ${String(i)}`).join('\n') : '-')
        const scoresTable = Array.isArray(report?.assessmentScores) && report.assessmentScores.length
            ? ['| Title | Score | Bars |', '| --- | --- | --- |', ...report.assessmentScores.map(s => `| ${s?.title ?? ''} | ${s?.score ?? ''} | ${s?.bars ?? ''} |`)].join('\n')
            : ''
        const kf = report?.keyFindings || {}
        const recMd = Array.isArray(report?.recommendations) && report.recommendations.length
            ? report.recommendations.map((r, i) => (
                `**${i + 1}. ${r?.what ?? 'Recommendation'}**\n` +
                (r?.why ? `- Why: ${r.why}\n` : '') +
                (r?.how ? `- How: ${r.how}\n` : '') +
                (r?.investment ? `- Investment: ${r.investment}\n` : '') +
                (r?.timeline ? `- Timeline: ${r.timeline}\n` : '') +
                (r?.roi ? `- ROI: ${r.roi}\n` : '')
            )).join('\n')
            : ''

        // Handle opportunity matrix if present
        const opportunityMatrix = report?.opportunityMatrix || []
        const opportunityMd = Array.isArray(opportunityMatrix) && opportunityMatrix.length
            ? opportunityMatrix.map((opp, i) => {
                const easeImpact = `Ease: ${opp?.ease || 'N/A'}/5, Impact: ${opp?.impact || 'N/A'}/5`
                const costEffort = opp?.costEffort ? `Cost/Effort: ${opp.costEffort}` : ''
                const priority = opp?.priority ? `Priority: ${opp.priority}` : ''
                const confidence = opp?.confidence ? `Confidence: ${opp.confidence}` : ''
                const assumptions = Array.isArray(opp?.assumptions) && opp.assumptions.length
                    ? `\n  Assumptions:\n${opp.assumptions.map(a => `    - ${a}`).join('\n')}` : ''

                return `**${i + 1}. ${opp?.area || 'Opportunity'}**\n` +
                    `  ${opp?.description || ''}\n` +
                    `  ${easeImpact}${costEffort ? ` | ${costEffort}` : ''}${priority ? ` | ${priority}` : ''}${confidence ? ` | ${confidence}` : ''}\n` +
                    `  **Rationale:** ${opp?.rationale || 'N/A'}${assumptions}`
            }).join('\n\n')
            : ''

        const sections = []
        sections.push(`# AI Readiness Assessment`)
        sections.push(`- ID: ${id}`)
        sections.push(`- Stored At: ${storedAt}`)
        sections.push(`- Session: ${sessionId}`)
        sections.push('')

        if (contact) {
            const fullName = contact?.fullName || ''
            const company = contact?.company || ''
            const pcm = contact?.preferredContactMethod || ''
            const email = contact?.email || ''
            const phone = contact?.phone || ''
            const otherContact = contact?.otherContact || ''
            sections.push('## Contact')
            if (fullName) sections.push(`- Full Name: ${fullName}`)
            if (company) sections.push(`- Company: ${company}`)
            if (pcm) sections.push(`- Preferred Contact Method: ${pcm}`)
            if (email) sections.push(`- Email: ${email}`)
            if (phone) sections.push(`- Phone: ${phone}`)
            if (otherContact) sections.push(`- Other: ${otherContact}`)
            sections.push('')
        }

        if (report?.executiveSummary) {
            sections.push(`## Executive Summary`)
            sections.push(String(report.executiveSummary))
            sections.push('')
        }
        if (scoresTable) {
            sections.push(`## Assessment Scores`)
            sections.push(scoresTable)
            sections.push('')
        }
        if (report?.keyFindings) {
            sections.push(`## Key Findings`)
            if (kf?.strengths) sections.push(`**Strengths**\n${fmtList(kf.strengths)}`)
            if (kf?.quickWins) sections.push(`\n**Quick Wins**\n${fmtList(kf.quickWins)}`)
            if (kf?.transformational) sections.push(`\n**Transformational**\n${fmtList(kf.transformational)}`)
            if (kf?.challenges) sections.push(`\n**Challenges**\n${fmtList(kf.challenges)}`)
            if (kf?.context) sections.push(`\n**Context**\n${String(kf.context)}`)
            sections.push('')
        }
        if (recMd) {
            sections.push(`## Recommendations`)
            sections.push(recMd)
            sections.push('')
        }
        if (opportunityMd) {
            sections.push(`## Opportunity Matrix`)
            sections.push(opportunityMd)
            sections.push('')
        }
        if (report?.nextSteps) {
            sections.push(`## Next Steps`)
            sections.push(String(report.nextSteps))
            sections.push('')
        }
        if (!report) {
            // Generic summary for arbitrary payloads
            sections.push('## Summary')
            sections.push('Received payload from LLM. Contents summarized below:')
            const keys = Object.keys(payload || {})
            if (keys.length) sections.push(keys.map(k => `- ${k}: ${typeof payload[k]}`).join('\n'))
            sections.push('')
        }

        // Check if appendix contains opportunity map JSON (for backward compatibility)
        let appendixContent = report?.appendix || ''
        if (appendixContent && typeof appendixContent === 'string') {
            const opportunityMatch = appendixContent.match(/OPPORTUNITY_MAP_JSON=(\[.*\]|\{.*\})/s)
            if (opportunityMatch && !opportunityMd) {
                try {
                    const opportunityData = JSON.parse(opportunityMatch[1])
                    if (Array.isArray(opportunityData)) {
                        sections.push(`## Legacy Opportunity Map (from appendix)`)
                        sections.push(opportunityData.map((opp, i) =>
                            `**${i + 1}. ${opp?.area || 'Opportunity'}**\n  ${opp?.description || ''}`
                        ).join('\n\n'))
                        sections.push('')
                    }
                } catch (e) {
                    // If parsing fails, just continue with original appendix
                }
            }
        }

        sections.push('## Raw JSON Appendix')
        sections.push('```json')
        sections.push(JSON.stringify(payload, null, 2))
        sections.push('```')

        const subjectParts = []
        const displayName = contact?.fullName ? contact.fullName : 'Unknown'
        const displayCompany = contact?.company ? ` @ ${contact.company}` : ''
        subjectParts.push(`[Excelerin] AI Readiness — ${displayName}${displayCompany}`)
        subjectParts.push(`session ${sessionId}`)
        const subject = subjectParts.join(' — ')
        const textBody = sections.join('\n') + `\n\nMeta: IP=${req.headers.get('x-forwarded-for') || 'unknown'} | UA=${req.headers.get('user-agent') || 'unknown'} | ${siteUrl}`

        // Send email
        const client = new ServerClient(serverToken)
        const fromField = `Excelerin Website <${fromEmail}>`
        try {
            const message = {
                From: fromField,
                To: toEmail,
                Subject: subject,
                TextBody: textBody,
                MessageStream: messageStream,
                Tag: 'ai-readiness-assessment'
            }
            if (contact?.email) message.ReplyTo = contact.email
            await client.sendEmail(message)
        } catch (e) {
            // Log server-side for debugging
            console.error('Postmark sendEmail failed', {
                statusCode: e?.statusCode,
                code: e?.code,
                message: e?.message,
                errors: e?.errors
            })
            return NextResponse.json({
                error: 'server_error',
                message: 'Email send failed',
                details: e?.message || 'postmark_error',
                statusCode: e?.statusCode || 502,
                code: e?.code || undefined
            }, { status: 502 })
        }

        const responseBody = { status: 'ok', id, storedAt }

        if (idemKey) idempotencyCache.set(idemKey, responseBody)

        return NextResponse.json(responseBody, { status: 200 })
    } catch (err) {
        return NextResponse.json({ error: 'server_error', message: 'Unexpected error' }, { status: 500 })
    }
}


