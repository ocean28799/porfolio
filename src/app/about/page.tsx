import { Metadata } from "next"
import { ModernAboutPage } from "./modern-about-page"

export const metadata: Metadata = {
  title: "About | Duc Tran",
  description:
    "Learn more about Duc Tran - Cross-Platform React/Next.js Developer, AI integration specialist, and modern web development expert with 4+ years of experience.",
  keywords: [
    "Duc Tran",
    "About Duc",
    "About Kinh",
    "React Developer",
    "Next.js Developer",
    "React Native Developer",
    "Cross-Platform Developer",
    "Frontend Developer",
    "Component Architecture",
    "TypeScript",
    "AI Integration",
    "Vietnam Developer",
  ],
  openGraph: {
    title: "About | Duc Tran - Cross-Platform Developer",
    description:
      "Discover the story and journey of Duc Tran in React/Next.js/React Native development, AI integration, and modern cross-platform technologies.",
    url: "https://kinhdev.id.vn/about",
    siteName: "Duc Tran",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/avt-card.png",
        width: 1200,
        height: 630,
        alt: "Duc Tran - Cross-Platform Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Duc Tran - Cross-Platform Developer",
    description:
      "Learn more about Duc Tran - React/Next.js/React Native Developer, AI integration specialist, and cross-platform expert.",
    images: ["/images/avt-card.png"],
  },
  alternates: {
    canonical: "https://kinhdev.id.vn/about",
  },
}

export default function AboutPage() {
  return <ModernAboutPage />
}
