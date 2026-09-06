'use client'

import Link from 'next/link'
import { ArrowRight, X } from 'lucide-react'
import { useRef } from 'react'
import type { Job } from '@/data/jobs'

export function CareerRoleCard({ job }: { job: Job }) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  function openPreview() {
    dialogRef.current?.showModal()
  }

  function closePreview() {
    dialogRef.current?.close()
  }

  return (
    <>
      <article className="group flex w-full flex-col gap-4 rounded-xl border border-brand-blue/15 bg-white p-5 shadow-[0_12px_34px_-24px_rgba(15,43,93,0.5)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-brand-blue/70 hover:shadow-[0_18px_38px_-20px_rgba(47,111,224,0.35)] sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <button
          type="button"
          onClick={openPreview}
          className="min-w-0 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-4"
          aria-label={`Preview ${job.title}`}
        >
          <span className="inline-flex rounded-full bg-secondary px-3 py-1 font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-navy">
            {job.department}
          </span>
          <h2 className="mt-2 text-xl font-semibold tracking-tight text-navy transition-colors duration-300 group-hover:text-brand-blue sm:text-2xl">
            {job.title}
          </h2>
        </button>
        <div className="flex-none border-t border-border pt-3 sm:min-w-28 sm:border-t-0 sm:pt-0 sm:text-right">
          <Link
            href={`/careers/${job.slug}#application`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition-colors duration-300 hover:text-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-4"
          >
            Apply now
            <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1.5" aria-hidden="true" />
          </Link>
        </div>
      </article>

      <dialog
        ref={dialogRef}
        className="w-[calc(100%-2rem)] max-w-2xl rounded-2xl border border-brand-blue/20 bg-white p-0 text-foreground shadow-[0_24px_80px_-24px_rgba(15,43,93,0.45)] backdrop:bg-navy/55 backdrop:backdrop-blur-sm"
        aria-labelledby={`${job.slug}-preview-title`}
      >
        <div className="border-b border-border bg-[#F4F7FC] p-5 sm:p-7">
          <div className="flex items-start justify-between gap-5">
            <div>
              <span className="inline-flex rounded-full bg-white px-3 py-1 font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-navy shadow-sm">
                {job.department}
              </span>
              <h2 id={`${job.slug}-preview-title`} className="mt-3 text-2xl leading-tight tracking-tight text-navy sm:text-3xl">
                {job.title}
              </h2>
            </div>
            <button
              type="button"
              onClick={closePreview}
              className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-white hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
              aria-label="Close role preview"
              title="Close role preview"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
        <div className="p-5 sm:p-7">
          <p className="text-base leading-relaxed text-muted-foreground">{job.overview}</p>
          <h3 className="mt-7 text-lg text-navy">What you&apos;ll do</h3>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
            {job.responsibilities.slice(0, 3).map((responsibility) => (
              <li key={responsibility} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-blue" />{responsibility}</li>
            ))}
          </ul>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-end">
            <button type="button" onClick={closePreview} className="inline-flex items-center justify-center rounded-lg border border-border px-5 py-3 text-sm font-semibold text-navy transition-colors hover:border-brand-blue/50 hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue">
              Keep browsing
            </button>
            <Link href={`/careers/${job.slug}#application`} onClick={closePreview} className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-blue px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2">
              Apply now <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </dialog>
    </>
  )
}
