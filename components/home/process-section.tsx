import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, BriefcaseBusiness, Cpu, FileSearch, Users } from 'lucide-react'
import { processSteps } from '@/data/content'
import { Reveal } from '@/components/reveal'

const stepIcons = [FileSearch, Users, Cpu]

export function ProcessSection() {
  return (
    <section className="relative isolate overflow-hidden bg-background py-16 lg:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#0f2b5d 1px, transparent 1px), linear-gradient(90deg, #0f2b5d 1px, transparent 1px)', backgroundSize: '52px 52px' }} />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.12fr)_minmax(22rem,0.88fr)] lg:gap-14">
          <div>
            <Reveal>
              <div className="py-2">
                <div className="flex items-center gap-2.5" aria-hidden="true">
                  <span className="h-2 w-2 rounded-full bg-brand-blue" />
                  <span className="h-px w-12 bg-brand-blue" />
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
                </div>
                <p className="mt-5 font-serif text-[2.35rem] font-semibold leading-[1.06] text-navy sm:text-[2.75rem] lg:text-[3.1rem]">
                  <span className="text-brand-blue">Careers</span>
                </p>
                <div className="mt-5 flex items-center gap-2" aria-hidden="true">
                  <span className="h-px w-36 bg-brand-blue" />
                  <span className="h-1 w-1 rounded-full bg-brand-blue" />
                  <span className="h-px w-8 bg-brand-blue/40" />
                </div>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-5 max-w-xl text-balance font-serif text-3xl font-semibold leading-[1.1] text-navy sm:text-4xl">
                Build the <span className="text-brand-blue">Future of Silicon</span>
              </h2>
            </Reveal>
            <Reveal delay={140}>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              Our engineering process transforms complex silicon innovation from
              concept to chip.
            </p>
            </Reveal>

            <ol className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
              {processSteps.map((step, i) => (
                <Reveal key={step.number} delay={200 + i * 70} as="li" className="relative">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-full border border-brand-blue/45 bg-secondary text-brand-blue">
                      {(() => { const Icon = stepIcons[i]; return <Icon className="h-5 w-5" aria-hidden="true" /> })()}
                    </span>
                    {i < processSteps.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="hidden h-px flex-1 bg-brand-blue/40 sm:block"
                      />
                    )}
                  </div>
                  <span className="mt-4 block font-serif text-xl font-semibold text-brand-blue">
                    {step.number}
                  </span>
                  <h3 className="mt-1 font-sans text-sm font-bold uppercase tracking-wider text-navy">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </Reveal>
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

          <Reveal delay={100} className="relative min-h-[350px] overflow-hidden rounded-2xl bg-navy p-8 text-navy-foreground lg:min-h-0 lg:p-10">
            <Image src="/about-image.png" alt="" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover opacity-30 mix-blend-screen" />
            <div aria-hidden="true" className="absolute inset-0 bg-navy/70" />
            <div className="relative flex h-full flex-col justify-center">
              <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-blue">
                <BriefcaseBusiness className="h-4 w-4" aria-hidden="true" /> People. Ideas. Impact.
              </div>
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
              <div className="mt-8 border-t border-white/20 pt-4 text-[9px] font-semibold uppercase tracking-[0.2em] text-brand-blue/90">
                Innovation | Collaboration | Opportunity
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
