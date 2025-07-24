"use client"

import { useState, useEffect } from 'react'

interface MobileDetection {
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
  orientation: 'portrait' | 'landscape'
  screenSize: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  touchSupported: boolean
}

const getScreenSize = (width: number): MobileDetection['screenSize'] => {
  if (width < 475) return 'xs'
  if (width < 640) return 'sm'
  if (width < 768) return 'md'
  if (width < 1024) return 'lg'
  return 'xl'
}

export function useMobileDetection(): MobileDetection {
  const [detection, setDetection] = useState<MobileDetection>({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    orientation: 'portrait',
    screenSize: 'xl',
    touchSupported: false,
  })

  useEffect(() => {
    const updateDetection = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      const isMobile = width < 768
      const isTablet = width >= 768 && width < 1024
      const isDesktop = width >= 1024
      const orientation = width > height ? 'landscape' : 'portrait'
      const screenSize = getScreenSize(width)
      const touchSupported = 'ontouchstart' in window || navigator.maxTouchPoints > 0

      setDetection({
        isMobile,
        isTablet,
        isDesktop,
        orientation,
        screenSize,
        touchSupported,
      })
    }

    // Initial detection
    updateDetection()

    // Listen for resize events
    window.addEventListener('resize', updateDetection)
    window.addEventListener('orientationchange', updateDetection)

    return () => {
      window.removeEventListener('resize', updateDetection)
      window.removeEventListener('orientationchange', updateDetection)
    }
  }, [])

  return detection
}

export function usePlaygroundLayout() {
  const detection = useMobileDetection()
  
  const getLayoutClasses = () => {
    const classes = []
    
    if (detection.isMobile) {
      classes.push('playground-mobile-stack')
      if (detection.screenSize === 'xs') {
        classes.push('playground-xs-padding')
      }
      if (detection.orientation === 'landscape') {
        classes.push('playground-landscape-grid')
      }
    } else if (detection.isTablet) {
      classes.push('playground-tablet-layout')
    }
    
    return classes.join(' ')
  }
  
  const getEditorHeight = () => {
    if (detection.isMobile) {
      if (detection.screenSize === 'xs') return 'h-[200px] xs:h-[180px] min-h-[180px]'
      if (detection.orientation === 'landscape') return 'h-[240px] min-h-[240px]'
      return 'h-[280px] min-h-[280px]'
    } else if (detection.isTablet) {
      return 'h-[350px] min-h-[350px]'
    }
    return 'h-[450px] min-h-[450px]'
  }
  
  const getButtonClasses = () => {
    const classes = ['playground-touch-target', 'playground-mobile-focus']
    
    if (detection.isMobile) {
      classes.push('playground-mobile-buttons')
      if (detection.screenSize === 'xs') {
        classes.push('playground-xs-button')
      }
    }
    
    return classes.join(' ')
  }
  
  return {
    ...detection,
    getLayoutClasses,
    getEditorHeight,
    getButtonClasses,
  }
}
