import { Resend } from 'resend'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

const MAX_RESUME_SIZE = 10 * 1024 * 1024
const ALLOWED_RESUME_TYPES = new Set([
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
])
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function text(value: FormDataEntryValue | null) {
  return typeof value === 'string' ? value.trim() : ''
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;',
    }
    return entities[character]
  })
}

function safeFilename(filename: string) {
  const cleaned = filename.replace(/[^a-zA-Z0-9._-]/g, '_').replace(/^\.+/, '')
  return cleaned.slice(0, 120) || 'resume'
}

async function hasValidFileSignature(file: File) {
  const bytes = new Uint8Array(await file.slice(0, 8).arrayBuffer())

  if (file.type === 'application/pdf') {
    return new TextDecoder().decode(bytes.slice(0, 4)) === '%PDF'
  }

  if (file.type === 'application/msword') {
    return bytes[0] === 0xd0 && bytes[1] === 0xcf && bytes[2] === 0x11 && bytes[3] === 0xe0
  }

  if (file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
    return bytes[0] === 0x50 && bytes[1] === 0x4b && bytes[2] === 0x03 && bytes[3] === 0x04
  }

  return false
}

function fieldRow(label: string, value: string) {
  return `<tr><td style="padding:10px 14px;border-bottom:1px solid #e5e7eb;color:#64748b;font-size:13px;font-weight:600;width:180px">${label}</td><td style="padding:10px 14px;border-bottom:1px solid #e5e7eb;color:#0f2b5d;font-size:14px">${value || 'Not provided'}</td></tr>`
}

function resendErrorDetails(error: unknown) {
  if (!error || typeof error !== 'object') return { name: 'UnknownError' }

  const resendError = error as { name?: unknown; message?: unknown; statusCode?: unknown }
  return {
    name: typeof resendError.name === 'string' ? resendError.name : 'ResendError',
    message: typeof resendError.message === 'string' ? resendError.message : 'Email provider rejected the request.',
    statusCode: typeof resendError.statusCode === 'number' ? resendError.statusCode : undefined,
  }
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY
    const recipient = process.env.CAREERS_RECIPIENT_EMAIL
    const sender = process.env.RESEND_FROM_EMAIL

    console.info('Career email configuration presence:', {
      hasApiKey: Boolean(apiKey),
      hasRecipient: Boolean(recipient),
      hasSender: Boolean(sender),
    })

    if (!apiKey || !recipient || !sender) {
      console.warn('Career application email is not configured.')
      return NextResponse.json({ message: 'The application service is not configured yet.' }, { status: 503 })
    }

    const formData = await request.formData()
    const name = text(formData.get('name'))
    const email = text(formData.get('email'))
    const phone = text(formData.get('phone'))
    const position = text(formData.get('position'))
    const jobSlug = text(formData.get('jobSlug'))
    const experience = text(formData.get('experience'))
    const linkedin = text(formData.get('linkedin'))
    const portfolio = text(formData.get('portfolio'))
    const location = text(formData.get('location'))
    const notice = text(formData.get('notice'))
    const message = text(formData.get('message'))
    const resume = formData.get('resume')

    console.info('Career application request received:', {
      jobSlug: jobSlug || 'unknown',
      position: position || 'unknown',
      hasResume: resume instanceof File && resume.size > 0,
      resumeSizeBytes: resume instanceof File ? resume.size : 0,
    })

    if (!name || !email || !phone || !position || !experience || (!linkedin && !portfolio)) {
      return NextResponse.json({ message: 'Please complete all required application fields.' }, { status: 400 })
    }

    if (!EMAIL_PATTERN.test(email)) {
      return NextResponse.json({ message: 'Please provide a valid email address.' }, { status: 400 })
    }

    if (!(resume instanceof File) || resume.size === 0) {
      return NextResponse.json({ message: 'Please attach your resume.' }, { status: 400 })
    }

    if (resume.size > MAX_RESUME_SIZE) {
      return NextResponse.json({ message: 'Resume must be smaller than 10 MB.' }, { status: 413 })
    }

    if (!ALLOWED_RESUME_TYPES.has(resume.type) || !(await hasValidFileSignature(resume))) {
      return NextResponse.json({ message: 'Please upload a valid PDF, DOC or DOCX resume.' }, { status: 415 })
    }

    const resumeBuffer = Buffer.from(await resume.arrayBuffer())
    const safeResumeName = safeFilename(resume.name)
    const submittedAt = new Intl.DateTimeFormat('en-US', {
      dateStyle: 'full',
      timeStyle: 'long',
      timeZone: 'UTC',
    }).format(new Date())
    const safe = {
      name: escapeHtml(name),
      email: escapeHtml(email),
      phone: escapeHtml(phone),
      position: escapeHtml(position),
      experience: escapeHtml(experience),
      linkedin: escapeHtml(linkedin),
      portfolio: escapeHtml(portfolio),
      location: escapeHtml(location),
      notice: escapeHtml(notice),
      message: escapeHtml(message).replace(/\n/g, '<br />'),
      submittedAt: escapeHtml(submittedAt),
    }

    const resend = new Resend(apiKey)
    const { data, error } = await resend.emails.send({
      from: sender,
      to: [recipient],
      replyTo: email,
      subject: `New Career Application — ${position}`,
      html: `
        <div style="margin:0;background:#f4f7fc;padding:32px 16px;font-family:Arial,sans-serif;color:#0f2b5d">
          <div style="max-width:680px;margin:0 auto;background:#ffffff;border:1px solid #dbe4f0">
            <div style="background:#0f2b5d;padding:24px 28px;color:#ffffff">
              <div style="font-size:12px;letter-spacing:3px;text-transform:uppercase;color:#9fc4ff">NXTwave Semiconductor</div>
              <h1 style="margin:12px 0 0;font-size:28px;line-height:1.2">New Career Application</h1>
            </div>
            <div style="padding:28px">
              <p style="margin:0 0 18px;color:#475569;font-size:14px">A new application has been submitted through the careers page.</p>
              <table style="width:100%;border-collapse:collapse">
                ${fieldRow('Candidate', safe.name)}
                ${fieldRow('Email', `<a href="mailto:${safe.email}" style="color:#2f6fe0">${safe.email}</a>`)}
                ${fieldRow('Phone', safe.phone)}
                ${fieldRow('Position', safe.position)}
                ${fieldRow('Experience', safe.experience)}
                ${fieldRow('LinkedIn', safe.linkedin)}
                ${fieldRow('Portfolio', safe.portfolio)}
                ${fieldRow('Location', safe.location)}
                ${fieldRow('Notice period', safe.notice)}
                ${fieldRow('Job reference', escapeHtml(jobSlug))}
                ${fieldRow('Submitted', safe.submittedAt)}
              </table>
              <h2 style="margin:28px 0 8px;font-size:16px">Cover letter / message</h2>
              <div style="padding:16px;background:#f8fafc;border-left:3px solid #2f6fe0;color:#334155;font-size:14px;line-height:1.6">${safe.message || 'Not provided'}</div>
            </div>
          </div>
        </div>
      `,
      attachments: [{ filename: safeResumeName, content: resumeBuffer.toString('base64') }],
    })

    if (error) {
      console.error('Career application email failed:', resendErrorDetails(error))
      return NextResponse.json({ message: 'We could not send your application right now. Please try again.' }, { status: 502 })
    }

    if (!data?.id) {
      console.error('Career application email returned no Resend email ID.')
      return NextResponse.json({ message: 'We could not confirm your application email. Please try again.' }, { status: 502 })
    }

    console.info('Career application email accepted by Resend:', { emailId: data.id })

    return NextResponse.json({ message: 'Application submitted successfully.' }, { status: 200 })
  } catch (error) {
    console.error('Career application request failed:', error instanceof Error ? error.name : 'Unknown error')
    return NextResponse.json({ message: 'Something went wrong while submitting your application.' }, { status: 500 })
  }
}
