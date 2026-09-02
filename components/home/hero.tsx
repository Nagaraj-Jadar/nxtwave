import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { AnnouncementTicker } from '@/components/home/announcement-ticker'

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100svh-72px)] flex-col overflow-hidden bg-background">
      {/* subtle engineering grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            'linear-gradient(#0f2b5d 1px, transparent 1px), linear-gradient(90deg, #0f2b5d 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      <div className="relative mx-auto grid w-full max-w-[1320px] flex-1 grid-cols-1 items-center gap-8 px-4 py-6 sm:px-6 lg:grid-cols-[42%_58%] lg:items-start lg:gap-2 lg:pt-20 xl:px-8">
        <div className="relative z-10 lg:pt-10">
          <h1
            className="text-balance font-serif font-semibold leading-[1.05] tracking-tight text-navy"
            style={{ fontSize: 'clamp(2.25rem, 4.2vw + 1rem, 4.25rem)' }}
          >
            <span className="block">WE IGNITE</span>
            <span className="block">SILICON MINDS</span>
            <span className="block text-brand-blue">EVERYWHERE.</span>
          </h1>
          <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
            End-to-end semiconductor design expertise from architecture to GDSII
            and post-silicon validation. Engineered for first-pass success.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/capabilities"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-navy px-6 py-3 text-sm font-semibold text-navy-foreground transition-colors hover:bg-navy-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Explore Our Capabilities
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Schedule Discussion
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full min-w-0 max-w-none overflow-visible lg:mx-0 lg:-ml-[6%] lg:w-[122%]">
          <div className="relative h-[320px] w-full sm:h-[400px] lg:h-[clamp(500px,58vh,560px)]">
            <Image
              src="/hero-chip.png"
              alt="Advanced semiconductor package over a circuit-board layout"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-contain object-center lg:scale-[1.18]"
              priority
            />
          </div>
        </div>
      </div>
      <AnnouncementTicker />
    </section>
  )
}
