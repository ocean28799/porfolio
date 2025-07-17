"use client"

import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { useEffect, useState } from "react"

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const [isVisible, setIsVisible] = useState(false)
  
  // Smooth spring animation for the progress with optimized settings
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001
  })
  
  // Transform scroll progress to percentage for display
  const progressPercentage = useTransform(scrollYProgress, [0, 1], [0, 100])
  
  // Performance optimized percentage value
  const [currentPercentage, setCurrentPercentage] = useState(0)
  
  // Show/hide progress indicator based on scroll
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setIsVisible(latest > 0.03) // Show after 3% scroll
    })
    return unsubscribe
  }, [scrollYProgress])

  // Update percentage with throttling for performance
  useEffect(() => {
    const unsubscribe = progressPercentage.on("change", (latest) => {
      setCurrentPercentage(Math.round(latest))
    })
    return unsubscribe
  }, [progressPercentage])

  return (
    <>
      {/* Modern Neural Network Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[60] h-1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Animated background glow */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-purple-500/30 via-cyan-500/30 to-emerald-500/30 blur-[3px]"
          animate={{
            background: [
              "linear-gradient(90deg, rgba(139, 92, 246, 0.3), rgba(6, 182, 212, 0.3), rgba(16, 185, 129, 0.3))",
              "linear-gradient(90deg, rgba(16, 185, 129, 0.3), rgba(139, 92, 246, 0.3), rgba(6, 182, 212, 0.3))",
              "linear-gradient(90deg, rgba(6, 182, 212, 0.3), rgba(16, 185, 129, 0.3), rgba(139, 92, 246, 0.3))"
            ]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Main progress bar with neural pattern */}
        <motion.div
          className="h-full relative overflow-hidden rounded-full"
          style={{ 
            scaleX,
            background: "linear-gradient(90deg, #8b5cf6 0%, #06b6d4 50%, #10b981 100%)",
            transformOrigin: "0%"
          }}
        >
          {/* Data stream effect */}
          <motion.div
            className="absolute inset-0 opacity-60"
            style={{
              background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)",
            }}
            animate={{
              x: ["-200%", "300%"],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 1
            }}
          />
          
          {/* Pulse effect at the leading edge */}
          <motion.div
            className="absolute top-0 right-0 w-4 h-full bg-cyan-300 shadow-2xl shadow-cyan-300/80 blur-sm"
            style={{ 
              x: useTransform(scaleX, [0, 1], ["-100%", "0%"]),
              opacity: useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0.7])
            }}
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>

      {/* Floating AI-Style Progress Indicator */}
      <motion.div
        className="fixed top-6 right-6 z-[60] pointer-events-none"
        initial={{ opacity: 0, scale: 0, rotate: -180 }}
        animate={{ 
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0,
          rotate: isVisible ? 0 : -180
        }}
        transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
      >
        <div className="relative w-16 h-16">
          {/* Outer glow ring */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: "conic-gradient(from 0deg, rgba(139, 92, 246, 0.4), rgba(6, 182, 212, 0.4), rgba(16, 185, 129, 0.4), rgba(139, 92, 246, 0.4))",
              filter: "blur(4px)"
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Main circular progress */}
          <svg className="w-16 h-16 transform -rotate-90 relative z-10" viewBox="0 0 64 64">
            {/* Background ring */}
            <circle
              cx="32"
              cy="32"
              r="26"
              fill="none"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="2"
              className="backdrop-blur-sm"
            />
            
            {/* Progress ring with gradient */}
            <motion.circle
              cx="32"
              cy="32"
              r="26"
              fill="none"
              strokeWidth="3"
              strokeLinecap="round"
              style={{
                pathLength: scrollYProgress,
                stroke: "url(#aiProgressGradient)",
              }}
              strokeDasharray="163.36" // 2 * PI * 26
            />
            
            <defs>
              <linearGradient id="aiProgressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="30%" stopColor="#06b6d4" />
                <stop offset="70%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Center content with neural network icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <motion.div
                className="w-6 h-6 mb-1 mx-auto opacity-80"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {/* AI Brain Icon */}
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                  <path
                    d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L19 8L21 9ZM22 12C22 13.1 21.1 14 20 14S18 13.1 18 12 18.9 10 20 10 22 10.9 22 12ZM3 8L5 7V9L3 8ZM6 12C6 10.9 5.1 10 4 10S2 10.9 2 12 2.9 14 4 14 6 13.1 6 12ZM12 18C10.9 18 10 18.9 10 20S10.9 22 12 22 14 21.1 14 20 13.1 18 12 18Z"
                    fill="url(#brainGradient)"
                  />
                  <defs>
                    <linearGradient id="brainGradient">
                      <stop offset="0%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>
              <motion.span 
                className="text-xs font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
                style={{ 
                  opacity: useTransform(scrollYProgress, [0, 0.1], [0, 1])
                }}
              >
                {currentPercentage}%
              </motion.span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Neural Network Progress Dots */}
      <motion.div
        className="fixed top-5 left-6 z-[60] flex space-x-2"
        initial={{ opacity: 0, x: -30 }}
        animate={{ 
          opacity: isVisible ? 1 : 0,
          x: isVisible ? 0 : -30
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {[0, 1, 2, 3, 4, 5].map((index) => (
          <motion.div
            key={index}
            className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500/30 to-cyan-500/30"
            animate={{
              background: [
                "linear-gradient(90deg, rgba(139, 92, 246, 0.3), rgba(6, 182, 212, 0.3))",
                "linear-gradient(90deg, rgba(6, 182, 212, 1), rgba(16, 185, 129, 1))",
                "linear-gradient(90deg, rgba(139, 92, 246, 0.3), rgba(6, 182, 212, 0.3))"
              ],
              scale: [0.8, 1.3, 0.8],
              boxShadow: [
                "0 0 0px rgba(6, 182, 212, 0)",
                "0 0 8px rgba(6, 182, 212, 0.6)",
                "0 0 0px rgba(6, 182, 212, 0)"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>

      {/* AI Reading Assistant */}
      <motion.div
        className="fixed bottom-6 left-6 z-[60] pointer-events-none"
        initial={{ opacity: 0, y: 30, scale: 0.8 }}
        animate={{ 
          opacity: isVisible ? 1 : 0,
          y: isVisible ? 0 : 30,
          scale: isVisible ? 1 : 0.8
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <motion.div 
          className="px-4 py-2 rounded-2xl backdrop-blur-lg bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/10 shadow-2xl"
          animate={{
            boxShadow: [
              "0 8px 32px rgba(139, 92, 246, 0.1)",
              "0 8px 32px rgba(6, 182, 212, 0.1)",
              "0 8px 32px rgba(16, 185, 129, 0.1)",
              "0 8px 32px rgba(139, 92, 246, 0.1)"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="flex items-center space-x-2">
            {/* Animated AI indicator */}
            <motion.div
              className="flex space-x-1"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400" />
              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400" />
              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-emerald-400 to-amber-400" />
            </motion.div>
            
            <motion.span 
              className="text-sm font-medium text-gray-700 dark:text-gray-300"
              style={{
                opacity: useTransform(scrollYProgress, [0, 0.1], [0, 1])
              }}
            >
              Processing: <motion.span className="font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                {currentPercentage}%
              </motion.span>
            </motion.span>
          </div>
        </motion.div>
      </motion.div>
    </>
  )
}
