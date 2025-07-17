"use client"

import { useIsClient } from "@/hooks/use-client"

interface ProfessionalRainProps {
  className?: string
  intensity?: number
  speed?: number
}

export function ProfessionalRain({ className = "" }: ProfessionalRainProps) {
  const isClient = useIsClient()

  if (!isClient) {
    return <div className={`w-full h-full ${className}`} />
  }

  return (
    <div className={`w-full h-full relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-b from-transparent via-primary/5 to-transparent animate-pulse" />
      </div>
    </div>
  )
}
