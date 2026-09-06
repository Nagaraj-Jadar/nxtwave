'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, ChevronRight, Menu, X, ArrowRight } from 'lucide-react'
import { Logo } from '@/components/logo'
import { navLinks } from '@/lib/site'
import { cn } from '@/lib/utils'
import { serviceLinks } from '@/lib/site'

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [capabilitiesOpen, setCapabilitiesOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-[88px] lg:px-8">
          <Link href="/" aria-label="NXTwave Semiconductor home" className="flex-none">
            <Logo className="h-12 w-auto sm:h-14 lg:h-[68px]" />
          </Link>

          {/* Desktop navigation */}
          <nav
            aria-label="Primary"
            className="hidden items-center gap-8 lg:flex"
          >
            {navLinks.map((link) =>
              link.label === 'Services' ? (
                <div key={link.href} className="group relative py-8">
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 text-sm font-medium text-foreground/80 transition-colors group-hover:text-navy group-focus-within:text-navy"
                  >
                    {link.label}
                    <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" aria-hidden="true" />
                    <span className="absolute inset-x-0 bottom-[22px] h-0.5 origin-left scale-x-0 bg-brand-blue transition-transform group-hover:scale-x-100 group-focus-within:scale-x-100" />
                  </Link>
                  <div className="pointer-events-none absolute left-1/2 top-full z-50 w-[min(46rem,calc(100vw-2rem))] -translate-x-1/2 -translate-y-2 border border-border bg-background p-5 opacity-0 shadow-xl transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Services</p>
                    <div className="grid grid-cols-2 gap-x-3 gap-y-1">
                      {serviceLinks.map((service) => (
                        <Link
                          key={service.id}
                          href={`/capabilities#${service.id}`}
                          className="group/card flex min-w-0 items-center gap-3 border-l-2 border-transparent px-3 py-3 transition-colors hover:border-brand-blue hover:bg-secondary/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                          <span className="min-w-0 flex-1 font-sans text-sm font-medium leading-snug text-navy transition-colors group-hover/card:font-semibold">{service.title}</span>
                          <ChevronRight className="h-4 w-4 flex-none text-brand-blue transition-transform group-hover/card:translate-x-1" aria-hidden="true" />
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 flex justify-end border-t border-border pt-4">
                      <Link href="/capabilities" className="inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-brand-blue">
                        View All Services
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={pathname?.startsWith(link.href) ? 'page' : undefined}
                  className={cn(
                    'relative py-8 text-sm font-medium text-foreground/80 transition-colors hover:text-navy',
                    pathname?.startsWith(link.href) && 'text-navy',
                  )}
                >
                  {link.label}
                  {pathname?.startsWith(link.href) && (
                    <span className="absolute inset-x-0 bottom-[22px] h-0.5 bg-brand-blue" aria-hidden="true" />
                  )}
                </Link>
              ),
            )}
          </nav>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border text-navy transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </header>

      {/* Overlay menu — rendered outside <header> so its `fixed` positioning is
          not scoped to the header (backdrop-blur on header creates a containing
          block for fixed descendants, which previously squashed this panel). */}
      <div
        className={cn(
          'fixed inset-0 z-50 overflow-hidden transition-opacity duration-200',
          open ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
        aria-hidden={!open}
      >
        <div
          className="absolute inset-0 bg-navy/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className={cn(
            'absolute right-0 top-0 flex h-full w-full max-w-sm flex-col bg-background shadow-2xl transition-transform duration-300',
            open ? 'translate-x-0' : 'translate-x-full',
          )}
        >
          <div className="flex h-[68px] items-center justify-between border-b border-border px-6">
            <Logo className="h-12 w-auto" />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border text-navy transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <nav aria-label="Site" className="flex flex-1 flex-col gap-1 overflow-y-auto p-6">
            {navLinks.map((link) =>
              link.label === 'Services' ? (
                <div key={link.href} className="rounded-lg">
                  <button
                    type="button"
                    onClick={() => setCapabilitiesOpen((isOpen) => !isOpen)}
                    aria-expanded={capabilitiesOpen}
                    aria-controls="mobile-capabilities"
                    className="flex w-full items-center justify-between rounded-lg px-4 py-4 text-left text-lg font-medium text-navy transition-colors hover:bg-secondary"
                  >
                    Services
                    <ChevronDown className={cn('h-5 w-5 text-brand-blue transition-transform', capabilitiesOpen && 'rotate-180')} aria-hidden="true" />
                  </button>
                  <div id="mobile-capabilities" className={cn('grid transition-[grid-template-rows] duration-200', capabilitiesOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')}>
                    <div className="min-h-0 overflow-hidden">
                      <div className="space-y-3 px-4 pb-3">
                        {serviceLinks.map((service) => (
                          <Link
                            key={service.id}
                            href={`/capabilities#${service.id}`}
                            onClick={() => setOpen(false)}
                            className="flex items-start gap-3 border-l-2 border-brand-blue/30 py-2 pl-3 text-sm text-navy transition-colors hover:border-brand-blue hover:text-brand-blue"
                          >
                            <span className="font-semibold leading-snug">{service.title}</span>
                          </Link>
                        ))}
                        <Link href="/capabilities" onClick={() => setOpen(false)} className="inline-flex items-center gap-2 pt-2 text-sm font-semibold text-brand-blue">
                          View All Services <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={pathname?.startsWith(link.href) ? 'page' : undefined}
                  className={cn(
                    'group flex items-center justify-between rounded-lg px-4 py-4 text-lg font-medium text-navy transition-colors hover:bg-secondary',
                    pathname?.startsWith(link.href) && 'bg-secondary/70',
                  )}
                >
                  {link.label}
                  <ArrowRight
                    className={cn(
                      'h-5 w-5 text-brand-blue opacity-0 transition-opacity group-hover:opacity-100',
                      pathname?.startsWith(link.href) && 'opacity-100',
                    )}
                  />
                </Link>
              ),
            )}
          </nav>
          <div className="mt-auto border-t border-border p-6">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-md bg-navy px-5 py-3 text-sm font-semibold text-navy-foreground transition-colors hover:bg-navy-muted"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
