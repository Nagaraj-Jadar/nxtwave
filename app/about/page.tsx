import type { Metadata } from 'next'
import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

const reasons = [
  ['01', 'Deep Semiconductor Expertise', 'Access to specialized engineering talent across the complete silicon development lifecycle, enabling us to address complex technical challenges with depth and precision.'],
  ['02', 'End-to-End Capability', 'From architecture to silicon validation, our integrated capabilities enable seamless execution across multiple stages of the semiconductor lifecycle.'],
  ['03', 'Project Ownership', 'We take responsibility for deliverables, milestones, quality, and closure, providing customers with clear accountability throughout the engagement.'],
  ['04', 'Flexible & Scalable Engagement', 'Whether you need specialized engineers, dedicated teams, project-based execution, or turnkey delivery, we scale our engagement to match your requirements.'],
  ['05', 'Quality-Driven Delivery', 'Structured methodologies, engineering reviews, automation, and rigorous quality practices help deliver reliable and signoff-ready outcomes.'],
  ['06', 'Accelerated Time-to-Market', 'Our domain expertise, reusable methodologies, and efficient execution help customers reduce development cycles and bring products to market faster.'],
  ['07', 'Trusted Long-Term Partnership', 'We work as an extension of your engineering organization, building relationships based on transparency, collaboration, technical trust, and shared success.'],
] as const

export const metadata: Metadata = {
  title: 'About',
  description: 'Engineering Silicon. Enabling Innovation.',
}

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-background">
        <section className="relative isolate overflow-hidden bg-[#f7f9fc] py-12 text-navy sm:py-16 lg:h-[calc(100svh-76px)] lg:min-h-[650px] lg:overflow-hidden lg:py-8">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.045]" style={{ backgroundImage: 'linear-gradient(#0f2b5d 1px, transparent 1px), linear-gradient(90deg, #0f2b5d 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
          <div className="relative mx-auto grid h-full max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:gap-14 lg:px-8">
            <div>
              <Reveal>
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.28em] text-brand-blue">WHO WE ARE</p>
                <h1 className="mt-4 max-w-2xl font-serif text-[2.55rem] font-semibold leading-[1.02] tracking-[-0.04em] text-navy sm:text-[3.45rem] lg:text-[3.7rem]">
                  <span className="block lg:whitespace-nowrap">Engineering Silicon.</span>
                  <span className="mt-1 block text-brand-blue lg:whitespace-nowrap">Enabling Innovation.</span>
                </h1>
              </Reveal>
              <Reveal delay={100} className="mt-6 max-w-[36rem] space-y-3 text-[0.9rem] font-medium leading-6 text-[#243246] sm:text-[0.95rem] sm:leading-7 lg:mt-5 lg:space-y-2.5 lg:text-[0.88rem] lg:leading-6">
                <p className="border-l-2 border-brand-blue pl-4 text-base font-semibold leading-6 text-navy sm:text-lg sm:leading-7" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>We are a next-generation semiconductor engineering company delivering high-end engineering expertise across the complete silicon development lifecycle.</p>
                <p style={{ textAlign: 'justify', textJustify: 'inter-word' }}>From architecture and RTL design to advanced verification, DFT, physical implementation, analog and mixed-signal engineering, and post-silicon validation, we help semiconductor companies turn ambitious ideas into reliable, production-ready silicon.</p>
                <p style={{ textAlign: 'justify', textJustify: 'inter-word' }}>Our teams combine deep semiconductor expertise, engineering precision, intelligent automation, and execution discipline to solve complex challenges across IP, subsystem, and SoC development.</p>
              </Reveal>
              <Reveal delay={220} className="mt-7 border-t border-border pt-5 sm:mt-9 sm:pt-6">
                <p className="max-w-2xl font-serif text-[1.65rem] font-semibold leading-[1.08] tracking-[-0.03em] text-navy sm:text-[2.2rem]">We don't just engineer designs. We engineer confidence into silicon.</p>
              </Reveal>
            </div>

            <Reveal delay={140} className="relative mx-auto flex h-[350px] w-full max-w-[640px] items-center justify-center sm:h-[440px] lg:h-[465px]" aria-hidden="true">
              <div className="relative h-[280px] w-[370px] overflow-hidden rounded-[1.25rem] border border-brand-blue/20 bg-white shadow-[0_24px_55px_-30px_rgba(15,43,93,0.5)] sm:h-[360px] sm:w-[520px]">
                <Image src="/who-we.png" alt="Semiconductor engineers working together" fill sizes="(max-width: 1024px) 94vw, 42vw" className="animate-team-scene object-cover" />
                <div className="pointer-events-none absolute inset-4 border border-white/45" aria-hidden="true" />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="relative overflow-hidden bg-secondary/45 py-16 sm:py-20 lg:py-24">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
              <Reveal>
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.28em] text-brand-blue">WHAT WE DO</p>
                <h2 className="mt-5 max-w-xl text-balance font-serif text-[2.6rem] font-semibold leading-[1.04] tracking-[-0.04em] text-navy sm:text-[3.55rem]">From Architecture to Silicon <span className="text-brand-blue">—</span> We Engineer the Entire Journey.</h2>
              </Reveal>
              <Reveal delay={100} className="max-w-[38rem] space-y-5 text-[0.98rem] font-medium leading-7 text-[#243246] sm:text-base sm:leading-8">
                <p style={{ textAlign: 'justify', textJustify: 'inter-word' }}>We deliver end-to-end semiconductor engineering solutions spanning design, verification, implementation, signoff, and silicon validation.</p>
                <p style={{ textAlign: 'justify', textJustify: 'inter-word' }}>With expertise across the complete silicon lifecycle, we help semiconductor companies accelerate innovation, reduce engineering risk, and deliver production-ready silicon with confidence.</p>
                <p style={{ textAlign: 'justify', textJustify: 'inter-word' }}>From individual IPs and subsystems to complex SoC programs, we provide the technical depth and execution capability to take projects from concept to silicon.</p>
              </Reveal>
            </div>

            <Reveal delay={160} className="relative mt-14 border-y border-border py-10 sm:py-14 lg:mt-16 lg:py-16">
                <svg aria-hidden="true" className="pointer-events-none absolute left-[8%] right-[8%] top-[38%] h-12 w-[84%]" viewBox="0 0 1000 48" fill="none" preserveAspectRatio="none">
                  <path d="M0 24H100L150 8H350L400 40H600L650 8H850L900 24H1000" stroke="#2f6fe0" strokeOpacity=".35" strokeWidth="2" strokeDasharray="7 12" className="animate-trace-flow" />
                </svg>
                <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
                  {[
                    ['Design.', 'text-navy'],
                    ['Verify.', 'text-brand-blue'],
                    ['Implement.', 'text-navy'],
                    ['Validate.', 'text-brand-blue'],
                    ['Deliver.', 'text-navy'],
                  ].map(([word, color], index) => (
                    <div key={word} className="relative flex items-center gap-4 lg:block lg:text-center">
                      <span className="flex h-3 w-3 flex-none rounded-full border-2 border-brand-blue bg-secondary lg:mx-auto" />
                      <span className={`mt-4 block font-serif text-[1.8rem] font-semibold leading-none tracking-[-0.03em] sm:text-[2.2rem] ${color}`}>{word}</span>
                      {index < 4 && <span aria-hidden="true" className="hidden lg:block absolute right-[-0.6rem] top-1.5 h-px w-5 bg-brand-blue/35" />}
                    </div>
                  ))}
                </div>
            </Reveal>
          </div>
        </section>

        <section className="relative overflow-hidden bg-background py-16 sm:py-20 lg:py-24">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
              <Reveal>
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.28em] text-brand-blue">WHY CHOOSE US</p>
                <h2 className="mt-5 max-w-xl text-balance font-serif text-[2.7rem] font-semibold leading-[1.04] tracking-[-0.04em] text-navy sm:text-[3.8rem]">Engineering Expertise. <span className="text-brand-blue">Execution You Can Trust.</span></h2>
              </Reveal>
              <Reveal delay={100} className="max-w-2xl space-y-5 text-[0.98rem] font-medium leading-7 text-[#243246] sm:text-base sm:leading-8">
                <p>In semiconductor engineering, the right partner can make the difference between a project that simply progresses and one that delivers with confidence.</p>
                <p>We combine specialized engineering talent, disciplined execution, and flexible engagement models to become a reliable extension of our customers' engineering teams.</p>
              </Reveal>
            </div>

            <div className="mt-14 grid border-t border-border md:grid-cols-2 md:gap-x-12">
              {reasons.map(([number, title, description], index) => (
                <Reveal key={number} delay={120 + (index % 2) * 70} className="group border-b border-border py-7 sm:py-8">
                  <div className="grid gap-4 sm:grid-cols-[2.5rem_1fr] sm:gap-6">
                    <span className="font-mono text-xs font-semibold tracking-[0.12em] text-brand-blue">{number}</span>
                    <div>
                      <h3 className="font-serif text-xl font-semibold leading-tight text-navy transition-colors duration-200 group-hover:text-brand-blue sm:text-2xl">{title}</h3>
                      <p className="mt-3 max-w-xl text-[0.95rem] leading-7 text-[#243246]">{description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={220} className="mt-14 border-t border-border pt-8 sm:mt-20 sm:pt-10">
              <p className="max-w-4xl font-serif text-[2rem] font-semibold leading-[1.08] tracking-[-0.03em] text-navy sm:text-[2.8rem]">More Than an Engineering Service Provider <span className="text-brand-blue">—</span> A Partner in Your Silicon Journey.</p>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}