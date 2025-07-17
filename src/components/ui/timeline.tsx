"use client"
import { useScroll, useTransform, motion } from "framer-motion"
import type React from "react"
import { useEffect, useRef, useState } from "react"

interface TimelineEntry {
  title: string
  content: React.ReactNode
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  // Define gradient backgrounds for timeline entries
  const getGradientBackground = (index: number) => {
    const gradients = [
      // JavaScript fundamentals - warm orange gradient
      "bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500",
      // React mastery - classic React blue gradient
      "bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400",
      // React Native - mobile purple gradient
      "bg-gradient-to-br from-purple-600 via-violet-500 to-pink-500",
      // Next.js - modern black/white gradient
      "bg-gradient-to-br from-gray-900 via-gray-700 to-gray-500",
      // AI Integration - futuristic gradient
      "bg-gradient-to-br from-emerald-500 via-cyan-400 to-blue-500",
      // Current Focus - premium gold gradient
      "bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500"
    ]
    return gradients[index % gradients.length]
  }

  // Define gradient title classes for timeline entries
  const getGradientTitleClass = (index: number) => {
    const titleGradients = [
      // JavaScript fundamentals
      "from-orange-600 via-amber-600 to-yellow-600",
      // React mastery
      "from-blue-600 via-cyan-600 to-teal-600",
      // React Native
      "from-purple-600 via-violet-600 to-pink-600",
      // Next.js
      "from-gray-900 via-gray-700 to-gray-600",
      // AI Integration
      "from-emerald-600 via-cyan-600 to-blue-600",
      // Current Focus
      "from-yellow-600 via-orange-600 to-red-600"
    ]
    return titleGradients[index % titleGradients.length]
  }

  // Improve the height calculation with a resize observer
  useEffect(() => {
    if (!ref.current) return

    const element = ref.current // Store ref value

    const updateHeight = () => {
      if (element) {
        const rect = element.getBoundingClientRect()
        setHeight(rect.height)
      }
    }

    // Initial calculation
    updateHeight()

    // Set up resize observer to handle window resizing
    const resizeObserver = new ResizeObserver(updateHeight)
    resizeObserver.observe(element)

    return () => {
      resizeObserver.unobserve(element)
    }
  }, [])

  // Improve scroll tracking with better offset values
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 80%"],
  })

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height])
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1])

  return (
    <div className="w-full md:px-10" ref={containerRef}>
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 font-bold max-w-4xl bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
          My Journey as a Cross-Platform Developer
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-3xl italic backdrop-blur-sm bg-white/5 dark:bg-black/5 p-4 rounded-xl border border-white/10 dark:border-white/5">
          From React web applications to React Native mobile apps, I&apos;ve been building 
          cross-platform solutions that bridge web and mobile experiences. My journey spans 
          from startup environments to enterprise-level projects. <br /> Here&apos;s how my 
          expertise evolved across the React ecosystem.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              {/* Modern gradient timeline dot */}
              <div className={`h-12 absolute left-2 md:left-2 w-12 rounded-full ${getGradientBackground(index)} flex items-center justify-center shadow-lg glow-animation gradient-animate float-animation`}>
                <div className="h-6 w-6 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 animate-pulse" />
                {/* Animated ring */}
                <div className="absolute inset-0 rounded-full bg-white/10 animate-ping" style={{ animationDelay: `${index * 0.5}s` }} />
              </div>
              {/* Gradient title */}
              <h3 className={`hidden md:block text-xl md:pl-20 md:text-5xl font-bold bg-gradient-to-r ${getGradientTitleClass(index)} bg-clip-text text-transparent`}>
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              {/* Mobile gradient title */}
              <h3 className={`md:hidden block text-2xl mb-4 text-left font-bold bg-gradient-to-r ${getGradientTitleClass(index)} bg-clip-text text-transparent`}>
                {item.title}
              </h3>
              
              {/* Content card with gradient border */}
              <div className={`relative rounded-2xl p-6 backdrop-blur-sm bg-white/5 dark:bg-black/5 border border-white/10 dark:border-white/5 shadow-xl gradient-animate ${getGradientBackground(index)}`}>
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/40 rounded-2xl pointer-events-none" />
                
                {/* Floating elements */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/10 rounded-full blur-xl animate-pulse float-animation" />
                  <div className="absolute bottom-4 left-4 w-4 h-4 bg-white/20 rounded-sm rotate-45 animate-bounce" style={{ animationDelay: `${index * 0.5}s` }} />
                  <div className="absolute top-1/2 right-8 w-3 h-3 bg-white/15 rounded-full animate-ping" style={{ animationDelay: `${index * 0.7}s` }} />
                </div>
                
                {/* Content */}
                <div className="relative z-10 bg-white/95 dark:bg-black/95 backdrop-blur-md rounded-xl p-6 border border-white/20 dark:border-white/10 shadow-inner">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[3px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] rounded-full"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[3px] bg-gradient-to-t from-purple-600 via-blue-500 to-cyan-400 from-[0%] via-[50%] rounded-full shadow-lg"
          />
          {/* Animated glow effect */}
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[3px] bg-gradient-to-t from-purple-600 via-blue-500 to-cyan-400 from-[0%] via-[50%] rounded-full blur-sm animate-pulse"
          />
        </div>
      </div>
    </div>
  )
}
