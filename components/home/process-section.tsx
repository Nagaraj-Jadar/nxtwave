import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { processSteps } from '@/data/content'
import { SectionLabel } from '@/components/section-label'
import { Reveal } from '@/components/reveal'

export function ProcessSection() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-12">
          {/* Left: heading + timeline */}
          <div className="lg:col-span-2">
            <SectionLabel>Careers</SectionLabel>
            <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight text-navy sm:text-4xl">
              Build the Future of Silicon
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              Our engineering process transforms complex silicon innovation from
              concept to chip.
            </p>

            <ol className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
              {processSteps.map((step, i) => (
                <li key={step.number} className="relative">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-full border-2 border-brand-blue font-sans text-sm font-bold text-navy">
                      {step.number}
                    </span>
                    {i < processSteps.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="hidden h-px flex-1 bg-border sm:block"
                      />
                    )}
                  </div>
                  <h3 className="mt-4 font-sans text-sm font-bold uppercase tracking-wider text-navy">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>

            <div className="mt-10">
              <Link
                href="/careers"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                View Open Positions
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Right: CTA card */}
          <Reveal className="lg:col-span-1">
            <div className="flex h-full flex-col justify-center rounded-2xl bg-navy p-8 text-navy-foreground lg:p-10">
              <h3 className="text-balance font-serif text-2xl font-semibold leading-tight text-white sm:text-3xl">
                Let&apos;s Build What&apos;s Next.
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                Have a project in mind? Let&apos;s build the extraordinary
                together — from first concept to production silicon.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-brand-blue px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-blue/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              >
                Get in Touch
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
