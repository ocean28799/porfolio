"use client"

import Script from "next/script"

export function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Tran Anh Duc",
    "alternateName": "Duc Tran",
    "jobTitle": "Senior React Native & AI Integration Specialist",
    "description": "Senior React Native and AI Integration Specialist with 5+ years of expertise. Delivered 60+ enterprise apps across 20+ countries serving 3M+ users.",
    "url": "https://porfolio-eight-henna.vercel.app",
    "image": "https://porfolio-eight-henna.vercel.app/images/og-image.png",
    "email": "trananhducdev@gmail.com",
    "sameAs": [
      "https://github.com/ocean28799",
      "https://linkedin.com/in/trananhducdev",
      "https://twitter.com/trananhducdev"
    ],
    "knowsAbout": [
      "React Native",
      "Next.js",
      "TypeScript",
      "OpenAI GPT-4",
      "AI Integration",
      "Mobile App Development",
      "Cross-Platform Development",
      "LangChain",
      "RAG Systems"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance / Remote"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ho Chi Minh City",
      "addressCountry": "Vietnam"
    }
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Tran Anh Duc Portfolio",
    "alternateName": "TAD Portfolio",
    "url": "https://porfolio-eight-henna.vercel.app",
    "description": "Portfolio website of Tran Anh Duc - Senior React Native & AI Integration Specialist",
    "author": {
      "@type": "Person",
      "name": "Tran Anh Duc"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://porfolio-eight-henna.vercel.app/projects?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Projects Portfolio",
    "description": "Collection of React Native and AI integration projects by Tran Anh Duc",
    "numberOfItems": 8,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "AI Virtual Assistant - React Native + Next.js",
        "url": "https://porfolio-eight-henna.vercel.app/projects/ai-virtual-assistant-react-native-nextjs"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Smart Analytics & Business Intelligence App",
        "url": "https://porfolio-eight-henna.vercel.app/projects/smart-analytics-business-intelligence-app"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "AI Content Creation & Marketing Platform",
        "url": "https://porfolio-eight-henna.vercel.app/projects/ai-content-creation-marketing-platform"
      }
    ]
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://porfolio-eight-henna.vercel.app"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Projects",
        "item": "https://porfolio-eight-henna.vercel.app/projects"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "About",
        "item": "https://porfolio-eight-henna.vercel.app/about"
      }
    ]
  }

  return (
    <>
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="portfolio-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        strategy="afterInteractive"
      />
    </>
  )
}
