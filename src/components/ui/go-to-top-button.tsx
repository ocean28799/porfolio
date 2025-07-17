"use client"

import { motion, AnimatePresence } from "motion/react"
import { ChevronUp } from "lucide-react"
import { useBackground } from "@/contexts/background-context"
import { useEffect, useState } from "react"

export function GoToTopButton() {
  const { backgroundType } = useBackground()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className={`
            fixed bottom-4 right-4 z-50 w-12 h-12 rounded-full backdrop-blur-xl border shadow-2xl
            transition-all duration-300 overflow-hidden
            ${backgroundType === 'matrix' 
              ? 'bg-black/80 border-[#00ff41]/30 shadow-[#00ff41]/20' 
              : 'bg-slate-800/80 border-slate-600/30 shadow-blue-500/20'
            }
            hover:scale-105 active:scale-95
          `}
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          {/* Background glow effect */}
          <div className={`
            absolute inset-0 rounded-full blur-md opacity-30
            ${backgroundType === 'matrix' 
              ? 'bg-gradient-to-r from-[#00ff41] to-[#00d4aa]' 
              : 'bg-gradient-to-r from-blue-400 to-purple-400'
            }
          `} />

          {/* Icon container */}
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronUp 
                size={20} 
                className={
                  backgroundType === 'matrix' 
                    ? 'text-[#00ff41]' 
                    : 'text-blue-300'
                } 
              />
            </motion.div>
          </div>

          {/* Hover effect */}
          <div className={`
            absolute inset-0 rounded-full opacity-0 hover:opacity-20 transition-opacity
            ${backgroundType === 'matrix' 
              ? 'bg-[#00ff41]' 
              : 'bg-blue-400'
            }
          `} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
