import { useEffect, useRef, useCallback, useState } from 'react'

// Performance monitoring utilities
export class PerformanceMonitor {
  private static instance: PerformanceMonitor
  private metrics: Map<string, number> = new Map()

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor()
    }
    return PerformanceMonitor.instance
  }

  startMeasurement(name: string): void {
    this.metrics.set(name, performance.now())
  }

  endMeasurement(name: string): number {
    const startTime = this.metrics.get(name)
    if (!startTime) return 0
    
    const duration = performance.now() - startTime
    this.metrics.delete(name)
    
    if (process.env.NODE_ENV === 'development') {
      console.log(`⚡ ${name}: ${duration.toFixed(2)}ms`)
    }
    
    return duration
  }

  measureAsync<T>(name: string, fn: () => Promise<T>): Promise<T> {
    return new Promise(async (resolve, reject) => {
      this.startMeasurement(name)
      try {
        const result = await fn()
        this.endMeasurement(name)
        resolve(result)
      } catch (error) {
        this.endMeasurement(name)
        reject(error)
      }
    })
  }
}

export const performanceMonitor = PerformanceMonitor.getInstance()

// React hooks for performance optimization
export function usePerformanceMonitor(componentName: string) {
  const mounted = useRef(false)

  useEffect(() => {
    if (!mounted.current) {
      performanceMonitor.startMeasurement(`${componentName}_mount`)
      mounted.current = true
    }

    return () => {
      if (mounted.current) {
        performanceMonitor.endMeasurement(`${componentName}_unmount`)
      }
    }
  }, [componentName])

  const measureRender = useCallback((renderName: string, fn: () => unknown) => {
    performanceMonitor.startMeasurement(`${componentName}_${renderName}`)
    const result = fn()
    performanceMonitor.endMeasurement(`${componentName}_${renderName}`)
    return result
  }, [componentName])

  return { measureRender }
}

// Debounce hook for performance
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}

// Optimized intersection observer hook
export function useIntersectionObserver(
  options: IntersectionObserverInit = {}
) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const targetRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)
    }, {
      threshold: 0.1,
      rootMargin: '50px',
      ...options,
    })

    const element = targetRef.current
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [options])

  return [targetRef, isIntersecting] as const
}

// Dynamic import with error boundary
export async function lazyImport<T>(
  importFn: () => Promise<{ default: T }>,
  componentName?: string
): Promise<T> {
  try {
    const importedModule = await importFn()
    return importedModule.default
  } catch (error) {
    console.error(`Failed to lazy load ${componentName || 'component'}:`, error)
    throw error
  }
}

// Image preloader
export function preloadImage(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve()
    img.onerror = reject
    img.src = src
  })
}

// Batch image preloader
export async function preloadImages(sources: string[]): Promise<void> {
  const promises = sources.map(preloadImage)
  await Promise.allSettled(promises)
}

// Performance-aware animation frame scheduler
export function scheduleWork(callback: () => void, priority: 'high' | 'normal' | 'low' = 'normal') {
  const timeSlice = priority === 'high' ? 16 : priority === 'normal' ? 33 : 50
  
  function performWork() {
    const start = performance.now()
    
    while (performance.now() - start < timeSlice) {
      callback()
      break // Single callback execution for now
    }
  }

  requestAnimationFrame(performWork)
}

// Memory usage tracker (development only)
export function trackMemoryUsage(componentName: string) {
  if (process.env.NODE_ENV === 'development' && 'memory' in performance) {
    interface PerformanceMemory {
      usedJSHeapSize: number
      totalJSHeapSize: number
      jsHeapSizeLimit: number
    }
    
    const memInfo = (performance as { memory: PerformanceMemory }).memory
    console.log(`📊 ${componentName} Memory:`, {
      used: `${(memInfo.usedJSHeapSize / 1024 / 1024).toFixed(2)}MB`,
      total: `${(memInfo.totalJSHeapSize / 1024 / 1024).toFixed(2)}MB`,
      limit: `${(memInfo.jsHeapSizeLimit / 1024 / 1024).toFixed(2)}MB`,
    })
  }
}
