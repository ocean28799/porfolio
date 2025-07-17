"use client"

import { motion } from "framer-motion"

export function PageLoader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 dark:from-purple-950/90 dark:via-blue-950/90 dark:to-cyan-950/90 backdrop-blur-sm"
    >
      <div className="relative">
        {/* Animated logo */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mb-4 mx-auto"
        />
        
        {/* Loading text */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg font-medium text-center bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
        >
          Loading amazing content...
        </motion.p>
        
        {/* Animated dots */}
        <div className="flex justify-center gap-1 mt-4">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              className="w-2 h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export function SkeletonLoader() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded w-3/4"></div>
      <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded w-1/2"></div>
      <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded w-5/6"></div>
    </div>
  )
}
