import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  MapPin,
  Briefcase,
  Clock,
  CircuitBoard,
  MoveUpRight,
} from 'lucide-react'
import { jobs } from '@/data/jobs'
import { SectionLabel } from '@/components/section-label'
import { Reveal } from '@/components/reveal'
import { CircuitPattern } from '@/components/circuit-pattern'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Join NXTwave Semiconductor and build high-impact silicon. Explore open roles across RTL design, verification, physical design, DFT, and analog/mixed-signal.',
}

function JobMeta({ job }: { job: (typeof jobs)[number] }) {
  return (
    <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
      <span className="inline-flex items-center gap-1.5">
        <MapPin className="h-4 w-4 flex-none text-brand-blue" aria-hidden="true" />
        {job.location}
      </span>
      <span className="inline-flex items-center gap-1.5">
        <Briefcase className="h-4 w-4 flex-none text-brand-blue" aria-hidden="true" />
        {job.employmentType}
      </span>
      <span className="inline-flex items-center gap-1.5">
        <Clock className="h-4 w-4 flex-none text-brand-blue" aria-hidden="true" />
        {job.experienceLevel}
      </span>
    </div>
  )
}

function ApplyNowCta() {
  return (
    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition-colors duration-300 group-hover:text-brand-blue">
      Apply now
      <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1.5" aria-hidden="true" />
    </span>
  )
}

export default function CareersPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[#F5F7FB]">
        <section id="open-positions" className="bg-[#F4F7FC]">
          <div className="mx-auto max-w-[1280px] px-4 py-12 sm:px-6 md:py-16 lg:px-8">
            <div className="flex flex-wrap items-end justify-between gap-5 border-b border-border pb-6">
              <div>
                <SectionLabel>Open Positions</SectionLabel>
                <h1 className="mt-3 text-3xl tracking-tight sm:text-4xl">{jobs.length} roles currently open</h1>
              </div>
              <div className="text-left sm:text-right">
                <Link href="/contact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue transition-colors hover:text-navy">
                  Don&apos;t see a fit? Send us your profile <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4">
              {jobs.map((job, i) => (
                <Reveal key={job.slug} delay={i * 60}>
                  <Link
                    href={`/careers/${job.slug}`}
                    className="group flex w-full flex-col gap-4 rounded-xl border border-brand-blue/15 bg-white p-5 shadow-[0_12px_34px_-24px_rgba(15,43,93,0.5)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-brand-blue/70 hover:shadow-[0_18px_38px_-20px_rgba(47,111,224,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:flex-row sm:items-center sm:justify-between sm:p-6"
                  >
                    <div className="min-w-0">
                      <span className="inline-flex rounded-full bg-secondary px-3 py-1 font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-navy">
                        {job.department}
                      </span>
                      <h2 className="mt-2 text-xl font-semibold tracking-tight text-navy transition-colors duration-300 group-hover:text-brand-blue sm:text-2xl">
                        {job.title}
                      </h2>
                      <JobMeta job={job} />
                    </div>
                    <div className="flex-none border-t border-border pt-3 sm:border-t-0 sm:pt-0 sm:min-w-24 sm:text-right">
                      <ApplyNowCta />
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Compact careers hero */}
        <section className="relative isolate overflow-hidden bg-navy text-navy-foreground">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:42px_42px]" aria-hidden="true" />
          <CircuitPattern tone="dark" className="absolute inset-0 h-full w-full opacity-55" />
          <div className="relative mx-auto flex min-h-[300px] max-w-[1280px] items-center justify-between gap-10 px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
            <div className="max-w-3xl">
              <nav aria-label="Breadcrumb" className="mb-3 hidden text-sm text-navy-foreground/55 sm:block">
                <Link href="/" className="transition-colors hover:text-white">Home</Link>
                <span className="px-2">/</span>
                <span className="text-white">Careers</span>
              </nav>
              <SectionLabel tone="light">Careers at NXTwave</SectionLabel>
              <h2 className="mt-3 text-balance text-3xl leading-tight tracking-tight sm:text-5xl">
                Build the future of silicon.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-navy-foreground/75 sm:text-lg">
                Join a team of engineers driving high-impact semiconductor innovations that connect the world to chips. We hire for depth, curiosity, and craftsmanship.
              </p>
              <div className="mt-3 flex flex-col gap-2 sm:mt-4 sm:flex-row sm:gap-3">
                <Link href="#open-positions" className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-blue px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-blue/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                  View open positions <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                  Send your profile <MoveUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
            <div className="relative hidden h-40 w-40 flex-none items-center justify-center border border-brand-blue/50 lg:flex" aria-hidden="true">
              <div className="absolute inset-5 border border-white/15" />
              <CircuitBoard className="h-12 w-12 text-brand-blue" strokeWidth={1} />
              <span className="absolute -right-1 top-1/2 h-2 w-2 animate-pulse rounded-full bg-brand-blue" />
              <span className="absolute left-1/2 -top-1 h-2 w-2 animate-pulse rounded-full bg-brand-blue [animation-delay:900ms]" />
            </div>
          </div>
        </section>

        {/* How we hire */}
        <section className="bg-background">
          <div className="mx-auto max-w-[1280px] px-4 py-12 sm:px-6 md:py-16 lg:px-8">
            <div className="max-w-2xl">
              <SectionLabel>How We Hire</SectionLabel>
              <h2 className="mt-4 text-4xl tracking-tight md:text-5xl">A focused, engineer-led process</h2>
            </div>
            <ol className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                ['01', 'REVIEW', 'Technical assessment by our lead architects.'],
                ['02', 'DEEP-DIVE', 'Architecture and verification discussions.'],
                ['03', 'DELIVER', 'Fast-track integration into our engineering teams.'],
              ].map(([number, title, description]) => (
                <li
                  key={number}
                  className="rounded-xl border border-brand-blue/15 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-blue/50 hover:shadow-md sm:p-6"
                >
                  <span className="font-sans text-sm font-semibold text-brand-blue">{number}</span>
                  <h3 className="mt-5 text-xl text-navy">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Build the future of silicon */}
        <section className="bg-[#F4F7FC]">
          <div className="mx-auto grid max-w-[1280px] gap-8 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            <div>
              <SectionLabel>Build the Future of Silicon</SectionLabel>
              <h2 className="mt-4 max-w-lg text-4xl leading-tight tracking-tight md:text-5xl">Engineering where expertise meets impact.</h2>
            </div>
            <div>
              <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
                NXTwave brings together deep engineering expertise across the semiconductor design lifecycle. Our teams solve demanding problems from architecture through GDSII and into silicon, with every discipline contributing to first-pass success.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  ['End-to-end VLSI', 'RTL to GDSII'],
                  ['Technical excellence', 'Architecture to silicon'],
                  ['Global engineering', 'Collaborative teams'],
                ].map(([title, detail]) => (
                  <div key={title} className="rounded-xl border border-border bg-white p-5 shadow-sm transition-colors duration-300 hover:border-brand-blue/40">
                    <h3 className="font-sans text-sm font-semibold uppercase tracking-wide text-navy">{title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Application CTA banner */}
        <section className="relative overflow-hidden bg-navy text-navy-foreground">
          <div
            className="absolute inset-y-0 right-0 w-1/2 bg-[linear-gradient(90deg,transparent,rgba(47,111,224,0.12)),linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:auto,36px_36px,36px_36px]"
            aria-hidden="true"
          />
          <CircuitPattern tone="dark" className="absolute inset-0 h-full w-full opacity-60" />
          <div className="relative mx-auto flex max-w-[1280px] flex-col gap-8 px-4 py-12 sm:px-6 md:py-16 lg:flex-row lg:items-end lg:justify-between lg:px-8">
            <div className="max-w-2xl">
              <SectionLabel tone="light">Make an impact</SectionLabel>
              <h2 className="mt-4 text-4xl leading-tight tracking-tight md:text-5xl">
                Don&apos;t see the right opportunity?
              </h2>
              <p className="mt-5 max-w-xl leading-relaxed text-navy-foreground/70">
                Great engineering talent doesn&apos;t always fit into a job description. Tell us
                about the silicon problems you love solving and where you&apos;d like to make an
                impact.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-blue px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(47,111,224,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-blue/90"
              >
                Send your profile <MoveUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="#open-positions"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/10"
              >
                View open positions <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
