'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowRight, CircuitBoard, Cpu, Gauge, Microscope, Radio, ShieldCheck, SquareStack, Waves, type LucideIcon } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { serviceLinks } from '@/lib/site'

type Service = {
  id: string
  title: string
  tagline: string
  description: string
  icon: LucideIcon
}

const services: Service[] = [
  { id: serviceLinks[0].id, title: 'RTL Design & Microarchitecture', tagline: 'Transforming Architecture into High-Quality, Implementation-Ready RTL', description: 'Our RTL Design and Microarchitecture practice translates system-level requirements into scalable, efficient, and resilient hardware implementations, addressing functionality, performance, power, and area objectives from the earliest stages.', icon: Cpu },
  { id: serviceLinks[1].id, title: 'Design Verification', tagline: 'Ensuring Functional Correctness Through Rigorous Verification Methodologies', description: 'Our Design Verification services provide exhaustive functional verification across IP, subsystem, and SoC levels, using scalable methodologies to identify defects early and provide confidence before silicon implementation.', icon: ShieldCheck },
  { id: serviceLinks[2].id, title: 'Design for Test (DFT)', tagline: 'Engineering Silicon for Manufacturability, Testability, and Production Excellence', description: 'Our DFT services deliver comprehensive test structures that improve test coverage, defect detection, and manufacturing efficiency while embedding testability into the broader SoC architecture.', icon: CircuitBoard },
  { id: serviceLinks[3].id, title: 'Physical Design', tagline: 'Converting RTL into High-Performance, Manufacturable Silicon', description: 'Our Physical Design services transform validated RTL and synthesized netlists into optimized, tape-out-ready layouts while focusing on performance, power, area, timing, and manufacturability.', icon: SquareStack },
  { id: serviceLinks[4].id, title: 'Physical Verification', tagline: 'Ensuring Layout Accuracy and Foundry Compliance Before Tape-Out', description: 'Our Physical Verification services validate the final layout against stringent manufacturing and foundry requirements, identifying geometric, connectivity, reliability, and manufacturability issues before tape-out.', icon: Microscope },
  { id: serviceLinks[5].id, title: 'Analog & Mixed-Signal', tagline: 'Advanced Analog and Mixed-Signal Engineering for Complex Semiconductor Systems', description: 'Our Analog and Mixed-Signal services support high-performance analog, mixed-signal, and analog-digital integrated circuits through circuit development, integration, behavioral modeling, simulation, verification, and characterization.', icon: Waves },
  { id: serviceLinks[6].id, title: 'Post-Silicon Validation', tagline: 'Validating Silicon Performance from First Power-On to Production Readiness', description: 'Our Post-Silicon Validation services cover silicon bring-up, functional validation, characterization, debugging, and production readiness, bridging the gap between pre-silicon simulation and real-world silicon behavior.', icon: Gauge },
  { id: serviceLinks[7].id, title: 'Embedded Systems Engineering', tagline: 'Intelligent, Reliable, and High-Performance Embedded Engineering', description: 'Our Embedded Systems Engineering services bridge semiconductor hardware with real-world applications through firmware, BSP, device drivers, operating systems, middleware, connectivity, and hardware-software integration.', icon: Radio },
]

export function EngineeringSpectrum() {
  const [expanded, setExpanded] = useState(false)
  const visibleServices = expanded ? services : services.slice(0, 6)

  return (
    <section id="capabilities" className="relative isolate overflow-hidden bg-background py-16 lg:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'linear-gradient(#0f2b5d 1px, transparent 1px), linear-gradient(90deg, #0f2b5d 1px, transparent 1px)', backgroundSize: '52px 52px' }} />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,0.61fr)_minmax(22rem,0.39fr)] lg:gap-8">
          <Reveal className="relative max-w-4xl">
            <div className="py-2">
              <div className="flex items-center gap-2.5" aria-hidden="true">
                <span className="h-2 w-2 rounded-full bg-brand-blue" />
                <span className="h-px w-12 bg-brand-blue" />
                <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
              </div>
              <p className="mt-5 font-serif text-[2.35rem] font-semibold leading-[1.06] text-navy sm:text-[2.75rem] lg:text-[3.1rem]">
                Our <span className="text-brand-blue">Services</span>
              </p>
              <div className="mt-5 flex items-center gap-2" aria-hidden="true">
                <span className="h-px w-36 bg-brand-blue" />
                <span className="h-1 w-1 rounded-full bg-brand-blue" />
                <span className="h-px w-8 bg-brand-blue/40" />
              </div>
              <h2 className="mt-5 text-balance font-serif text-xl font-semibold leading-tight text-navy sm:text-2xl">
                Engineering Excellence Across the Complete Silicon Lifecycle
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
                We deliver end-to-end semiconductor engineering services, from architecture and RTL implementation through verification, physical realization, tape-out, and post-silicon validation.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100} className="relative hidden min-h-64 lg:block">
            <div aria-hidden="true" className="absolute left-0 top-[10%] h-[80%] border-l border-brand-blue/30" />
            <p className="absolute left-6 top-9 max-w-20 text-[10px] font-bold uppercase tracking-[0.22em] text-navy/55">From Concept to Silicon</p>
            <div className="absolute inset-y-0 right-[-12%] w-[115%] opacity-95 [mask-image:linear-gradient(to_right,transparent,black_28%,black_82%,transparent)]">
              <Image src="/hero-chip.png" alt="" fill sizes="40vw" className="object-contain object-right lg:scale-110" />
            </div>
          </Reveal>
        </div>

        <div className="relative mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visibleServices.map((service, index) => (
            <Reveal
              key={service.title}
              id={service.id}
              delay={(index % 3) * 80}
              className="relative flex h-full min-h-[340px] flex-col overflow-hidden rounded-xl border border-border bg-card p-6 shadow-[0_12px_28px_-24px_rgba(15,43,93,0.38)] transition-transform duration-300 hover:-translate-y-0.5 sm:p-7"
            >
              <div aria-hidden="true" className="absolute right-5 top-5 h-6 w-6 border-r border-t border-brand-blue/55" />
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-brand-blue">
                <service.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-5 pr-6 font-serif text-xl font-semibold leading-snug text-navy">
                {service.title}
              </h3>
              <p className="mt-3 border-l-2 border-brand-blue pl-3 text-sm font-bold leading-snug text-navy">
                {service.tagline}
              </p>
              <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              <button type="button" className="mt-4 inline-flex w-fit items-center gap-2 text-sm font-semibold text-brand-blue transition-colors hover:text-navy">
                See More <span aria-hidden="true" className="h-px w-6 bg-brand-blue/60" /> <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </Reveal>
          ))}
        </div>
        <div className="relative mt-10 flex justify-center">
          <button type="button" onClick={() => setExpanded((isExpanded) => !isExpanded)} className="inline-flex items-center gap-2 rounded-md bg-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
            {expanded ? 'Show Less' : 'Explore All Services'}
            <ArrowRight className={`h-4 w-4 transition-transform ${expanded ? '-rotate-90' : 'rotate-90'}`} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
