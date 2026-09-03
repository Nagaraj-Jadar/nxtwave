import type { Metadata } from 'next'
import { IndustriesSection } from '@/components/home/industries-section'
import { PageHero } from '@/components/page-hero'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export const metadata: Metadata = { title: 'Industries', description: 'NXTwave supports semiconductor programs across automotive, AI, connectivity, IoT, and industrial markets.' }

export default function IndustriesPage() {
  return <><SiteHeader /><main><PageHero eyebrow="Industries" title="Engineering for the systems shaping what&apos;s next." description="Specialist semiconductor design expertise for high-performance, connected, and precision systems." breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Industries' }]} /><IndustriesSection /></main><SiteFooter /></>
}