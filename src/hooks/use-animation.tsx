"use client"

import { useBackground } from "@/contexts/background-context"

interface AnimationConfig {
  // Motion settings
  enableAnimations: boolean
  enableParallax: boolean
  enableGlow: boolean
  enableParticles: boolean
  
  // Timing settings
  defaultDuration: number
  reducedDuration: number
  staggerDelay: number
  
  // Visual effects
  enableBlur: boolean
  enableGradients: boolean
  enableShadows: boolean
}

export function useAnimation(): AnimationConfig {
  const { backgroundType, isMobile, isReducedMotion } = useBackground()
  
  // Basic mode or mobile device = performance first
  const isPerformanceMode = backgroundType === 'basic' || isMobile || isReducedMotion
  
  return {
    // Core animation toggles
    enableAnimations: !isPerformanceMode,
    enableParallax: !isPerformanceMode && !isMobile, // Never on mobile
    enableGlow: !isPerformanceMode,
    enableParticles: !isPerformanceMode && !isMobile, // Resource intensive
    
    // Timing configurations
    defaultDuration: isPerformanceMode ? 0.15 : 0.3,
    reducedDuration: isPerformanceMode ? 0.1 : 0.2,
    staggerDelay: isPerformanceMode ? 0.02 : 0.05,
    
    // Visual effects
    enableBlur: !isPerformanceMode,
    enableGradients: true, // Keep gradients as they're CSS-based
    enableShadows: !isPerformanceMode
  }
}

// Animation variants factory
export function createAnimationVariants(config: AnimationConfig) {
  if (!config.enableAnimations) {
    return {
      initial: {},
      animate: {},
      exit: {},
      hover: {},
      tap: {},
      transition: { duration: 0 }
    }
  }
  
  return {
    // Fade animations
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: config.defaultDuration }
    },
    
    // Slide animations
    slideUp: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 },
      transition: { duration: config.defaultDuration }
    },
    
    slideDown: {
      initial: { opacity: 0, y: -20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 20 },
      transition: { duration: config.defaultDuration }
    },
    
    slideLeft: {
      initial: { opacity: 0, x: 20 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -20 },
      transition: { duration: config.defaultDuration }
    },
    
    slideRight: {
      initial: { opacity: 0, x: -20 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 20 },
      transition: { duration: config.defaultDuration }
    },
    
    // Scale animations
    scaleIn: {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.95 },
      transition: { duration: config.defaultDuration }
    },
    
    // Hover effects
    hover: {
      scale: config.enableAnimations ? 1.05 : 1,
      y: config.enableAnimations ? -2 : 0,
      transition: { duration: config.reducedDuration }
    },
    
    // Tap effects
    tap: {
      scale: config.enableAnimations ? 0.95 : 1,
      transition: { duration: config.reducedDuration }
    },
    
    // Stagger container
    staggerContainer: {
      animate: {
        transition: {
          staggerChildren: config.staggerDelay
        }
      }
    }
  }
}

// Conditional animation wrapper
export function useConditionalAnimation() {
  const config = useAnimation()
  
  return {
    // Apply animation only if enabled
    animate: (animation: Record<string, unknown>) => config.enableAnimations ? animation : {},
    
    // Apply duration
    duration: (baseDuration: number) => 
      config.enableAnimations ? baseDuration : 0,
    
    // Apply delay
    delay: (baseDelay: number) => 
      config.enableAnimations ? baseDelay : 0,
    
    // Check if specific effect is enabled
    canUse: (effect: keyof AnimationConfig) => config[effect] as boolean
  }
}
