"use client"

import { ModernAbout } from "@/containers/about-me/modern-about"
import { motion } from "framer-motion"

export function ModernAboutPage() {
  return (
    <div className="relative">
      {/* Enhanced background effects - Optimized */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/25 via-blue-50/15 to-cyan-50/25 dark:from-purple-950/8 dark:via-blue-950/4 dark:to-cyan-950/8" />
        <motion.div
          className="absolute top-1/3 left-1/5 w-64 h-64 bg-gradient-to-r from-purple-400/15 to-blue-400/15 rounded-full blur-3xl gpu-accelerated"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 120, 240, 360],
            x: [0, 30, -20, 0],
            y: [0, -25, 15, 0],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/5 w-56 h-56 bg-gradient-to-r from-cyan-400/12 to-teal-400/12 rounded-full blur-3xl gpu-accelerated"
          animate={{
            scale: [1.1, 1, 1.3, 1.1],
            rotate: [360, 240, 120, 0],
            x: [0, -25, 20, 0],
            y: [0, 20, -15, 0],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 w-full">
        {/* Header Section */}
        <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-4 sm:space-y-6 mb-6 sm:mb-8"
            >
              <motion.div
                className="relative inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl blur-2xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <h1 className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                  About Me
                </h1>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed px-4"
              >
                Passionate about creating seamless cross-platform experiences with modern web technologies. 
                From React web applications to React Native mobile apps and AI-powered solutions.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-wrap justify-center gap-2 mt-6 sm:mt-8 px-4"
              >
                {["Cross-Platform", "React Expert", "Mobile Development", "AI Integration", "Team Leadership", "Mentoring"].map((skill, index) => (
                  <motion.span 
                    key={skill} 
                    className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm text-neutral-700 dark:text-neutral-300 rounded-full border border-purple-500/20 dark:border-blue-500/20 hover:border-purple-500/40 dark:hover:border-blue-500/40 transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        {/* About Content */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8"
        >
          <div className="w-full max-w-7xl mx-auto">
            <ModernAbout />
          </div>
        </motion.section>
      </div>
    </div>
  )
}
