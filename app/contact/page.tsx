import type { Metadata } from 'next'
import { ContactForm } from '@/components/contact-form'
import { PageHero } from '@/components/page-hero'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = { title: 'Contact', description: 'Start a semiconductor engineering conversation with NXTwave.' }

export default function ContactPage() {
  return <><SiteHeader /><main><PageHero eyebrow="Contact" eyebrowClassName="text-base tracking-[0.28em] text-[#c9d9ff]" title="Let&apos;s Build What&apos;s Next." description="Have a project in mind? Let&apos;s start the conversation." breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Contact' }]} /><section className="bg-background"><div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.65fr_1fr] lg:px-8 lg:py-24"><div><div className="py-2"><div className="flex items-center gap-2.5" aria-hidden="true"><span className="h-2 w-2 rounded-full bg-brand-blue" /><span className="h-px w-12 bg-brand-blue" /><span className="h-1.5 w-1.5 rounded-full bg-brand-blue" /></div><p className="mt-5 font-serif text-[2.35rem] font-semibold leading-[1.06] text-brand-blue sm:text-[2.75rem] lg:text-[3.1rem]">Talk with our team</p><div className="mt-5 flex items-center gap-2" aria-hidden="true"><span className="h-px w-36 bg-brand-blue" /><span className="h-1 w-1 rounded-full bg-brand-blue" /><span className="h-px w-8 bg-brand-blue/40" /></div></div><p className="mt-5 leading-relaxed text-muted-foreground">Tell us where you are in your silicon program and what expertise you need.</p><p className="mt-8 text-sm font-medium text-navy">{siteConfig.contact.address}</p><a className="mt-2 inline-block text-sm text-brand-blue hover:underline" href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a></div><div className="min-w-0 rounded-lg border border-border bg-muted p-5 sm:p-8"><ContactForm /></div></div></section></main><SiteFooter /></>
}