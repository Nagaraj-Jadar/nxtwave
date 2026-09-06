import Image from 'next/image'
import { strengths } from '@/data/content'
import { Reveal } from '@/components/reveal'

const strengthImages = [
  '/vlsi.png',
  '/quality.png',
  '/flexible.png',
  '/faster-time.png',
]

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
              className="group relative flex min-h-[250px] overflow-hidden rounded-2xl border border-brand-blue/15 bg-white/90 shadow-[0_12px_28px_-24px_rgba(15,43,93,0.45)] transition-transform duration-300 hover:-translate-y-0.5 lg:min-h-0"
            >
              <div className="relative z-10 flex w-full flex-col p-6 sm:p-7 lg:w-[58%] lg:p-6 xl:p-7">
                <div className="flex items-center gap-3 text-brand-blue/70">
                  <span className="font-sans text-xs font-semibold tracking-[0.16em]">{String(index + 1).padStart(2, '0')}</span>
                  <span className="h-px w-8 bg-brand-blue/40" aria-hidden="true" />
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-blue/25 bg-secondary text-brand-blue">
                    <strength.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                </div>
                <h3 className="mt-5 font-serif text-xl font-semibold leading-tight text-navy sm:text-2xl lg:text-xl xl:text-2xl">
                  {strength.title}
                </h3>
                <p className="mt-4 max-w-md text-[0.9rem] font-medium leading-6 text-[#1f2937] lg:text-[0.84rem] xl:text-[0.9rem]">
                  {strength.description}
                </p>
              </div>
              <div className="relative min-h-48 w-full overflow-hidden lg:absolute lg:inset-y-0 lg:right-0 lg:block lg:w-[49%] lg:[clip-path:polygon(18%_0,100%_0,100%_100%,0_100%)]">
                <Image
                  src={strengthImages[index]}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-navy/10" aria-hidden="true" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
