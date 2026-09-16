import Image from 'next/image'
import { cn } from '@/lib/utils'

type LogoProps = {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn('relative aspect-[2.05/1]', className)}>
      <Image
        src="/footer-logos.png"
        alt="NXTwave Semiconductor"
        fill
        sizes="(max-width: 640px) 170px, 240px"
        className="object-contain"
      />
    </div>
  )
}
