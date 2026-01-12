'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

interface ReadingProgressProps {
  containerRef?: React.RefObject<HTMLElement>
}

export function ReadingProgress({ containerRef }: ReadingProgressProps) {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    const handleScroll = () => {
      // Show progress bar after scrolling past 100px
      setIsVisible(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-50 origin-left"
      style={{ scaleX }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="h-full bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500" />
    </motion.div>
  )
}

// Alternative: Circular reading progress
export function CircularReadingProgress() {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      
      setProgress(Math.min(scrollPercent, 100))
      setIsVisible(scrollTop > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  const circumference = 2 * Math.PI * 18 // radius = 18
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="fixed bottom-24 right-6 z-50"
    >
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="relative w-12 h-12 rounded-full bg-slate-800/90 backdrop-blur-sm border border-slate-700 shadow-lg hover:bg-slate-700 transition-colors group"
        aria-label="Scroll to top"
      >
        {/* Progress Ring */}
        <svg className="absolute inset-0 w-12 h-12 -rotate-90">
          {/* Background circle */}
          <circle
            cx="24"
            cy="24"
            r="18"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            className="text-slate-700"
          />
          {/* Progress circle */}
          <circle
            cx="24"
            cy="24"
            r="18"
            stroke="url(#progress-gradient)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            style={{
              strokeDasharray: circumference,
              strokeDashoffset,
              transition: 'stroke-dashoffset 0.1s ease'
            }}
          />
          <defs>
            <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Percentage or Arrow */}
        <span className="absolute inset-0 flex items-center justify-center text-xs font-medium text-white group-hover:text-emerald-400 transition-colors">
          {Math.round(progress)}%
        </span>
      </button>
    </motion.div>
  )
}

// Reading time estimator
export function ReadingTime({ content, wordsPerMinute = 200 }: { content: string; wordsPerMinute?: number }) {
  const wordCount = content.trim().split(/\s+/).length
  const readingTime = Math.ceil(wordCount / wordsPerMinute)
  
  return (
    <span className="text-slate-500 dark:text-slate-400 text-sm">
      {readingTime} min read
    </span>
  )
}
