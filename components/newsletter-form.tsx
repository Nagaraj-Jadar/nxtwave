'use client'

import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'

export function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    // Newsletter storage is not configured; acknowledge locally without
    // claiming delivery to a backend.
    setDone(true)
    setEmail('')
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email Address"
        className="min-w-0 flex-1 rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-brand-blue focus-visible:ring-2 focus-visible:ring-ring/40"
      />
      <button
        type="submit"
        className="inline-flex flex-none items-center justify-center gap-1.5 rounded-md bg-navy px-4 py-2.5 text-sm font-semibold text-navy-foreground transition-colors hover:bg-navy-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        {done ? (
          <>
            <Check className="h-4 w-4" aria-hidden="true" /> Subscribed
          </>
        ) : (
          <>
            Subscribe
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </>
        )}
      </button>
    </form>
  )
}
