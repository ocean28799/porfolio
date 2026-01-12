"use client"

import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Sparkles, Zap, Download, MapPin, Calendar } from "lucide-react"
import Link from "next/link"

// Animated counter hook
function useAnimatedCounter(end: number, duration: number = 2000, startOnMount: boolean = true) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!startOnMount) return
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true)
          const startTime = Date.now()
          const animate = () => {
            const now = Date.now()
            const progress = Math.min((now - startTime) / duration, 1)
            const easeOutQuart = 1 - Math.pow(1 - progress, 4)
            setCount(Math.floor(easeOutQuart * end))
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end, duration, hasStarted, startOnMount])

  return { count, ref }
}

const roles = [
  "Senior Mobile Solutions Architect",
  "AI/ML Integration Specialist", 
  "Full-Stack Engineering Lead",
  "Performance & Scalability Expert",
  "Cross-Platform Innovation Leader",
  "Technical Team Lead"
]

// Floating tech stack icons configuration
const floatingTechIcons = [
  { name: "React", icon: "⚛️", color: "#61DAFB", delay: 0 },
  { name: "TypeScript", icon: "TS", color: "#3178C6", delay: 0.5 },
  { name: "Next.js", icon: "▲", color: "#FFFFFF", delay: 1 },
  { name: "Node.js", icon: "⬢", color: "#68A063", delay: 1.5 },
  { name: "AI", icon: "🤖", color: "#10B981", delay: 2 },
  { name: "Python", icon: "🐍", color: "#3776AB", delay: 2.5 },
  { name: "AWS", icon: "☁️", color: "#FF9900", delay: 3 },
  { name: "Docker", icon: "🐳", color: "#2496ED", delay: 3.5 },
]

export function ModernHeroSection() {
  const [currentRole, setCurrentRole] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(false)
      setTimeout(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length)
        setIsTyping(true)
      }, 500)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background - Performance Optimized */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Orbs - Using radial gradients instead of blur-3xl for performance */}
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 rounded-full opacity-30 dark:opacity-100"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)',
            willChange: 'transform'
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 rounded-full opacity-30 dark:opacity-100"
          style={{
            background: 'radial-gradient(circle, rgba(168,85,247,0.2) 0%, transparent 70%)',
            willChange: 'transform'
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
            y: [0, 20, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-20 dark:opacity-100"
          style={{
            background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)',
            willChange: 'transform'
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Floating Elements - Reduced count for better performance */}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gray-400/20 dark:bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Floating Tech Stack Icons */}
        {floatingTechIcons.map((tech, index) => {
          const positions = [
            { left: "5%", top: "20%" },
            { left: "90%", top: "15%" },
            { left: "8%", top: "70%" },
            { left: "88%", top: "75%" },
            { left: "15%", top: "45%" },
            { left: "85%", top: "45%" },
            { left: "3%", top: "90%" },
            { left: "92%", top: "90%" },
          ]
          return (
            <motion.div
              key={tech.name}
              className="absolute hidden md:flex items-center justify-center w-12 h-12 rounded-xl bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-slate-700/50 shadow-lg cursor-pointer group"
              style={positions[index]}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [0, -10, 0],
              }}
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{
                opacity: { duration: 0.5, delay: tech.delay },
                scale: { duration: 0.5, delay: tech.delay },
                y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: tech.delay }
              }}
            >
              <span 
                className="text-2xl"
                style={{ 
                  color: tech.icon.length <= 2 ? tech.color : undefined,
                  fontWeight: tech.icon.length <= 2 ? "bold" : undefined,
                  fontSize: tech.icon.length <= 2 ? "14px" : undefined
                }}
              >
                {tech.icon}
              </span>
              {/* Tooltip */}
              <motion.div 
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 dark:bg-slate-900 text-xs text-white rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
              >
                {tech.name}
              </motion.div>
            </motion.div>
          )
        })}
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 text-center space-y-8 relative z-10">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="bg-green-500/20 text-green-700 dark:text-green-300 border-green-500/50 px-4 py-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Available for New Projects
            </div>
          </Badge>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black tracking-tight">
            <span className="block text-gray-900 dark:text-white">Tran Anh Duc</span>
            <motion.span 
              className="block bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              Senior Developer
            </motion.span>
          </h1>
        </motion.div>

        {/* Animated Role */}
        <motion.div
          className="h-16 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-slate-300 font-light">
            <motion.span
              key={currentRole}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isTyping ? 1 : 0, y: isTyping ? 0 : -20 }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center gap-2"
            >
              <Code className="w-6 h-6 text-blue-500 dark:text-blue-400" />
              {roles[currentRole]}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="w-0.5 h-6 bg-blue-500 dark:bg-blue-400 ml-1"
              />
            </motion.span>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-base xs:text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          Building the future with{" "}
          <span className="text-blue-400 font-semibold">React Native 0.76+</span>,{" "}
          <span className="text-purple-400 font-semibold">Next.js 15</span>, and{" "}
          <span className="text-cyan-400 font-semibold">AI/LLM Integration</span>
          {" "}• Delivered 60+ apps across 20+ countries
        </motion.p>

        {/* Animated Key Stats */}
        <AnimatedStatsSection />

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
        >
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-8 py-6 text-lg group"
          >
            <Link href="/projects">
              <Sparkles className="w-5 h-5 mr-2" />
              Explore My Work
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white border-0 px-8 py-6 text-lg group"
            >
              <a href="/files/TranAnhDuc-Comprehensive-CV-2025.txt" download>
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download Resume
              </a>
            </Button>
          </motion.div>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-gray-300 dark:border-slate-600 text-gray-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800 px-8 py-6 text-lg"
          >
            <Link href="/about">
              <Code className="w-5 h-5 mr-2" />
              About Me
            </Link>
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="fixed bottom-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-400 dark:border-slate-600 rounded-full p-1"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gray-500 dark:bg-slate-400 rounded-full mx-auto"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Animated Stats Section Component
function AnimatedStatsSection() {
  const apps = useAnimatedCounter(60, 2000)
  const years = useAnimatedCounter(5, 1500)
  const countries = useAnimatedCounter(20, 1800)
  const satisfaction = useAnimatedCounter(97, 2200)

  const stats = [
    { ref: apps.ref, count: apps.count, suffix: "+", label: "Apps Built", icon: Sparkles, color: "text-blue-400" },
    { ref: years.ref, count: years.count, suffix: "+", label: "Years Exp", icon: Calendar, color: "text-purple-400" },
    { ref: countries.ref, count: countries.count, suffix: "+", label: "Countries", icon: MapPin, color: "text-cyan-400" },
    { ref: satisfaction.ref, count: satisfaction.count, suffix: "%", label: "Satisfaction", icon: Zap, color: "text-emerald-400" }
  ]

  return (
    <motion.div
      className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 xs:gap-4 sm:gap-6 max-w-4xl mx-auto py-6 xs:py-8 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          ref={stat.ref}
          className="text-center space-y-2 p-4 rounded-2xl bg-white/60 dark:bg-slate-800/30 backdrop-blur-sm border border-gray-200/50 dark:border-slate-700/50 hover:border-gray-300/50 dark:hover:border-slate-600/50 transition-all shadow-sm dark:shadow-none"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.2 + index * 0.1, type: "spring" }}
          whileHover={{ scale: 1.05, y: -5 }}
        >
          <stat.icon className={`w-8 h-8 mx-auto ${stat.color}`} />
          <div className="text-3xl font-bold text-gray-900 dark:text-white">
            {stat.count}{stat.suffix}
          </div>
          <div className="text-sm text-gray-600 dark:text-slate-400">{stat.label}</div>
        </motion.div>
      ))}
    </motion.div>
  )
}
