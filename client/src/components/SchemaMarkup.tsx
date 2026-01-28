interface ProductSchemaProps {
  name: string;
  description: string;
  price: number;
  currency?: string;
  image?: string;
  url?: string;
}

export function ProductSchema({ 
  name, 
  description, 
  price, 
  currency = "USD",
  image,
  url = "https://plrdigitalclub.com"
}: ProductSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": name,
    "description": description,
    "image": image || "https://plrdigitalclub.com/og-image.png",
    "brand": {
      "@type": "Brand",
      "name": "PLR Digital Club"
    },
    "offers": {
      "@type": "Offer",
      "url": url,
      "priceCurrency": currency,
      "price": price,
      "priceValidUntil": "2027-12-31",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "PLR Digital Club"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ReviewSchemaProps {
  reviews: Array<{
    author: string;
    rating: number;
    text: string;
    date?: string;
  }>;
}

export function ReviewSchema({ reviews }: ReviewSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "PLR Digital Club Membership",
    "review": reviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "datePublished": review.date || "2026-01-15",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating,
        "bestRating": 5
      },
      "reviewBody": review.text
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PLR Digital Club",
    "url": "https://plrdigitalclub.com",
    "logo": "https://plrdigitalclub.com/logo.png",
    "description": "Get instant access to 1000+ premium PLR & MRR digital products. Download and resell anywhere - keep 100% profit.",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "support@plrdigitalclub.com"
    },
    "sameAs": []
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ArticleSchemaProps {
  title: string;
  description: string;
  author: string;
  datePublished: string;
  url: string;
  image?: string;
}

export function ArticleSchema({ 
  title, 
  description, 
  author, 
  datePublished, 
  url,
  image 
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "author": {
      "@type": "Person",
      "name": author
    },
    "publisher": {
      "@type": "Organization",
      "name": "PLR Digital Club",
      "logo": {
        "@type": "ImageObject",
        "url": "https://plrdigitalclub.com/logo.png"
      }
    },
    "datePublished": datePublished,
    "dateModified": datePublished,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "image": image || "https://plrdigitalclub.com/og-image.png"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "PLR Digital Club",
    "url": "https://plrdigitalclub.com",
    "description": "1000+ Premium Digital Products with Master Resell Rights",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://plrdigitalclub.com/products?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
