"use client"

import { useState, useMemo } from "react"
import { useTranslation } from 'react-i18next'
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, ArrowRight, Search, BookOpen, Sparkles, TrendingUp, Users, Filter, BarChart2 } from "lucide-react"
import Link from "next/link"
import { BlogArticle, BLOG_ARTICLES, DifficultyLevel } from "@/lib/constants/blog-articles"
import { cn } from "@/lib/utils"

// Difficulty badge colors
const getDifficultyColor = (difficulty?: DifficultyLevel) => {
  switch(difficulty) {
    case "Beginner": return "bg-green-500/20 text-green-400 border-green-500/30"
    case "Intermediate": return "bg-blue-500/20 text-blue-400 border-blue-500/30"
    case "Advanced": return "bg-orange-500/20 text-orange-400 border-orange-500/30"
    case "Expert": return "bg-red-500/20 text-red-400 border-red-500/30"
    default: return "bg-slate-500/20 text-slate-400 border-slate-500/30"
  }
}

export function BlogListing() {
  const { t } = useTranslation()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  // Get translated categories
  const CATEGORIES = [
    t('blog.categories.all'),
    t('blog.categories.reactNative'),
    t('blog.categories.nextjs'),
    t('blog.categories.ai'),
    t('blog.categories.performance'),
    t('blog.categories.mobiledev')
  ]

  const filteredArticles = useMemo(() => {
    return BLOG_ARTICLES.filter(article => {
      const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      
      const matchesCategory = selectedCategory === "All" || article.category === selectedCategory
      
      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  const featuredArticles = BLOG_ARTICLES.filter(article => article.featured).slice(0, 3)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 dark:from-slate-900 via-white dark:via-slate-900 to-slate-100 dark:to-slate-800 text-slate-900 dark:text-white pt-20">
      {/* Optimized Static Background - no blur for performance */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ willChange: 'transform' }}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(16,185,129,0.08),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(16,185,129,0.05),transparent)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_100%,rgba(59,130,246,0.06),transparent)] dark:bg-[radial-gradient(ellipse_60%_40%_at_80%_100%,rgba(59,130,246,0.04),transparent)]"></div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-6xl mx-auto py-8 sm:py-12 px-4 sm:px-6 relative z-10">
        
        {/* Hero Section */}
        <div className="text-center mb-10 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 backdrop-blur-sm border border-emerald-500/30 rounded-full">
              <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-600 dark:text-emerald-400" />
              <span className="text-emerald-700 dark:text-emerald-300 text-xs sm:text-sm font-medium">{BLOG_ARTICLES.length} {t('blog.articlesAvailable')}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 dark:from-white via-emerald-700 dark:via-emerald-200 to-blue-700 dark:to-blue-200 bg-clip-text text-transparent leading-tight px-2">
              {t('blog.title')}
            </h1>
            
            <p className="text-base sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed px-4">
              {t('blog.subtitle')}
            </p>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-slate-500 dark:text-slate-400 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-500 dark:text-emerald-400" />
                <span>{t('blog.weeklyUpdates')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 dark:text-blue-400" />
                <span>10K+ {t('blog.readers')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-purple-500 dark:text-purple-400" />
                <span>{t('blog.expertContent')}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Search and Filters */}
        <div className="mb-10 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4 sm:space-y-6"
          >
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4 sm:w-5 sm:h-5" />
                <Input
                  placeholder="Search articles, technologies, topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 sm:pl-12 pr-4 h-12 sm:h-14 text-sm sm:text-base bg-white dark:bg-slate-800/50 backdrop-blur-sm border-slate-300 dark:border-slate-700/50 focus:border-emerald-500 rounded-xl text-slate-900 dark:text-white placeholder:text-slate-400"
                />
              </div>
            </div>
            
            {/* Category Filters */}
            <div className="flex justify-center overflow-x-auto pb-2">
              <div className="flex items-center gap-2 p-1.5 sm:p-2 bg-slate-100 dark:bg-slate-800/30 backdrop-blur-sm border border-slate-200 dark:border-slate-700/50 rounded-xl">
                <div className="hidden sm:flex items-center gap-2 px-3 py-2">
                  <Filter className="w-4 h-4 text-slate-400" />
                  <span className="text-sm text-slate-600 dark:text-slate-300 font-medium">{t('blog.filter')}:</span>
                </div>
                <div className="flex gap-1 sm:gap-2 flex-nowrap overflow-x-auto">
                  {CATEGORIES.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                      className={cn(
                        "rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap",
                        selectedCategory === category 
                          ? "bg-gradient-to-r from-emerald-600 to-blue-600 text-white shadow-lg" 
                          : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700/50"
                      )}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Featured Articles */}
        {selectedCategory === "All" && searchQuery === "" && (
          <div className="mb-10 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">{t('blog.featuredArticles')}</h2>
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {featuredArticles.map((article, index) => (
                  <FeaturedArticleCard key={article.id} article={article} index={index} />
                ))}
              </div>
            </motion.div>
          </div>
        )}

        {/* All Articles */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 sm:mb-8">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  {selectedCategory === "All" ? "All Articles" : `${selectedCategory} Articles`}
                </h2>
              </div>
              <div className="text-slate-500 dark:text-slate-400 text-sm">
                {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''}
              </div>
            </div>
            
            {filteredArticles.length > 0 ? (
              <div className="space-y-4 sm:space-y-6">
                {filteredArticles.map((article, index) => (
                  <ArticleCard key={article.id} article={article} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 sm:py-16">
                <div className="max-w-md mx-auto space-y-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-full bg-slate-100 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700/50 flex items-center justify-center">
                    <Search className="w-6 h-6 sm:w-8 sm:h-8 text-slate-400" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">{t('blog.noArticlesFound')}</h3>
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
                    {t('blog.tryDifferentSearch')}
                  </p>
                  <Button
                    onClick={() => {
                      setSearchQuery("")
                      setSelectedCategory("All")
                    }}
                    className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-500 hover:to-blue-500 text-white px-6 py-2 rounded-lg font-medium"
                  >
                    {t('blog.clearFilters')}
                  </Button>
                </div>
              </div>
            )}
          </motion.div>
        </div>

      </div>
    </div>
  )
}

function FeaturedArticleCard({ article, index }: { article: BlogArticle; index: number }) {
  const { t } = useTranslation()
  const getCategoryColor = (category: string) => {
    switch(category) {
      case "React Native": return "from-blue-500 to-cyan-500"
      case "Next.js": return "from-purple-500 to-pink-500"
      case "AI Integration": return "from-emerald-500 to-teal-500"
      case "Performance": return "from-orange-500 to-red-500"
      case "Mobile Development": return "from-indigo-500 to-blue-500"
      default: return "from-slate-500 to-slate-600"
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
      className="group"
    >
      <Link href={`/blog/${article.slug}`}>
        <article className="p-4 sm:p-6 bg-white dark:bg-slate-800/30 backdrop-blur-sm border border-slate-200 dark:border-slate-700/50 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-300 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10 space-y-3 sm:space-y-4 group-hover:-translate-y-1">
          {/* Header */}
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className={cn(
              "inline-flex items-center gap-2 px-2 sm:px-3 py-1 rounded-lg text-xs font-medium text-white",
              "bg-gradient-to-r", getCategoryColor(article.category)
            )}>
              {article.category}
            </div>
            <div className="flex items-center gap-2">
              {/* Difficulty Badge */}
              {article.difficulty && (
                <span className={cn(
                  "px-2 py-0.5 rounded text-xs font-medium border",
                  getDifficultyColor(article.difficulty)
                )}>
                  {article.difficulty}
                </span>
              )}
            </div>
          </div>
          
          {/* Title */}
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors leading-tight line-clamp-2">
            {article.title}
          </h3>
          
          {/* Excerpt */}
          <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed line-clamp-3">
            {article.excerpt}
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-1">
            {article.tags.slice(0, 3).map((tag) => (
              <span 
                key={tag} 
                className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 rounded"
              >
                #{tag}
              </span>
            ))}
          </div>
          
          {/* Footer */}
          <div className="flex items-center justify-between pt-3 border-t border-slate-200 dark:border-slate-700/50">
            <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>{article.readTime}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span>{new Date(article.publishDate).toLocaleDateString()}</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 group-hover:gap-3 transition-all">
              <span className="text-xs font-medium">{t('blog.read')}</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  )
}

function ArticleCard({ article, index }: { article: BlogArticle; index: number }) {
  const { t } = useTranslation()
  const getCategoryColor = (category: string) => {
    switch(category) {
      case "React Native": return "from-blue-500 to-cyan-500"
      case "Next.js": return "from-purple-500 to-pink-500"
      case "AI Integration": return "from-emerald-500 to-teal-500"
      case "Performance": return "from-orange-500 to-red-500"
      case "Mobile Development": return "from-indigo-500 to-blue-500"
      default: return "from-slate-500 to-slate-600"
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
      className="group"
    >
      <Link href={`/blog/${article.slug}`}>
        <article className="p-4 sm:p-6 bg-white dark:bg-slate-800/30 backdrop-blur-sm border border-slate-200 dark:border-slate-700/50 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-300 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10 group-hover:-translate-y-1">
          <div className="space-y-3 sm:space-y-4">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2 flex-wrap">
                <div className={cn(
                  "inline-flex items-center gap-2 px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm font-medium text-white",
                  "bg-gradient-to-r", getCategoryColor(article.category)
                )}>
                  {article.category}
                </div>
                {/* Difficulty Badge */}
                {article.difficulty && (
                  <span className={cn(
                    "px-2 py-1 rounded text-xs font-medium border flex items-center gap-1",
                    getDifficultyColor(article.difficulty)
                  )}>
                    <BarChart2 className="w-3 h-3" />
                    {article.difficulty}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>{article.readTime}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>{new Date(article.publishDate).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
            
            {/* Title */}
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors leading-tight">
              {article.title}
            </h3>
            
            {/* Excerpt */}
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2 text-sm sm:text-base">
              {article.excerpt}
            </p>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {article.tags.slice(0, 4).map((tag) => (
                <span 
                  key={tag} 
                  className="text-xs sm:text-sm px-2 py-1 bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 rounded"
                >
                  #{tag}
                </span>
              ))}
              {article.tags.length > 4 && (
                <span className="text-xs sm:text-sm px-2 py-1 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-300 rounded">
                  +{article.tags.length - 4} more
                </span>
              )}
            </div>
            
            {/* Read More */}
            <div className="flex items-center gap-3 text-emerald-600 dark:text-emerald-400 group-hover:gap-4 transition-all pt-2">
              <span className="font-medium text-sm sm:text-base">{t('blog.readArticle')}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  )
}
