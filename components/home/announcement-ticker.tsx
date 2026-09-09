const items = [
  'Precision Engineering',
  'Turnkey Execution',
  'Specialized Domain Expertise',
  'Scalable Engineering Teams',
  'Accelerated Time-to-Market',
  'Global Delivery Standards',
]

export function AnnouncementTicker() {
  const loop = [...items, ...items]

  return (
    <div className="flex min-h-[52px] w-full items-center overflow-hidden bg-navy text-navy-foreground">
      <div className="flex w-max items-center justify-center whitespace-nowrap will-change-transform animate-marquee">
        {loop.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center justify-center">
            <span className="px-3 py-2 text-center text-[10px] font-medium uppercase tracking-[0.18em] text-white/90 sm:text-[11px] lg:text-[12px]">
              {item}
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
