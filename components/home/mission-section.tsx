import Link from 'next/link'
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

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-[56rem]">
          <p className="mt-5 font-serif text-[2.5rem] font-semibold leading-[0.92] tracking-[-0.06em] text-navy sm:text-[3.2rem] lg:text-[4.1rem]">
            <span>WHO </span><span className="text-brand-blue">WE ARE</span>
          </p>
          <div className="mt-5 flex items-center gap-2" aria-hidden="true">
            <span className="h-px w-36 bg-brand-blue" />
            <span className="h-1 w-1 rounded-full bg-brand-blue" />
            <span className="h-px w-8 bg-brand-blue/40" />
          </div>
        </Reveal>

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal className="relative min-h-[300px] overflow-hidden rounded-[28px] shadow-[0_24px_60px_-36px_rgba(15,43,93,0.7)] sm:min-h-[390px]">
            <Image src="/about-image-left.png" alt="" fill sizes="(max-width: 1024px) 100vw, 42vw" className="object-cover transition-transform duration-700 hover:scale-105" />
          </Reveal>

          <div>
            <Reveal delay={100}>
              <h2 className="max-w-[42rem] border-l-2 border-brand-blue/45 pl-5 font-serif text-[2.1rem] font-semibold leading-[1.08] tracking-[-0.04em] text-navy sm:pl-6 sm:text-[3rem] lg:text-[3.35rem]">
                <span className="block whitespace-nowrap">Engineering Silicon.</span>
                <span className="mt-1 block whitespace-nowrap text-brand-blue">Enabling Innovation.</span>
              </h2>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-7 max-w-[38rem] text-base font-medium leading-8 text-[#1f2937] sm:text-lg">
                We are a next-generation semiconductor engineering company delivering high-end engineering expertise across the complete silicon development lifecycle.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <Link href="/about" className="mt-8 inline-flex items-center gap-3 border-b border-brand-blue pb-2 text-sm font-semibold text-navy transition-colors hover:text-brand-blue">
                Discover Who We Are <span aria-hidden="true">-&gt;</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
