// Import all individual article files
import { reactNativeNextjsExpertJourney2025 } from './articles/react-native-nextjs-expert-journey-2025'
import { reactNativeNativeModulesAdvanced2025 } from './articles/react-native-native-modules-advanced-2025'
import { nextjsAppRouterExpert2025 } from './articles/nextjs-app-router-expert-2025'
import { aiIntegrationMobileDev2025 } from './articles/ai-integration-mobile-dev-2025'
import { mobilePerformanceOptimization2025 } from './articles/mobile-performance-optimization-2025'

export type DifficultyLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert"

export interface BlogArticle {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  category: "React Native" | "Next.js" | "AI Integration" | "Performance" | "Mobile Development"
  readTime: string
  publishDate: string
  tags: string[]
  featured: boolean
  difficulty?: DifficultyLevel
  relatedArticles?: string[] // slugs of related articles
  author: {
    name: string
    avatar: string
    bio: string
  }
}

// Export all articles as a single array with difficulty levels added
export const BLOG_ARTICLES: BlogArticle[] = [
  { ...reactNativeNextjsExpertJourney2025, difficulty: "Intermediate", relatedArticles: ["react-native-native-modules-advanced-2025", "nextjs-app-router-expert-2025"] },
  { ...reactNativeNativeModulesAdvanced2025, difficulty: "Advanced", relatedArticles: ["react-native-nextjs-expert-journey-2025", "mobile-performance-optimization-2025"] },
  { ...nextjsAppRouterExpert2025, difficulty: "Intermediate", relatedArticles: ["react-native-nextjs-expert-journey-2025", "ai-integration-mobile-dev-2025"] },
  { ...aiIntegrationMobileDev2025, difficulty: "Advanced", relatedArticles: ["nextjs-app-router-expert-2025", "react-native-nextjs-expert-journey-2025"] },
  { ...mobilePerformanceOptimization2025, difficulty: "Expert", relatedArticles: ["react-native-native-modules-advanced-2025", "react-native-nextjs-expert-journey-2025"] },
]
