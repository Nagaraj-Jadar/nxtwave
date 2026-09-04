const items = [
  'Precision Engineering',
  'Turnkey Execution',
  'Global Delivery Standards',
]

export function AnnouncementTicker() {
  // Duplicate the list so the marquee loops seamlessly (-50% translate).
  const loop = [...items, ...items]

  return (
    <div className="flex min-h-12 w-full items-center overflow-hidden bg-navy text-navy-foreground">
      <div className="flex w-max items-center whitespace-nowrap py-3 will-change-transform animate-marquee">
        {loop.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="px-4 text-xs font-medium uppercase tracking-wider text-white/90 sm:text-sm">
              {item}
            </span>
            <span aria-hidden="true" className="text-brand-blue">
              &bull;
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
