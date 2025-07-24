"use client"

import { createContext, useContext, useState, ReactNode, useEffect } from 'react'

type BackgroundType = 'matrix' | 'basic'

interface BackgroundContextType {
  backgroundType: BackgroundType
  setBackgroundType: (type: BackgroundType) => void
  isMobile: boolean
  isReducedMotion: boolean
  getThemeColors: () => {
    primary: string
    secondary: string
    accent: string
    success: string
    warning: string
    danger: string
    text: string
    textSecondary: string
    border: string
    glow: string
  }
}

const BackgroundContext = createContext<BackgroundContextType | undefined>(undefined)

// Mobile detection utility
const isMobileDevice = () => {
  if (typeof window === 'undefined') return false
  
  const userAgent = navigator.userAgent.toLowerCase()
  const mobileKeywords = [
    'mobile', 'android', 'iphone', 'ipad', 'ipod', 
    'blackberry', 'windows phone', 'opera mini'
  ]
  
  // Check user agent
  const isMobileUA = mobileKeywords.some(keyword => userAgent.includes(keyword))
  
  // Check screen size
  const isMobileScreen = window.innerWidth <= 768
  
  // Check touch capability
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
  
  return isMobileUA || (isMobileScreen && isTouchDevice)
}

export function BackgroundProvider({ children }: { children: ReactNode }) {
  const [backgroundType, setBackgroundType] = useState<BackgroundType>('matrix')
  const [isMobile, setIsMobile] = useState(false)
  const [isReducedMotion, setIsReducedMotion] = useState(false)
  const [userHasManuallySet, setUserHasManuallySet] = useState(false)

  // Wrapper for setBackgroundType to track manual changes
  const handleSetBackgroundType = (type: BackgroundType) => {
    setBackgroundType(type)
    setUserHasManuallySet(true)
  }

  useEffect(() => {
    if (typeof window === 'undefined') return

    const mobile = isMobileDevice()
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    setIsMobile(mobile)
    setIsReducedMotion(reducedMotion)
    
    // Only set default background type if user hasn't manually set it
    if (!userHasManuallySet) {
      const defaultType = mobile || reducedMotion ? 'basic' : 'matrix'
      setBackgroundType(defaultType)
    }
    
    // Listen for window resize to update mobile detection
    const handleResize = () => {
      const newMobile = isMobileDevice()
      setIsMobile(newMobile)
      
      // Only auto-switch if user hasn't manually set preference
      if (!userHasManuallySet && newMobile && backgroundType === 'matrix') {
        setBackgroundType('basic')
      }
    }
    
    // Listen for reduced motion changes
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handleMotionChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches)
      // Only auto-switch if user hasn't manually set preference
      if (!userHasManuallySet && e.matches) {
        setBackgroundType('basic')
      }
    }
    
    window.addEventListener('resize', handleResize)
    mediaQuery.addEventListener('change', handleMotionChange)
    
    return () => {
      window.removeEventListener('resize', handleResize)
      mediaQuery.removeEventListener('change', handleMotionChange)
    }
  }, [backgroundType, userHasManuallySet]) // Add missing dependencies

  const getThemeColors = () => {
    // Default to dark mode since we removed the light/dark toggle
    const themeMode = 'dark'
    
    if (backgroundType === 'matrix') {
      if (themeMode === 'dark') {
        // Matrix AI/Gaming theme - Dark mode
        return {
          primary: '#00ff41', // Matrix green
          secondary: '#00d4aa', // Cyber teal
          accent: '#ff0080', // Hot pink accent
          success: '#39ff14', // Neon green
          warning: '#ffaa00', // Cyber orange
          danger: '#ff073a', // Neon red
          text: '#00ff41', // Matrix green text
          textSecondary: '#80ffa5', // Light matrix green
          border: '#00ff41', // Matrix green border
          glow: '#00ff41' // Matrix green glow
        }
      } else {
        // Matrix AI/Gaming theme - Light mode (keep for potential future use)
        return {
          primary: '#00cc33', // Darker matrix green
          secondary: '#00a088', // Darker cyber teal
          accent: '#cc0066', // Darker hot pink
          success: '#2dd40a', // Darker neon green
          warning: '#cc8800', // Darker cyber orange
          danger: '#cc052e', // Darker neon red
          text: '#00cc33', // Darker matrix green text
          textSecondary: '#66cc88', // Medium matrix green
          border: '#00cc33', // Darker matrix green border
          glow: '#00cc33' // Darker matrix green glow
        }
      }
    } else {
      if (themeMode === 'dark') {
        // Basic mode - Simple colors for performance
        return {
          primary: '#60a5fa', // Soft blue
          secondary: '#a78bfa', // Soft purple
          accent: '#34d399', // Soft emerald
          success: '#10b981', // Emerald
          warning: '#f59e0b', // Amber
          danger: '#ef4444', // Red
          text: '#e2e8f0', // Light gray
          textSecondary: '#94a3b8', // Medium gray
          border: '#475569', // Dark gray
          glow: 'none' // No glow effects for performance
        }
      } else {
        // Basic mode - Light mode (keep for potential future use)
        return {
          primary: '#3b82f6', // Blue
          secondary: '#8b5cf6', // Purple
          accent: '#059669', // Emerald
          success: '#047857', // Dark emerald
          warning: '#d97706', // Dark amber
          danger: '#dc2626', // Dark red
          text: '#1e293b', // Dark gray
          textSecondary: '#475569', // Medium dark gray
          border: '#cbd5e1', // Light gray
          glow: 'none' // No glow effects for performance
        }
      }
    }
  }

  return (
    <BackgroundContext.Provider value={{ 
      backgroundType, 
      setBackgroundType: handleSetBackgroundType, 
      isMobile, 
      isReducedMotion, 
      getThemeColors 
    }}>
      {children}
    </BackgroundContext.Provider>
  )
}

export function useBackground() {
  const context = useContext(BackgroundContext)
  if (context === undefined) {
    throw new Error('useBackground must be used within a BackgroundProvider')
  }
  return context
}
