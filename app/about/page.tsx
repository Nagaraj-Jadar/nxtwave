import type { Metadata } from 'next'
import { MissionSection } from '@/components/home/mission-section'
import { PageHero } from '@/components/page-hero'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export const metadata: Metadata = { title: 'About', description: 'About NXTwave Semiconductor and our quality-focused engineering philosophy.' }

export default function AboutPage() {
  return <><SiteHeader /><main><PageHero eyebrow="About NXTwave" title="Engineered for First-Pass Success" description="End-to-end semiconductor design expertise from architecture to GDSII and post-silicon validation." breadcrumb={[{ label: 'Home', href: '/' }, { label: 'About' }]} /><MissionSection /></main><SiteFooter /></>
}