import { Metadata } from "next"
import { PricingPageContent } from "./pricing-content"
import { PagePerformanceTracker } from "@/components/performance-reporter"

export const metadata: Metadata = {
  title: "Professional Services & Pricing | Tran Anh Duc - Senior React Native Developer",
  description:
    "Enterprise-grade React Native, Next.js, and AI integration services. Premium development starting from $15/hour. Complete AI-powered applications from $2,500.",
  keywords: [
    "Senior React Native Developer Pricing",
    "AI Integration Services",
    "Enterprise App Development Cost",
    "React Native Expert Rates",
    "Next.js 15 Development Pricing",
    "AI-Powered App Development",
    "Premium Developer Services",
    "Enterprise Web Platform Cost",
  ],
  openGraph: {
    title: "Professional Services & Pricing | Tran Anh Duc - Senior React Native Developer",
    description:
      "Enterprise-grade development services for AI-powered mobile and web applications. Premium solutions for serious businesses.",
    url: "https://trananhducdev.com/pricing",
    siteName: "Tran Anh Duc",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Services & Pricing | Tran Anh Duc - Senior React Native Developer",
    description:
      "Competitive pricing for React Native and Full Stack development services. Starting from $15/hour.",
  },
  alternates: {
    canonical: "https://trananhducdev.com/pricing",
  },
}

export default function PricingPage() {
  return (
    <>
      <PagePerformanceTracker pageName="pricing" />
      <PricingPageContent />
    </>
  )
}
