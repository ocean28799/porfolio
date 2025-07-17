"use client"

import { motion } from "framer-motion"
import { 
  IconBrain, 
  IconCode, 
  IconDeviceGamepad2,
  IconSparkles,
  IconBrandReact,
  IconBrandNextjs,
  IconChevronRight,
  IconExternalLink,
  IconCalendar,
  IconTrendingUp
} from "@tabler/icons-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const techCategories = [
  { name: "AI & ML", icon: IconBrain, color: "bg-purple-500/20 text-purple-400 border-purple-500/30" },
  { name: "React", icon: IconBrandReact, color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
  { name: "Next.js", icon: IconBrandNextjs, color: "bg-gray-500/20 text-gray-400 border-gray-500/30" },
  { name: "Gaming", icon: IconDeviceGamepad2, color: "bg-green-500/20 text-green-400 border-green-500/30" },
  { name: "React Native", icon: IconCode, color: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30" },
]

const featuredNews = [
  {
    id: 1,
    title: "Google Gemini 2.0 Flash: Revolutionary AI Model for 2025",
    category: "AI & ML",
    description: "Google unveils Gemini 2.0 Flash with enhanced multimodal capabilities, faster inference, and breakthrough performance in coding and reasoning tasks.",
    date: "2025-01-15",
    readTime: "5 min read",
    trending: true,
    url: "https://blog.google/technology/ai/google-gemini-2-0/",
    image: "/images/tech-feed/gemini.jpg"
  },
  {
    id: 2,
    title: "React 19 Stable Release: Concurrent Features & Server Components",
    category: "React",
    description: "React 19 brings stable concurrent features, improved Server Components, and new hooks for better developer experience and performance.",
    date: "2024-12-05",
    readTime: "8 min read",
    trending: true,
    url: "https://react.dev/blog/2024/12/05/react-19",
    image: "/images/tech-feed/react19.jpg"
  },
  {
    id: 3,
    title: "Next.js 15: Turbopack Stable & Enhanced App Router",
    category: "Next.js",
    description: "Next.js 15 introduces stable Turbopack, improved caching strategies, and enhanced App Router with better performance and developer experience.",
    date: "2024-10-21",
    readTime: "6 min read",
    trending: false,
    url: "https://nextjs.org/blog/next-15",
    image: "/images/tech-feed/nextjs15.jpg"
  },
  {
    id: 4,
    title: "Unity 2024.2: AI-Powered Game Development Tools",
    category: "Gaming",
    description: "Unity's latest release features AI-assisted level design, procedural content generation, and improved performance for mobile gaming.",
    date: "2024-11-30",
    readTime: "7 min read",
    trending: true,
    url: "https://unity.com/releases/2024-2",
    image: "/images/tech-feed/unity.jpg"
  },
  {
    id: 5,
    title: "React Native 0.76: New Architecture & Fabric Renderer",
    category: "React Native",
    description: "React Native 0.76 brings the new architecture to stable, with Fabric renderer and TurboModules for better performance and native integration.",
    date: "2024-12-12",
    readTime: "9 min read",
    trending: false,
    url: "https://reactnative.dev/blog/2024/12/12/0.76-stable",
    image: "/images/tech-feed/rn076.jpg"
  },
  {
    id: 6,
    title: "OpenAI GPT-5 Development: What We Know So Far",
    category: "AI & ML",
    description: "Insights into OpenAI's next-generation GPT-5 model, expected capabilities, and impact on AI development ecosystem.",
    date: "2025-01-10",
    readTime: "4 min read",
    trending: true,
    url: "https://openai.com/blog/gpt-5-development",
    image: "/images/tech-feed/gpt5.jpg"
  }
]

const aiUpdates = [
  {
    title: "Claude 3.5 Sonnet: Enhanced Coding Capabilities",
    company: "Anthropic",
    date: "2024-12-20",
    type: "Model Update"
  },
  {
    title: "GitHub Copilot Chat: IDE Integration Improvements",
    company: "GitHub",
    date: "2024-12-15",
    type: "Feature Release"
  },
  {
    title: "Cursor AI: New Predictive Editing Features",
    company: "Cursor",
    date: "2024-12-10",
    type: "Product Update"
  }
]

export function TechFeedPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="p-3 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30"
            >
              <IconSparkles className="w-8 h-8 text-purple-400" />
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
              Tech Feed
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest breakthroughs in AI, React ecosystem, gaming technology, and cutting-edge development tools. 
            Following trends that inspire modern web and mobile development.
          </p>
          
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mt-8"
          >
            {techCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index, duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  className="cursor-pointer"
                >
                  <Badge className={`${category.color} px-4 py-2 text-sm font-medium border hover:shadow-lg transition-all duration-300`}>
                    <Icon className="w-4 h-4 mr-2" />
                    {category.name}
                  </Badge>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>

        {/* Trending Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3">
            <IconTrendingUp className="w-6 h-6 text-orange-400" />
            <h2 className="text-3xl font-bold text-foreground">Trending Now</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-orange-400/30 to-transparent"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {featuredNews.filter(news => news.trending).slice(0, 4).map((news, index) => (
              <motion.div
                key={news.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border-muted hover:border-purple-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10">
                  <CardHeader className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30">
                        <IconTrendingUp className="w-3 h-3 mr-1" />
                        Trending
                      </Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <IconCalendar className="w-4 h-4 mr-1" />
                        {new Date(news.date).toLocaleDateString()}
                      </div>
                    </div>
                    <CardTitle className="group-hover:text-purple-400 transition-colors duration-300">
                      {news.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {news.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">
                        {news.category}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{news.readTime}</span>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="w-full group-hover:bg-purple-500/10 group-hover:text-purple-400 transition-all duration-300"
                    >
                      Read More
                      <IconChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* AI Quick Updates */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3">
            <IconBrain className="w-6 h-6 text-purple-400" />
            <h2 className="text-3xl font-bold text-foreground">AI Quick Updates</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-purple-400/30 to-transparent"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {aiUpdates.map((update, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <Card className="bg-card/30 backdrop-blur-sm border-muted hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                  <CardContent className="p-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 text-xs">
                        {update.type}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {new Date(update.date).toLocaleDateString()}
                      </span>
                    </div>
                    <h3 className="font-semibold group-hover:text-cyan-400 transition-colors duration-300">
                      {update.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{update.company}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* All Articles */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3">
            <IconCode className="w-6 h-6 text-cyan-400" />
            <h2 className="text-3xl font-bold text-foreground">Latest Articles</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/30 to-transparent"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {featuredNews.map((news, index) => (
              <motion.div
                key={news.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <Card className="h-full bg-card/40 backdrop-blur-sm border-muted hover:border-green-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/10">
                  <CardHeader className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">
                        {news.category}
                      </Badge>
                      {news.trending && (
                        <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 text-xs">
                          Hot
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-lg group-hover:text-green-400 transition-colors duration-300">
                      {news.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {news.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <IconCalendar className="w-4 h-4 mr-1" />
                        {new Date(news.date).toLocaleDateString()}
                      </div>
                      <span>{news.readTime}</span>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="w-full group-hover:bg-green-500/10 group-hover:text-green-400 transition-all duration-300"
                    >
                      Read Article
                      <IconExternalLink className="w-4 h-4 ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center space-y-6 py-12"
        >
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Stay Ahead of the Curve
            </h2>
            <p className="text-muted-foreground">
              Want to collaborate on React, React Native, or Next.js projects with modern AI-inspired design? Let&apos;s build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0"
              >
                <IconBrain className="w-5 h-5 mr-2" />
                Discuss React Projects
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-green-500/30 text-green-400 hover:bg-green-500/10"
              >
                <IconDeviceGamepad2 className="w-5 h-5 mr-2" />
                Modern UI/UX Projects
              </Button>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
