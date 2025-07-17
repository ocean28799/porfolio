"use client"

import { motion } from "framer-motion"
import { lazy, Suspense, useEffect, useState, memo, useCallback } from "react"

// Lazy load components for better performance
const MyUniverse = lazy(() => import("@/containers/my-universe").then(module => ({ default: module.MyUniverse })))
const MyInformation = lazy(() => import("@/containers/about-me").then(module => ({ default: module.MyInformation })))
const PersonalInterests = lazy(() => import("@/containers/personal-interests").then(module => ({ default: module.PersonalInterests })))
const SkillComparison = lazy(() => import("@/containers/skill-comparison").then(module => ({ default: module.SkillComparison })))
const ProjectShowcase = lazy(() => import("@/containers/project-showcase").then(module => ({ default: module.ProjectShowcase })))

// Loading component
const SectionLoader = memo(() => (
  <div className="flex items-center justify-center min-h-[400px]">
    <div className="flex space-x-2">
      <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" />
      <div className="w-3 h-3 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
      <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
    </div>
  </div>
))
SectionLoader.displayName = 'SectionLoader'

// Floating particles component for background - Optimized with memoization
const FloatingParticles = memo(() => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; duration: number }>>([])

  useEffect(() => {
    const newParticles = Array.from({ length: 6 }, (_, i) => ({ // Reduced from 8 to 6 for better performance
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1.5, // Slightly smaller particles
      duration: Math.random() * 10 + 15, // Shorter animations
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 blur-sm will-change-transform" // Reduced opacity and added will-change
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -60, 0], // Reduced movement range
            x: [0, Math.random() * 40 - 20, 0],
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.4, 0.1], // Reduced opacity range
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "loop",
          }}
        />
      ))}
    </div>
  )
})
FloatingParticles.displayName = 'FloatingParticles'

// AI/Gaming themed gradient mesh background - Optimized with memoization
const GradientMesh = memo(() => (
  <div className="fixed inset-0 z-0 pointer-events-none">
    <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-cyan-50/15 to-green-50/30 dark:from-purple-950/10 dark:via-cyan-950/5 dark:to-green-950/10" />
    <motion.div
      className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-purple-400/6 to-cyan-400/6 rounded-full blur-3xl will-change-transform"
      animate={{
        scale: [1, 1.05, 1],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "linear",
      }}
    />
    <motion.div
      className="absolute top-3/4 right-1/4 w-64 h-64 bg-gradient-to-r from-cyan-400/6 to-green-400/6 rounded-full blur-3xl will-change-transform"
      animate={{
        scale: [1.05, 1, 1.05],
        rotate: [360, 180, 0],
      }}
      transition={{
        duration: 30,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  </div>
))
GradientMesh.displayName = 'GradientMesh'

export default function Home() {
  return (
    <div className="relative">
      {/* Background Effects */}
      <GradientMesh />
      <FloatingParticles />
      
      {/* Content - Single scroll container */}
      <div className="relative z-10 w-full">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
        >
          <div className="w-full max-w-7xl mx-auto">
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-cyan-600/5 to-green-600/5 rounded-3xl blur-3xl"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <Suspense fallback={<SectionLoader />}>
                <MyUniverse />
              </Suspense>
            </div>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-20"
        >
          <div className="w-full max-w-7xl mx-auto">
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-green-600/5 via-cyan-600/5 to-purple-600/5 rounded-3xl blur-3xl"
                animate={{
                  scale: [1.05, 1, 1.05],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <Suspense fallback={<SectionLoader />}>
                <MyInformation />
              </Suspense>
            </div>
          </div>
        </motion.section>

        {/* Skill Comparison Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="py-12 sm:py-20"
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-orange-600/5 via-purple-600/5 to-cyan-600/5 rounded-3xl blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 14,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <Suspense fallback={<SectionLoader />}>
              <SkillComparison />
            </Suspense>
          </div>
        </motion.section>

        {/* Project Showcase Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="py-12 sm:py-20"
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-600/5 via-purple-600/5 to-cyan-600/5 rounded-3xl blur-3xl"
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 16,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <Suspense fallback={<SectionLoader />}>
              <ProjectShowcase />
            </Suspense>
          </div>
        </motion.section>

        {/* Personal Interests Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8"
        >
          <div className="relative max-w-7xl mx-auto">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-600/5 via-green-600/5 to-purple-600/5 rounded-3xl blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <Suspense fallback={<SectionLoader />}>
              <PersonalInterests />
            </Suspense>
          </div>
        </motion.section>

        {/* Call to Action Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="relative p-6 sm:p-8 lg:p-12 rounded-3xl backdrop-blur-sm border border-purple-500/20 bg-gradient-to-br from-purple-500/5 via-cyan-500/5 to-green-500/5"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 rounded-3xl blur-xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 via-cyan-500 to-green-400 bg-clip-text text-transparent mb-4 sm:mb-6">
                  Ready to Build Something Amazing?
                </h2>
                <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto">
                  Let&apos;s collaborate on your next React, React Native, or Next.js project. 
                  I bring expertise in modern development, AI API integration, and cross-platform solutions.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                  <motion.a
                    href="/pricing"
                    className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border-0 text-center"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Pricing & Hire Me
                  </motion.a>
                  <motion.a
                    href="/about"
                    className="px-6 sm:px-8 py-3 sm:py-4 border border-purple-500/30 text-purple-600 dark:text-purple-400 hover:bg-purple-500/10 rounded-xl font-semibold backdrop-blur-sm transition-all duration-300 text-center"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More About Me
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
