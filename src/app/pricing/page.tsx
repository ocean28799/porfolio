import { Metadata } from "next"
import { PricingPageContent } from "./pricing-content"
import { PagePerformanceTracker } from "@/components/performance-reporter"

export const metadata: Metadata = {
  title: "Pricing & Services | Tran Anh Duc - React Native & AI Developer",
  description:
    "Simple, transparent pricing for premium development services. AI-powered mobile apps from $2,500, enterprise web platforms from $1,800, or flexible hourly consulting at $15/hour.",
  keywords: [
    "React Native Developer Pricing",
    "AI App Development Cost",
    "Mobile App Development Rates",
    "Full Stack Developer Pricing",
    "Next.js Development Services",
    "AI Integration Services",
    "Freelance Developer Rates",
    "Enterprise App Development",
  ],
  openGraph: {
    title: "Pricing & Services | Tran Anh Duc - React Native & AI Developer",
    description:
      "Simple, transparent pricing for premium development. AI-powered apps, enterprise platforms, and flexible consulting — quality that delivers results.",
    url: "https://porfolio-eight-henna.vercel.app/pricing",
    siteName: "Tran Anh Duc",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing & Services | Tran Anh Duc - React Native & AI Developer",
    description:
      "Premium development at competitive rates. AI mobile apps from $2,500, web platforms from $1,800, consulting at $15/hour.",
  },
  alternates: {
    canonical: "https://porfolio-eight-henna.vercel.app/pricing",
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
