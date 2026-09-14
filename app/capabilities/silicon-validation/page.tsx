import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  Activity,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  CircuitBoard,
  Gauge,
  GitBranch,
  Layers3,
  Radio,
  ScanLine,
  ShieldCheck,
  SlidersHorizontal,
  TestTube2,
  Workflow,
  Zap,
} from 'lucide-react'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export const metadata: Metadata = {
  title: 'Silicon Validation',
  description: 'Ensuring silicon performs with confidence through systematic testing and characterization.',
}

const capabilities = [
  'Silicon Bring-Up',
  'Functional & Interface Validation',
  'Performance & Power Characterization',
  'Protocol & Compliance Testing',
  'Reliability & Stress Testing',
  'Silicon Debug & Root-Cause Analysis',
  'Validation Automation',
]

const capabilityIcons = [
  Zap,
  CircuitBoard,
  BarChart3,
  GitBranch,
  ShieldCheck,
  ScanLine,
  Workflow,
]

const deliverables = [
  'Validation Test Plans',
  'Bring-Up & Test Procedures',
  'Test Software & Automation',
  'Characterization Reports',
  'Performance & Power Reports',
  'Validation & Debug Reports',
  'Reliability & Compliance Reports',
]

const validationStages = [
  { label: 'Bring-up', detail: 'First power-on', icon: Zap },
  { label: 'Characterize', detail: 'Performance & power', icon: BarChart3 },
  { label: 'Validate', detail: 'Function & interface', icon: CheckCircle2 },
]

export default function SiliconValidationPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[#f4f8ff] text-slate-900">
        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_15%_18%,rgba(56,189,248,0.22),transparent_25%),radial-gradient(circle_at_84%_32%,rgba(37,99,235,0.25),transparent_30%),linear-gradient(135deg,#07142d_0%,#0b1f42_48%,#081326_100%)] text-white">
          <div className="absolute inset-0 opacity-40" aria-hidden="true" style={{ backgroundImage: 'linear-gradient(rgba(125,211,252,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(125,211,252,0.10) 1px, transparent 1px)', backgroundSize: '38px 38px' }} />
          <div className="relative mx-auto max-w-[1320px] px-4 py-10 sm:px-6 lg:min-h-[calc(100svh-88px)] lg:px-8 lg:py-6">
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-sky-300/30 bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-sky-200 shadow-[0_18px_40px_rgba(0,0,0,0.18)] backdrop-blur-sm lg:mb-3"><span className="h-2 w-2 rounded-full bg-cyan-300" aria-hidden="true" />Services</div>
            <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-5">
              <div className="relative z-10 pt-2">
                <h1 className="max-w-[650px] text-4xl font-semibold leading-[0.94] tracking-[-0.07em] text-white sm:text-5xl lg:text-[4.2rem]">Silicon Validation</h1>
                <p className="mt-4 max-w-[610px] text-xl font-medium leading-relaxed text-sky-100 sm:text-2xl lg:text-[1.65rem]">Ensuring Silicon Performs with Confidence</p>
                <div className="mt-6 max-w-[570px] space-y-3 text-[15px] leading-[1.8] text-slate-300">
                  <p style={{ textAlign: 'justify', textJustify: 'inter-word' }}>We validate functionality, interfaces, performance, power, and reliability to ensure silicon meets its intended requirements. Through systematic testing, characterization, and analysis, we help identify issues early and deliver robust, reliable silicon.</p>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-3"><Link href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_35px_rgba(15,23,42,0.22)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-sky-700">Talk to our team<ArrowRight className="h-4 w-4" aria-hidden="true" /></Link><span className="rounded-full border border-sky-300/30 bg-white/10 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-sky-200">Silicon -&gt; Confidence</span></div>
              </div>

              <div className="relative flex min-h-[350px] items-center justify-center overflow-visible lg:min-h-[465px]" aria-label="Silicon validation bring-up and characterization visualization">
                <div className="relative h-[350px] w-[130%] max-w-[620px] scale-[0.74] lg:h-[465px] lg:w-full lg:scale-100">
                  <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-300/15 [transform:rotateX(68deg)_rotateZ(-12deg)]" aria-hidden="true" />
                  <div className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/25 border-dashed [transform:rotateX(68deg)_rotateZ(-12deg)]" aria-hidden="true" />
                  <svg className="absolute inset-0 h-full w-full" viewBox="0 0 620 520" fill="none" aria-hidden="true">
                    <defs><linearGradient id="siliconTrace" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#38bdf8" stopOpacity="0" /><stop offset="0.5" stopColor="#67e8f9" /><stop offset="1" stopColor="#2563eb" stopOpacity="0" /></linearGradient></defs>
                    <path d="M28 390H142L218 330M592 390H478L402 330M68 452H180L238 370M552 452H440L382 370" stroke="url(#siliconTrace)" strokeWidth="2" className="animate-trace-flow" />
                    <path d="M170 128L250 220M450 128L370 220M120 270L228 300M500 270L392 300" stroke="#67e8f9" strokeOpacity="0.28" />
                    <path d="M92 190H170M450 190H528M100 270H180M440 270H520" stroke="#67e8f9" strokeWidth="2" strokeDasharray="6 9" className="animate-trace-flow" />
                    <g fill="#a5f3fc"><circle className="animate-pulse-glow" cx="170" cy="128" r="3" /><circle className="animate-pulse-glow" cx="450" cy="128" r="3" /><circle className="animate-pulse-glow" cx="120" cy="270" r="3" /><circle className="animate-pulse-glow" cx="500" cy="270" r="3" /></g>
                  </svg>
                  <div className="absolute left-1/2 top-[8%] w-[230px] -translate-x-1/2 rounded-xl border border-cyan-300/35 bg-[#102b55]/75 px-4 py-3 text-center shadow-[0_18px_35px_rgba(0,0,0,0.22)] backdrop-blur-sm"><div className="flex items-center justify-center gap-2 text-[9px] font-semibold uppercase tracking-[0.22em] text-cyan-200"><TestTube2 className="h-3.5 w-3.5" /> Bring-up telemetry</div><div className="mt-3 flex items-end justify-center gap-1.5">{[18, 28, 22, 34, 27, 42, 36, 48].map((height, index) => <span key={index} className="w-2 rounded-t-sm bg-cyan-300/75" style={{ height }} />)}</div></div>
                  <div className="absolute left-1/2 top-[31%] h-[178px] w-[276px] -translate-x-1/2 rounded-2xl border border-cyan-200/70 bg-[linear-gradient(135deg,#314866_0%,#0a1428_58%,#1c3555_100%)] p-4 shadow-[inset_0_0_25px_rgba(96,165,250,0.24),0_0_30px_rgba(56,189,248,0.2)]"><div className="h-full rounded-xl border border-sky-300/30 bg-[#071426] p-3"><div className="flex items-center justify-between text-[9px] font-mono uppercase tracking-[0.2em] text-sky-200"><span>SILICON CORE</span><CheckCircle2 className="h-4 w-4 text-emerald-300" /></div><div className="mt-4 grid grid-cols-3 gap-2 text-center text-[8px] uppercase tracking-[0.12em] text-slate-300">{['Bring-up', 'Function', 'Interface', 'Power', 'Stress', 'Debug'].map((item) => <span key={item} className="border border-sky-300/25 bg-sky-200/10 px-1 py-2">{item}</span>)}</div></div></div>
                  <div className="absolute bottom-[12%] left-1/2 w-[300px] -translate-x-1/2 rounded-xl border border-blue-300/35 bg-[#0d2348]/85 px-4 py-3 shadow-[0_18px_35px_rgba(0,0,0,0.24)] backdrop-blur-sm"><div className="flex items-center justify-between text-[9px] font-semibold uppercase tracking-[0.22em] text-blue-100"><span>Validation status</span><span className="text-emerald-300">Passing</span></div><svg className="mt-3 h-9 w-full" viewBox="0 0 300 36" preserveAspectRatio="none"><path d="M0 25H18V15H42V25H68V10H92V25H116V18H142V25H166V8H194V25H220V13H248V25H274V16H300" stroke="#67e8f9" strokeWidth="2" className="animate-trace-flow" /></svg><div className="mt-1 flex justify-between text-[8px] uppercase tracking-[0.15em] text-slate-400"><span>Function</span><span>Power</span><span>Reliability</span></div></div>
                  <div className="absolute bottom-[3%] left-1/2 -translate-x-1/2 text-center text-[9px] font-semibold uppercase tracking-[0.28em] text-sky-300/80">Prove <span className="px-2 text-cyan-300">-&gt;</span> Confidence</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#f4f8ff] py-14 sm:py-16 lg:py-20">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.035]" style={{ backgroundImage: 'linear-gradient(#0f2b5d 1px, transparent 1px), linear-gradient(90deg, #0f2b5d 1px, transparent 1px)', backgroundSize: '52px 52px' }} />
          <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8"><div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12"><div><p className="text-[11px] font-bold uppercase tracking-[0.26em] text-sky-700">Silicon validation services</p><h2 className="mt-3 max-w-[560px] text-[3rem] font-semibold leading-[0.94] tracking-[-0.06em] text-slate-950 sm:text-[4rem] lg:text-[4.5rem]">Our <span className="text-sky-600">Capabilities</span></h2><p className="mt-5 max-w-[560px] font-serif text-[1.35rem] font-semibold leading-tight text-slate-900 sm:text-[1.55rem]">Prove the silicon. Build the confidence.</p><div className="relative mx-auto mt-3 aspect-square w-full max-w-[500px]"><Image src="/silicon-validation.png" alt="Silicon validation bring-up, characterization, and debug illustration" fill sizes="(max-width: 1024px) 100vw, 42vw" className="object-contain object-center transition-transform duration-700 hover:-translate-y-1" /></div></div><div className="grid self-center gap-2.5 sm:grid-cols-2 sm:gap-3">{capabilities.map((item, index) => { const Icon = capabilityIcons[index]; return <div key={item} className="group flex min-h-[76px] items-center gap-3 rounded-xl border border-sky-100/90 bg-white/90 px-4 py-3 shadow-[0_14px_30px_-26px_rgba(15,43,93,0.6)] transition-all duration-200 hover:-translate-y-0.5 hover:border-sky-300 hover:bg-white hover:shadow-[0_18px_34px_-24px_rgba(37,99,235,0.3)]"><span className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-[#edf4ff] text-sky-600 transition-colors group-hover:bg-sky-100 group-hover:text-sky-700" aria-hidden="true"><Icon className="h-[19px] w-[19px]" strokeWidth={1.6} /></span><p className="text-[13px] font-medium leading-5 text-[#172d54] sm:text-sm">{item}</p></div> })}</div></div></div>
        </section>

        <section className="relative overflow-hidden bg-[linear-gradient(135deg,#07142d_0%,#0c2348_54%,#071326_100%)] py-16 text-white sm:py-20 lg:py-24"><div className="absolute inset-0 opacity-25" aria-hidden="true" style={{ backgroundImage: 'linear-gradient(rgba(125,211,252,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(125,211,252,0.12) 1px, transparent 1px)', backgroundSize: '42px 42px' }} /><div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8"><div className="max-w-[700px]"><div className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">Silicon validation</div><h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.05em] text-white sm:text-4xl lg:text-5xl">Prove the Silicon. Build the Confidence.</h2></div><div className="mt-10 grid gap-4 lg:grid-cols-3">{validationStages.map(({ label, detail, icon: Icon }) => <div key={label} className="rounded-2xl border border-sky-300/20 bg-white/[0.06] p-4 backdrop-blur-sm"><div className="flex items-center justify-end"><span className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-200"><Icon className="h-5 w-5" /></span></div><h3 className="mt-4 font-sans text-lg font-semibold text-white">{label}</h3><p className="mt-2 text-[15px] leading-7 text-slate-300">{detail}</p></div>)}</div><div className="mt-10 border-t border-sky-300/20 pt-6"><div className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">Deliverables</div><div className="mt-6 grid gap-x-12 gap-y-3 md:grid-cols-2">{deliverables.map((item) => <div key={item} className="flex min-h-[52px] items-center gap-3 border-b border-sky-300/15 py-3"><span className="flex h-6 w-6 flex-none items-center justify-center rounded-full border border-cyan-300/35 text-xs text-cyan-300">-&gt;</span><p className="text-base leading-6 text-slate-200">{item}</p></div>)}</div></div></div></section>

        <section className="bg-[#f7faff] py-14 sm:py-16 lg:py-20"><div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8"><div className="relative overflow-hidden rounded-[28px] bg-[linear-gradient(110deg,#dbeafe_0%,#f8fbff_48%,#bfdbfe_100%)] p-7 shadow-[0_26px_70px_rgba(37,99,235,0.12)] sm:p-10"><div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between"><div><div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-700">Let us collaborate</div><h2 className="mt-4 max-w-[620px] text-3xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-4xl">Need to prove silicon performance with confidence?</h2></div><Link href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_35px_rgba(15,23,42,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-sky-700">Contact us<ArrowRight className="h-4 w-4" aria-hidden="true" /></Link></div></div></div></section>
      </main>
      <SiteFooter />
    </>
  )
}
