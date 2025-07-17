"use client"

import { createContext, useContext, useState, ReactNode, useEffect } from 'react'

type ThemeMode = 'dark' | 'light'

interface ThemeContextType {
  themeMode: ThemeMode
  toggleTheme: () => void
  isTransitioning: boolean
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeMode, setThemeMode] = useState<ThemeMode>('dark')
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Apply theme to document
  useEffect(() => {
    const root = document.documentElement
    if (themeMode === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [themeMode])

  const toggleTheme = () => {
    setIsTransitioning(true)
    
    // Add enhanced transition effect
    const root = document.documentElement
    root.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
    
    setTimeout(() => {
      setThemeMode(prev => prev === 'dark' ? 'light' : 'dark')
      
      setTimeout(() => {
        setIsTransitioning(false)
        root.style.transition = ''
      }, 400)
    }, 100)
  }

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme, isTransitioning }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
