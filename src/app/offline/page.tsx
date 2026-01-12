"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { WifiOff, Home, RefreshCw } from 'lucide-react'

export default function OfflinePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4">
      <div className="max-w-md w-full text-center">
        {/* Offline Icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
            <WifiOff className="w-12 h-12 text-slate-400" />
          </div>
        </div>

        {/* Message */}
        <h1 className="text-3xl font-bold text-white mb-4">
          You&apos;re Offline
        </h1>
        <p className="text-slate-400 mb-8 max-w-sm mx-auto">
          It looks like you&apos;ve lost your internet connection. 
          Some features may be unavailable until you&apos;re back online.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            onClick={() => window.location.reload()}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Try Again
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-slate-600 text-slate-300 hover:bg-slate-800"
          >
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Link>
          </Button>
        </div>

        {/* Info */}
        <div className="mt-12 p-4 bg-slate-800/50 rounded-xl border border-slate-700">
          <p className="text-sm text-slate-500">
            💡 This page has been cached and is available offline. 
            Once you&apos;re back online, you&apos;ll have access to all features.
          </p>
        </div>
      </div>
    </div>
  )
}
