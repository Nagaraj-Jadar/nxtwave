import { strengths } from '@/data/content'
import { Reveal } from '@/components/reveal'

export function CoreStrengths() {
  return (
    <section className="relative isolate overflow-hidden bg-secondary/50 py-16 sm:py-20 lg:h-[calc(100svh-88px)] lg:min-h-[640px] lg:py-0">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(#0f2b5d 1px, transparent 1px), linear-gradient(90deg, #0f2b5d 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />
      <div aria-hidden="true" className="pointer-events-none absolute right-0 top-[19%] h-px w-[15%] bg-brand-blue/30" />
      <div aria-hidden="true" className="pointer-events-none absolute left-[8%] top-[14%] h-2 w-2 rounded-full bg-brand-blue/50" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:flex lg:h-full lg:flex-col lg:justify-center lg:px-8 lg:py-7 xl:py-8">
        <Reveal className="max-w-3xl">
          <div className="py-2">
            <div className="flex items-center gap-2.5" aria-hidden="true">
              <span className="h-2 w-2 rounded-full bg-brand-blue" />
              <span className="h-px w-12 bg-brand-blue" />
              <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
            </div>
            <h2 className="mt-5 font-serif text-[2.35rem] font-semibold leading-[1.06] text-navy sm:text-[2.75rem] lg:text-[3.1rem]">
              Our Core <span className="text-brand-blue">Strengths</span>
            </h2>
            <div className="mt-5 flex items-center gap-2" aria-hidden="true">
              <span className="h-px w-36 bg-brand-blue" />
              <span className="h-1 w-1 rounded-full bg-brand-blue" />
              <span className="h-px w-8 bg-brand-blue/40" />
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-5 lg:mt-8 lg:min-h-0 lg:flex-1 lg:grid-rows-2 lg:gap-4 xl:gap-5">
          {strengths.map((strength, index) => (
            <Reveal
              key={strength.title}
              delay={120 + index * 80}
              className="group flex min-h-[220px] flex-col rounded-2xl border border-brand-blue/15 bg-white/85 p-6 shadow-[0_12px_28px_-24px_rgba(15,43,93,0.45)] sm:p-7 lg:min-h-0 lg:p-6 xl:p-7"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                <strength.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-5 max-w-full">
                <span className="inline-flex min-h-8 max-w-full items-center rounded-full border border-brand-blue px-4 py-1.5 font-serif text-[1.12rem] font-semibold leading-tight text-white shadow-[inset_0_0_12px_rgba(61,79,214,0.16)] sm:whitespace-nowrap sm:text-[0.98rem] lg:text-[1.02rem] xl:text-[1.08rem]" style={{ background: 'linear-gradient(90deg, #3d4fd6 0%, #3d4fd6 42%, rgba(61, 79, 214, 0.78) 64%, rgba(61, 79, 214, 0.36) 82%, rgba(61, 79, 214, 0.06) 100%)' }}>
                  {strength.title}
                </span>
              </h3>
              <p className="mt-4 max-w-md text-[0.9rem] font-medium leading-6 text-[#1f2937] lg:text-[0.84rem] xl:text-[0.9rem]">
                {strength.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
