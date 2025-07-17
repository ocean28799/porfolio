import { LayoutWithHeader } from "@/components/layout/layout-with-header"
import { ThemeProvider } from "@/components/theme-provider"
import { BackToTopButton } from "@/components/ui/back-to-top"
import { FancyCursor } from "@/components/ui/fancy-cursor"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import "@/styles/globals.css"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next"
import { Suspense } from "react"

import { Exo_2 } from "next/font/google"

const exo2 = Exo_2({
  subsets: ["latin", "vietnamese", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-exo2",
})

export const metadata: Metadata = {
  title: "Duc Tran | React/Next.js Developer Portfolio",
  description:
    "Explore Duc Tran's portfolio – a skilled React/Next.js Developer specializing in modern React ecosystem, TypeScript, and high-performance web applications. Building scalable, component-driven solutions.",
  keywords: [
    "React Developer",
    "Next.js Developer",
    "Frontend Developer",
    "TypeScript Developer",
    "Component Architecture",
    "React Hooks",
    "State Management",
    "Performance Optimization",
    "Duc Tran Portfolio",
    "Web Development",
    "UI/UX Design",
    "JavaScript",
    "Modern Web Technologies",
  ],
  openGraph: {
    title: "Duc Tran | React/Next.js Developer Portfolio",
    description:
      "Discover Duc Tran's expertise in React and Next.js Development. Specialized in building scalable, performant applications with modern React patterns, TypeScript, and component-driven architecture.",
    url: "https://kinhdev.id.vn",
    type: "website",
    images: [
      {
        url: "https://voocgavdbpy2gucg.public.blob.vercel-storage.com/open-graph-6fkPvt3jl60AhDWy2pPhfp3PKoZPrZ.png",
        width: 1200,
        height: 630,
        alt: "Duc Tran - React/Next.js Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Duc Tran | React/Next.js Developer Portfolio",
    description:
      "Explore Duc Tran's React/Next.js projects and expertise in modern component-driven development.",
    images: [
      "https://voocgavdbpy2gucg.public.blob.vercel-storage.com/open-graph-6fkPvt3jl60AhDWy2pPhfp3PKoZPrZ.png",
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
          <Suspense fallback={null}>
            <FancyCursor />
          </Suspense>
          <ScrollProgress />
          <LayoutWithHeader>{children}</LayoutWithHeader>
          <Suspense fallback={null}>
            <BackToTopButton />
          </Suspense>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
