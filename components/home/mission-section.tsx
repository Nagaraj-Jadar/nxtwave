import Image from 'next/image'
import { SectionLabel } from '@/components/section-label'
import { Reveal } from '@/components/reveal'

export function MissionSection() {
  return (
    <section id="about" className="bg-background py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-xl border border-border shadow-sm">
            <Image
              src="/about-image.png"
              alt="NXTwave semiconductor engineering team collaborating on a technical design"
              width={720}
              height={560}
              className="h-auto w-full"
              priority={false}
            />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <SectionLabel>Our Mission</SectionLabel>
          <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight text-navy sm:text-4xl">
            Engineered for First-Pass Success
          </h2>
          <div className="mission-copy mt-6 max-w-xl space-y-4 text-base leading-7 text-muted-foreground">
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
    </section>
  )
}
