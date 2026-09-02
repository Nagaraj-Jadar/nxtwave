const items = [
  'Industry Announcements',
  'Achieved First-Pass Silicon Success on 3nm Node',
  'Expanding Global Embedded Engineering Centers',
  'Precision Engineering',
  'Turnkey Execution',
  'Global Delivery Standards',
]

export function AnnouncementTicker() {
  // Duplicate the list so the marquee loops seamlessly (-50% translate).
  const loop = [...items, ...items]

  return (
    <div className="w-full overflow-hidden bg-navy py-3 text-navy-foreground">
      <div className="flex w-max animate-marquee whitespace-nowrap will-change-transform">
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
