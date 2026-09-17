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
                <div className="flex items-center gap-3">
                  <p className="text-[1.08rem] font-bold uppercase tracking-[0.34em] text-brand-blue">WHO WE ARE</p>
                  <span aria-hidden="true" className="h-px w-16 bg-brand-blue/60" />
                </div>
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

        <section className="relative overflow-hidden bg-[#f4f7fb] py-8 sm:py-10 lg:py-12">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.028]" style={{ backgroundImage: 'linear-gradient(#0f2b5d 1px, transparent 1px), linear-gradient(90deg, #0f2b5d 1px, transparent 1px)', backgroundSize: '52px 52px' }} />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
              <Reveal>
                <div className="flex items-center gap-3">
                  <p className="text-[1.08rem] font-bold uppercase tracking-[0.34em] text-brand-blue">WHAT WE DO</p>
                  <span aria-hidden="true" className="h-px w-16 bg-brand-blue/60" />
                </div>
                <h2 className="mt-3 max-w-[29rem] font-serif text-[2.1rem] font-semibold leading-[1.04] tracking-[-0.04em] text-navy sm:text-[2.85rem]">
                  <span className="block">From Architecture</span>
                  <span className="block">to Silicon <span className="text-brand-blue">—</span> We</span>
                  <span className="block">Engineer the</span>
                  <span className="block text-brand-blue">Entire Journey.</span>
                </h2>
              </Reveal>
              <Reveal delay={100} className="max-w-[36rem] space-y-3 text-[0.9rem] font-medium leading-6 text-[#243246] sm:text-[0.94rem] sm:leading-7 lg:pt-1">
                <p className="lg:text-justify" style={{ textJustify: 'inter-word' }}>We deliver end-to-end semiconductor engineering solutions spanning design, verification, implementation, signoff, and silicon validation.</p>
                <p className="lg:text-justify" style={{ textJustify: 'inter-word' }}>With expertise across the complete silicon lifecycle, we help semiconductor companies accelerate innovation, reduce engineering risk, and deliver production-ready silicon with confidence.</p>
                <p className="lg:text-justify" style={{ textJustify: 'inter-word' }}>From individual IPs and subsystems to complex SoC programs, we provide the technical depth and execution capability to take projects from concept to silicon.</p>
              </Reveal>
            </div>

            <Reveal delay={180} className="relative mt-8 h-[135px] sm:mt-9 sm:h-[185px] lg:mt-8 lg:h-[205px]" aria-label="Semiconductor engineering visual">
              <div aria-hidden="true" className="absolute bottom-0 left-0 top-0 w-[28%] rounded-[1.25rem] bg-[#e4ebff] opacity-75 [clip-path:polygon(0_13%,72%_13%,100%_100%,0_100%)] sm:w-[25%]" />
              <div className="absolute bottom-0 left-[7%] z-10 flex h-[62%] w-[15%] items-center justify-center sm:left-[8%] sm:w-[13%]">
                <span className="max-w-[7rem] text-center text-[0.48rem] font-semibold uppercase leading-[2.2] tracking-[0.32em] text-brand-blue sm:text-[0.58rem]">Ideas<br />Into<br />Silicon</span>
              </div>
              <div className="absolute inset-y-0 right-[3%] w-[80%] overflow-hidden rounded-[1.15rem] bg-white shadow-[0_18px_45px_-34px_rgba(15,43,93,0.55)] [clip-path:polygon(6%_0,94%_0,100%_100%,12%_100%)] sm:right-[4%] sm:w-[78%] sm:[clip-path:polygon(5%_0,94%_0,100%_100%,10%_100%)]">
                <Image src="/aboutus.png" alt="" fill sizes="(max-width: 1024px) 100vw, 1200px" className="animate-team-scene object-cover object-center" />
              </div>
            </Reveal>

            <Reveal delay={260} className="relative mt-8 border-t border-border pt-6 sm:mt-10 sm:pt-7 lg:mt-10">
              <svg aria-hidden="true" className="pointer-events-none absolute left-[8%] right-[8%] top-[3.15rem] hidden h-10 w-[84%] overflow-visible lg:block" viewBox="0 0 1000 40" fill="none" preserveAspectRatio="none">
                <path d="M0 20H125V8H250V32H375V8H500V32H625V8H750V32H875V20H1000" stroke="#2f6fe0" strokeOpacity=".28" strokeWidth="1.5" />
                <path d="M0 20H125V8H250V32H375V8H500V32H625V8H750V32H875V20H1000" stroke="#2f6fe0" strokeOpacity=".8" strokeWidth="2" strokeDasharray="3 150" className="animate-trace-flow" />
              </svg>
              <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
                {[
                  ['Design.', 'text-navy'],
                  ['Verify.', 'text-brand-blue'],
                  ['Implement.', 'text-navy'],
                  ['Validate.', 'text-brand-blue'],
                  ['Deliver.', 'text-navy'],
                ].map(([word, color], index) => (
                  <Reveal key={word} delay={300 + index * 90} className="flex items-center gap-4 lg:block lg:text-center">
                    <span className="relative z-10 flex h-9 w-9 flex-none items-center justify-center rounded-full border border-brand-blue/35 bg-[#f4f7fb] shadow-[0_5px_16px_-10px_rgba(15,43,93,0.7)] lg:mx-auto">
                      <span className="h-2.5 w-2.5 rounded-full bg-brand-blue" />
                    </span>
                    <span className={`mt-3 block font-serif text-[1.65rem] font-semibold leading-none tracking-[-0.03em] sm:text-[2rem] ${color}`}>{word}</span>
                  </Reveal>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="relative overflow-hidden bg-background pb-14 pt-6 sm:pb-16 sm:pt-8 lg:pb-20 lg:pt-10">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
              <Reveal>
                <div className="flex items-center gap-3">
                  <p className="text-[1.08rem] font-bold uppercase tracking-[0.34em] text-brand-blue">WHY CHOOSE US</p>
                  <span aria-hidden="true" className="h-px w-16 bg-brand-blue/60" />
                </div>
                <h2 className="mt-4 max-w-[27rem] text-balance font-serif text-[2.35rem] font-semibold leading-[1.02] tracking-[-0.04em] text-navy sm:text-[3.15rem]">Engineering <span className="block">Expertise.</span> <span className="block text-brand-blue">Execution You</span> <span className="block text-brand-blue">Can Trust.</span></h2>
              </Reveal>
              <Reveal delay={100} className="max-w-[36rem] space-y-3 text-[0.86rem] font-medium leading-6 text-[#243246] sm:text-[0.92rem] sm:leading-7">
                <p className="lg:text-justify" style={{ textJustify: 'inter-word' }}>In semiconductor engineering, the right partner can make the difference between a project that simply progresses and one that delivers with confidence.</p>
                <p className="lg:text-justify" style={{ textJustify: 'inter-word' }}>We combine specialized engineering talent, disciplined execution, and flexible engagement models to become a reliable extension of our customer's engineering teams.</p>
              </Reveal>
            </div>

            <div className="mt-10 grid gap-3 border-t border-border pt-3 md:grid-cols-2 md:gap-x-8">
              {reasons.map(([, title, description], index) => (
                <Reveal key={title} delay={120 + (index % 2) * 70} className="group relative overflow-hidden border-b border-border bg-white/45 px-5 py-5 transition-colors duration-300 hover:bg-white/80 sm:px-6 sm:py-6">
                  <span aria-hidden="true" className="absolute bottom-0 left-0 top-0 w-1 origin-bottom scale-y-[0.4] bg-brand-blue/30 transition-transform duration-300 group-hover:scale-y-100 group-hover:bg-brand-blue" />
                  <div className="pl-1">
                    <h3 className="font-serif text-xl font-semibold leading-tight text-navy transition-colors duration-200 group-hover:text-brand-blue sm:text-[1.35rem]">{title}</h3>
                    <p className="mt-2 max-w-xl text-[0.9rem] leading-6 text-[#243246]">{description}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={220} className="relative mt-10 overflow-hidden border-t border-border pt-7 sm:mt-12 sm:pt-9">
              <div aria-hidden="true" className="absolute left-0 top-0 h-1 w-20 bg-brand-blue" />
              <div className="relative max-w-5xl pl-6 sm:pl-8">
                <div aria-hidden="true" className="absolute bottom-1 left-0 top-1 w-px bg-brand-blue/35" />
                <p className="font-serif text-[1.85rem] font-semibold leading-[1.06] tracking-[-0.035em] text-navy sm:text-[2.45rem] lg:text-[2.8rem]">More Than an Engineering Service Provider <span className="text-brand-blue">—</span><br className="hidden sm:block" /> A Partner in Your Silicon Journey.</p>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}