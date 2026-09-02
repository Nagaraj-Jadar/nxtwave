import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Hero } from '@/components/home/hero'
import { MissionSection } from '@/components/home/mission-section'
import { CoreStrengths } from '@/components/home/core-strengths'
import { EngineeringSpectrum } from '@/components/home/engineering-spectrum'
import { IndustriesSection } from '@/components/home/industries-section'
import { ProcessSection } from '@/components/home/process-section'

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <MissionSection />
        <CoreStrengths />
        <EngineeringSpectrum />
        <IndustriesSection />
        <ProcessSection />
      </main>
      <SiteFooter />
    </>
  )
}
