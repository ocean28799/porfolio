"use client"

import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Code, Loader2 } from 'lucide-react'

// Lazy load the heavy playground component
const MultiFilePlayground = lazy(() => 
  import('./multi-file-playground-optimized').then(module => ({ 
    default: module.default 
  }))
)

// Loading component with better UX
function PlaygroundLoader() {
  const { t } = useTranslation()
  
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-4 text-center"
      >
        <div className="relative">
          <Code className="w-16 h-16 text-blue-500" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute -top-2 -right-2"
          >
            <Loader2 className="w-6 h-6 text-blue-400" />
          </motion.div>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {t('playground.loading')}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {t('playground.description')}
          </p>
        </div>
        
        {/* Loading progress bar */}
        <div className="w-64 h-1 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
          />
        </div>
      </motion.div>
    </div>
  )
}

// Error boundary fallback (removed unused component)

export function CodePlayground() {
  return (
    <Suspense fallback={<PlaygroundLoader />}>
      <MultiFilePlayground />
    </Suspense>
  )
}
