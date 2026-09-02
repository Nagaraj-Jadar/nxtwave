import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, MapPin, Briefcase, Clock } from 'lucide-react'
import { jobs } from '@/data/jobs'
import { processSteps } from '@/data/content'
import { SectionLabel } from '@/components/section-label'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Join NXTwave Semiconductor and build high-impact silicon. Explore open roles across RTL design, verification, physical design, DFT, and analog/mixed-signal.',
}

export default function CareersPage() {
  return (
    <>
      <SiteHeader />
      <PageHero
        eyebrow="Careers"
        title="Build the future of silicon."
        description="Join a team of engineers driving high-impact semiconductor innovations that connect the world to chips. We hire for depth, curiosity, and craftsmanship."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Careers' }]}
      />

      {/* Hiring process */}
      <section className="border-b border-border bg-muted">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
          <div className="max-w-2xl">
            <SectionLabel>How we hire</SectionLabel>
            <h2 className="mt-3 text-3xl tracking-tight md:text-4xl">A focused, engineer-led process</h2>
          </div>
          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            {processSteps.map((step) => (
              <li
                key={step.number}
                className="rounded-lg border border-border bg-background p-6"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-brand-blue text-sm font-semibold text-navy">
                  {step.number}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-navy">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Open positions */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <SectionLabel>Open positions</SectionLabel>
              <h2 className="mt-3 text-3xl tracking-tight md:text-4xl">
                {jobs.length} roles currently open
              </h2>
            </div>
            <p className="text-sm text-muted-foreground">
              Don&apos;t see a fit?{' '}
              <Link href="/contact" className="font-medium text-brand-blue underline-offset-4 hover:underline">
                Send us your profile
              </Link>
              .
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-4">
            {jobs.map((job, i) => (
              <Reveal key={job.slug} delay={i * 60}>
                <Link
                  href={`/careers/${job.slug}`}
                  className="group flex flex-col gap-4 rounded-lg border border-border bg-card p-6 transition-colors hover:border-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:flex-row md:items-center md:justify-between"
                >
                  <div>
                    <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-secondary-foreground">
                      {job.department}
                    </span>
                    <h3 className="mt-3 text-xl font-semibold text-navy">{job.title}</h3>
                    <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-4 w-4 text-brand-blue" aria-hidden="true" />
                        {job.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Briefcase className="h-4 w-4 text-brand-blue" aria-hidden="true" />
                        {job.employmentType}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="h-4 w-4 text-brand-blue" aria-hidden="true" />
                        {job.experienceLevel}
                      </span>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-semibold text-navy transition-colors group-hover:text-brand-blue">
                    Apply now
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  )
}
