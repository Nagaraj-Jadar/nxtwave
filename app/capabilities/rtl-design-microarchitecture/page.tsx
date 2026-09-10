import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Cpu, Layers3, ShieldCheck } from 'lucide-react'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export const metadata: Metadata = {
  title: 'RTL Design & Microarchitecture',
  description: 'Transforming architecture into high-quality, implementation-ready RTL.',
}

const capabilities = [
  'System and subsystem architecture definition',
  'Clock and reset architecture',
  'Microarchitecture development',
  'Low-power RTL implementation',
  'Verilog and SystemVerilog RTL implementation',
  'Power, Performance, and Area (PPA) optimization',
  'IP and subsystem development',
  'Lint and structural quality analysis',
  'Control and datapath design',
  'CDC/RDC-aware design practices',
  'FSM and pipeline architecture',
  'Synthesis-ready RTL delivery',
  'Memory and cache subsystem integration',
  'Third-party IP integration and customization',
]

const deliverables = [
  'Architecture and microarchitecture specifications',
  'Design constraints and implementation guidelines',
  'High-quality, synthesizable RTL',
  'Lint and structural quality reports',
  'Interface and integration documentation',
  'Integration-ready design packages',
]

export default function RtlDesignPage() {
  return (
    <>
      <SiteHeader />

      <main className="bg-[#f4f8ff] text-slate-900">
        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_15%_10%,rgba(56,189,248,0.24),transparent_22%),radial-gradient(circle_at_85%_35%,rgba(37,99,235,0.26),transparent_28%),linear-gradient(135deg,#07142d_0%,#0b1f42_48%,#081326_100%)] text-white">
          <div className="absolute inset-0 opacity-40" aria-hidden="true" style={{
            backgroundImage:
              'linear-gradient(rgba(125,211,252,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(125,211,252,0.10) 1px, transparent 1px)',
            backgroundSize: '38px 38px',
          }} />

          <div className="relative mx-auto max-w-[1320px] px-4 py-10 sm:px-6 lg:px-8 lg:min-h-[calc(100svh-76px)] lg:py-6">
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-sky-300/30 bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-sky-200 shadow-[0_18px_40px_rgba(0,0,0,0.18)] backdrop-blur-sm lg:mb-3">
              <span className="h-2 w-2 rounded-full bg-cyan-300" aria-hidden="true" />
              Services
            </div>

            <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-5">
              <div className="relative z-10 pt-2">
                <h1 className="max-w-[620px] text-4xl font-semibold leading-[0.94] tracking-[-0.07em] text-white sm:text-5xl lg:text-[4.2rem]">
                  RTL Design &amp;<br />Microarchitecture
                </h1>

                <p className="mt-4 max-w-[580px] text-xl font-medium leading-relaxed text-sky-100 sm:text-2xl lg:text-[1.65rem]">
                  Transforming architecture into high-quality, implementation-ready RTL.
                </p>

                <div className="mt-5 space-y-3 text-[15px] leading-7 text-slate-300">
                  <p className="text-justify">
                    Our RTL Design and Microarchitecture practice is dedicated to translating system-level requirements into
                    scalable, efficient, and resilient hardware implementations. We partner closely with clients from
                    architectural definition through RTL development, ensuring that functionality, performance, power, and
                    area objectives are addressed from the earliest stages of the design cycle.
                  </p>
                  <p className="text-justify">
                    Our engineers craft clean, reusable, verification-friendly RTL using industry-standard Verilog and
                    SystemVerilog methodologies, with a relentless focus on design quality, modularity, maintainability,
                    and seamless integration across verification, DFT, synthesis, and physical implementation flows.
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_35px_rgba(15,23,42,0.22)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-sky-700">
                    Talk to our team
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <span className="rounded-full border border-sky-300/30 bg-white/10 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-sky-200">
                    Architecture → RTL → Signoff
                  </span>
                </div>
              </div>

              <div className="relative flex min-h-[470px] items-center justify-center overflow-visible lg:min-h-[465px]">
                <div className="relative h-[465px] w-full max-w-[620px] [perspective:1100px]">
                  <div className="absolute left-1/2 top-1/2 h-[410px] w-[410px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-300/15 [transform:rotateX(66deg)_rotateZ(-12deg)]" aria-hidden="true" />
                  <div className="absolute left-1/2 top-1/2 h-[315px] w-[315px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/25 border-dashed [transform:rotateX(66deg)_rotateZ(-12deg)]" aria-hidden="true" />
                  <div className="absolute left-1/2 top-1/2 h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/20 blur-[70px]" aria-hidden="true" />

                  <svg className="absolute inset-0 h-full w-full" viewBox="0 0 620 520" fill="none" aria-hidden="true">
                    <defs>
                      <linearGradient id="heroTrace" x1="0" y1="0" x2="1" y2="1">
                        <stop stopColor="#38bdf8" stopOpacity="0" />
                        <stop offset="0.5" stopColor="#67e8f9" />
                        <stop offset="1" stopColor="#2563eb" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path d="M40 410H160L231 350" stroke="url(#heroTrace)" strokeWidth="2" className="animate-trace-flow" />
                    <path d="M580 400H463L395 350" stroke="url(#heroTrace)" strokeWidth="2" className="animate-trace-flow" />
                    <path d="M95 484H196L250 407" stroke="url(#heroTrace)" strokeWidth="2" className="animate-trace-flow" />
                    <path d="M528 488H430L379 407" stroke="url(#heroTrace)" strokeWidth="2" className="animate-trace-flow" />
                    <path d="M205 112L277 211M421 112L347 211M151 263L247 302M469 263L373 302" stroke="#67e8f9" strokeOpacity="0.3" />
                    <g fill="#a5f3fc">
                      <circle className="animate-pulse-glow" cx="205" cy="112" r="3" />
                      <circle className="animate-pulse-glow" cx="421" cy="112" r="3" />
                      <circle className="animate-pulse-glow" cx="151" cy="263" r="3" />
                      <circle className="animate-pulse-glow" cx="469" cy="263" r="3" />
                    </g>
                  </svg>

                  <div className="absolute left-[4%] top-[5%] w-[43%] border-l-2 border-cyan-300/70 pl-3 text-left">
                    <div className="text-[9px] font-semibold uppercase tracking-[0.22em] text-cyan-200">01 / System architecture</div>
                    <div className="mt-2 text-[10px] leading-5 text-slate-400">CPU&nbsp;&nbsp; Memory&nbsp;&nbsp; I/O<br />Interconnect definition</div>
                  </div>

                  <div className="absolute right-[2%] top-[9%] w-[42%] border-r-2 border-blue-300/70 pr-3 text-right">
                    <div className="text-[9px] font-semibold uppercase tracking-[0.22em] text-blue-200">02 / Microarchitecture</div>
                    <div className="mt-2 text-[10px] leading-5 text-slate-400">Fetch · Decode · Execute<br />Memory · Writeback</div>
                  </div>

                  <div className="absolute left-[1%] top-[44%] w-[42%] border-l-2 border-sky-300/70 pl-3 text-left">
                    <div className="text-[9px] font-semibold uppercase tracking-[0.22em] text-sky-200">03 / RTL design</div>
                    <div className="mt-2 font-mono text-[9px] leading-5 text-slate-400">always_ff @(posedge clk)<br /><span className="text-cyan-300">ready</span> = valid &amp;&amp; !stall</div>
                  </div>

                  <div className="absolute right-[0%] top-[47%] w-[43%] border-r-2 border-emerald-300/70 pr-3 text-right">
                    <div className="text-[9px] font-semibold uppercase tracking-[0.22em] text-emerald-200">04 / Verification</div>
                    <div className="mt-2 text-[10px] leading-5 text-slate-400">Clock · Reset · CDC · DFT<br />Synthesis · Physical implementation</div>
                  </div>

                  <div className="float-card absolute bottom-[17%] left-1/2 h-[148px] w-[260px] -translate-x-1/2 [transform:translateX(-50%)_rotateX(58deg)_rotateZ(-8deg)]">
                    <div className="absolute inset-0 translate-y-6 skew-x-[-8deg] rounded-[15px] border border-slate-600/60 bg-[#020817] shadow-[0_35px_50px_rgba(0,0,0,0.6)]" />
                    <div className="absolute inset-0 rounded-[15px] border border-cyan-200/70 bg-[linear-gradient(135deg,#314866_0%,#0a1428_58%,#1c3555_100%)] shadow-[inset_0_0_25px_rgba(96,165,250,0.24),0_0_30px_rgba(56,189,248,0.2)]">
                      <div className="absolute inset-4 rounded-[9px] border border-sky-300/30 bg-[#071426]">
                        <div className="absolute inset-4 grid grid-cols-4 grid-rows-3 gap-2 opacity-70">
                          {Array.from({ length: 12 }).map((_, index) => <span key={index} className="border border-sky-300/30 bg-sky-300/10" />)}
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center text-center font-mono text-[10px] uppercase tracking-[0.24em] text-sky-100">NXTWAVE<br /><span className="text-[7px] tracking-[0.36em] text-cyan-300">silicon core</span></div>
                      </div>
                    </div>
                    <div className="absolute -bottom-7 left-2 right-2 grid grid-cols-12 gap-2">
                      {Array.from({ length: 12 }).map((_, index) => <span key={index} className="h-5 rounded-b-sm border border-cyan-300/50 bg-gradient-to-b from-slate-400 to-slate-800" />)}
                    </div>
                  </div>

                  <div className="absolute bottom-[4%] left-1/2 -translate-x-1/2 text-center text-[9px] font-semibold uppercase tracking-[0.28em] text-sky-300/80">
                    Architecture <span className="px-2 text-cyan-300">→</span> Silicon
                  </div>
                </div>

                {/* Legacy card composition removed; the chip visualization above owns the hero visual. */}
                <div className="hidden">
                <div className="relative h-[560px] w-full max-w-[630px] [perspective:1200px]">
                  <svg className="absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 640 560" fill="none" aria-hidden="true">
                    <defs>
                      <linearGradient id="pcbTrace" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0" stopColor="#60a5fa" stopOpacity="0.15" />
                        <stop offset="0.5" stopColor="#67e8f9" stopOpacity="0.9" />
                        <stop offset="1" stopColor="#2563eb" stopOpacity="0.15" />
                      </linearGradient>
                      <radialGradient id="chipGlow">
                        <stop stopColor="#38bdf8" stopOpacity="0.38" />
                        <stop offset="1" stopColor="#2563eb" stopOpacity="0" />
                      </radialGradient>
                      <filter id="softGlow" x="-80%" y="-80%" width="260%" height="260%">
                        <feGaussianBlur stdDeviation="4" result="blur" />
                        <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                      </filter>
                    </defs>

                    <ellipse cx="370" cy="407" rx="205" ry="100" fill="url(#chipGlow)" />

                    <g opacity="0.5" stroke="url(#pcbTrace)" strokeWidth="1.5">
                      <path className="animate-trace-flow" d="M35 476H160L225 414" />
                      <path className="animate-trace-flow" d="M8 426H126L215 402" />
                      <path className="animate-trace-flow" d="M70 530H196L248 450" />
                      <path className="animate-trace-flow" d="M608 450H525L472 421" />
                      <path className="animate-trace-flow" d="M630 503H526L471 445" />
                      <path className="animate-trace-flow" d="M558 388H496L463 400" />
                    </g>

                    <g stroke="#67e8f9" strokeWidth="1" opacity="0.35">
                      <path d="M222 150L302 238" /><path d="M414 151L374 239" />
                      <path d="M230 246L302 300" /><path d="M420 246L383 300" />
                      <path d="M263 333L315 366" /><path d="M400 333L373 365" />
                    </g>

                    <g fill="#a5f3fc" filter="url(#softGlow)">
                      <circle className="animate-pulse-glow" cx="225" cy="150" r="3" />
                      <circle className="animate-pulse-glow" cx="414" cy="151" r="3" />
                      <circle className="animate-pulse-glow" cx="230" cy="246" r="3" />
                      <circle className="animate-pulse-glow" cx="420" cy="246" r="3" />
                      <circle className="animate-pulse-glow" cx="263" cy="333" r="3" />
                      <circle className="animate-pulse-glow" cx="400" cy="333" r="3" />
                    </g>
                  </svg>

                  <div className="absolute left-[10%] top-[3%] w-[78%] rotate-[-5deg] border border-sky-300/40 bg-[#102b55]/80 px-4 py-3 shadow-[0_18px_35px_rgba(0,0,0,0.22)] backdrop-blur-sm [clip-path:polygon(6%_0,100%_8%,94%_100%,0_88%)]">
                    <div className="flex items-center justify-between text-[9px] font-semibold uppercase tracking-[0.22em] text-sky-200">
                      <span>01 / System Architecture</span><span className="text-cyan-300">● Live</span>
                    </div>
                    <div className="mt-3 grid grid-cols-4 gap-2 text-center text-[9px] text-slate-300">
                      {['CPU', 'Memory', 'I/O', 'Interconnect'].map((item) => <span key={item} className="border border-sky-300/25 bg-sky-200/10 px-2 py-2">{item}</span>)}
                    </div>
                  </div>

                  <div className="absolute left-[8%] top-[20%] w-[82%] rotate-[4deg] border border-blue-300/45 bg-[#0d2348]/90 px-4 py-3 shadow-[0_18px_35px_rgba(0,0,0,0.25)] backdrop-blur-sm [clip-path:polygon(0_8%,94%_0,100%_88%,6%_100%)]">
                    <div className="flex items-center justify-between text-[9px] font-semibold uppercase tracking-[0.22em] text-blue-100">
                      <span>02 / Microarchitecture</span><span className="text-blue-300">Pipeline</span>
                    </div>
                    <div className="mt-3 grid grid-cols-5 gap-1.5 text-center text-[8px] text-slate-300">
                      {['Fetch', 'Decode', 'Execute', 'Memory', 'Writeback'].map((item) => <span key={item} className="border border-blue-300/25 bg-blue-200/10 px-1 py-2">{item}</span>)}
                    </div>
                  </div>

                  <div className="absolute left-[13%] top-[37%] w-[75%] rotate-[-3deg] border border-cyan-300/45 bg-[#102a50]/95 px-4 py-3 shadow-[0_20px_40px_rgba(0,0,0,0.25)] backdrop-blur-sm [clip-path:polygon(5%_0,100%_12%,94%_100%,0_88%)]">
                    <div className="flex items-center justify-between text-[9px] font-semibold uppercase tracking-[0.22em] text-cyan-100">
                      <span>03 / RTL Design</span><span className="text-cyan-300">Synthesizable</span>
                    </div>
                    <div className="mt-2 font-mono text-[8px] leading-4 text-sky-200/80">
                      <span className="text-fuchsia-300">always_ff</span> @(posedge clk) {'{'} state &lt;= next_state; {'}'}<br />
                      <span className="text-fuchsia-300">assign</span> ready = valid &amp;&amp; !stall;<br />
                    </div>
                  </div>

                  <div className="absolute left-[17%] top-[53%] w-[70%] rotate-[5deg] border border-sky-200/35 bg-[#0b1e3d]/95 px-4 py-3 shadow-[0_22px_45px_rgba(0,0,0,0.28)] backdrop-blur-sm [clip-path:polygon(0_10%,94%_0,100%_88%,6%_100%)]">
                    <div className="flex items-center justify-between text-[9px] font-semibold uppercase tracking-[0.22em] text-sky-100">
                      <span>04 / Verification &amp; Signoff</span><span className="text-emerald-300">Passing</span>
                    </div>
                    <svg className="mt-2 h-8 w-full" viewBox="0 0 300 32" preserveAspectRatio="none">
                      <path className="animate-trace-flow" d="M0 22H18V8H38V22H58V8H78V22H103V14H126V22H146V8H166V22H190V14H210V22H230V8H250V22H274V14H300" stroke="#67e8f9" strokeWidth="2" />
                    </svg>
                    <div className="mt-1 flex justify-between text-[8px] uppercase tracking-[0.18em] text-slate-400"><span>Clock</span><span>CDC / DFT</span><span>Physical implementation</span></div>
                  </div>

                  <div className="float-card absolute bottom-[7%] left-[22%] h-[150px] w-[270px] [transform:rotateX(58deg)_rotateZ(-7deg)]">
                    <div className="absolute inset-0 translate-y-5 skew-x-[-8deg] rounded-[16px] border border-slate-500/50 bg-[#030a18] shadow-[0_35px_45px_rgba(0,0,0,0.55)]" />
                    <div className="absolute inset-0 rounded-[16px] border border-cyan-200/60 bg-[linear-gradient(135deg,#273b5b_0%,#0a1428_55%,#182b48_100%)] shadow-[inset_0_0_22px_rgba(96,165,250,0.22),0_0_25px_rgba(56,189,248,0.22)]">
                      <div className="absolute inset-[15px] rounded-[10px] border border-sky-300/25 bg-[linear-gradient(135deg,#122746,#071426)]">
                        <div className="absolute inset-5 grid grid-cols-4 grid-rows-3 gap-2 opacity-70">
                          {Array.from({ length: 12 }).map((_, index) => <span key={index} className="border border-sky-300/30 bg-sky-300/10" />)}
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center text-center font-mono text-[10px] uppercase tracking-[0.25em] text-sky-100">NXTWAVE<br /><span className="text-[7px] tracking-[0.38em] text-cyan-300">silicon core</span></div>
                      </div>
                    </div>
                    <div className="absolute -bottom-7 left-3 right-3 grid grid-cols-12 gap-2">
                      {Array.from({ length: 12 }).map((_, index) => <span key={index} className="h-5 rounded-b-sm border border-cyan-300/50 bg-gradient-to-b from-slate-400 to-slate-800 shadow-[0_3px_5px_rgba(0,0,0,0.4)]" />)}
                    </div>
                  </div>

                  <div className="absolute bottom-[2%] right-[1%] text-right text-[8px] font-semibold uppercase tracking-[0.25em] text-sky-300/70">
                    <div>Architecture → Silicon</div>
                    <div className="mt-1 h-px w-28 bg-gradient-to-r from-transparent to-sky-300/70" />
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#f7faff] py-16 sm:py-20 lg:py-24">
          <div className="absolute right-[-8%] top-16 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl" aria-hidden="true" />
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
            <div className="relative mb-12 flex flex-col justify-between gap-5 border-b border-sky-200 pb-8 md:flex-row md:items-end">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-700">Core capabilities</div>
                <h2 className="mt-4 max-w-[780px] text-3xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-4xl lg:text-[3rem]">
                Precision engineering across architecture, RTL, and implementation readiness.
                </h2>
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-sky-600">14 engineering disciplines</div>
            </div>

            <div className="relative grid gap-x-10 md:grid-cols-2">
              {capabilities.map((item, index) => (
                <div key={item} className="group flex min-h-[76px] items-start gap-4 border-b border-sky-100 py-5 transition-colors hover:border-sky-400">
                  <span className="font-mono text-[11px] font-semibold text-sky-500">{String(index + 1).padStart(2, '0')}</span>
                  <p className="text-[15px] leading-7 text-slate-800 transition-colors group-hover:text-sky-800">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[linear-gradient(135deg,#07142d_0%,#0c2348_54%,#071326_100%)] py-16 text-white sm:py-20 lg:py-24">
          <div className="absolute inset-0 opacity-25" aria-hidden="true" style={{ backgroundImage: 'linear-gradient(rgba(125,211,252,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(125,211,252,0.12) 1px, transparent 1px)', backgroundSize: '42px 42px' }} />
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
            <div className="relative grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-300">Design principles</div>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
                  A disciplined path from concept to silicon execution.
                </h2>
                <div className="mt-8 h-px w-24 bg-cyan-300/70" />
                <p className="mt-6 max-w-[420px] text-[15px] leading-7 text-slate-300">From system intent to implementation, every decision is shaped for clarity, verification, and downstream silicon reality.</p>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4 border-b border-sky-300/20 pb-5">
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-300/30 bg-cyan-300/10 text-cyan-200">
                      <Cpu className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <p className="text-justify text-[15px] leading-7 text-slate-300">We translate microarchitectural intent into implementation-aware RTL that balances performance, power, and area without sacrificing clarity or reuse.</p>
                </div>

                <div className="flex gap-4 border-b border-sky-300/20 pb-5">
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-300/30 bg-cyan-300/10 text-cyan-200">
                      <Layers3 className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <p className="text-justify text-[15px] leading-7 text-slate-300">Our approach is modular and verification-friendly, enabling clean handoff across the design stack while reducing integration risk and iteration cycles.</p>
                </div>

                <div className="flex gap-4 border-b border-sky-300/20 pb-5">
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-300/30 bg-cyan-300/10 text-cyan-200">
                      <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <p className="text-justify text-[15px] leading-7 text-slate-300">Each design is shaped to be synthesis-ready, lint-clean, infrastructure-aware, and aligned with downstream physical implementation realities.</p>
                </div>
              </div>

              <div className="lg:col-span-2 border-t border-sky-300/20 pt-8">
                <div className="flex items-center justify-between">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-300">Deliverables</div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-300">Ready to ship</div>
                </div>

                <div className="mt-6 grid gap-x-10 md:grid-cols-2">
                  {deliverables.map((item) => (
                    <div key={item} className="flex items-start gap-3 border-b border-sky-300/15 py-4">
                      <span className="mt-1 text-cyan-300">↳</span>
                      <p className="text-[15px] leading-7 text-slate-200">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f7faff] py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-[28px] bg-[linear-gradient(110deg,#dbeafe_0%,#f8fbff_48%,#bfdbfe_100%)] p-7 shadow-[0_26px_70px_rgba(37,99,235,0.12)] sm:p-10">
              <div className="absolute right-[-5%] top-[-65%] h-[260px] w-[260px] rounded-full border border-sky-500/20" aria-hidden="true" />
              <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-700">Let’s collaborate</div>
                  <h2 className="mt-4 max-w-[620px] text-3xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-4xl">
                    Need a stronger RTL foundation for your next silicon design?
                  </h2>
                </div>
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_35px_rgba(15,23,42,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-sky-700">
                  Contact us
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
