import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* Performance Optimizations */
  experimental: {
    // reactCompiler: true, // Enable when stable
    optimizePackageImports: [
      "framer-motion",
      "lucide-react",
      "@tabler/icons-react",
      "react-syntax-highlighter"
    ],
    webVitalsAttribution: ["CLS", "LCP", "FCP", "FID", "TTFB"],
  },
  
  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  
  // Image optimization
  images: {
    remotePatterns: [
      { hostname: "pbs.twimg.com" },
      { hostname: "yt3.googleusercontent.com" },
      { hostname: "cdn.prod.website-files.com" },
      { hostname: "assets.aceternity.com" },
      { hostname: "images.unsplash.com" },
      { hostname: "nextjs.org" },
      { hostname: "reactnative.dev" },
      { hostname: "images.openai.com" },
    ],
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
  },
  
  // Bundle optimization
  webpack: (config, { dev }) => {
    // Production optimizations
    if (!dev) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: "all",
          cacheGroups: {
            framework: {
              chunks: "all",
              name: "framework",
              test: /(?<!node_modules.*)[\\/]node_modules[\\/](react|react-dom|scheduler|prop-types|use-subscription)[\\/]/,
              priority: 40,
              enforce: true,
            },
            framerMotion: {
              name: "framer-motion",
              test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
              chunks: "all",
              priority: 30,
            },
            icons: {
              name: "icons",
              test: /[\\/]node_modules[\\/](@tabler\/icons-react|lucide-react)[\\/]/,
              chunks: "all",
              priority: 20,
            },
            syntax: {
              name: "syntax-highlighter",
              test: /[\\/]node_modules[\\/](react-syntax-highlighter|highlight\.js)[\\/]/,
              chunks: "all",
              priority: 15,
            },
          },
        },
      }
    }

    return config
  },
  
  // Headers for caching
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ]
  },
}

export default nextConfig
