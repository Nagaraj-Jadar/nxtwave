import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Briefcase, Clock, MapPin } from 'lucide-react'
import { ApplicationForm } from '@/components/application-form'
import { SectionLabel } from '@/components/section-label'
import { CircuitPattern } from '@/components/circuit-pattern'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { getJob, jobs } from '@/data/jobs'

type RolePageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return jobs.map((job) => ({ slug: job.slug }))
}

export async function generateMetadata({ params }: RolePageProps): Promise<Metadata> {
  const job = getJob((await params).slug)
  return { title: job ? `${job.title} Careers` : 'Careers' }
}

export default async function RolePage({ params }: RolePageProps) {
  const job = getJob((await params).slug)
  if (!job) notFound()

  return (
    <>
      <SiteHeader />
      <section className="relative overflow-hidden bg-navy text-navy-foreground">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:42px_42px]" aria-hidden="true" />
        <CircuitPattern tone="dark" className="absolute inset-0 h-full w-full opacity-60" />
        <div className="relative mx-auto max-w-[1280px] px-4 py-14 sm:px-6 md:py-20 lg:px-8">
          <Link href="/careers" className="inline-flex items-center gap-2 text-sm text-navy-foreground/65 transition-colors hover:text-white"><ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to careers</Link>
          <SectionLabel className="mt-10" tone="light">Open position</SectionLabel>
          <h1 className="mt-4 max-w-4xl text-4xl leading-tight tracking-tight md:text-6xl">{job.title}</h1>
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-navy-foreground/70"><span className="inline-flex items-center gap-2"><Briefcase className="h-4 w-4 text-brand-blue" aria-hidden="true" />{job.department}</span><span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-brand-blue" aria-hidden="true" />{job.location}</span><span className="inline-flex items-center gap-2"><Clock className="h-4 w-4 text-brand-blue" aria-hidden="true" />{job.experienceLevel}</span></div>
        </div>
      </section>
      <main className="bg-[#F4F7FC]">
        <div className="mx-auto grid max-w-[1280px] gap-14 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(23rem,0.7fr)] lg:px-8 lg:py-24">
          <article className="min-w-0 rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-9 lg:pr-10">
            <SectionLabel>About the role</SectionLabel>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">{job.overview}</p>
            <RoleSection title="What you&apos;ll do" items={job.responsibilities} />
            <RoleSection title="What you bring" items={job.requiredQualifications} />
            <RoleSection title="Nice to have" items={job.preferredQualifications} />
          </article>
          <aside id="application" className="min-w-0 self-start overflow-hidden rounded-2xl border border-border bg-white shadow-[0_20px_45px_-24px_rgba(15,43,93,0.25)] lg:sticky lg:top-28">
            <div className="relative overflow-hidden bg-navy px-5 py-6 text-navy-foreground sm:px-8">
              <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-brand-blue to-navy" aria-hidden="true" />
              <SectionLabel tone="light">Apply for</SectionLabel>
              <h2 className="mt-3 text-2xl leading-tight text-white">{job.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-navy-foreground/70">Your application will be reviewed by our technical hiring team.</p>
            </div>
            <div className="p-5 sm:p-8"><ApplicationForm jobTitle={job.title} jobSlug={job.slug} /></div>
          </aside>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}

function RoleSection({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="mt-14 border-t border-border pt-8">
      <h2 className="text-2xl text-navy">{title}</h2>
      <ul className="mt-5 space-y-3 text-muted-foreground">
        {items.map((item) => <li key={item} className="flex gap-3 leading-relaxed"><span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-blue" />{item}</li>)}
      </ul>
    </section>
  )
}