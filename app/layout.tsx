import { Analytics } from '@vercel/analytics/next'
import { headers } from 'next/headers'
import type { Metadata, Viewport } from 'next'
import { Inter, Source_Serif_4 } from 'next/font/google'
import { MaintenancePage } from '@/components/maintenance-page'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-source-serif',
  display: 'swap',
})

const siteUrl = 'https://nxtwave-semiconductor.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'NXTwave Semiconductor | Advanced VLSI & Semiconductor Design',
    template: '%s | NXTwave Semiconductor',
  },
  description:
    'NXTwave Semiconductor delivers end-to-end VLSI and semiconductor design services from architecture and RTL through verification, physical design, DFT and post-silicon validation.',
  keywords: [
    'VLSI design',
    'semiconductor design services',
    'RTL to GDSII',
    'physical design',
    'functional verification',
    'DFT',
    'post-silicon validation',
    'SoC design',
    'ASIC design',
  ],
  authors: [{ name: 'NXTwave Semiconductor' }],
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'NXTwave Semiconductor | Advanced VLSI & Semiconductor Design',
    description:
      'End-to-end semiconductor design expertise from architecture to GDSII and post-silicon validation. Engineered for first-pass success.',
    siteName: 'NXTwave Semiconductor',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NXTwave Semiconductor | Advanced VLSI & Semiconductor Design',
    description:
      'End-to-end semiconductor design expertise from architecture to GDSII and post-silicon validation.',
  },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#0f2b5d',
  width: 'device-width',
  initialScale: 1,
}

const maintenanceHosts = new Set(['nxtwavesemi.com', 'www.nxtwavesemi.com'])

function isMaintenanceHost(host: string | null) {
  const normalizedHost = host?.split(',')[0].trim().split(':')[0].toLowerCase()
  return normalizedHost ? maintenanceHosts.has(normalizedHost) : false
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const requestHeaders = await headers()
  const host = requestHeaders.get('x-forwarded-host') ?? requestHeaders.get('host')
  const isMaintenanceMode = isMaintenanceHost(host)

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`light ${inter.variable} ${sourceSerif.variable}`}
    >
      <body className="antialiased bg-background text-foreground">
        {isMaintenanceMode ? <MaintenancePage /> : children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
