import type { Metadata } from 'next'
import { EngineeringSpectrum } from '@/components/home/engineering-spectrum'
import { PageHero } from '@/components/page-hero'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export const metadata: Metadata = { title: 'Capabilities', description: 'NXTwave semiconductor engineering capabilities from architecture through post-silicon validation.' }

export default function CapabilitiesPage() {
  return <><SiteHeader /><main><PageHero eyebrow="Capabilities" title="The Complete Silicon Engineering Spectrum" description="Accelerating time-to-market with seamless RTL-to-GDSII workflows and rigorous technical precision." breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Capabilities' }]} /><EngineeringSpectrum /></main><SiteFooter /></>
}