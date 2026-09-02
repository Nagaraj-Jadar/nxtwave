'use client'

import { useState } from 'react'
import { CheckCircle2, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Field, TextArea, TextInput } from '@/components/ui/field'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    if (!data.get('name') || !data.get('email') || !data.get('requirement')) {
      setError('Please complete your name, email, and project requirement.')
      return
    }
    setError('')
    setSubmitted(true)
    form.reset()
  }

  if (submitted) {
    return <div className="rounded-lg border border-border bg-card p-8 text-center"><CheckCircle2 className="mx-auto h-9 w-9 text-brand-blue" /><h2 className="mt-4 text-2xl text-navy">Inquiry received</h2><p className="mt-2 text-sm text-muted-foreground">Thank you. We&apos;ll review your requirement and respond through the contact details you provided.</p></div>
  }

  return <form onSubmit={handleSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
    <Field label="Name" htmlFor="name" required><TextInput id="name" name="name" autoComplete="name" /></Field>
    <Field label="Company" htmlFor="company"><TextInput id="company" name="company" autoComplete="organization" /></Field>
    <Field label="Email" htmlFor="email" required><TextInput id="email" name="email" type="email" autoComplete="email" /></Field>
    <Field label="Phone" htmlFor="phone"><TextInput id="phone" name="phone" type="tel" autoComplete="tel" /></Field>
    <div className="sm:col-span-2"><Field label="Project / requirement" htmlFor="requirement" required><TextInput id="requirement" name="requirement" /></Field></div>
    <div className="sm:col-span-2"><Field label="Message" htmlFor="message"><TextArea id="message" name="message" /></Field></div>
    {error && <p className="sm:col-span-2 text-sm text-destructive" role="alert">{error}</p>}
    <div className="sm:col-span-2"><Button type="submit" className="bg-navy text-navy-foreground hover:bg-navy-muted">Send Inquiry <Send className="ml-2 h-4 w-4" /></Button></div>
  </form>
}