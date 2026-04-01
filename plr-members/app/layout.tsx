import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://plrdigitalclub.com'),
  title: {
    default: 'PLR Digital Club — 1,000+ PLR & MRR Digital Products',
    template: '%s | PLR Digital Club',
  },
  description: 'Get lifetime access to 1,000+ PLR & MRR digital products. Canva templates, eBooks, courses, social media templates & more. Rebrand, resell, keep 100% profit.',
  keywords: ['PLR digital products', 'MRR digital products', 'master resell rights', 'private label rights', 'digital products to resell', 'PLR membership'],
  authors: [{ name: 'PLR Digital Club' }],
  creator: 'PLR Digital Club',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://plrdigitalclub.com',
    siteName: 'PLR Digital Club',
    title: 'PLR Digital Club — 1,000+ PLR & MRR Digital Products',
    description: 'Get lifetime access to 1,000+ PLR & MRR digital products. Rebrand, resell, keep 100% profit. One payment, forever.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'PLR Digital Club — 1,000+ Digital Products With Resell Rights' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PLR Digital Club — 1,000+ PLR & MRR Digital Products',
    description: 'Lifetime access to 1,000+ done-for-you digital products with full resell rights.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://plrdigitalclub.com',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#1A1A4E" />
      </head>
      <body>{children}</body>
    </html>
  )
}
