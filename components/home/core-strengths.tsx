import { strengths } from '@/data/content'
import { Reveal } from '@/components/reveal'

export function CoreStrengths() {
  return (
    <section className="bg-secondary/50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-serif text-3xl font-semibold text-navy sm:text-4xl">
            Our Core Strengths
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-16 rounded-full bg-brand-blue" />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {strengths.map((s, i) => (
            <Reveal
              key={s.title}
              delay={i * 80}
              className="flex h-full flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-navy text-navy-foreground">
                  <s.icon className="h-6 w-6" aria-hidden="true" />
                </span>
              </div>
              <h3 className="mt-5 min-h-14 font-serif text-xl font-semibold leading-snug text-navy">
                {s.title}
              </h3>
              <p className="mt-4 text-[15px] leading-6 text-muted-foreground">
                {s.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
