import { LayoutWithHeader } from "@/components/layout/layout-with-header"
import { ThemeProvider } from "@/components/theme-provider"
import { BackgroundProvider } from "@/contexts/background-context"
import { ThemeProvider as CustomThemeProvider } from "@/contexts/theme-context"
import { PerformanceReporter } from "@/components/performance-reporter"
import { I18nProvider } from "@/components/i18n-provider"
import { ConditionalUIFeatures } from "@/components/layout/conditional-ui-features"
import { JsonLd } from "@/components/seo/json-ld"
import { PWAProvider } from "@/components/pwa-provider"
import "@/styles/globals.css"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next"

import { Exo_2 } from "next/font/google"

const exo2 = Exo_2({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-exo2",
})

export const metadata: Metadata = {
  title: "Tran Anh Duc | Senior Mobile & AI Solutions Architect | 60+ Apps • 3M+ Users",
  description:
    "Senior Mobile & AI Solutions Architect with 5+ years delivering enterprise-scale applications. 60+ apps shipped serving 3M+ users across 20+ countries. Expertise in React Native, Next.js 15, AI/ML integration (GPT-4, Claude, TensorFlow). Track record: 40% faster development, 60% performance gains, $2M+ client revenue generated.",
  keywords: [
    "Senior Mobile Developer",
    "AI Solutions Architect", 
    "React Native Expert",
    "Next.js 15 Developer",
    "Enterprise App Developer",
    "AI/ML Integration",
    "Tran Anh Duc",
    "Full Stack Engineer",
    "Cross-Platform Developer",
    "TypeScript Expert",
    "Performance Engineer",
    "Remote Software Engineer",
    "Vietnam Tech Talent",
    "Scalable Systems",
    "GPT-4 Integration",
    "LangChain Developer",
    "RAG Systems Expert",
    "Machine Learning",
    "Mobile Architecture",
    "Tech Lead",
  ],
  openGraph: {
    title: "Tran Anh Duc | Senior Mobile & AI Solutions Architect",
    description:
      "5+ years • 60+ apps • 3M+ users • 20+ countries. Senior engineer delivering enterprise-scale mobile and AI solutions with measurable business impact.",
    url: "https://porfolio-eight-henna.vercel.app",
    type: "website",
    images: [
      {
        url: "https://porfolio-eight-henna.vercel.app/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tran Anh Duc - Senior Mobile & AI Solutions Architect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tran Anh Duc | Senior Mobile & AI Solutions Architect",
    description:
      "Building enterprise-scale mobile & AI applications. 60+ apps • 3M+ users • React Native • Next.js • GPT-4 • TensorFlow",
    images: [
      "https://porfolio-eight-henna.vercel.app/images/og-image.png",
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://porfolio-eight-henna.vercel.app"),
  alternates: {
    canonical: "/",
    languages: {
      "en": "/",
      "vi": "/?lang=vi",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#10b981" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="TAD Portfolio" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
      </head>
      <body
        className={`${exo2.variable} antialiased scroll-smooth w-full max-w-dvw overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <I18nProvider>
            <CustomThemeProvider>
              <BackgroundProvider>
                <PWAProvider>
                  <LayoutWithHeader>{children}</LayoutWithHeader>
                  <ConditionalUIFeatures />
                  <PerformanceReporter />
                </PWAProvider>
              </BackgroundProvider>
            </CustomThemeProvider>
          </I18nProvider>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
        <JsonLd />
      </body>
    </html>
  )
}
