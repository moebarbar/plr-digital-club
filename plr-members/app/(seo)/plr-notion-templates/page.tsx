import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo/metadata'
import { KeywordLanding } from '@/components/seo/KeywordLanding'
import { KEYWORD_PAGES } from '@/lib/seo/keywordPages'

const PAGE = KEYWORD_PAGES['plr-notion-templates']

export const metadata: Metadata = pageMetadata({
  title: PAGE.metaTitle,
  description: PAGE.metaDescription,
  path: '/plr-notion-templates',
})

export default function Page() {
  return <KeywordLanding c={PAGE.content} />
}
