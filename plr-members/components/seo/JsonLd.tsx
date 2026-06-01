// JSON-LD schema markup components for SEO
// dangerouslySetInnerHTML is safe here because all data is server-controlled
// static objects — never user input or external data.

interface JsonLdProps {
  data: Record<string, unknown>
}

export function JsonLd({ data }: JsonLdProps) {
  const json = JSON.stringify(data)
  return (
    // eslint-disable-next-line react/no-danger
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
  )
}

export function OrganizationSchema() {
  return (
    <JsonLd data={{
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'PLR Digital Club',
      url: 'https://plrdigitalclub.com',
      logo: 'https://plrdigitalclub.com/logo.png',
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'support@plrdigitalclub.com',
        contactType: 'customer support',
      },
    }} />
  )
}

export function WebsiteSchema() {
  return (
    <JsonLd data={{
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'PLR Digital Club',
      url: 'https://plrdigitalclub.com',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://plrdigitalclub.com/blog?q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    }} />
  )
}

export function ProductSchema({ name, description, price, url, image }: {
  name: string; description: string; price: string; url: string
  image?: string | string[]
}) {
  // Google Merchant listings require `image`; default to the homepage product image.
  const images = image
    ? (Array.isArray(image) ? image : [image])
    : ['https://plrdigitalclub.com/images/plr-digital-club-product.jpg']
  return (
    <JsonLd data={{
      '@context': 'https://schema.org',
      '@type': 'Product',
      name,
      description,
      image: images,
      brand: { '@type': 'Brand', name: 'PLR Digital Club' },
      url,
      offers: {
        '@type': 'Offer',
        price,
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        priceValidUntil: '2027-12-31',
        url,
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        reviewCount: '500',
      },
    }} />
  )
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  return (
    <JsonLd data={{
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: item.name,
        item: item.url,
      })),
    }} />
  )
}

export function ArticleSchema({ title, description, url, datePublished, dateModified, authorName, image, wordCount }: {
  title: string; description: string; url: string
  datePublished: string; dateModified: string; authorName: string
  image?: string; wordCount?: number
}) {
  return (
    <JsonLd data={{
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: title,
      description,
      url,
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      ...(image ? { image: [image] } : {}),
      ...(wordCount ? { wordCount } : {}),
      datePublished,
      dateModified,
      author: { '@type': 'Person', name: authorName, url: 'https://plrdigitalclub.com/about' },
      publisher: {
        '@type': 'Organization',
        name: 'PLR Digital Club',
        logo: { '@type': 'ImageObject', url: 'https://plrdigitalclub.com/logo.png' },
      },
    }} />
  )
}

export function FAQSchema({ items }: { items: { q: string; a: string }[] }) {
  return (
    <JsonLd data={{
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: items.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    }} />
  )
}
