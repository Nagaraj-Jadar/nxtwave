import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ApplicationForm } from '@/components/application-form'
import { PageHero } from '@/components/page-hero'
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
      <PageHero
        eyebrow="Open position"
        title={job.title}
        description={`${job.department} | ${job.location} | ${job.workModel}`}
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Careers', href: '/careers' }, { label: job.title }]}
      />
      <main className="bg-background">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.8fr)] lg:px-8 lg:py-24">
          <article className="min-w-0">
            <h2 className="text-3xl text-navy">The role</h2>
            <p className="body-copy mt-5 max-w-3xl leading-relaxed text-muted-foreground">{job.overview}</p>
            <h2 className="mt-10 text-2xl text-navy">What you&apos;ll do</h2>
            <ul className="mt-5 space-y-3 text-muted-foreground">
              {job.responsibilities.map((item) => <li key={item} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-blue" />{item}</li>)}
            </ul>
            <h2 className="mt-10 text-2xl text-navy">Required qualifications</h2>
            <ul className="mt-5 space-y-3 text-muted-foreground">
              {job.requiredQualifications.map((item) => <li key={item} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-blue" />{item}</li>)}
            </ul>
          </article>
          <aside id="application" className="min-w-0 self-start rounded-lg border border-border bg-muted p-5 sm:p-7">
            <h2 className="text-2xl text-navy">Apply for this role</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Tell us about your experience and how to reach you.</p>
            <div className="mt-6"><ApplicationForm jobTitle={job.title} jobSlug={job.slug} /></div>
          </aside>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}