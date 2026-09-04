import { capabilities } from '@/data/content'
import { SectionLabel } from '@/components/section-label'
import { Reveal } from '@/components/reveal'

export function EngineeringSpectrum() {
  return (
    <section id="capabilities" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel align="center">Our Core Services</SectionLabel>
          <h2 className="mt-4 text-balance font-serif text-3xl font-semibold text-navy sm:text-4xl">
            The Complete Silicon Engineering Spectrum
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Accelerating time-to-market by integrating seamless RTL-to-GDSII
            workflows with rigorous technical precision.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, i) => (
            <Reveal
              key={cap.id}
              id={cap.id}
              delay={(i % 3) * 80}
              className="scroll-mt-28 flex h-full flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-blue/40 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-secondary text-navy">
                  <cap.icon className="h-5 w-5" aria-hidden="true" />
                </span>
              </div>
              <h3 className="mt-5 font-serif text-lg font-semibold leading-snug text-navy">
                {cap.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {cap.description}
              </p>
              <ul className="mt-4 space-y-2.5">
                {cap.points.map((point) => (
                  <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-blue"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
