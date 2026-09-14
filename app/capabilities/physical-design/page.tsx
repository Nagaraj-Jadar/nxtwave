import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Activity,
  ArrowRight,
  BarChart3,
  Blocks,
  CheckCircle2,
  CircuitBoard,
  Clock3,
  Cpu,
  Database,
  GitBranch,
  Layers3,
  Network,
  Route,
  Ruler,
  ShieldCheck,
  SlidersHorizontal,
  Zap,
} from 'lucide-react'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export const metadata: Metadata = {
  title: 'Physical Design',
  description: 'Backend implementation services from synthesized netlist to tape-out-ready silicon.',
}

const capabilities = [
  'Logic synthesis',
  'Congestion analysis and resolution',
  'Physical synthesis and optimization',
  'Static Timing Analysis (STA)',
  'Floorplanning',
  'Timing closure',
  'Macro placement and optimization',
  'Signal integrity analysis',
  'Power planning',
  'Power optimization',
  'Power grid implementation',
  'IR drop analysis',
  'Placement optimization',
  'Electromigration analysis',
  'Clock Tree Synthesis (CTS)',
  'ECO implementation',
  'Routing',
  'Physical implementation sign-off support',
]

const capabilityIcons = [
  Cpu,
  Network,
  SlidersHorizontal,
  Clock3,
  Ruler,
  Activity,
  Blocks,
  GitBranch,
  Zap,
  BarChart3,
  Layers3,
  Activity,
  SlidersHorizontal,
  ShieldCheck,
  CircuitBoard,
  GitBranch,
  Route,
  CheckCircle2,
]

const deliverables = [
  'Optimized synthesized netlist',
  'Power and performance analysis',
  'Floorplan and physical implementation database',
  'ECO implementation results',
  'Timing and physical closure reports',
  'Tape-out-ready layout database',
]

const principles = [
  {
    heading: 'PPA-driven implementation',
    text: 'We balance performance, power, and area from synthesis through sign-off, keeping implementation decisions tied to measurable silicon objectives.',
    icon: SlidersHorizontal,
  },
  {
    heading: 'Closure through the full flow',
    text: 'Floorplanning, placement, CTS, routing, and analysis are managed as one connected flow so issues are found early and resolved with context.',
    icon: Route,
  },
  {
    heading: 'Manufacturability at tape-out',
    text: 'Physical checks, reliability analysis, ECOs, and sign-off support build confidence in a clean, manufacturable layout database.',
    icon: ShieldCheck,
  },
]

export default function PhysicalDesignPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[#f4f8ff] text-slate-900">
        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_16%_18%,rgba(56,189,248,0.22),transparent_25%),radial-gradient(circle_at_84%_28%,rgba(37,99,235,0.25),transparent_30%),linear-gradient(135deg,#07142d_0%,#0b1f42_48%,#081326_100%)] text-white">
          <div className="absolute inset-0 opacity-40" aria-hidden="true" style={{ backgroundImage: 'linear-gradient(rgba(125,211,252,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(125,211,252,0.10) 1px, transparent 1px)', backgroundSize: '38px 38px' }} />
          <div className="relative mx-auto max-w-[1320px] px-4 py-10 sm:px-6 lg:min-h-[calc(100svh-88px)] lg:px-8 lg:py-6">
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-sky-300/30 bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-sky-200 shadow-[0_18px_40px_rgba(0,0,0,0.18)] backdrop-blur-sm lg:mb-3">
              <span className="h-2 w-2 rounded-full bg-cyan-300" aria-hidden="true" />
              Services
            </div>

            <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-5">
              <div className="relative z-10 pt-2">
                <h1 className="max-w-[650px] text-4xl font-semibold leading-[0.94] tracking-[-0.07em] text-white sm:text-5xl lg:text-[4.2rem]">Physical Design</h1>
                <p className="mt-4 max-w-[600px] text-xl font-medium leading-relaxed text-sky-100 sm:text-2xl lg:text-[1.65rem]">Converting RTL into High-Performance, Manufacturable Silicon</p>
                <div className="mt-5 max-w-[570px] space-y-3 text-[15px] leading-[1.8] text-slate-300">
                  <p style={{ textAlign: 'justify', textJustify: 'inter-word' }}>Our Physical Design services transform validated RTL and synthesized netlists into optimized physical layouts ready for tape-out. We deliver end-to-end backend implementation, focused squarely on achieving performance, power, area, and timing objectives while safeguarding physical manufacturability.</p>
                  <p style={{ textAlign: 'justify', textJustify: 'inter-word' }}>Our engineers operate across the full implementation flow - from synthesis and floorplanning through placement, clock tree synthesis, routing, and sign-off closure - to deliver a tape-out-ready design with confidence.</p>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_35px_rgba(15,23,42,0.22)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-sky-700">Talk to our team<ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
                  <span className="rounded-full border border-sky-300/30 bg-white/10 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-sky-200">Netlist -&gt; Tape-out</span>
                </div>
              </div>

              <div className="relative flex min-h-[350px] items-center justify-center overflow-visible lg:min-h-[465px]" aria-label="Physical design implementation flow visualization">
                <div className="relative h-[350px] w-[130%] max-w-[620px] scale-[0.74] lg:h-[465px] lg:w-full lg:scale-100">
                  <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-300/15 [transform:rotateX(68deg)_rotateZ(-12deg)]" aria-hidden="true" />
                  <div className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/25 border-dashed [transform:rotateX(68deg)_rotateZ(-12deg)]" aria-hidden="true" />
                  <svg className="absolute inset-0 h-full w-full" viewBox="0 0 620 520" fill="none" aria-hidden="true">
                    <defs>
                      <linearGradient id="physicalTrace" x1="0" y1="0" x2="1" y2="1">
                        <stop stopColor="#38bdf8" stopOpacity="0" />
                        <stop offset="0.5" stopColor="#67e8f9" />
                        <stop offset="1" stopColor="#2563eb" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path d="M26 390H142L218 330M594 390H478L402 330M68 452H180L238 370M552 452H440L382 370" stroke="url(#physicalTrace)" strokeWidth="2" className="animate-trace-flow" />
                    <path d="M170 128L250 220M450 128L370 220M120 270L228 300M500 270L392 300" stroke="#67e8f9" strokeOpacity="0.28" />
                    <g fill="#a5f3fc">
                      <circle className="animate-pulse-glow" cx="170" cy="128" r="3" />
                      <circle className="animate-pulse-glow" cx="450" cy="128" r="3" />
                      <circle className="animate-pulse-glow" cx="120" cy="270" r="3" />
                      <circle className="animate-pulse-glow" cx="500" cy="270" r="3" />
                    </g>
                  </svg>

                  <div className="absolute left-1/2 top-[8%] w-[220px] -translate-x-1/2 rounded-xl border border-cyan-300/35 bg-[#102b55]/75 px-4 py-3 text-center shadow-[0_18px_35px_rgba(0,0,0,0.22)] backdrop-blur-sm">
                    <div className="flex items-center justify-center gap-2 text-[9px] font-semibold uppercase tracking-[0.22em] text-cyan-200"><Database className="h-3.5 w-3.5" /> Synthesis netlist</div>
                    <div className="mt-3 grid grid-cols-5 gap-1.5">{[1, 0, 1, 1, 0, 1, 1, 0, 1, 1].map((bit, index) => <span key={index} className={bit ? 'h-5 rounded-sm bg-cyan-300/75' : 'h-5 rounded-sm border border-cyan-300/35 bg-cyan-300/10'} />)}</div>
                  </div>

                  <div className="absolute left-1/2 top-[31%] h-[178px] w-[276px] -translate-x-1/2 rounded-2xl border border-cyan-200/70 bg-[linear-gradient(135deg,#314866_0%,#0a1428_58%,#1c3555_100%)] p-4 shadow-[inset_0_0_25px_rgba(96,165,250,0.24),0_0_30px_rgba(56,189,248,0.2)]">
                    <div className="h-full rounded-xl border border-sky-300/30 bg-[#071426] p-3">
                      <div className="flex items-center justify-between text-[9px] font-mono uppercase tracking-[0.2em] text-sky-200"><span>PHYSICAL CORE</span><CheckCircle2 className="h-4 w-4 text-emerald-300" /></div>
                      <div className="mt-4 grid grid-cols-3 gap-2 text-center text-[8px] uppercase tracking-[0.12em] text-slate-300">{['Floorplan', 'Place', 'CTS', 'Route', 'IR drop', 'Sign-off'].map((item) => <span key={item} className="border border-sky-300/25 bg-sky-200/10 px-1 py-2">{item}</span>)}</div>
                    </div>
                  </div>

                  <div className="absolute bottom-[12%] left-1/2 w-[300px] -translate-x-1/2 rounded-xl border border-blue-300/35 bg-[#0d2348]/85 px-4 py-3 shadow-[0_18px_35px_rgba(0,0,0,0.24)] backdrop-blur-sm">
                    <div className="flex items-center justify-between text-[9px] font-semibold uppercase tracking-[0.22em] text-blue-100"><span>Sign-off closure</span><span className="text-emerald-300">On track</span></div>
                    <svg className="mt-3 h-9 w-full" viewBox="0 0 300 36" preserveAspectRatio="none"><path d="M0 25H18V15H42V25H68V10H92V25H116V18H142V25H166V8H194V25H220V13H248V25H274V16H300" stroke="#67e8f9" strokeWidth="2" className="animate-trace-flow" /></svg>
                    <div className="mt-1 flex justify-between text-[8px] uppercase tracking-[0.15em] text-slate-400"><span>Timing</span><span>Power</span><span>DRC</span></div>
                  </div>

                  <div className="absolute bottom-[3%] left-1/2 -translate-x-1/2 text-center text-[9px] font-semibold uppercase tracking-[0.28em] text-sky-300/80">Implementation <span className="px-2 text-cyan-300">-&gt;</span> Tape-out</div>
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
                <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-sky-700">Physical design services</p>
                <h2 className="mt-3 max-w-[560px] text-[3rem] font-semibold leading-[0.94] tracking-[-0.06em] text-slate-950 sm:text-[4rem] lg:text-[4.5rem]">Our <span className="text-sky-600">Capabilities</span></h2>
                <p className="mt-5 max-w-[560px] font-serif text-[1.35rem] font-semibold leading-tight text-slate-900 sm:text-[1.55rem]">Backend implementation engineered for tape-out confidence.</p>
                <div className="relative mx-auto mt-8 max-w-[560px] overflow-hidden rounded-[24px] border border-sky-100 bg-white/80 p-4 shadow-[0_24px_60px_-38px_rgba(15,43,93,0.5)] sm:p-5" aria-label="Physical implementation floorplan visualization">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.24em] text-sky-700">Physical implementation</p>
                      <p className="mt-1 text-xs font-semibold text-slate-700">Floorplan and route view</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-emerald-600"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> On track</div>
                  </div>
                  <div className="relative mt-4 h-[238px] overflow-hidden rounded-xl border border-sky-100 bg-[#f7fbff]" style={{ backgroundImage: 'linear-gradient(rgba(96,165,250,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.12) 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
                    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 560 238" fill="none" aria-hidden="true">
                      <path d="M42 54H150V100H238M520 54H410V100H322M42 188H150V140H238M520 188H410V140H322M238 100H322M238 140H322" stroke="#60a5fa" strokeOpacity="0.3" strokeWidth="2" />
                      <path d="M42 54H150V100H238M520 188H410V140H322M238 100H322" stroke="#0284c7" strokeWidth="2" strokeDasharray="7 10" className="animate-trace-flow" />
                      <circle cx="238" cy="119" r="42" fill="#dbeafe" fillOpacity="0.6" stroke="#60a5fa" strokeOpacity="0.45" />
                      <circle cx="238" cy="119" r="5" fill="#2563eb" className="animate-pulse-glow" />
                      <circle cx="322" cy="119" r="5" fill="#2563eb" className="animate-pulse-glow" />
                    </svg>
                    <div className="absolute left-3 top-3 rounded-lg border border-blue-200 bg-white/90 px-3 py-2 shadow-sm"><p className="text-[9px] font-bold uppercase tracking-[0.14em] text-sky-700">Macro placement</p><div className="mt-1 h-2 w-20 rounded-full bg-blue-100"><span className="block h-full w-3/4 rounded-full bg-blue-400" /></div></div>
                    <div className="absolute right-3 top-3 rounded-lg border border-blue-200 bg-white/90 px-3 py-2 text-right shadow-sm"><p className="text-[9px] font-bold uppercase tracking-[0.14em] text-sky-700">Power grid</p><p className="mt-1 text-[10px] font-semibold text-slate-600">IR drop within target</p></div>
                    <div className="absolute bottom-3 left-3 rounded-lg border border-blue-200 bg-white/90 px-3 py-2 shadow-sm"><p className="text-[9px] font-bold uppercase tracking-[0.14em] text-sky-700">Placement</p><p className="mt-1 text-[10px] font-semibold text-slate-600">98.4% utilization</p></div>
                    <div className="absolute bottom-3 right-3 rounded-lg border border-blue-200 bg-white/90 px-3 py-2 text-right shadow-sm"><p className="text-[9px] font-bold uppercase tracking-[0.14em] text-sky-700">Timing closure</p><p className="mt-1 text-[10px] font-semibold text-emerald-600">Positive slack</p></div>
                    <div className="absolute left-1/2 top-1/2 flex h-16 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg border border-blue-300 bg-gradient-to-br from-blue-600 to-sky-500 text-center text-[9px] font-bold uppercase tracking-[0.15em] text-white shadow-[0_10px_24px_rgba(37,99,235,0.3)]">Core<br />layout</div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-500"><span><i className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-blue-500" />Critical route</span><span><i className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-sky-200" />Power network</span><span><i className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />Closure status</span></div>
                </div>
              </div>
              <div className="grid gap-2.5 sm:grid-cols-2 sm:gap-3 lg:pt-1">
                {capabilities.map((item, index) => { const Icon = capabilityIcons[index]; return <div key={item} className="group flex min-h-[76px] items-center gap-3 rounded-xl border border-sky-100/90 bg-white/90 px-4 py-3 shadow-[0_14px_30px_-26px_rgba(15,43,93,0.6)] transition-all duration-200 hover:-translate-y-0.5 hover:border-sky-300 hover:bg-white hover:shadow-[0_18px_34px_-24px_rgba(37,99,235,0.3)]"><span className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-[#edf4ff] text-sky-600 transition-colors group-hover:bg-sky-100 group-hover:text-sky-700" aria-hidden="true"><Icon className="h-[19px] w-[19px]" strokeWidth={1.6} /></span><p className="text-[13px] font-medium leading-5 text-[#172d54] sm:text-sm">{item}</p></div> })}
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[linear-gradient(135deg,#07142d_0%,#0c2348_54%,#071326_100%)] py-16 text-white sm:py-20 lg:py-24">
          <div className="absolute inset-0 opacity-25" aria-hidden="true" style={{ backgroundImage: 'linear-gradient(rgba(125,211,252,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(125,211,252,0.12) 1px, transparent 1px)', backgroundSize: '42px 42px' }} />
          <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
            <div className="max-w-[700px]">
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">Physical design methodology</div>
              <h2 className="mt-3 max-w-[680px] text-3xl font-semibold leading-[1.05] tracking-[-0.05em] text-white sm:text-4xl lg:text-5xl">A measured path from netlist to manufacturable layout.</h2>
              <p className="mt-5 max-w-[620px] text-base leading-7 text-slate-300">Every implementation decision is shaped by the interaction between timing, power, area, signal integrity, and physical reliability.</p>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {principles.map(({ heading, text, icon: Icon }) => (
                  <div key={heading} className="relative overflow-hidden rounded-2xl border border-sky-300/20 bg-white/[0.06] p-4 backdrop-blur-sm transition-colors hover:border-cyan-300/45 hover:bg-white/[0.1]">
                  <div className="flex items-center justify-end">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-200"><Icon className="h-5 w-5" /></span>
                  </div>
                  <h3 className="mt-4 font-sans text-lg font-semibold text-white">{heading}</h3>
                  <p className="mt-2 text-[15px] leading-7 text-slate-300">{text}</p>
                  <div className="mt-4 h-px w-14 bg-cyan-300/70" />
                </div>
              ))}
            </div>

            <div className="mt-10 border-t border-sky-300/20 pt-6">
              <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">Deliverables</div>
                </div>
              </div>
              <div className="mt-6 grid gap-x-12 gap-y-3 md:grid-cols-2">
                {deliverables.map((item) => (
                  <div key={item} className="flex min-h-[52px] items-center gap-3 border-b border-sky-300/15 py-3">
                    <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full border border-cyan-300/35 text-xs text-cyan-300">-&gt;</span>
                    <p className="text-base leading-6 text-slate-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f7faff] py-14 sm:py-16 lg:py-20"><div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8"><div className="relative overflow-hidden rounded-[28px] bg-[linear-gradient(110deg,#dbeafe_0%,#f8fbff_48%,#bfdbfe_100%)] p-7 shadow-[0_26px_70px_rgba(37,99,235,0.12)] sm:p-10"><div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between"><div><div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-700">Let us collaborate</div><h2 className="mt-4 max-w-[620px] text-3xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-4xl">Need a tape-out-ready physical implementation?</h2></div><Link href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_35px_rgba(15,23,42,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-sky-700">Contact us<ArrowRight className="h-4 w-4" aria-hidden="true" /></Link></div></div></div></section>
      </main>
      <SiteFooter />
    </>
  )
}