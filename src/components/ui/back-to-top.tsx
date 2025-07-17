"use client"

import { motion } from "framer-motion"
import { ArrowUp, Zap } from "lucide-react"
import { useEffect, useState } from "react"

export function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    const toggleVisibility = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        if (window.pageYOffset > 300) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }
      }, 50) // Debounce scroll events
    }

    window.addEventListener("scroll", toggleVisibility, { passive: true })
    return () => {
      window.removeEventListener("scroll", toggleVisibility)
      clearTimeout(timeoutId)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <>
      {/* Enhanced Back to top button */}
      <motion.div
        className="fixed bottom-8 right-8 z-40"
        initial={{ opacity: 0, scale: 0, y: 100 }}
        animate={{ 
          opacity: isVisible ? 1 : 0, 
          scale: isVisible ? 1 : 0,
          y: isVisible ? 0 : 100
        }}
        transition={{ 
          type: "spring",
          stiffness: 300,
          damping: 25
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {/* Glowing ring effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 blur-lg"
          animate={{
            scale: isHovered ? 1.4 : 1,
            opacity: isHovered ? 0.6 : 0.3,
          }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Outer ring */}
        <motion.div
          className="relative w-14 h-14 rounded-full border-2 border-purple-500/30 bg-black/80 backdrop-blur-xl overflow-hidden"
          whileHover={{ 
            scale: 1.05,
            borderColor: "rgba(168, 85, 247, 0.6)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Rotating gradient background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 opacity-20"
            animate={{ rotate: isHovered ? 360 : 0 }}
            transition={{ duration: 2, repeat: isHovered ? Infinity : 0, ease: "linear" }}
          />
          
          <motion.button
            className="relative w-full h-full flex items-center justify-center text-white focus:outline-none group"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            {/* Icon with animation */}
            <motion.div
              animate={{ 
                y: isHovered ? -2 : 0,
                rotate: isHovered ? -5 : 0 
              }}
              transition={{ duration: 0.2 }}
            >
              <ArrowUp className="w-6 h-6 drop-shadow-lg" />
            </motion.div>
            
            {/* Lightning effect on hover */}
            {isHovered && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
              >
                <Zap className="w-3 h-3 text-yellow-400 absolute -top-1 -right-1" />
              </motion.div>
            )}
          </motion.button>
        </motion.div>
        
        {/* Particle effects */}
        {isHovered && (
          <>
            <motion.div
              className="absolute -top-2 -right-2 w-2 h-2 bg-cyan-400 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -bottom-2 -left-2 w-1.5 h-1.5 bg-purple-400 rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.3
              }}
            />
          </>
        )}
      </motion.div>
    </>
  )
}
