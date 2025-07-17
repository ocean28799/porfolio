"use client"

import { motion, AnimatePresence } from "motion/react"
import { Zap, Brain } from "lucide-react"
import { useBackground } from "@/contexts/background-context"

export function BackgroundToggle() {
  const { backgroundType, setBackgroundType } = useBackground()

  const toggleBackground = () => {
    setBackgroundType(backgroundType === 'matrix' ? 'neutral' : 'matrix')
  }

  return (
    <div className="fixed bottom-20 right-4 z-50">
      <motion.button
        onClick={toggleBackground}
        className={`
          relative w-12 h-12 rounded-full backdrop-blur-xl border shadow-2xl
          transition-all duration-500 overflow-hidden
          ${backgroundType === 'matrix' 
            ? 'bg-black/80 border-[#00ff41]/30 shadow-[#00ff41]/20' 
            : 'bg-slate-800/80 border-slate-600/30 shadow-blue-500/20'
          }
          hover:scale-105 active:scale-95
        `}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
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
          <AnimatePresence mode="wait">
            {backgroundType === 'matrix' ? (
              <motion.div
                key="zap"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Zap 
                  size={20} 
                  className="text-[#00ff41] fill-[#00ff41]"
                />
              </motion.div>
            ) : (
              <motion.div
                key="brain"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Brain 
                  size={20} 
                  className="text-blue-300"
                />
              </motion.div>
            )}
          </AnimatePresence>
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
    </div>
  )
}
