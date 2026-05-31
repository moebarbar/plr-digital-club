import Script from 'next/script'
import { PublicNav, PublicFooter } from '@/components/seo/PublicNav'

export default function SeoLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PublicNav />
      <main>{children}</main>
      <PublicFooter />

      {/* Analyio pixel — marketing/landing pages only (not app/dashboard routes) */}
      <Script src="https://app.analyio.com/pixel/HRb3yg5fMCNYOuVx" strategy="afterInteractive" />
    </>
  )
}
