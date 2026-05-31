import type { Metadata } from 'next'

const BASE = 'https://plrdigitalclub.com'

interface PageMetaOpts {
  /** Page <title> (string). The root layout template appends " | PLR Digital Club". */
  title: string
  description: string
  /** Path beginning with "/", e.g. "/plr-ebooks". Used for the canonical and og:url. */
  path: string
  /** og:title / twitter:title. Defaults to `title`. Keep these page-specific so the
   *  Twitter card never falls back to the generic site-wide title. */
  ogTitle?: string
  /** og:description / twitter:description. Defaults to `description`. */
  ogDescription?: string
}

/**
 * Build a page's Metadata with title, description, self-referencing canonical,
 * and matching openGraph + twitter blocks derived from the same inputs.
 *
 * Centralizing this guarantees twitter:title stays page-specific (it previously
 * drifted to the generic layout title whenever a page set openGraph but not
 * twitter — Next merges these nested objects wholesale, with no title fallback).
 */
export function pageMetadata({ title, description, path, ogTitle, ogDescription }: PageMetaOpts): Metadata {
  const url = `${BASE}${path}`
  const oTitle = ogTitle ?? title
  const oDescription = ogDescription ?? description
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title: oTitle, description: oDescription, url },
    twitter: { title: oTitle, description: oDescription },
  }
}
