"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import rehypeRaw from 'rehype-raw'
import { type BlogArticle } from "@/lib/constants/blog-articles"

// Import highlight.js styles
import 'highlight.js/styles/github-dark.css'

interface BlogArticleProps {
  article: BlogArticle
}

export function BlogArticle({ article }: BlogArticleProps) {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: article.excerpt,
          url: window.location.href,
        })
      } catch {
        // Fallback to clipboard
        await navigator.clipboard.writeText(window.location.href)
      }
    } else {
      await navigator.clipboard.writeText(window.location.href)
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Articles
          </Link>
        </motion.div>

        {/* Article Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16 space-y-8"
        >
          {/* Category Badge */}
          <Badge className="bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/20 font-medium">
            {article.category}
          </Badge>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 leading-tight">
            {article.title}
          </h1>

          {/* Excerpt */}
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
            {article.excerpt}
          </p>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-6 text-sm text-slate-500 dark:text-slate-500">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(article.publishDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{article.readTime} read</span>
              </div>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={handleShare}
              className="border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span 
                key={tag} 
                className="text-sm px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </motion.header>
        {/* Article Content */}
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <article className="max-w-none">
            <div className="prose prose-lg prose-slate dark:prose-invert max-w-none 
              prose-headings:text-slate-900 dark:prose-headings:text-slate-100
              prose-headings:font-bold prose-headings:tracking-tight
              prose-h1:text-4xl prose-h1:mb-12 prose-h1:mt-16 prose-h1:leading-tight
              prose-h2:text-3xl prose-h2:mb-8 prose-h2:mt-20 prose-h2:leading-tight
              prose-h2:pb-6 prose-h2:border-b prose-h2:border-slate-200 dark:prose-h2:border-slate-800
              prose-h3:text-2xl prose-h3:mb-6 prose-h3:mt-16 prose-h3:leading-tight
              prose-h4:text-xl prose-h4:mb-4 prose-h4:mt-12
              prose-p:text-slate-700 dark:prose-p:text-slate-300 
              prose-p:text-lg prose-p:leading-8 prose-p:mb-8 prose-p:mt-0
              prose-a:text-emerald-600 dark:prose-a:text-emerald-400 
              prose-a:font-medium prose-a:no-underline hover:prose-a:underline
              prose-strong:text-slate-900 dark:prose-strong:text-slate-100 
              prose-strong:font-bold
              prose-em:text-slate-600 dark:prose-em:text-slate-400
              prose-code:text-emerald-700 dark:prose-code:text-emerald-300
              prose-code:bg-emerald-50 dark:prose-code:bg-emerald-900/20
              prose-code:px-3 prose-code:py-1 prose-code:rounded-lg prose-code:text-base prose-code:font-semibold
              prose-pre:!bg-slate-950 dark:prose-pre:!bg-slate-950
              prose-pre:border-0 prose-pre:rounded-2xl prose-pre:p-8 prose-pre:my-12
              prose-pre:shadow-2xl prose-pre:shadow-slate-900/20
              prose-blockquote:border-l-emerald-500 prose-blockquote:border-l-4 
              prose-blockquote:pl-8 prose-blockquote:py-6 prose-blockquote:my-12
              prose-blockquote:bg-emerald-50 dark:prose-blockquote:bg-emerald-900/10
              prose-blockquote:rounded-r-2xl prose-blockquote:italic
              prose-blockquote:text-slate-700 dark:prose-blockquote:text-slate-300
              prose-ul:mb-8 prose-ul:mt-6 prose-ul:space-y-3
              prose-ol:mb-8 prose-ol:mt-6 prose-ol:space-y-3
              prose-li:text-slate-700 dark:prose-li:text-slate-300 prose-li:leading-8
              prose-img:rounded-2xl prose-img:shadow-2xl prose-img:my-12
              prose-img:border prose-img:border-slate-200 dark:prose-img:border-slate-800
              prose-hr:border-slate-300 dark:prose-hr:border-slate-700 prose-hr:my-16
              prose-table:my-8 prose-table:rounded-xl prose-table:overflow-hidden
              prose-th:bg-slate-100 dark:prose-th:bg-slate-800 prose-th:p-4 prose-th:font-bold
              prose-td:p-4 prose-td:border-t prose-td:border-slate-200 dark:prose-td:border-slate-700
            ">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight, rehypeRaw]}
                components={{
                  h1: ({ children, ...props }) => (
                    <div className="mt-16 mb-12 first:mt-0">
                      <h1 {...props} className="text-4xl font-bold text-slate-900 dark:text-slate-100 leading-tight">
                        {children}
                      </h1>
                    </div>
                  ),
                  h2: ({ children, ...props }) => (
                    <div className="mt-20 mb-8 first:mt-0">
                      <h2 {...props} className="text-3xl font-bold text-slate-900 dark:text-slate-100 leading-tight pb-6 border-b border-slate-200 dark:border-slate-800">
                        {children}
                      </h2>
                    </div>
                  ),
                  h3: ({ children, ...props }) => (
                    <div className="mt-16 mb-6">
                      <h3 {...props} className="text-2xl font-bold text-slate-900 dark:text-slate-100 leading-tight">
                        {children}
                      </h3>
                    </div>
                  ),
                  h4: ({ children, ...props }) => (
                    <div className="mt-12 mb-4">
                      <h4 {...props} className="text-xl font-bold text-slate-900 dark:text-slate-100 leading-tight">
                        {children}
                      </h4>
                    </div>
                  ),
                  p: ({ children, ...props }) => (
                    <p {...props} className="text-lg leading-8 text-slate-700 dark:text-slate-300 mb-8">
                      {children}
                    </p>
                  ),
                  pre: ({ children, ...props }) => (
                    <div className="my-12 -mx-6 md:-mx-12">
                      <div className="bg-slate-950 p-8">
                        <pre {...props} className="text-sm text-slate-100 !bg-transparent !p-0 !m-0 overflow-x-auto">
                          {children}
                        </pre>
                      </div>
                    </div>
                  ),
                  blockquote: ({ children, ...props }) => (
                    <div className="my-12">
                      <blockquote {...props} className="border-l-4 border-l-emerald-500 pl-8 py-6 bg-emerald-50 dark:bg-emerald-900/10 rounded-r-2xl">
                        <div className="text-lg italic text-slate-700 dark:text-slate-300">
                          {children}
                        </div>
                      </blockquote>
                    </div>
                  ),
                  ul: ({ children, ...props }) => (
                    <div className="my-8">
                      <ul {...props} className="space-y-3 list-none pl-0">
                        {children}
                      </ul>
                    </div>
                  ),
                  ol: ({ children, ...props }) => (
                    <div className="my-8">
                      <ol {...props} className="space-y-3 list-decimal list-inside">
                        {children}
                      </ol>
                    </div>
                  ),
                  li: ({ children, ...props }) => (
                    <li {...props} className="text-lg leading-8 text-slate-700 dark:text-slate-300 relative pl-6">
                      <span className="absolute left-0 top-0 w-2 h-2 bg-emerald-500 rounded-full mt-3"></span>
                      {children}
                    </li>
                  ),
                  strong: ({ children, ...props }) => (
                    <strong {...props} className="font-bold text-slate-900 dark:text-slate-100">
                      {children}
                    </strong>
                  ),
                  em: ({ children, ...props }) => (
                    <em {...props} className="italic text-slate-600 dark:text-slate-400">
                      {children}
                    </em>
                  ),
                  code: ({ children, ...props }) => (
                    <code {...props} className="text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-900/20 px-3 py-1 rounded-lg text-base font-semibold">
                      {children}
                    </code>
                  ),
                  hr: ({ ...props }) => (
                    <div className="my-16">
                      <hr {...props} className="border-0 h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent" />
                    </div>
                  ),
                  img: ({ src, alt, width, height, ...props }) => (
                    <div className="my-12">
                      <Image 
                        src={typeof src === 'string' ? src : ''} 
                        alt={alt || ''} 
                        width={typeof width === 'number' ? width : 800} 
                        height={typeof height === 'number' ? height : 400} 
                        className="w-full rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800" 
                        {...props}
                      />
                      {alt && (
                        <p className="text-center text-sm text-slate-500 dark:text-slate-500 mt-4 italic">
                          {alt}
                        </p>
                      )}
                    </div>
                  ),
                  table: ({ children, ...props }) => (
                    <div className="my-8 overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800">
                      <table {...props} className="w-full border-collapse">
                        {children}
                      </table>
                    </div>
                  ),
                  thead: ({ children, ...props }) => (
                    <thead {...props} className="bg-slate-100 dark:bg-slate-800">
                      {children}
                    </thead>
                  ),
                  th: ({ children, ...props }) => (
                    <th {...props} className="p-4 text-left font-bold text-slate-900 dark:text-slate-100">
                      {children}
                    </th>
                  ),
                  td: ({ children, ...props }) => (
                    <td {...props} className="p-4 border-t border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                      {children}
                    </td>
                  )
                }}
              >
                {article.content}
              </ReactMarkdown>
            </div>
          </article>
        </motion.main>

        {/* Author Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <div className="bg-slate-50 dark:bg-slate-900/30 rounded-2xl border border-slate-200 dark:border-slate-800 p-8">
            <div className="flex items-start gap-6">
              <Image 
                src={article.author.avatar} 
                alt={article.author.name}
                width={64}
                height={64}
                className="rounded-full ring-2 ring-emerald-500/20"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">
                  About {article.author.name}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {article.author.bio}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 dark:from-emerald-500/10 dark:to-emerald-600/10 rounded-2xl border border-emerald-200 dark:border-emerald-500/20 p-8 md:p-12">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100">
                Enjoyed this article?
              </h3>
              <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
                Explore more insights on React Native, Next.js, and modern development practices.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link href="/blog">
                  <Button variant="outline" className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400">
                    More Articles
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                    Get In Touch
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
