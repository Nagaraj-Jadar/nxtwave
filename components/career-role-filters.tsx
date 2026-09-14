'use client'

import { useMemo, useState } from 'react'
import type { Job } from '@/data/jobs'
import { CareerRoleCard } from '@/components/career-role-card'
import { Reveal } from '@/components/reveal'

type CareerRoleFiltersProps = {
  jobs: Job[]
}

export function CareerRoleFilters({ jobs }: CareerRoleFiltersProps) {
  const [domain, setDomain] = useState('all')
  const [experience, setExperience] = useState('all')

  const domains = useMemo(() => [...new Set(jobs.map((job) => job.domain))], [jobs])
  const experienceLevels = useMemo(() => [...new Set(jobs.map((job) => job.experience))], [jobs])
  const filteredJobs = jobs.filter(
    (job) =>
      (domain === 'all' || job.domain === domain) &&
      (experience === 'all' || job.experience === experience),
  )
  const hasActiveFilter = domain !== 'all' || experience !== 'all'

  return (
    <>
      <div className="mt-7 grid gap-3 rounded-xl border border-brand-blue/15 bg-white/70 p-4 shadow-sm sm:grid-cols-2 sm:p-5">
        <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-navy">
          Domain
          <select
            value={domain}
            onChange={(event) => setDomain(event.target.value)}
            className="h-11 rounded-lg border border-border bg-white px-3 text-sm font-medium normal-case tracking-normal text-navy outline-none transition-colors focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
          >
            <option value="all">All domains</option>
            {domains.map((option) => <option key={option} value={option}>{option}</option>)}
          </select>
        </label>
        <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-navy">
          Experience
          <select
            value={experience}
            onChange={(event) => setExperience(event.target.value)}
            className="h-11 rounded-lg border border-border bg-white px-3 text-sm font-medium normal-case tracking-normal text-navy outline-none transition-colors focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
          >
            <option value="all">All experience levels</option>
            {experienceLevels.map((option) => <option key={option} value={option}>{option}</option>)}
          </select>
        </label>
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