import { PublicNav, PublicFooter } from '@/components/seo/PublicNav'

export default function SeoLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PublicNav />
      <main>{children}</main>
      <PublicFooter />
    </>
  )
}
