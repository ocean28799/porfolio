"use client"

import { useEffect } from 'react'
import { performanceMonitor } from '@/lib/performance'

interface PerformanceMemory {
  usedJSHeapSize: number
  totalJSHeapSize: number
  jsHeapSizeLimit: number
}

export function PerformanceReporter() {
  useEffect(() => {
    // Web Vitals reporting
    if (typeof window !== 'undefined' && 'performance' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming
            
            if (process.env.NODE_ENV === 'development') {
              console.log('⚡ Performance Metrics:', {
                'Page Load': `${navEntry.loadEventEnd - navEntry.startTime}ms`,
                'DOM Content Loaded': `${navEntry.domContentLoadedEventEnd - navEntry.startTime}ms`,
                'First Paint': `${navEntry.domContentLoadedEventEnd - navEntry.startTime}ms`,
                'Time to Interactive': `${navEntry.loadEventEnd - navEntry.startTime}ms`,
              })
            }
          }
          
          if (entry.entryType === 'largest-contentful-paint') {
            if (process.env.NODE_ENV === 'development') {
              console.log(`⚡ Largest Contentful Paint: ${entry.startTime}ms`)
            }
          }
          
          if (entry.entryType === 'first-input') {
            const fiEntry = entry as PerformanceEventTiming
            if (process.env.NODE_ENV === 'development') {
              console.log(`⚡ First Input Delay: ${fiEntry.processingStart - fiEntry.startTime}ms`)
            }
          }
        })
      })

      // Observe different entry types
      try {
        observer.observe({ entryTypes: ['navigation', 'largest-contentful-paint', 'first-input'] })
      } catch {
        // Fallback for browsers that don't support all entry types
        observer.observe({ entryTypes: ['navigation'] })
      }

      // Clean up observer on unmount
      return () => observer.disconnect()
    }
  }, [])

  useEffect(() => {
    // Monitor memory usage in development
    if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
      const logMemoryUsage = () => {
        if ('memory' in performance) {
          const memory = (performance as { memory: PerformanceMemory }).memory
          console.log('📊 Memory Usage:', {
            used: `${(memory.usedJSHeapSize / 1024 / 1024).toFixed(2)}MB`,
            total: `${(memory.totalJSHeapSize / 1024 / 1024).toFixed(2)}MB`,
            limit: `${(memory.jsHeapSizeLimit / 1024 / 1024).toFixed(2)}MB`,
          })
        }
      }

      // Log memory usage every 30 seconds in development
      const interval = setInterval(logMemoryUsage, 30000)
      return () => clearInterval(interval)
    }
  }, [])

  return null // This component doesn't render anything
}

// Component for measuring specific page performance
export function PagePerformanceTracker({ pageName }: { pageName: string }) {
  useEffect(() => {
    performanceMonitor.startMeasurement(`${pageName}_total_time`)
    
    return () => {
      performanceMonitor.endMeasurement(`${pageName}_total_time`)
    }
  }, [pageName])

  return null
}
