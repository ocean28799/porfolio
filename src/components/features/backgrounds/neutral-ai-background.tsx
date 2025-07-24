"use client"

import { motion } from "motion/react"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { useIsClient } from "@/hooks/use-client"

// Simple rain effect replacement
const SimpleRain = () => {
  const isClient = useIsClient()
  const [rainDrops, setRainDrops] = useState<Array<{
    id: number
    left: string
    top: string
    delay: string
  }>>([])

  useEffect(() => {
    if (!isClient) return
    
    const drops = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
    }))
    setRainDrops(drops)
  }, [isClient])

  if (!isClient || rainDrops.length === 0) {
    return <div className="absolute inset-0 overflow-hidden opacity-10" />
  }

  return (
    <div className="absolute inset-0 overflow-hidden opacity-10">
      {rainDrops.map((drop) => (
        <div
          key={drop.id}
          className="absolute w-0.5 h-4 bg-blue-200 animate-pulse"
          style={{
            left: drop.left,
            top: drop.top,
            animationDelay: drop.delay,
          }}
        />
      ))}
    </div>
  )
}

// Subtle AI/Gaming particles for neutral theme
const NeutralAIParticles = () => {
  const isClient = useIsClient()
  const [particles, setParticles] = useState<Array<{ 
    id: number; 
    x: number; 
    y: number; 
    delay: number; 
    size: number; 
    type: 'node' | 'data' | 'connection' | 'pulse';
    color: string;
  }>>([])

  useEffect(() => {
    if (!isClient) return
    
    const colors = ['#60a5fa', '#a78bfa', '#34d399', '#f59e0b', '#e2e8f0']
    const types: Array<'node' | 'data' | 'connection' | 'pulse'> = ['node', 'data', 'connection', 'pulse']
    
    const particleArray = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      size: Math.random() * 4 + 1,
      type: types[Math.floor(Math.random() * types.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
    }))
    setParticles(particleArray)
  }, [isClient])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {isClient && particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.1, 0.6, 0.1],
            scale: [0.9, 1.1, 0.9],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        >
          {particle.type === 'node' && (
            <div 
              className="w-2 h-2 rounded-full"
              style={{ 
                backgroundColor: particle.color,
                boxShadow: `0 0 8px ${particle.color}60`
              }}
            />
          )}
          {particle.type === 'data' && (
            <div 
              className="w-1 h-3 rounded-sm"
              style={{ 
                backgroundColor: particle.color,
                opacity: 0.7
              }}
            />
          )}
          {particle.type === 'connection' && (
            <div 
              className="w-3 h-0.5 rounded-full"
              style={{ 
                backgroundColor: particle.color,
                opacity: 0.5
              }}
            />
          )}
          {particle.type === 'pulse' && (
            <div 
              className="w-1 h-1 rounded-full animate-pulse"
              style={{ 
                backgroundColor: particle.color,
                boxShadow: `0 0 6px ${particle.color}80`
              }}
            />
          )}
        </motion.div>
      ))}
    </div>
  )
}

// Subtle grid pattern for tech feel
const TechGrid = () => {
  return (
    <div className="absolute inset-0 opacity-10">
      <div
        className="w-full h-full"
        style={{
          backgroundImage: `
            linear-gradient(rgba(96, 165, 250, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(96, 165, 250, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  )
}

// Animated connection lines
const ConnectionLines = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Horizontal connection */}
      <motion.div
        className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
        animate={{
          scaleX: [0, 1, 0],
          opacity: [0, 0.6, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          delay: 0,
        }}
      />
      
      {/* Vertical connection */}
      <motion.div
        className="absolute left-2/3 top-0 w-px h-full bg-gradient-to-b from-transparent via-purple-400/30 to-transparent"
        animate={{
          scaleY: [0, 1, 0],
          opacity: [0, 0.6, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          delay: 2,
        }}
      />
    </div>
  )
}

// Ambient lighting orbs
const AmbientOrbs = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute top-20 left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/3 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 6,
        }}
      />
    </div>
  )
}

// Professional HUD elements
const ProfessionalHUD = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Top-left status */}
      <div className="absolute top-4 left-4 text-slate-300 font-mono text-xs opacity-60">
        <div className="border border-slate-500/30 p-2 bg-slate-900/20 backdrop-blur-sm rounded">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span>SYSTEM_ONLINE</span>
          </div>
          <div>MODE: PROFESSIONAL</div>
          <div>STATUS: ACTIVE</div>
        </div>
      </div>

      {/* Bottom data indicator */}
      <motion.div
        className="absolute bottom-4 right-4 text-blue-300 font-mono text-xs opacity-60"
        animate={{
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      >
        <div className="border border-blue-400/30 p-2 bg-slate-900/20 backdrop-blur-sm rounded">
          <div>AI_ENHANCED</div>
          <div>PERFORMANCE: 96%</div>
        </div>
      </motion.div>

      {/* Subtle corner accents */}
      <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-blue-400/20"></div>
      <div className="absolute top-0 right-0 w-12 h-12 border-r-2 border-t-2 border-purple-400/20"></div>
      <div className="absolute bottom-0 left-0 w-12 h-12 border-l-2 border-b-2 border-emerald-400/20"></div>
      <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-blue-400/20"></div>
    </div>
  )
}

export function NeutralAIBackground({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("relative min-h-screen overflow-hidden", className)}>
      {/* Base gradient background - more neutral */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      
      {/* Professional Rain Effect */}
      <SimpleRain />
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(96,165,250,0.1),transparent_50%)]" />
      
      {/* Professional Rain Effect */}
      <SimpleRain />
      
      {/* Animated background elements */}
      <AmbientOrbs />
      <TechGrid />
      <ConnectionLines />
      <NeutralAIParticles />
      <ProfessionalHUD />
      
      {/* Subtle texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.008] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Content overlay */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {children}
      </div>
      
      {/* Gradient overlay for content readability */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />
    </div>
  )
}
