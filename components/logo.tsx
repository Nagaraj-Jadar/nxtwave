import Image from 'next/image'
import { cn } from '@/lib/utils'

type LogoProps = {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn('relative aspect-[1.637/1]', className)}>
      <Image
        src="/nxt-logo-mark.png"
        alt="NXTwave Semiconductor"
        fill
        sizes="(max-width: 640px) 140px, 220px"
        className="object-contain"
      />
    </div>
  )
}
