import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PLR Digital Club — Members Area',
  description: 'Access your 1,000+ digital products',
  robots: 'noindex',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
