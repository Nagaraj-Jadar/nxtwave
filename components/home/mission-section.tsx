import Image from 'next/image'
import { Reveal } from '@/components/reveal'

export function MissionSection() {
  return (
    <section id="about" className="relative isolate overflow-hidden bg-background py-20 sm:py-24 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(#0f2b5d 1px, transparent 1px), linear-gradient(90deg, #0f2b5d 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />
      <div aria-hidden="true" className="pointer-events-none absolute left-0 top-[17%] h-px w-[18%] bg-brand-blue/30" />
      <div aria-hidden="true" className="pointer-events-none absolute right-[8%] top-[13%] h-2 w-2 rounded-full bg-brand-blue/50" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:gap-x-12 lg:px-8 xl:gap-x-16">
        <Reveal className="lg:col-span-6">
          <div className="relative pb-5 pr-5 sm:pb-7 sm:pr-7">
            <div aria-hidden="true" className="absolute bottom-0 right-0 h-[85%] w-[85%] rounded-bl-[2rem] border-b border-r border-brand-blue/45" />
            <div aria-hidden="true" className="absolute -left-3 top-10 h-[68%] w-16 border-l border-t border-brand-blue/25 sm:-left-5 sm:w-24" />
            <div aria-hidden="true" className="absolute -inset-3 -z-10 rounded-[2rem] bg-brand-blue/[0.07] blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.35rem] border border-brand-blue/25 bg-secondary p-1.5">
              <Image
                src="/about-image.png"
                alt="NXTwave semiconductor engineering team collaborating on a technical design"
                width={720}
                height={560}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="aspect-[9/7] h-auto w-full rounded-[1rem] object-cover"
                priority={false}
              />
              <div className="absolute left-5 top-5 flex items-center gap-2 border border-white/50 bg-navy/90 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm sm:left-6 sm:top-6">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
                VLSI Engineering
              </div>
            </div>
            <div className="absolute -bottom-1 left-5 border-l border-brand-blue pl-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-navy/55 sm:left-8">
              End-to-End Expertise
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-5 lg:col-start-8">
          <Reveal delay={80}>
            <div className="py-2">
              <div className="flex items-center gap-2.5" aria-hidden="true">
                <span className="h-2 w-2 rounded-full bg-brand-blue" />
                <span className="h-px w-12 bg-brand-blue" />
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
              </div>
              <p className="mt-3 text-base font-bold uppercase tracking-[0.28em] text-brand-blue sm:text-lg">
                Our Mission
              </p>
              <div className="mt-4 flex items-center gap-2" aria-hidden="true">
                <span className="h-px w-36 bg-brand-blue" />
                <span className="h-1 w-1 rounded-full bg-brand-blue" />
                <span className="h-px w-8 bg-brand-blue/40" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <h2 className="mt-7 max-w-lg text-balance font-serif text-[2.35rem] font-semibold leading-[1.06] text-navy sm:text-[2.75rem] lg:text-[2.9rem] xl:text-[3.1rem]">
              <span className="block">Engineered for</span>
              <span className="block sm:whitespace-nowrap"><span className="text-brand-blue">First-Pass</span> Success</span>
            </h2>
          </Reveal>

          <Reveal delay={240}>
            <div className="mission-copy mt-8 max-w-xl space-y-5 text-[0.95rem] font-medium leading-7 text-[#1f2937] sm:text-base sm:leading-8">
              <p>
                NXTwave Semiconductor is a premier VLSI design firm headquartered
                in Bengaluru. We provide comprehensive, end-to-end semiconductor
                design solutions from RTL to GDSII. Our service portfolio spans
                architectural definition, RTL design, functional verification,
                synthesis, physical design, DFT, and post-silicon validation.
              </p>
              <p>
                We partner with fabless design houses and internal chip design
                teams to achieve first-pass silicon success, driven by our deep
                domain expertise, rigorous verification, and quality-focused
                engineering philosophy.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
