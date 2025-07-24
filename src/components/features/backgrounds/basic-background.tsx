"use client"

import React from "react"
import { cn } from "@/lib/utils"

// Basic static background for performance optimization
// No animations, minimal effects, static elements only
export function BasicBackground({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("relative min-h-screen", className)}>
      {/* Simple static gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      
      {/* Static subtle pattern overlay - no animations */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(96,165,250,0.05),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.05),transparent_40%)]" />
      
      {/* Simple static grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `
          linear-gradient(rgba(96, 165, 250, 0.2) 1px, transparent 1px),
          linear-gradient(90deg, rgba(96, 165, 250, 0.2) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
      }} />
      
      {/* Static corner accents */}
      <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-blue-400/10"></div>
      <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-purple-400/10"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-emerald-400/10"></div>
      <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-blue-400/10"></div>
      
      {/* Content overlay */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {children}
      </div>
      
      {/* Minimal overlay for content readability - no backdrop blur */}
      <div className="absolute inset-0 bg-black/5 pointer-events-none" />
    </div>
  )
}
