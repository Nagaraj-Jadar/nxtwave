import Link from 'next/link'
import { SectionLabel } from '@/components/section-label'

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
  eyebrowClassName,
}: {
  eyebrow: string
  title: string
  description?: string
  breadcrumb?: { label: string; href?: string }[]
  eyebrowClassName?: string
}) {
  return (
    <section className="relative overflow-hidden bg-navy text-navy-foreground">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        {breadcrumb && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-navy-foreground/60">
              {breadcrumb.map((item, i) => (
                <li key={item.label} className="flex items-center gap-2">
                  {item.href ? (
                    <Link href={item.href} className="transition-colors hover:text-navy-foreground">
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-navy-foreground">{item.label}</span>
                  )}
                  {i < breadcrumb.length - 1 && <span aria-hidden="true">/</span>}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <SectionLabel tone="light" className={eyebrowClassName}>{eyebrow}</SectionLabel>
        <h1 className="mt-4 max-w-3xl text-balance text-4xl leading-tight tracking-tight md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-navy-foreground/75">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
