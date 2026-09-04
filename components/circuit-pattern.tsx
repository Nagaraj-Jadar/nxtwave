import { cn } from '@/lib/utils'

/**
 * Subtle decorative circuit-board trace pattern used behind hero/CTA sections.
 * Pure SVG, no external assets — kept intentionally faint so text stays readable.
 */
export function CircuitPattern({
  className,
  tone = 'dark',
}: {
  className?: string
  tone?: 'dark' | 'light'
}) {
  const stroke = tone === 'dark' ? 'rgba(255,255,255,0.10)' : 'rgba(15,43,93,0.08)'
  const node = tone === 'dark' ? 'rgba(120,157,255,0.65)' : 'rgba(47,111,224,0.4)'
  const glow = tone === 'dark' ? 'rgba(65,105,225,0.9)' : 'rgba(47,111,224,0.7)'

  return (
    <svg
      className={cn('pointer-events-none', className)}
      viewBox="0 0 1000 500"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      aria-hidden="true"
    >
      <g stroke={stroke} strokeWidth="1">
        <path d="M0 70 H210 V150 H420 V90" />
        <path d="M1000 120 H790 V50 H560" />
        <path d="M0 320 H150 V400 H360 V460" />
        <path d="M1000 360 H820 V430 H600" />
        <path d="M500 0 V110" />
        <path d="M500 380 V500" />
        <path d="M210 150 V260" />
        <path d="M790 50 V0" />
        <path d="M150 400 H60" />
        <path d="M820 430 H930" />
      </g>
      <g fill={node}>
        <circle cx="210" cy="150" r="3.5" />
        <circle cx="420" cy="150" r="3.5" />
        <circle cx="420" cy="90" r="3.5" />
        <circle cx="790" cy="50" r="3.5" />
        <circle cx="560" cy="50" r="3.5" />
        <circle cx="150" cy="400" r="3.5" />
        <circle cx="360" cy="400" r="3.5" />
        <circle cx="360" cy="460" r="3.5" />
        <circle cx="820" cy="430" r="3.5" />
        <circle cx="600" cy="430" r="3.5" />
        <circle cx="500" cy="110" r="3.5" />
        <circle cx="500" cy="380" r="3.5" />
      </g>
      <g fill={glow} className="[&>circle]:animate-pulse-glow motion-reduce:[&>circle]:animate-none">
        <circle cx="420" cy="150" r="4.5" style={{ animationDelay: '0ms' }} />
        <circle cx="790" cy="50" r="4.5" style={{ animationDelay: '900ms' }} />
        <circle cx="360" cy="400" r="4.5" style={{ animationDelay: '1500ms' }} />
        <circle cx="600" cy="430" r="4.5" style={{ animationDelay: '2200ms' }} />
      </g>
    </svg>
  )
}
