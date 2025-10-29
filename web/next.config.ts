import type { NextConfig } from "next";

// Bundle analyzer setup (configured at runtime)
let withBundleAnalyzer: any = (config: NextConfig) => config;

if (process.env.ANALYZE === "true") {
  // Dynamic import for bundle analyzer
  const bundleAnalyzer = require("@next/bundle-analyzer");
  withBundleAnalyzer = bundleAnalyzer.default({
    enabled: true,
    openAnalyzer: true,
  });
}

const nextConfig: NextConfig = {
  // Performance optimizations
  experimental: {
    optimizePackageImports: ["lucide-react", "@radix-ui/react-slot"],
  },

  // Image optimization for Vercel
  images: {
    // Vercel handles local images automatically, no domains needed
    domains: [],
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },

  // Bundle analyzer configuration (when ANALYZE=true)
  ...(process.env.ANALYZE === "true" && {
    // Bundle analyzer will be conditionally imported
  }),

  // Security and performance headers with CSP for Jotform
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Security headers
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          // Performance headers
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          // Content Security Policy for Spiffy.co
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' js.static.spiffy.co *.spiffy.co *.google-analytics.com *.googletagmanager.com",
              "style-src 'self' 'unsafe-inline' *.spiffy.co",
              "img-src 'self' blob: data: https: *.spiffy.co *.google-analytics.com *.vercel.app",
              "font-src 'self' *.spiffy.co",
              "connect-src 'self' *.spiffy.co *.google-analytics.com *.googletagmanager.com",
              "frame-src 'self' *.spiffy.co",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self' *.spiffy.co",
            ].join("; "),
          },
        ],
      },
      // Form-specific headers for Spiffy checkout forms
      {
        source: "/form/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, must-revalidate",
          },
        ],
      },
    ];
  },

  async rewrites() {
    return [
      // No rewrites needed for Spiffy - it loads directly from their CDN
    ];
  },

  // Turbopack configuration (Next.js 16+ default)
  turbopack: {
    // Turbopack-specific optimizations
    rules: {
      // Custom rules if needed
    },
  },
};

export default withBundleAnalyzer(nextConfig);
