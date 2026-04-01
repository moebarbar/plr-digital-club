import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { BLOG_POSTS } from '@/lib/blog/posts'
import { ArticleSchema, BreadcrumbSchema } from '@/components/seo/JsonLd'

// NOTE: renderMarkdown output is only ever injected from server-controlled static
// blog post content defined in lib/blog/posts.ts — never from user input. Safe.

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `https://plrdigitalclub.com/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://plrdigitalclub.com/blog/${slug}`,
      type: 'article',
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      authors: [post.author],
    },
  }
}

function renderMarkdown(content: string): string {
  return content
    .replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold text-[#1A1A4E] mt-10 mb-4">$1</h2>')
    .replace(/^### (.+)$/gm, '<h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-[#1565C0] hover:underline">$1</a>')
    .replace(/^> (.+)$/gm, '<blockquote class="border-l-4 border-[#1565C0] pl-4 italic text-gray-600 my-4">$1</blockquote>')
    .replace(/^\| (.+) \|$/gm, (line) => {
      const cells = line.split('|').filter(Boolean).map((c) => c.trim())
      return `<tr class="border-t border-gray-200">${cells.map((c) => `<td class="px-4 py-2 text-sm text-gray-700">${c}</td>`).join('')}</tr>`
    })
    .replace(/^---$/gm, '')
    .replace(/^- (.+)$/gm, '<li class="flex items-start gap-2"><span class="text-[#1565C0] mt-1">&#x2022;</span><span>$1</span></li>')
    .replace(/^(\d+)\. (.+)$/gm, '<li class="flex items-start gap-2"><span class="font-bold text-[#1565C0] mt-0.5 w-5 flex-shrink-0">$1.</span><span>$2</span></li>')
    .replace(/(<li.*<\/li>\n?)+/g, (block) => `<ul class="space-y-2 my-4">${block}</ul>`)
    .replace(/(<tr.*<\/tr>\n?)+/g, (block) => `<div class="overflow-x-auto my-6"><table class="w-full bg-white rounded-xl border border-gray-200 text-sm"><tbody>${block}</tbody></table></div>`)
    .replace(/\n\n+/g, '</p><p class="text-gray-600 leading-relaxed my-4">')
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)
  if (!post) notFound()

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3)

  return (
    <>
      <ArticleSchema
        title={post.title}
        description={post.description}
        url={`https://plrdigitalclub.com/blog/${post.slug}`}
        datePublished={post.datePublished}
        dateModified={post.dateModified}
        authorName={post.author}
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://plrdigitalclub.com' },
        { name: 'Blog', url: 'https://plrdigitalclub.com/blog' },
        { name: post.title, url: `https://plrdigitalclub.com/blog/${post.slug}` },
      ]} />

      {/* Post header */}
      <section className="bg-gradient-to-br from-[#1A1A4E] to-[#1565C0] text-white py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-medium text-blue-300 bg-blue-900/40 px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-blue-300 text-xs">{post.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">{post.title}</h1>
          <p className="text-blue-100 text-lg mb-6">{post.description}</p>
          <div className="flex items-center gap-4 text-blue-300 text-sm">
            <span>By {post.author}</span>
            <span>&#183;</span>
            <time dateTime={post.datePublished}>
              {new Date(post.datePublished).toLocaleDateString('en-GB', {
                day: 'numeric', month: 'long', year: 'numeric',
              })}
            </time>
          </div>
        </div>
      </section>

      {/* Article body — content is static server-controlled markdown from lib/blog/posts.ts */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <article
            className="text-gray-600 leading-relaxed text-lg"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-[#F8F8FF]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[#1A1A4E] rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-2">Get 1,000+ PLR &amp; MRR Products</h3>
            <p className="text-blue-200 mb-6 text-sm">One payment of $197. Lifetime access. Start selling today.</p>
            <Link href="/checkout" className="inline-block bg-white text-[#1A1A4E] font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors">
              Get Instant Access &#8212; $197 &#8594;
            </Link>
          </div>
        </div>
      </section>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-[#1A1A4E] mb-6">Related Guides</h2>
            <div className="space-y-4">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="block bg-[#F8F8FF] rounded-xl border border-gray-200 p-5 hover:border-[#1565C0] transition-colors"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-[#1565C0] font-medium">{related.category}</span>
                    <span className="text-xs text-gray-400">&#183; {related.readTime}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{related.title}</h3>
                  <p className="text-gray-500 text-sm">{related.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="max-w-3xl mx-auto px-6 pb-8">
        <Link href="/blog" className="text-[#1565C0] text-sm hover:underline">&#8592; Back to all guides</Link>
      </div>
    </>
  )
}
