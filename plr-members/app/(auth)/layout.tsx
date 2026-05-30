import type { Metadata } from 'next'

// Auth pages (login, reset-password, update-password) have no SEO value.
// noindex keeps them out of Google while still allowing them to be crawled/followed.
export const metadata: Metadata = {
  robots: { index: false, follow: true },
}

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return children
}
