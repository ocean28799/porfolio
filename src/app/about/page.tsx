import { Metadata } from "next"
import { AboutPageContent } from "./about-content"
import { PagePerformanceTracker } from "@/components/performance-reporter"

export const metadata: Metadata = {
  title: "About | Tran Anh Duc - Senior React Native & AI Integration Specialist",
  description:
    "Meet Tran Anh Duc - Senior React Native and AI Integration Specialist with 4+ years of proven expertise. Successfully deployed 50+ applications across 15+ countries.",
  keywords: [
    "Tran Anh Duc",
    "Senior React Native Developer",
    "AI Integration Specialist",
    "React Native Expert",
    "Next.js 15 Developer",
    "Enterprise App Developer",
    "Mobile App Architect",
    "AI-Powered Applications",
    "Cross-platform Expert",
    "Performance Specialist",
  ],
  openGraph: {
    title: "About | Tran Anh Duc - Senior React Native & AI Integration Specialist",
    description:
      "Senior developer with 4+ years of proven expertise in enterprise-grade mobile and web applications. 50+ apps deployed worldwide.",
    url: "https://porfolio-eight-henna.vercel.app/about",
    siteName: "Tran Anh Duc",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Tran Anh Duc - Senior React Native & AI Integration Specialist",
    description:
      "Learn more about Tran Anh Duc - Senior React Native and AI Integration Specialist with 4+ years of experience.",
  },
  alternates: {
    canonical: "https://porfolio-eight-henna.vercel.app/about",
  },
}

export default function AboutPage() {
  return (
    <>
      <PagePerformanceTracker pageName="about" />
      <AboutPageContent />
    </>
  )
}
