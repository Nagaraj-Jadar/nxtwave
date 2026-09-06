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

        <div className="mt-10 grid grid-cols-1 gap-x-16 gap-y-10 sm:grid-cols-2 sm:gap-x-14 sm:gap-y-12 lg:mt-8 lg:min-h-0 lg:flex-1 lg:grid-rows-2 lg:gap-y-8 xl:gap-x-20 xl:gap-y-10">
          {strengths.map((strength, index) => (
            <Reveal
              key={strength.title}
              delay={120 + index * 80}
              className="group min-h-[200px] py-2 sm:py-3 lg:min-h-0 lg:py-2"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-blue/45 text-brand-blue transition-colors duration-300 group-hover:border-brand-blue group-hover:bg-brand-blue group-hover:text-white">
                <strength.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="relative mt-5 min-h-[3.65rem] max-w-md lg:h-[3.65rem]">
                <span className="flex min-h-[3.65rem] w-full items-center rounded-[1.15rem] bg-[#3d4fd6] px-5 font-serif text-[1.2rem] font-semibold leading-none text-white sm:px-6 sm:whitespace-nowrap sm:text-[1.02rem] lg:h-full lg:min-h-0 lg:text-[1.06rem] xl:text-[1.12rem]">
                  {strength.title}
                </span>
                <span aria-hidden="true" className="absolute right-4 top-1/2 h-px w-8 -translate-y-1/2 bg-white/35" />
              </h3>
              <p className="mt-3 max-w-md text-[0.9rem] font-medium leading-6 text-[#1f2937] lg:text-[0.875rem] xl:text-[0.9rem]">
                {strength.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
