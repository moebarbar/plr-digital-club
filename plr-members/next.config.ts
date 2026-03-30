import type { NextConfig } from "next";

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
};

export default nextConfig;
