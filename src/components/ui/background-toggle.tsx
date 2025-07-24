"use client"

import { motion, AnimatePresence } from "motion/react"
import { Zap, Monitor } from "lucide-react"
import { useBackground } from "@/contexts/background-context"
import { useAnimation } from "@/hooks/use-animation"

export function BackgroundToggle() {
  const { backgroundType, setBackgroundType, isMobile } = useBackground()
  const animConfig = useAnimation()

  const toggleBackground = () => {
    const newType = backgroundType === 'matrix' ? 'basic' : 'matrix'
    setBackgroundType(newType)
  }

  return (
    <div className="fixed bottom-20 right-4 z-50">
      <motion.button
        onClick={toggleBackground}
        className={`
          relative w-10 h-10 rounded-full border shadow-2xl
          transition-all duration-500 overflow-hidden
          ${animConfig.enableBlur ? 'backdrop-blur-xl' : ''}
          ${backgroundType === 'matrix' 
            ? 'bg-black/80 border-[#00ff41]/30 shadow-[#00ff41]/20' 
            : 'bg-slate-800/80 border-green-500/30 shadow-green-500/20'
          }
          hover:scale-105 active:scale-95
        `}
        whileTap={animConfig.enableAnimations ? { scale: 0.95 } : {}}
        initial={animConfig.enableAnimations ? { opacity: 0, y: 20 } : {}}
        animate={animConfig.enableAnimations ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: animConfig.enableAnimations ? 0.7 : 0 }}
      >
        {/* Background glow effect - only in matrix mode with animations */}
        {animConfig.enableGlow && (
          <div className={`
            absolute inset-0 rounded-full blur-md opacity-30
            ${backgroundType === 'matrix' 
              ? 'bg-gradient-to-r from-[#00ff41] to-[#00d4aa]' 
              : 'bg-gradient-to-r from-green-400 to-green-500'
            }
          `} />
        )}

        {/* Icon container */}
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          <AnimatePresence mode="wait">
            {backgroundType === 'matrix' ? (
              <motion.div
                key="zap"
                initial={animConfig.enableAnimations ? { rotate: -90, opacity: 0 } : {}}
                animate={animConfig.enableAnimations ? { rotate: 0, opacity: 1 } : {}}
                exit={animConfig.enableAnimations ? { rotate: 90, opacity: 0 } : {}}
                transition={{ duration: animConfig.defaultDuration }}
              >
                <Zap 
                  size={18} 
                  className="text-[#00ff41] fill-[#00ff41]"
                />
              </motion.div>
            ) : (
              <motion.div
                key="minimize"
                initial={animConfig.enableAnimations ? { rotate: 90, opacity: 0 } : {}}
                animate={animConfig.enableAnimations ? { rotate: 0, opacity: 1 } : {}}
                exit={animConfig.enableAnimations ? { rotate: -90, opacity: 0 } : {}}
                transition={{ duration: animConfig.defaultDuration }}
              >
                <Monitor 
                  size={18} 
                  className="text-green-300"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Hover effect - reduced in basic mode */}
        <div className={`
          absolute inset-0 rounded-full opacity-0 hover:opacity-20 transition-opacity
          ${backgroundType === 'matrix' 
            ? 'bg-[#00ff41]' 
            : 'bg-green-400'
          }
        `} />
        
        {/* Mobile indicator */}
        {isMobile && (
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full animate-pulse" />
        )}
      </motion.button>
    </div>
  )
}
