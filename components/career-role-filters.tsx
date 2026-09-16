'use client'

import { useMemo, useState } from 'react'
import { BriefcaseBusiness, RotateCcw, SlidersHorizontal } from 'lucide-react'
import type { Job } from '@/data/jobs'
import { CareerRoleCard } from '@/components/career-role-card'
import { Reveal } from '@/components/reveal'
import { serviceLinks } from '@/lib/site'

type CareerRoleFiltersProps = {
  jobs: Job[]
}

export function CareerRoleFilters({ jobs }: CareerRoleFiltersProps) {
  const [service, setService] = useState('all')
  const [experience, setExperience] = useState('all')

  const experienceLevels = useMemo(() => [...new Set(jobs.map((job) => job.experience))], [jobs])
  const filteredJobs = jobs.filter(
    (job) =>
      (service === 'all' || job.serviceId === service) &&
      (experience === 'all' || job.experience === experience),
  )
  const hasActiveFilter = service !== 'all' || experience !== 'all'

  return (
    <>
      <div className="mt-6 flex flex-col gap-3 rounded-lg border border-brand-blue/35 border-t-2 border-t-brand-blue bg-navy px-3 py-3 text-white shadow-[0_14px_30px_-22px_rgba(15,43,93,0.9)] sm:px-4 lg:flex-row lg:items-center">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/90">
          <SlidersHorizontal className="h-4 w-4 text-sky-300" aria-hidden="true" />
          <span>Filter opportunities</span>
        </div>

        <div className="grid flex-1 gap-2 sm:grid-cols-2 lg:ml-auto lg:max-w-[620px]">
          <label className={`relative flex items-center rounded-md transition-all duration-200 ${service !== 'all' ? 'bg-brand-blue/25 ring-1 ring-sky-300/70' : ''}`}>
            <BriefcaseBusiness className="pointer-events-none absolute left-3 h-4 w-4 text-sky-300" aria-hidden="true" />
            {service !== 'all' && <span className="pointer-events-none absolute right-3 h-1.5 w-1.5 rounded-full bg-sky-300 shadow-[0_0_0_3px_rgba(125,211,252,0.16)]" aria-hidden="true" />}
            <span className="sr-only">Service</span>
            <select
              value={service}
              onChange={(event) => setService(event.target.value)}
              aria-label="Service"
              className="h-10 w-full appearance-none rounded-md border border-white/20 bg-white/10 pl-9 pr-8 text-sm font-medium text-white outline-none transition-all duration-200 hover:border-sky-300/70 hover:bg-white/15 focus:border-sky-300 focus:ring-2 focus:ring-sky-300/30"
            >
              <option value="all" className="text-navy">All services</option>
              {serviceLinks.map((option) => <option key={option.id} value={option.id} className="text-navy">{option.title}</option>)}
            </select>
          </label>
          <label className={`relative flex items-center rounded-md transition-all duration-200 ${experience !== 'all' ? 'bg-brand-blue/25 ring-1 ring-sky-300/70' : ''}`}>
            <SlidersHorizontal className="pointer-events-none absolute left-3 h-4 w-4 text-sky-300" aria-hidden="true" />
            {experience !== 'all' && <span className="pointer-events-none absolute right-3 h-1.5 w-1.5 rounded-full bg-sky-300 shadow-[0_0_0_3px_rgba(125,211,252,0.16)]" aria-hidden="true" />}
            <span className="sr-only">Experience</span>
            <select
              value={experience}
              onChange={(event) => setExperience(event.target.value)}
              aria-label="Experience"
              className="h-10 w-full appearance-none rounded-md border border-white/20 bg-white/10 pl-9 pr-8 text-sm font-medium text-white outline-none transition-all duration-200 hover:border-sky-300/70 hover:bg-white/15 focus:border-sky-300 focus:ring-2 focus:ring-sky-300/30"
            >
              <option value="all" className="text-navy">All experience levels</option>
              {experienceLevels.map((option) => <option key={option} value={option} className="text-navy">{option}</option>)}
            </select>
          </label>
        </div>

        {hasActiveFilter && (
          <button
            type="button"
            onClick={() => { setService('all'); setExperience('all') }}
            className="inline-flex h-10 items-center justify-center gap-1.5 rounded-md px-2.5 text-xs font-semibold text-sky-200 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300/40 lg:flex-none"
          >
            <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
            Reset filters
          </button>
        )}
      </div>

      <p className="mt-5 text-sm text-muted-foreground" aria-live="polite">
        Showing {filteredJobs.length} {filteredJobs.length === 1 ? 'role' : 'roles'}
      </p>

      <div className="mt-4 flex flex-col gap-4">
        {filteredJobs.length > 0 ? filteredJobs.map((job, index) => (
          <Reveal key={job.slug} delay={index * 60}>
            <CareerRoleCard job={job} showMetadata={hasActiveFilter} />
          </Reveal>
        )) : (
          <div className="rounded-xl border border-dashed border-brand-blue/30 bg-white/70 px-5 py-10 text-center text-sm text-muted-foreground">
            No roles match those filters. Try another combination.
          </div>
        )}
      </div>
    </>
  )
}