import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowDown, ArrowRight, BarChart3, Check, Code2, Cpu, Cuboid, Layers3, Leaf, RefreshCw, ShieldCheck, SlidersHorizontal, Workflow, Zap } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionLabel } from '@/components/section-label'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export const metadata: Metadata = {
  title: 'RTL Design & Microarchitecture',
  description: 'Implementation-ready RTL and microarchitecture engineering for scalable, efficient semiconductor systems.',
}

const capabilities = [
  ['System Architecture', Layers3], ['Clock & Reset Architecture', Workflow], ['Microarchitecture Development', Cuboid],
  ['Low-Power Design', Leaf], ['Verilog / SystemVerilog', Code2], ['PPA Optimization', BarChart3],
  ['IP Development', Cuboid], ['Quality Analysis', ShieldCheck], ['Control & Datapath', SlidersHorizontal], ['CDC / RDC Design', RefreshCw],
] as const

const deliverables = [
  'Architecture and microarchitecture specifications', 'Design constraints and implementation guidelines', 'High-quality, synthesizable RTL',
  'Lint and structural quality reports', 'Interface and integration documentation', 'Integration-ready design packages',
]

const process = [
  ['Architecture', 'Define system requirements', Cpu], ['Microarchitecture', 'Develop and partition design', Workflow],
  ['RTL Development', 'Verilog / SystemVerilog implementation', Code2], ['Quality Analysis', 'Lint, CDC/RDC and structural checks', ShieldCheck],
  ['Verification Integration', 'Seamless integration with verification flows', SlidersHorizontal], ['Synthesis-Ready RTL', 'Optimized and implementation-ready', Check],
] as const

export default function RtlDesignPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden border-b border-border bg-[#f8fbff]">
          <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.98)_0%,rgba(255,255,255,0.9)_40%,rgba(225,237,253,0.4)_100%)]" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-7xl items-center px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
            <div className="relative z-10 py-14 sm:py-20 lg:py-24">
              <div className="mb-7 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-blue"><span className="h-px w-10 bg-brand-blue" /> Services</div>
              <h1 className="max-w-xl text-balance font-serif text-4xl font-semibold leading-[0.98] text-navy sm:text-5xl lg:text-[4.15rem]">RTL Design &amp;<br />Microarchitecture</h1>
              <p className="mt-5 max-w-md text-xl leading-tight text-navy">From System Requirements to<br />Silicon-Ready RTL</p>
              <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground">We translate system-level requirements into scalable, efficient, and resilient hardware implementations, engineered for the complete silicon lifecycle.</p>
              <div className="mt-7 flex flex-wrap gap-3"><Link href="/contact" className="inline-flex items-center gap-2 bg-navy px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-blue">Discuss Your Requirement <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link><Link href="#overview" className="inline-flex items-center gap-2 border border-navy/25 bg-white px-5 py-3 text-sm font-semibold text-navy transition-colors hover:border-brand-blue hover:text-brand-blue">Explore the Flow <ArrowDown className="h-4 w-4" aria-hidden="true" /></Link></div>
              <div className="mt-10 grid max-w-md grid-cols-3 divide-x divide-border"><HeroMetric icon={Workflow} text="Scalable Designs" /><HeroMetric icon={ShieldCheck} text="Optimized PPA" /><HeroMetric icon={Cuboid} text="Integration Ready" /></div>
            </div>
            <div className="relative min-h-[360px] sm:min-h-[500px] lg:min-h-[600px]"><Image src="/hero-chip.png" alt="Layered NXTwave semiconductor design illustration" fill priority sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover object-center mix-blend-multiply" /></div>
          </div>
        </section>

        <section id="overview" className="border-b border-border bg-background">
          <div className="mx-auto grid max-w-7xl lg:grid-cols-[0.94fr_1.06fr]">
            <div className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24"><SectionLabel>Overview</SectionLabel><h2 className="mt-4 max-w-md text-balance font-serif text-3xl font-semibold leading-[1.05] text-navy sm:text-4xl">Engineering RTL for Real-World Impact</h2><p className="mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground">Our RTL Design and Microarchitecture practice is dedicated to translating system-level requirements into scalable, efficient, and resilient hardware implementations. We partner closely with clients from architectural definition through RTL development, ensuring that functionality, performance, power, and area objectives are addressed from the very earliest stages of the design cycle.</p><Link href="#capabilities" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue">Learn More <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link><div className="mt-12 grid grid-cols-3 divide-x divide-border"><Value icon={ShieldCheck} title="Clean & Modular" text="Designs" /><Value icon={Zap} title="Power Efficient" text="Implementation" /><Value icon={Cuboid} title="Built for" text="Integration" /></div></div>
            <div className="relative min-h-[380px] overflow-hidden lg:min-h-0"><Image src="/service-page.jpeg" alt="NXTwave silicon validation and engineering workspace" fill sizes="(max-width: 1024px) 100vw, 52vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-tr from-navy/80 via-navy/10 to-transparent" /><div className="absolute left-7 top-8 text-[10px] font-semibold uppercase leading-[1.8] tracking-[0.16em] text-white/75">Architect<br />Design<br />Implement<br />Validate<br />Scale</div><p className="absolute bottom-7 right-7 max-w-[150px] border-l border-brand-blue pl-3 text-xs leading-relaxed text-white/80">Precision engineering<br />for a smarter tomorrow</p></div>
          </div>
        </section>

        <section id="capabilities" className="bg-[#f5f9ff] py-14 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="flex flex-wrap items-end justify-between gap-5"><div><SectionLabel>Our Capabilities</SectionLabel><h2 className="mt-4 text-balance font-serif text-3xl font-semibold text-navy sm:text-4xl">Focused Capabilities. Real Results.</h2></div><Link href="/capabilities" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue">View All Capabilities <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link></div><div className="mt-9 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">{capabilities.map(([label, Icon]) => <Reveal key={label} className="group flex min-h-[108px] flex-col justify-between border border-[#dbe6f5] bg-white p-4 transition-colors hover:border-brand-blue hover:bg-brand-blue"><Icon className="h-7 w-7 text-brand-blue transition-colors group-hover:text-white" aria-hidden="true" /><div className="flex items-end justify-between gap-2"><span className="text-xs font-semibold leading-snug text-navy transition-colors group-hover:text-white">{label}</span><ArrowRight className="h-3.5 w-3.5 flex-none text-brand-blue transition-colors group-hover:text-white" aria-hidden="true" /></div></Reveal>)}</div></div>
        </section>

        <section className="relative overflow-hidden bg-navy py-14 text-white sm:py-20 lg:py-24"><div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_10%,rgba(47,111,224,0.26),transparent_45%)]" aria-hidden="true" /><div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end"><div><SectionLabel tone="light">RTL Design Flow</SectionLabel><h2 className="mt-4 max-w-md text-balance font-serif text-3xl font-semibold leading-[1.05] sm:text-4xl">From Architecture<br />to Implementation</h2></div><p className="max-w-xl text-sm leading-relaxed text-white/70">We follow a disciplined and collaborative approach to ensure high-quality, implementation-ready RTL that meets your performance, power, and area goals.</p></div><div className="mt-12 grid gap-8 md:grid-cols-6">{process.map(([title, text, Icon], index) => <div key={title} className="relative border-l border-white/20 pl-4 md:border-l-0 md:pl-0"><div className="flex items-center gap-3 md:block"><span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-blue/70 bg-navy-muted text-brand-blue"><Icon className="h-5 w-5" aria-hidden="true" /></span>{index < process.length - 1 && <span className="hidden h-px flex-1 bg-brand-blue/60 md:absolute md:left-12 md:right-[-2rem] md:top-[22px] md:block" />}</div><p className="mt-4 text-sm font-semibold text-white">{title}</p><p className="mt-2 text-xs leading-relaxed text-white/55">{text}</p></div>)}</div></div></section>

        <section className="border-b border-border bg-background py-14 sm:py-20 lg:py-24"><div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8"><div><SectionLabel>Technical Architecture</SectionLabel><h2 className="mt-4 max-w-md text-balance font-serif text-3xl font-semibold leading-[1.05] text-navy sm:text-4xl">Bridging System Requirements to Silicon</h2><p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">We architect, design, and deliver high-quality RTL that integrates seamlessly with downstream verification, DFT, synthesis, and physical implementation flows.</p><ul className="mt-6 space-y-3 text-sm font-medium text-navy">{['Scalable', 'Efficient', 'Reliable'].map((item) => <li key={item} className="flex items-center gap-3"><span className="flex h-4 w-4 items-center justify-center rounded-full bg-brand-blue text-white"><Check className="h-3 w-3" aria-hidden="true" /></span>{item}</li>)}</ul></div><ArchitectureDiagram /></div></section>
        <section className="border-b border-border bg-[#f8fbff] py-14 sm:py-20"><div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8"><div><SectionLabel>Deliverables</SectionLabel><h2 className="mt-4 font-serif text-3xl font-semibold text-navy sm:text-4xl">What You Receive</h2><p className="mt-5 text-sm text-muted-foreground">Well-defined deliverables for seamless integration into your silicon program.</p></div><ol className="grid gap-0 sm:grid-cols-2">{deliverables.map((item, index) => <li key={item} className="flex gap-4 border-b border-border py-3 text-sm text-navy"><span className="font-mono text-xs text-brand-blue">{String(index + 1).padStart(2, '0')}</span>{item}</li>)}</ol></div></section>
        <section className="relative overflow-hidden bg-navy py-14 text-white sm:py-20"><div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,rgba(47,111,224,0.35),transparent_52%)]" aria-hidden="true" /><div className="relative mx-auto flex max-w-7xl flex-col justify-between gap-8 px-4 sm:px-6 md:flex-row md:items-center lg:px-8"><div><SectionLabel tone="light">Let's Collaborate</SectionLabel><h2 className="mt-4 max-w-xl text-balance font-serif text-3xl font-semibold leading-[1.05] sm:text-4xl">Have an RTL or Microarchitecture Requirement?</h2><p className="mt-4 text-sm text-white/70">Let’s discuss your architecture, implementation goals, and silicon requirements.</p><Link href="/contact" className="mt-6 inline-flex items-center gap-2 bg-white px-5 py-3 text-sm font-semibold text-navy transition-colors hover:bg-brand-blue hover:text-white">Talk to Our Engineering Team <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link></div><div className="hidden border-l border-white/25 pl-8 text-xs uppercase leading-[2.2] tracking-[0.14em] text-white/65 md:block">Requirements<br />Architecture<br />RTL<br />Silicon</div></div></section>
      </main>
      <SiteFooter />
    </>
  )
}

function Value({ icon: Icon, title, text }: { icon: typeof Cpu; title: string; text: string }) {
  return <div className="px-3 first:pl-0"><Icon className="h-5 w-5 text-brand-blue" aria-hidden="true" /><h3 className="mt-3 text-xs font-semibold leading-snug text-navy">{title}</h3><p className="text-xs text-muted-foreground">{text}</p></div>
}

function HeroMetric({ icon: Icon, text }: { icon: typeof Cpu; text: string }) {
  return <div className="flex items-center gap-2 px-3 first:pl-0"><Icon className="h-5 w-5 flex-none text-brand-blue" aria-hidden="true" /><span className="text-[11px] font-semibold leading-snug text-navy">{text}</span></div>
}

function ArchitectureDiagram() {
  return <div className="relative flex min-h-[330px] items-center justify-center overflow-hidden border border-[#d8e5f7] bg-[#f3f8ff] p-8"><div className="absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(47,111,224,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(47,111,224,0.09)_1px,transparent_1px)] [background-size:28px_28px]" /><div className="relative grid w-full max-w-[390px] gap-3 text-center text-xs font-semibold text-navy"><DiagramBox text="System Requirements" /><span className="mx-auto h-4 w-px bg-brand-blue/50" /><div className="grid grid-cols-2 gap-3"><DiagramBox text="Control Logic" /><DiagramBox text="Datapath Design" /></div><span className="mx-auto h-4 w-px bg-brand-blue/50" /><div className="bg-brand-blue px-4 py-4 text-white shadow-lg shadow-brand-blue/20">RTL<br /><span className="text-[10px] font-normal text-white/80">(Verilog / SystemVerilog)</span></div><span className="mx-auto h-4 w-px bg-brand-blue/50" /><DiagramBox text="Synthesis-Ready RTL" /></div></div>
}

function DiagramBox({ text }: { text: string }) {
  return <div className="border border-brand-blue/20 bg-white px-3 py-3 shadow-sm">{text}</div>
}
