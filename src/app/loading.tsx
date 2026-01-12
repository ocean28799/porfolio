'use client'

import { Loader2 } from 'lucide-react'

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="text-center">
        {/* Animated Logo/Spinner */}
        <div className="mb-6 flex justify-center">
          <div className="relative">
            {/* Outer ring */}
            <div className="w-16 h-16 rounded-full border-4 border-slate-700 border-t-blue-500 animate-spin" />
            {/* Inner content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Loader2 className="w-6 h-6 text-blue-400 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <h2 className="text-lg font-medium text-white mb-2">Loading...</h2>
        <p className="text-sm text-slate-400">Please wait a moment</p>

        {/* Loading Bar */}
        <div className="mt-6 w-48 mx-auto h-1 bg-slate-800 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 animate-shimmer" 
               style={{ 
                 width: '100%',
                 backgroundSize: '200% 100%',
                 animation: 'shimmer 1.5s infinite'
               }} 
          />
        </div>
      </div>

      {/* Add shimmer animation */}
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </div>
  )
}
