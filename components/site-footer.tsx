import Link from 'next/link'
import { Mail, MapPin } from 'lucide-react'
import { Logo } from '@/components/logo'
import {
  siteConfig,
  footerServices,
} from '@/lib/site'
import { NewsletterForm } from '@/components/newsletter-form'

const companyLinks = [
  { label: 'About', href: '/about' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo className="w-36" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Driving technological breakthroughs with premier chip design and
              expert semiconductor craftsmanship.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[
                { icon: <LinkedInIcon />, label: 'LinkedIn' },
                { icon: <XIcon />, label: 'X / Twitter' },
                { icon: <GitHubIcon />, label: 'GitHub' },
                { icon: <Mail className="h-4 w-4" aria-hidden="true" />, label: 'Email' },
              ].map(({ icon, label }) => (
                <span
                  key={label}
                  aria-label={label}
                  title={`${label} (link coming soon)`}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-navy text-navy-foreground"
                >
                  {icon}
                </span>
              ))}
            </div>
          </div>

          <FooterColumn title="Services">
            {footerServices.map((s) => (
              <li key={s}>
                <Link
                  href="/capabilities"
                  className="text-sm text-muted-foreground transition-colors hover:text-navy"
                >
                  {s}
                </Link>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Company">
            {companyLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-navy"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </FooterColumn>

          <div>
            <h3 className="font-sans text-xs font-semibold uppercase tracking-wider text-navy">
              Contact Us
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-none text-brand-blue" aria-hidden="true" />
                <span>{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 flex-none text-brand-blue" aria-hidden="true" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="transition-colors hover:text-navy"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-border pt-10">
          <div className="max-w-md">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-wider text-navy">
              Stay Connected
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Subscribe to receive technical insights and silicon innovation
              updates.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center">
          <p>
            &copy; {new Date().getFullYear()} NXTwave Semiconductor. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="transition-colors hover:text-navy">
              Privacy Policy
            </Link>
            <Link href="/contact" className="transition-colors hover:text-navy">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
      <path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.46l8.6-9.83L0 1.15h7.6l5.24 6.93 6.06-6.93zm-1.29 19.5h2.04L6.48 3.24H4.29L17.61 20.65z" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" />
    </svg>
  )
}

function FooterColumn({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div>
      <h3 className="font-sans text-xs font-semibold uppercase tracking-wider text-navy">
        {title}
      </h3>
      <ul className="mt-5 space-y-3">{children}</ul>
    </div>
  )
}
