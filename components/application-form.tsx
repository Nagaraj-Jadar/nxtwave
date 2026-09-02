'use client'

import { useState } from 'react'
import { CheckCircle2, Loader2, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Field, TextInput, TextArea, SelectInput } from '@/components/ui/field'

type Status = 'idle' | 'submitting' | 'success' | 'error'

const noticeOptions = ['Immediate', '15 days', '30 days', '60 days', '90 days']

export function ApplicationForm({ jobTitle, jobSlug }: { jobTitle: string; jobSlug: string }) {
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [serverError, setServerError] = useState<string | null>(null)

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
    return next
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
    } catch (err) {
      setStatus('error')
      setServerError(err instanceof Error ? err.message : 'Submission failed.')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-lg border border-border bg-card p-8 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-navy">
          <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
        </span>
        <h3 className="mt-5 text-xl font-semibold text-navy">Application Submitted Successfully</h3>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
          Thank you for applying to the <span className="font-medium text-navy">{jobTitle}</span> role.
          Our engineering team reviews every application and will reach out if there&apos;s a fit.
        </p>
        <Button
          className="mt-6 bg-navy text-navy-foreground hover:bg-navy-muted"
          onClick={() => setStatus('idle')}
        >
          Submit another application
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <Field label="Position applying for" htmlFor="position" required>
        <TextInput id="position" name="position" value={jobTitle} readOnly />
        <input type="hidden" name="jobSlug" value={jobSlug} />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" htmlFor="name" required error={errors.name}>
          <TextInput id="name" name="name" placeholder="Priya Sharma" aria-invalid={!!errors.name} />
        </Field>
        <Field label="Email" htmlFor="email" required error={errors.email}>
          <TextInput
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            aria-invalid={!!errors.email}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Phone" htmlFor="phone" required error={errors.phone}>
          <TextInput id="phone" name="phone" placeholder="Your phone number" aria-invalid={!!errors.phone} />
        </Field>
        <Field label="Years of experience" htmlFor="experience" required error={errors.experience}>
          <TextInput
            id="experience"
            name="experience"
            placeholder="e.g. 5"
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
            placeholder="linkedin.com/in/…"
            aria-invalid={!!errors.linkedin}
          />
        </Field>
        <Field label="Portfolio / GitHub" htmlFor="portfolio">
          <TextInput id="portfolio" name="portfolio" placeholder="github.com/…" />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Current location" htmlFor="location">
          <TextInput id="location" name="location" placeholder="Bengaluru, India" />
        </Field>
        <Field label="Notice period" htmlFor="notice">
          <SelectInput id="notice" name="notice" defaultValue="30 days">
            {noticeOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </SelectInput>
        </Field>
      </div>

      <Field label="Resume upload" htmlFor="resume">
        <input
          id="resume"
          name="resume"
          type="file"
          accept=".pdf,.doc,.docx"
          className="block w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground file:mr-4 file:border-0 file:bg-secondary file:px-3 file:py-1.5 file:text-sm file:font-medium file:text-navy"
        />
      </Field>

      <Field label="Cover letter / message" htmlFor="message">
        <TextArea
          id="message"
          name="message"
          placeholder="Tell us about the silicon problems you love solving…"
        />
      </Field>

      {serverError && (
        <p className="rounded-md border border-destructive/40 bg-destructive/5 px-4 py-3 text-sm text-destructive" role="alert">
          {serverError}
        </p>
      )}

      <div className="flex items-center gap-4">
        <Button
          type="submit"
          disabled={status === 'submitting'}
          className="bg-navy text-navy-foreground hover:bg-navy-muted"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
              Submitting…
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
