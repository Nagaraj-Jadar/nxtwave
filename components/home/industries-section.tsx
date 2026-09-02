import { industries } from '@/data/content'
import { Reveal } from '@/components/reveal'

export function IndustriesSection() {
  return (
    <section id="industries" className="bg-navy py-16 text-navy-foreground lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-sans text-sm font-semibold uppercase tracking-[0.25em] text-white/70">
            Industries We Serve
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          {industries.map((ind, i) => (
            <Reveal
              key={ind.number}
              delay={(i % 6) * 60}
              className="flex flex-col items-center text-center"
            >
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-white/5 text-brand-blue">
                <ind.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-serif text-base font-semibold text-white">
                {ind.title}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-white/60">
                {ind.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
