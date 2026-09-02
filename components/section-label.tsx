import { cn } from '@/lib/utils'

export function SectionLabel({
  children,
  className,
  align = 'left',
  tone = 'default',
}: {
  children: React.ReactNode
  className?: string
  align?: 'left' | 'center'
  tone?: 'default' | 'light'
}) {
  return (
    <p
      className={cn(
        'font-sans text-xs font-semibold uppercase tracking-[0.2em]',
        tone === 'light' ? 'text-brand-blue/90' : 'text-brand-blue',
        align === 'center' && 'text-center',
        className,
      )}
    >
      {children}
    </p>
  )
}
