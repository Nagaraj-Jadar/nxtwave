import { CircuitPattern } from '@/components/circuit-pattern'
import { Logo } from '@/components/logo'
import { siteConfig } from '@/lib/site'

export function MaintenancePage() {
  return (
    <main className="relative isolate flex min-h-screen overflow-hidden bg-[#f4f7fb] text-navy">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,43,93,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(15,43,93,0.06)_1px,transparent_1px)] bg-[size:56px_56px]" aria-hidden="true" />
      <CircuitPattern className="absolute inset-0 h-full w-full opacity-70" tone="light" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col px-6 py-8 sm:px-10 sm:py-10 lg:px-16">
        <header className="flex items-center justify-between">
          <Logo className="h-12 w-24 sm:h-14 sm:w-28" />
          <span className="hidden text-xs font-semibold uppercase tracking-[0.22em] text-brand-blue sm:block">
            Semiconductor Engineering
          </span>
        </header>

        <div className="flex flex-1 items-center py-20 sm:py-28">
          <section className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-brand-blue">
              Website under maintenance
            </p>
            <h1 className="max-w-2xl font-serif text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-navy sm:text-7xl lg:text-8xl">
              Building what comes next.
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-[#33496b] sm:text-lg">
              We are making a few improvements to the NXTwave Semiconductor website. Our engineering team will be back online shortly.
            </p>
            <div className="mt-10 flex flex-col gap-3 text-sm text-[#33496b] sm:flex-row sm:items-center sm:gap-6">
              <span>{siteConfig.tagline}</span>
              <span className="hidden h-1 w-1 rounded-full bg-brand-blue sm:block" aria-hidden="true" />
              <a className="font-semibold text-brand-blue underline decoration-brand-blue/30 underline-offset-4 transition-colors hover:text-navy" href={`mailto:${siteConfig.contact.email}`}>
                {siteConfig.contact.email}
              </a>
            </div>
          </section>
        </div>

        <footer className="border-t border-navy/10 pt-5 text-xs text-[#5d6d87]">
          {siteConfig.name} | {siteConfig.contact.address}
        </footer>
      </div>
    </main>
  )
}
