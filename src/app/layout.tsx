import { LayoutWithHeader } from "@/components/layout/layout-with-header"
import { ThemeProvider } from "@/components/theme-provider"
import { BackgroundProvider } from "@/contexts/background-context"
import { ThemeProvider as CustomThemeProvider } from "@/contexts/theme-context"
import { PerformanceReporter } from "@/components/performance-reporter"
import { I18nProvider } from "@/components/i18n-provider"
import { ChatbotClient } from "@/components/chatbot"
import { FloatingNavigation } from "@/components/layout/floating-navigation"
import { BackgroundToggle } from "@/components/ui/background-toggle"
import { AdvancedParticleBackground } from "@/components/features/backgrounds/advanced-particle-background"
import "@/styles/globals.css"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next"

import { Exo_2 } from "next/font/google"

const exo2 = Exo_2({
  subsets: ["latin", "vietnamese", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-exo2",
})

export const metadata: Metadata = {
  title: "Tran Anh Duc | Senior React Native & AI Integration Specialist Portfolio",
  description:
    "Senior React Native and AI Integration Specialist with 4+ years of proven expertise. Successfully deployed 50+ enterprise-grade applications across 15+ countries, serving millions of users with cutting-edge React Native, Next.js 15, and AI-powered solutions.",
  keywords: [
    "Senior React Native Developer",
    "AI Integration Architect", 
    "Next.js 15 Expert",
    "Enterprise App Developer",
    "OpenAI Integration Specialist",
    "Tran Anh Duc Portfolio",
    "Cross-platform Solutions Expert",
    "AI-Powered Mobile Apps",
    "TypeScript Expert",
    "Performance Optimization",
    "Enterprise Development",
    "Remote Developer",
    "Vietnam Developer",
    "Mobile App Performance",
    "Scalable Applications",
  ],
  openGraph: {
    title: "Tran Anh Duc | Senior React Native & AI Integration Specialist Portfolio",
    description:
      "Senior developer with 4+ years of proven expertise in enterprise-grade applications. 50+ apps deployed worldwide with cutting-edge React Native, Next.js 15, and AI integration.",
    url: "https://porfolio-eight-henna.vercel.app",
    type: "website",
    images: [
      {
        url: "https://porfolio-eight-henna.vercel.app/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tran Anh Duc - React Native + AI Integration Specialist Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tran Anh Duc | React Native + AI Integration Specialist Portfolio",
    description:
      "Explore Tran Anh Duc's React Native and AI integration projects featuring OpenAI, TensorFlow, and modern cross-platform development.",
    images: [
      "https://porfolio-eight-henna.vercel.app/images/og-image.png",
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
                <LayoutWithHeader>{children}</LayoutWithHeader>
                <ChatbotClient />
                <PerformanceReporter />
                <FloatingNavigation />
                <BackgroundToggle />
                <AdvancedParticleBackground />
              </BackgroundProvider>
            </CustomThemeProvider>
          </I18nProvider>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
