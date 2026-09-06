'use client'

import { useRef, useState } from 'react'
import { CheckCircle2, FileText, Loader2, Send, Upload, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Field, TextInput, TextArea, SelectInput } from '@/components/ui/field'

type Status = 'idle' | 'submitting' | 'success' | 'error'

const noticeOptions = ['Immediate', '15 days', '30 days', '60 days', '90 days']

export function ApplicationForm({ jobTitle, jobSlug }: { jobTitle: string; jobSlug: string }) {
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [serverError, setServerError] = useState<string | null>(null)
  const [resume, setResume] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  function validate(data: Record<string, string>) {
    const next: Record<string, string> = {}
    if (!data.name?.trim()) next.name = 'Please enter your full name.'
    if (!data.email?.trim()) next.email = 'Please enter your email.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      next.email = 'Please enter a valid email address.'
    if (!data.phone?.trim()) next.phone = 'Please enter your phone number.'
    if (!data.experience?.trim()) next.experience = 'Please enter your years of experience.'
    if (!data.linkedin?.trim() && !data.portfolio?.trim())
      next.linkedin = 'Add a LinkedIn or portfolio link.'
    if (!resume) next.resume = 'Please upload a PDF, DOC or DOCX resume.'
    return next
  }

  function handleResume(file?: File) {
    if (!file) return
    const allowed = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
    if (!allowed.includes(file.type) || file.size > 10 * 1024 * 1024) {
      setErrors((current) => ({ ...current, resume: file.size > 10 * 1024 * 1024 ? 'Resume must be smaller than 10 MB.' : 'Please upload a PDF, DOC or DOCX resume.' }))
      return
    }
    setErrors((current) => ({ ...current, resume: '' }))
    setResume(file)
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setServerError(null)
    const form = event.currentTarget
    const formData = new FormData(form)
    const data = Object.fromEntries(formData.entries()) as Record<string, string>

    const validationErrors = validate(data)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) {
      const firstField = form.querySelector<HTMLElement>(`[name="${Object.keys(validationErrors)[0]}"]`)
      firstField?.focus()
      return
    }

    setStatus('submitting')
    try {
      // Keep submissions local until a form service or backend is connected.
      await new Promise((resolve) => window.setTimeout(resolve, 400))
      setStatus('success')
      form.reset()
      setResume(null)
    } catch (err) {
      setStatus('error')
      setServerError(err instanceof Error ? err.message : 'Submission failed.')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-xl border border-brand-blue/25 bg-background p-8 text-center shadow-sm">
      <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-navy">
          <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
        </span>
        <p className="mt-5 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue">Application received</p>
        <h3 className="mt-3 text-2xl text-navy">Thank you for your interest.</h3>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
          Your application for the <span className="font-medium text-navy">{jobTitle}</span> role has been received. Our technical hiring team will review your profile and contact you if it matches an opportunity.
        </p>
        <Button
          className="mt-6 rounded-lg bg-navy text-navy-foreground hover:bg-navy-muted"
          onClick={() => setStatus('idle')}
        >
          Start another application
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-7">
      <div><p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue">Application details</p><p className="mt-2 text-sm text-muted-foreground">Tell us where your experience can make an impact.</p></div>
      <Field label="Position applying for" htmlFor="position" required>
        <TextInput id="position" name="position" value={jobTitle} readOnly />
        <input type="hidden" name="jobSlug" value={jobSlug} />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" htmlFor="name" required error={errors.name}>
          <TextInput id="name" name="name" aria-invalid={!!errors.name} />
        </Field>
        <Field label="Email" htmlFor="email" required error={errors.email}>
          <TextInput
            id="email"
            name="email"
            type="email"
            aria-invalid={!!errors.email}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Phone" htmlFor="phone" required error={errors.phone}>
          <TextInput id="phone" name="phone" aria-invalid={!!errors.phone} />
        </Field>
        <Field label="Years of experience" htmlFor="experience" required error={errors.experience}>
          <TextInput
            id="experience"
            name="experience"
            inputMode="numeric"
            aria-invalid={!!errors.experience}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="LinkedIn profile" htmlFor="linkedin" error={errors.linkedin} hint="LinkedIn or portfolio required">
          <TextInput
            id="linkedin"
            name="linkedin"
            aria-invalid={!!errors.linkedin}
          />
        </Field>
        <Field label="Portfolio / GitHub" htmlFor="portfolio">
          <TextInput id="portfolio" name="portfolio" />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Current location" htmlFor="location">
          <TextInput id="location" name="location" />
        </Field>
        <Field label="Notice period" htmlFor="notice">
          <SelectInput id="notice" name="notice" defaultValue="">
            <option value="" disabled>
              Select notice period
            </option>
            {noticeOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </SelectInput>
        </Field>
      </div>

      <Field label="Resume / CV" htmlFor="resume" required error={errors.resume} hint="PDF, DOC or DOCX · Max 10 MB">
        <input
          id="resume"
          name="resume"
          type="file"
          accept=".pdf,.doc,.docx"
          ref={fileInputRef}
          onChange={(event) => handleResume(event.target.files?.[0])}
          className="sr-only"
        />
        {resume ? <div className="flex items-center gap-3 rounded-xl border border-brand-blue/40 bg-secondary/40 p-4"><FileText className="h-5 w-5 flex-none text-brand-blue" aria-hidden="true" /><span className="min-w-0 flex-1"><span className="block truncate text-sm font-medium text-navy">{resume.name}</span><span className="text-xs text-muted-foreground">{(resume.size / 1024 / 1024).toFixed(2)} MB</span></span><button type="button" onClick={() => { setResume(null); if (fileInputRef.current) fileInputRef.current.value = '' }} aria-label="Remove resume" className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-background hover:text-destructive"><X className="h-4 w-4" aria-hidden="true" /></button></div> : <button type="button" onClick={() => fileInputRef.current?.click()} onDragOver={(event) => event.preventDefault()} onDrop={(event) => { event.preventDefault(); handleResume(event.dataTransfer.files[0]) }} className="flex min-h-32 w-full flex-col items-center justify-center rounded-xl border border-dashed border-brand-blue/40 bg-secondary/20 px-4 py-6 text-center transition-all duration-300 hover:border-brand-blue hover:bg-secondary/50"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-brand-blue"><Upload className="h-4 w-4" aria-hidden="true" /></span><span className="mt-3 text-sm font-semibold text-navy">Upload your resume</span><span className="mt-1 text-xs text-muted-foreground">Drag and drop or browse files</span></button>}
      </Field>

      <Field label="Cover letter / message" htmlFor="message">
        <TextArea
          id="message"
          name="message"
        />
      </Field>

      {serverError && (
        <p className="rounded-md border border-destructive/40 bg-destructive/5 px-4 py-3 text-sm text-destructive" role="alert">
          {serverError}
        </p>
      )}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <Button
          type="submit"
          disabled={status === 'submitting'}
          className="rounded-lg bg-navy px-6 py-3 text-navy-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy-muted"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
              Submitting...
            </>
          ) : (
            <>
              Submit application
              <Send className="ml-2 h-4 w-4" aria-hidden="true" />
            </>
          )}
        </Button>
        <p className="text-xs text-muted-foreground">
          We&apos;ll never share your details with third parties.
        </p>
      </div>
    </form>
  )
}
