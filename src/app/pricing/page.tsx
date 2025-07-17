import { Metadata } from "next"
import { ModernPricingPage } from "./modern-pricing-page"

export const metadata: Metadata = {
  title: "Hire Me - Pricing | Duc Tran",
  description:
    "Professional React/Next.js & React Native development services starting at $12/hour. Experienced developer with 4+ years creating scalable web and mobile applications.",
  keywords: [
    "React Developer for hire",
    "Next.js Developer pricing",
    "React Native Developer rates",
    "Freelance Developer",
    "Web Development Services",
    "Mobile App Development",
    "$12 per hour developer",
    "Duc Tran pricing",
    "TypeScript Developer",
    "Full Stack Developer",
  ],
  openGraph: {
    title: "Hire Duc Tran - React/Next.js Developer | Starting at $12/hour",
    description:
      "Professional React, Next.js & React Native development services with transparent pricing and quality guarantee. 4+ years of experience.",
    url: "https://kinhdev.id.vn/pricing",
    siteName: "Duc Tran",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/avt-card.png",
        width: 1200,
        height: 630,
        alt: "Duc Tran - Professional Developer for Hire",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire Duc Tran - React/Next.js Developer | $12/hour",
    description:
      "Professional React, Next.js & React Native development services with competitive rates and quality guarantee.",
    images: ["/images/avt-card.png"],
  },
  alternates: {
    canonical: "https://kinhdev.id.vn/pricing",
  },
}

export default function Page() {
  return <ModernPricingPage />
}
