import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  Activity,
  ArrowRight,
  BarChart3,
  Blocks,
  Braces,
  CheckCircle2,
  CircuitBoard,
  Code2,
  Database,
  FileCheck2,
  GitBranch,
  Layers3,
  Network,
  Puzzle,
  ShieldCheck,
  SlidersHorizontal,
  Target,
} from 'lucide-react'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export const metadata: Metadata = {
  title: 'Design Verification',
  description: 'Ensuring functional correctness through rigorous verification methodologies.',
}

const capabilities = [
  'Verification planning and strategy development',
  'SystemVerilog and UVM-based verification',
  'IP-level verification',
  'Subsystem-level verification',
  'SoC-level verification',
  'Constrained-random verification',
  'Directed and scenario-based testing',
  'Assertion-Based Verification (SVA)',
  'Functional coverage development',
  'Code coverage analysis',
  'Coverage-driven verification closure',
  'Register verification using UVM RAL',
  'Protocol and interface verification',
  'VIP integration and customization',
]

const capabilityIcons = [
  FileCheck2,
  Braces,
  CircuitBoard,
  Layers3,
  Blocks,
  SlidersHorizontal,
  FileCheck2,
  ShieldCheck,
  BarChart3,
  Activity,
  Target,
  Database,
  Network,
  Puzzle,
]

const deliverables = [
  'Comprehensive verification plan',
  'UVM verification environment',
  'Test sequences and test scenarios',
  'Assertions and checkers',
  'Functional coverage model',
  'Regression infrastructure',
  'Coverage and verification reports',
  'Verification closure and sign-off',
]

const principles = [
  {
    heading: 'Plan with measurable intent',
    text: 'We establish verification plans, coverage goals, and traceable milestones that turn design intent into measurable closure criteria.',
    icon: Layers3,
  },
  {
    heading: 'Scale through reuse and automation',
    text: 'Reusable UVM environments, constrained-random stimulus, VIP, and regression infrastructure make verification efficient across IP, subsystem, and SoC levels.',
    icon: Code2,
  },
  {
    heading: 'Close with evidence',
    text: 'Assertions, coverage analysis, systematic debug, and reporting provide quantifiable confidence well ahead of silicon implementation.',
    icon: ShieldCheck,
  },
]

export default function DesignVerificationPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[#f4f8ff] text-slate-900">
        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_14%_18%,rgba(56,189,248,0.22),transparent_24%),radial-gradient(circle_at_86%_30%,rgba(37,99,235,0.24),transparent_28%),linear-gradient(135deg,#07142d_0%,#0b1f42_48%,#081326_100%)] text-white">
          <div className="absolute inset-0 opacity-40" aria-hidden="true" style={{ backgroundImage: 'linear-gradient(rgba(125,211,252,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(125,211,252,0.10) 1px, transparent 1px)', backgroundSize: '38px 38px' }} />
          <div className="relative mx-auto max-w-[1320px] px-4 py-10 sm:px-6 lg:min-h-[calc(100svh-76px)] lg:px-8 lg:py-6">
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-sky-300/30 bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-sky-200 shadow-[0_18px_40px_rgba(0,0,0,0.18)] backdrop-blur-sm lg:mb-3">
              <span className="h-2 w-2 rounded-full bg-cyan-300" aria-hidden="true" />
              Services
            </div>

            <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-5">
              <div className="relative z-10 pt-2">
                <h1 className="max-w-[620px] text-4xl font-semibold leading-[0.94] tracking-[-0.07em] text-white sm:text-5xl lg:text-[4.2rem]">
                  Design<br />Verification
                </h1>
                <p className="mt-4 max-w-[580px] text-xl font-medium leading-relaxed text-sky-100 sm:text-2xl lg:text-[1.65rem]">
                  Ensuring Functional Correctness Through Rigorous Verification Methodologies
                </p>
                <div className="mt-5 max-w-[580px] space-y-3 text-[15px] leading-7 text-slate-300" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                  <p style={{ textAlign: 'justify', textJustify: 'inter-word' }}>Our Design Verification services deliver exhaustive functional verification across IP, subsystem, and SoC levels. We build scalable verification environments engineered to surface functional defects early, elevate verification efficiency, and provide quantifiable confidence well ahead of silicon implementation.</p>
                  <p style={{ textAlign: 'justify', textJustify: 'inter-word' }}>Leveraging SystemVerilog, UVM, assertion-based techniques, coverage-driven verification, and advanced methodologies, we construct reusable, extensible environments capable of addressing even the most intricate design scenarios.</p>
                  <p style={{ textAlign: 'justify', textJustify: 'inter-word' }}>Our approach is anchored in rigorous planning, automation, constrained-random stimulus generation, functional coverage, regression management, and systematic verification closure.</p>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_35px_rgba(15,23,42,0.22)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-sky-700">
                    Talk to our team
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <span className="rounded-full border border-sky-300/30 bg-white/10 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-sky-200">Intent → Stimulus → Closure</span>
                </div>
              </div>

              <div className="relative flex min-h-[350px] items-center justify-center overflow-visible lg:min-h-[465px]" aria-label="Verification environment visualization">
                <div className="relative h-[350px] w-[130%] max-w-[620px] scale-[0.74] lg:h-[465px] lg:w-full lg:scale-100">
                  <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-300/15 [transform:rotateX(68deg)_rotateZ(-12deg)]" aria-hidden="true" />
                  <div className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/25 border-dashed [transform:rotateX(68deg)_rotateZ(-12deg)]" aria-hidden="true" />
                  <svg className="absolute inset-0 h-full w-full" viewBox="0 0 620 520" fill="none" aria-hidden="true">
                    <defs>
                      <linearGradient id="verificationTrace" x1="0" y1="0" x2="1" y2="1">
                        <stop stopColor="#38bdf8" stopOpacity="0" />
                        <stop offset="0.5" stopColor="#67e8f9" />
                        <stop offset="1" stopColor="#2563eb" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path d="M35 390H145L220 330M585 390H475L400 330M72 452H180L238 370M548 452H440L382 370" stroke="url(#verificationTrace)" strokeWidth="2" className="animate-trace-flow" />
                    <path d="M180 135L252 222M440 135L368 222M130 270L230 300M490 270L390 300" stroke="#67e8f9" strokeOpacity="0.28" />
                    <g fill="#a5f3fc">
                      <circle className="animate-pulse-glow" cx="180" cy="135" r="3" />
                      <circle className="animate-pulse-glow" cx="440" cy="135" r="3" />
                      <circle className="animate-pulse-glow" cx="130" cy="270" r="3" />
                      <circle className="animate-pulse-glow" cx="490" cy="270" r="3" />
                    </g>
                  </svg>

                  <div className="absolute left-1/2 top-[10%] w-[210px] -translate-x-1/2 rounded-xl border border-cyan-300/35 bg-[#102b55]/75 px-4 py-3 text-center shadow-[0_18px_35px_rgba(0,0,0,0.22)] backdrop-blur-sm">
                    <div className="flex items-center justify-center gap-2 text-[9px] font-semibold uppercase tracking-[0.22em] text-cyan-200"><BarChart3 className="h-3.5 w-3.5" /> Coverage model</div>
                    <div className="mt-3 flex items-end justify-center gap-1.5">
                      {[28, 42, 34, 52, 46, 64, 58, 72].map((height, index) => <span key={index} className="w-2 rounded-t-sm bg-cyan-300/70" style={{ height }} />)}
                    </div>
                  </div>

                  <div className="absolute left-1/2 top-[31%] h-[178px] w-[276px] -translate-x-1/2 rounded-2xl border border-cyan-200/70 bg-[linear-gradient(135deg,#314866_0%,#0a1428_58%,#1c3555_100%)] p-4 shadow-[inset_0_0_25px_rgba(96,165,250,0.24),0_0_30px_rgba(56,189,248,0.2)]">
                    <div className="h-full rounded-xl border border-sky-300/30 bg-[#071426] p-3">
                      <div className="flex items-center justify-between text-[9px] font-mono uppercase tracking-[0.2em] text-sky-200"><span>UVM TESTBENCH</span><CheckCircle2 className="h-4 w-4 text-emerald-300" /></div>
                      <div className="mt-4 grid grid-cols-3 gap-2 text-center text-[8px] uppercase tracking-[0.12em] text-slate-300">
                        {['Stimulus', 'DUT', 'Monitor', 'Scoreboard', 'Assertions', 'Report'].map((item) => <span key={item} className="border border-sky-300/25 bg-sky-200/10 px-1 py-2">{item}</span>)}
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-[12%] left-1/2 w-[300px] -translate-x-1/2 rounded-xl border border-blue-300/35 bg-[#0d2348]/85 px-4 py-3 shadow-[0_18px_35px_rgba(0,0,0,0.24)] backdrop-blur-sm">
                    <div className="flex items-center justify-between text-[9px] font-semibold uppercase tracking-[0.22em] text-blue-100"><span>Regression status</span><span className="text-emerald-300">Passing</span></div>
                    <svg className="mt-3 h-9 w-full" viewBox="0 0 300 36" preserveAspectRatio="none"><path d="M0 25H18V11H38V25H58V17H78V25H104V7H126V25H148V14H170V25H196V10H218V25H242V17H264V25H300" stroke="#67e8f9" strokeWidth="2" className="animate-trace-flow" /></svg>
                    <div className="mt-1 flex justify-between text-[8px] uppercase tracking-[0.15em] text-slate-400"><span>Clock</span><span>Assertions</span><span>Coverage</span></div>
                  </div>

                  <div className="absolute bottom-[3%] left-1/2 -translate-x-1/2 text-center text-[9px] font-semibold uppercase tracking-[0.28em] text-sky-300/80">Stimulus <span className="px-2 text-cyan-300">→</span> Confidence</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#f4f8ff] py-14 sm:py-16 lg:py-20">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.035]" style={{ backgroundImage: 'linear-gradient(#0f2b5d 1px, transparent 1px), linear-gradient(90deg, #0f2b5d 1px, transparent 1px)', backgroundSize: '52px 52px' }} />
          <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
            <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-sky-700">Verification services</p>
                <h2 className="mt-3 max-w-[560px] text-[3rem] font-semibold leading-[0.94] tracking-[-0.06em] text-slate-950 sm:text-[4rem] lg:text-[4.5rem]">
                  Our <span className="text-sky-600">Capabilities</span>
                </h2>
                <p className="mt-5 max-w-[560px] font-serif text-[1.35rem] font-semibold leading-tight text-slate-900 sm:text-[1.55rem]">
                  Verification engineered for confidence before silicon.
                </p>
                <div className="relative mx-auto mt-2 aspect-square w-full max-w-[600px]">
                  <Image
                    src="/design-verification.png"
                    alt="Verification system showing a DUT, testbench development, assertions, coverage analysis, and SoC-level verification"
                    fill
                    sizes="(max-width: 1024px) 100vw, 48vw"
                    className="object-contain object-center drop-shadow-[0_24px_35px_rgba(37,99,235,0.14)] transition-transform duration-700 hover:-translate-y-1"
                  />
                </div>
              </div>

              <div className="grid gap-2.5 sm:grid-cols-2 sm:gap-3 lg:pt-1">
                {capabilities.map((item, index) => {
                  const Icon = capabilityIcons[index]

                  return (
                    <div key={item} className="group flex min-h-[76px] items-center gap-3 rounded-xl border border-sky-100/90 bg-white/90 px-4 py-3 shadow-[0_14px_30px_-26px_rgba(15,43,93,0.6)] transition-all duration-200 hover:-translate-y-0.5 hover:border-sky-300 hover:bg-white hover:shadow-[0_18px_34px_-24px_rgba(37,99,235,0.3)]">
                      <span className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-[#edf4ff] text-sky-600 transition-colors group-hover:bg-sky-100 group-hover:text-sky-700" aria-hidden="true">
                        <Icon className="h-[19px] w-[19px]" strokeWidth={1.6} />
                      </span>
                      <p className="text-[13px] font-medium leading-5 text-[#172d54] sm:text-sm">{item}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[linear-gradient(135deg,#07142d_0%,#0c2348_54%,#071326_100%)] py-16 text-white sm:py-20 lg:py-24">
          <div className="absolute inset-0 opacity-25" aria-hidden="true" style={{ backgroundImage: 'linear-gradient(rgba(125,211,252,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(125,211,252,0.12) 1px, transparent 1px)', backgroundSize: '42px 42px' }} />
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
            <div className="relative"><div className="max-w-[700px]"><div className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">Verification methodology</div><h2 className="mt-3 max-w-[680px] text-3xl font-semibold leading-tight tracking-[-0.05em] text-white sm:text-4xl lg:text-5xl">Confidence built into every regression.</h2><p className="mt-5 max-w-[620px] text-base leading-7 text-slate-300">From planning through closure, every verification decision is anchored in measurable evidence and reusable engineering practice.</p></div><div className="mt-10 grid gap-4 lg:grid-cols-3">{principles.map(({ heading, text, icon: Icon }) => <div key={heading} className="rounded-2xl border border-sky-300/20 bg-white/[0.06] p-5 backdrop-blur-sm"><div className="flex items-center justify-end"><span className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-200"><Icon className="h-5 w-5" aria-hidden="true" /></span></div><h3 className="mt-6 font-sans text-lg font-semibold text-white">{heading}</h3><p className="mt-3 text-[15px] leading-7 text-slate-300">{text}</p></div>)}</div><div className="mt-12 border-t border-sky-300/20 pt-7"><div className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">Deliverables</div><div className="mt-6 grid gap-x-12 gap-y-3 md:grid-cols-2">{deliverables.map((item) => <div key={item} className="flex min-h-[52px] items-center gap-3 border-b border-sky-300/15 py-3"><span className="flex h-6 w-6 flex-none items-center justify-center rounded-full border border-cyan-300/35 text-xs text-cyan-300">-&gt;</span><p className="text-base leading-6 text-slate-200">{item}</p></div>)}</div></div></div>
          </div>
        </section>

        <section className="bg-[#f7faff] py-14 sm:py-16 lg:py-20"><div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8"><div className="relative overflow-hidden rounded-[28px] bg-[linear-gradient(110deg,#dbeafe_0%,#f8fbff_48%,#bfdbfe_100%)] p-7 shadow-[0_26px_70px_rgba(37,99,235,0.12)] sm:p-10"><div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between"><div><div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-700">Let’s collaborate</div><h2 className="mt-4 max-w-[620px] text-3xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-4xl">Need verification confidence before your next tape-out?</h2></div><Link href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_35px_rgba(15,23,42,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-sky-700">Contact us<ArrowRight className="h-4 w-4" aria-hidden="true" /></Link></div></div></div></section>
      </main>
      <SiteFooter />
    </>
  )
}
