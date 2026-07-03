import type { NextConfig } from "next";

// Security headers, applied to every route. Keep these identical to the set
// in server/index.ts (the Express layer serves the Vite marketing pages and
// proxies the rest here; identical values mean it never matters which layer
// answers). CSP is intentionally absent for now — the site loads many
// third-party pixels, so a CSP must be rolled out in Report-Only mode first.
const SECURITY_HEADERS = [
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  // Allow images from Supabase storage and common CDNs
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**.supabase.co' },
      { protocol: 'https', hostname: '**.supabase.in' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
  // Production hardening
  poweredByHeader: false,
  compress: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: SECURITY_HEADERS,
      },
    ];
  },
};

export default nextConfig;
