"use client"

import { useState, useMemo } from "react"
import { useTranslation } from 'react-i18next'
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, ArrowRight, Search, BookOpen, Sparkles, TrendingUp, Users, Filter } from "lucide-react"
import Link from "next/link"
import { BlogArticle, BLOG_ARTICLES } from "@/lib/constants/blog-articles"
import { cn } from "@/lib/utils"

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
    <div className="min-h-screen text-white pt-20">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '-2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/3 rounded-full blur-3xl animate-pulse" style={{animationDelay: '-4s'}}></div>
        
        {/* Floating particles */}
        <div className="absolute top-10 left-10 w-2 h-2 bg-white/20 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-emerald-400/40 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-32 w-1.5 h-1.5 bg-blue-400/40 rounded-full animate-pulse"></div>
        <div className="absolute top-60 left-1/4 w-1 h-1 bg-purple-400/40 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-60 right-1/4 w-2 h-2 bg-pink-400/30 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-6xl mx-auto py-12 px-4 relative z-10">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 backdrop-blur-sm border border-emerald-500/30 rounded-full">
              <BookOpen className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-300 text-sm font-medium">{BLOG_ARTICLES.length} {t('blog.articlesAvailable')}</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-emerald-200 to-blue-200 bg-clip-text text-transparent leading-tight">
              {t('blog.title')}
            </h1>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              {t('blog.subtitle')}
            </p>

            <div className="flex flex-wrap justify-center gap-8 text-slate-400 text-sm">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                <span>{t('blog.weeklyUpdates')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-400" />
                <span>10K+ {t('blog.readers')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>{t('blog.expertContent')}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Search and Filters */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <Input
                  placeholder="Search articles, technologies, topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 h-14 text-base bg-slate-800/50 backdrop-blur-sm border-slate-700/50 focus:border-emerald-500 rounded-xl text-white placeholder:text-slate-400"
                />
              </div>
            </div>
            
            {/* Category Filters */}
            <div className="flex justify-center">
              <div className="flex items-center gap-2 p-2 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl">
                <div className="flex items-center gap-2 px-3 py-2">
                  <Filter className="w-4 h-4 text-slate-400" />
                  <span className="text-sm text-slate-300 font-medium">{t('blog.filter')}:</span>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {CATEGORIES.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                      className={cn(
                        "rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300",
                        selectedCategory === category 
                          ? "bg-gradient-to-r from-emerald-600 to-blue-600 text-white shadow-lg" 
                          : "text-slate-300 hover:text-white hover:bg-slate-700/50"
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
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">{t('blog.featuredArticles')}</h2>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">
                  {selectedCategory === "All" ? "All Articles" : `${selectedCategory} Articles`}
                </h2>
              </div>
              <div className="text-slate-400 text-sm">
                {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''}
              </div>
            </div>
            
            {filteredArticles.length > 0 ? (
              <div className="space-y-6">
                {filteredArticles.map((article, index) => (
                  <ArticleCard key={article.id} article={article} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="max-w-md mx-auto space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 flex items-center justify-center">
                    <Search className="w-8 h-8 text-slate-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{t('blog.noArticlesFound')}</h3>
                  <p className="text-slate-400 leading-relaxed">
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
        <article className="p-6 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl hover:bg-slate-800/50 transition-all duration-300 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10 space-y-4 group-hover:-translate-y-1">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className={cn(
              "inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs font-medium text-white",
              "bg-gradient-to-r", getCategoryColor(article.category)
            )}>
              {article.category}
            </div>
            <div className="flex items-center gap-1 text-xs text-slate-400">
              <Clock className="w-3 h-3" />
              <span>{article.readTime}</span>
            </div>
          </div>
          
          {/* Title */}
          <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors leading-tight line-clamp-2">
            {article.title}
          </h3>
          
          {/* Excerpt */}
          <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">
            {article.excerpt}
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-1">
            {article.tags.slice(0, 3).map((tag) => (
              <span 
                key={tag} 
                className="text-xs px-2 py-1 bg-slate-700/50 text-slate-300 rounded"
              >
                #{tag}
              </span>
            ))}
          </div>
          
          {/* Footer */}
          <div className="flex items-center justify-between pt-3 border-t border-slate-700/50">
            <div className="flex items-center gap-1 text-xs text-slate-400">
              <Calendar className="w-3 h-3" />
              <span>{new Date(article.publishDate).toLocaleDateString()}</span>
            </div>
            
            <div className="flex items-center gap-2 text-emerald-400 group-hover:gap-3 transition-all">
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
        <article className="p-6 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl hover:bg-slate-800/50 transition-all duration-300 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10 group-hover:-translate-y-1">
          <div className="space-y-4">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className={cn(
                "inline-flex items-center gap-2 px-3 py-1 rounded-lg text-sm font-medium text-white",
                "bg-gradient-to-r", getCategoryColor(article.category)
              )}>
                {article.category}
              </div>
              <div className="flex items-center gap-4 text-sm text-slate-400">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{article.readTime}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(article.publishDate).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
            
            {/* Title */}
            <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors leading-tight">
              {article.title}
            </h3>
            
            {/* Excerpt */}
            <p className="text-slate-300 leading-relaxed line-clamp-2">
              {article.excerpt}
            </p>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {article.tags.slice(0, 4).map((tag) => (
                <span 
                  key={tag} 
                  className="text-sm px-2 py-1 bg-slate-700/50 text-slate-300 rounded"
                >
                  #{tag}
                </span>
              ))}
              {article.tags.length > 4 && (
                <span className="text-sm px-2 py-1 bg-emerald-900/50 text-emerald-300 rounded">
                  +{article.tags.length - 4} more
                </span>
              )}
            </div>
            
            {/* Read More */}
            <div className="flex items-center gap-3 text-emerald-400 group-hover:gap-4 transition-all pt-2">
              <span className="font-medium">{t('blog.readArticle')}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  )
}
