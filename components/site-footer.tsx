import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin } from 'lucide-react'
import { siteConfig, serviceLinks } from '@/lib/site'

const companyLinks = [
  { label: 'About', href: '/about' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
]

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#020f24] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(98, 165, 255, 0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(98, 165, 255, 0.16) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[32%] border-l border-white/10 opacity-60 lg:block" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-14 right-0 h-52 w-52 rounded-full border border-brand-blue/20 opacity-40" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1280px] px-4 pb-8 pt-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-2 xl:grid-cols-[1.2fr_1fr_1fr_1.05fr]">
          <div className="pr-4">
            <div className="w-fit rounded-md bg-white p-2 shadow-[0_10px_28px_rgba(0,0,0,0.18)]">
              <Image
                src="/footer-logos.png"
                alt="NXTwave Semiconductor logo"
                width={240}
                height={120}
                sizes="(max-width: 640px) 210px, 240px"
                className="h-auto w-[210px] object-contain sm:w-[240px]"
              />
            </div>
            <p className="mt-5 max-w-[280px] text-sm leading-relaxed text-white/70">
              Driving technological breakthroughs with premier chip design and
              expert semiconductor craftsmanship.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {[
                {
                  icon: <LinkedInIcon />,
                  label: 'LinkedIn',
                  href: 'https://www.linkedin.com/company/nxtwave-semiconductor',
                },
                {
                  icon: <XIcon />,
                  label: 'X / Twitter',
                  href: 'https://x.com/NXTwaveSemi',
                },
                {
                  icon: <Mail className="h-4 w-4" aria-hidden="true" />,
                  label: 'Email',
                  href: 'mailto:info@nxtwavesemi.com',
                },
              ].map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer noopener' : undefined}
                  title={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:border-brand-blue/60 hover:bg-brand-blue/10"
                >
                  {icon}
                </a>
              ))}
            </div>

            <div className="mt-8 inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.26em] text-white/60">
              <span>Chips</span>
              <span className="h-px w-8 bg-brand-blue/70" aria-hidden="true" />
              <span>for a brighter tomorrow</span>
            </div>
          </div>

          <div>
            <h3 className="font-sans text-[13px] font-semibold uppercase tracking-[0.18em] text-white/90">
              Services
            </h3>
            <div className="mt-5 h-px w-12 bg-brand-blue/80" aria-hidden="true" />
            <ul className="mt-5 space-y-3">
              {serviceLinks.map((service) => (
                <li key={service.id}>
                  <Link
                    href={service.href ?? `/capabilities#${service.id}`}
                    className="text-base text-white/75 transition-colors hover:text-white"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-[13px] font-semibold uppercase tracking-[0.18em] text-white/90">
              Company
            </h3>
            <div className="mt-5 h-px w-12 bg-brand-blue/80" aria-hidden="true" />
            <ul className="mt-5 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base text-white/75 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-[13px] font-semibold uppercase tracking-[0.18em] text-white/90">
              Contact Us
            </h3>
            <div className="mt-5 h-px w-12 bg-brand-blue/80" aria-hidden="true" />
            <ul className="mt-5 space-y-4 text-base text-white/75">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 flex-none text-brand-blue" aria-hidden="true" />
                <span>{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-1 h-4 w-4 flex-none text-brand-blue" aria-hidden="true" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="transition-colors hover:text-white"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>

            <div className="mt-8 text-[11px] font-medium uppercase tracking-[0.18em] text-white/60">
              <div className="h-px w-12 bg-brand-blue/80" aria-hidden="true" />
              <div className="mt-4">Silicon Ideas</div>
              <div className="mt-1">Real Impact</div>
            </div>
          </div>
        </div>

        <div className="grid gap-4 border-b border-white/10 py-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,460px)] lg:items-center lg:gap-7">
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-white/80">
              Stay Connected
            </p>
            <p className="mt-1.5 text-xl font-medium leading-snug text-white">
              Subscribe to receive technical insights and silicon innovation updates.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 lg:flex-row lg:items-center">
            <div className="flex min-w-0 flex-1 items-center rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-white/50 backdrop-blur-sm">
              <Mail className="mr-3 h-4 w-4 text-white/60" aria-hidden="true" />
              <input
                type="email"
                aria-label="Email Address"
                placeholder="Email Address"
                className="w-full border-0 bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
              />
            </div>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#4d9af7] to-[#7aaeff] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(93,170,255,0.35)] transition-opacity hover:opacity-95"
            >
              Subscribe <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-3 py-5 text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} NXTwave Semiconductor. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-of-use" className="transition-colors hover:text-white">
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
