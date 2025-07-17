"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Clock, TrendingUp } from "lucide-react"

const techNews = [
  {
    id: 1,
    title: "React 19 Stable Release: New Compiler & Server Components",
    source: "React Blog",
    time: "2 hours ago",
    category: "React",
    link: "https://react.dev/blog",
    trending: true,
  },
  {
    id: 2,
    title: "Next.js 15: Enhanced App Router & Turbopack Improvements",
    source: "Vercel",
    time: "4 hours ago",
    category: "Next.js",
    link: "https://nextjs.org/blog",
    trending: true,
  },
  {
    id: 3,
    title: "React Native 0.75: New Architecture & Performance Boosts",
    source: "Meta Developers",
    time: "6 hours ago",
    category: "React Native",
    link: "https://reactnative.dev/blog",
    trending: false,
  },
  {
    id: 4,
    title: "TypeScript 5.6: Enhanced Type Inference & Error Messages",
    source: "Microsoft",
    time: "8 hours ago",
    category: "TypeScript",
    link: "https://devblogs.microsoft.com/typescript/",
    trending: false,
  },
  {
    id: 5,
    title: "Expo SDK 52: Universal Native Modules & Web Support",
    source: "Expo Team",
    time: "12 hours ago",
    category: "Expo",
    link: "https://expo.dev/blog",
    trending: false,
  },
  {
    id: 6,
    title: "Vite 6.0: Lightning Fast HMR & Enhanced Plugin System",
    source: "Vite Team",
    time: "1 day ago",
    category: "Vite",
    link: "https://vitejs.dev/blog/",
    trending: false,
  },
]

export const TechNewsFeed = () => {
  const [mounted, setMounted] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % techNews.length)
    }, 4000) // Change news every 4 seconds

    return () => clearInterval(interval)
  }, [mounted])

  if (!mounted) {
    return (
      <div className="w-full h-[352px] rounded-xl bg-gray-200 dark:bg-gray-800 animate-pulse" />
    )
  }

  const currentNews = techNews[currentIndex]
  const visibleNews = techNews.slice(0, 4) // Show first 4 items in the list

  return (
    <div className="relative w-full h-full p-6 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 rounded-xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Tech Feed
          </h3>
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-400">
          Live Updates
        </div>
      </div>

      {/* Featured News */}
      <div className="mb-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentNews.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 shadow-sm"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded">
                  {currentNews.category}
                </span>
                {currentNews.trending && (
                  <div className="flex items-center gap-1 text-orange-500">
                    <TrendingUp className="w-3 h-3" />
                    <span className="text-xs font-medium">Trending</span>
                  </div>
                )}
              </div>
              <a
                href={currentNews.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
              {currentNews.title}
            </h4>
            <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
              <span>{currentNews.source}</span>
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>{currentNews.time}</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* News List */}
      <div className="space-y-3">
        <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Recent Updates
        </h4>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {visibleNews.map((news, index) => (
            <motion.div
              key={news.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`flex items-center justify-between p-3 rounded-lg transition-colors cursor-pointer ${
                news.id === currentNews.id
                  ? "bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800"
                  : "bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
              onClick={() => setCurrentIndex(techNews.findIndex(n => n.id === news.id))}
            >
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-gray-900 dark:text-white truncate">
                  {news.title}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {news.source} • {news.time}
                </p>
              </div>
              {news.trending && (
                <TrendingUp className="w-3 h-3 text-orange-500 flex-shrink-0 ml-2" />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="absolute bottom-4 left-6 right-6">
        <div className="flex gap-1">
          {techNews.map((_, index) => (
            <div
              key={index}
              className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                index === currentIndex
                  ? "bg-blue-500"
                  : "bg-gray-300 dark:bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
