import Image from 'next/image'
import { cn } from '@/lib/utils'

type LogoProps = {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn('relative aspect-[1.645/1] overflow-hidden', className)}>
      <Image
        src="/nxt-logo.png"
        alt="NXTwave Semiconductor"
        fill
        sizes="(max-width: 640px) 128px, 448px"
        className="!left-[-10.7%] !top-[-46.9%] !h-auto !w-[118.8%] max-w-none"
      />
    </div>
  )
}
