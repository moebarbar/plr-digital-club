import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo/metadata'
import { KeywordLanding } from '@/components/seo/KeywordLanding'
import { KEYWORD_PAGES } from '@/lib/seo/keywordPages'

const PAGE = KEYWORD_PAGES['plr-health-and-wellness']

export const metadata: Metadata = pageMetadata({
  title: PAGE.metaTitle,
  description: PAGE.metaDescription,
  path: '/plr-health-and-wellness',
})

export default function Page() {
  return <KeywordLanding c={PAGE.content} />
}
