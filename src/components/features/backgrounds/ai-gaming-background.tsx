"use client"

import { motion } from "motion/react"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { useIsClient } from "@/hooks/use-client"

// Simple terminal effect
const SimpleCyberpunkTerminal = () => {
  return (
    <div className="absolute bottom-4 left-4 bg-black/80 p-4 rounded border border-green-500">
      <div className="text-green-400 text-xs font-mono">
        <div>$ system.init()</div>
        <div>$ loading...</div>
      </div>
    </div>
  )
}

// Simple data stream effect
const SimpleDataStream = () => {
  return (
    <div className="absolute top-4 right-4 text-cyan-400 text-xs font-mono">
      <div>DATA_STREAM_ACTIVE</div>
      <div>STATUS: ONLINE</div>
    </div>
  )
}

// Enhanced Matrix AI/Gaming particles with cyberpunk aesthetics
const EnhancedMatrixParticles = () => {
  const [particles, setParticles] = useState<Array<{ 
    id: number; 
    x: number; 
    y: number; 
    delay: number; 
    size: number; 
    duration: number;
    type: 'data' | 'circuit' | 'glow' | 'hex';
    color: string;
  }>>([])
  
  const isClient = useIsClient()

  useEffect(() => {
    if (!isClient) return
    
    const colors = ['#00ff41', '#ff0080', '#00d4aa', '#39ff14', '#ffaa00']
    const types: Array<'data' | 'circuit' | 'glow' | 'hex'> = ['data', 'circuit', 'glow', 'hex']
    
    const particleArray = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      size: Math.random() * 6 + 2,
      duration: 4 + Math.random() * 3,
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
            y: [0, -30, 0],
            opacity: [0.2, 1, 0.2],
            scale: [0.8, 1.3, 0.8],
            rotate: particle.type === 'hex' ? [0, 360] : [0, 180, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        >
          {particle.type === 'data' && (
            <div 
              className="w-2 h-2 rounded-full shadow-lg"
              style={{ 
                backgroundColor: particle.color,
                boxShadow: `0 0 10px ${particle.color}, 0 0 20px ${particle.color}40`
              }}
            />
          )}
          {particle.type === 'circuit' && (
            <div 
              className="w-3 h-3 border"
              style={{ 
                borderColor: particle.color,
                backgroundColor: `${particle.color}20`,
                boxShadow: `0 0 8px ${particle.color}60`
              }}
            />
          )}
          {particle.type === 'glow' && (
            <div 
              className="w-4 h-1 rounded-full"
              style={{ 
                backgroundColor: particle.color,
                boxShadow: `0 0 15px ${particle.color}, 0 0 30px ${particle.color}60`
              }}
            />
          )}
          {particle.type === 'hex' && (
            <div 
              className="w-3 h-3 rotate-45 border"
              style={{ 
                borderColor: particle.color,
                backgroundColor: `${particle.color}15`,
                boxShadow: `0 0 6px ${particle.color}80`
              }}
            />
          )}
        </motion.div>
      ))}
    </div>
  )
}

// Grid pattern overlay for tech aesthetic
const TechGrid = () => {
  return (
    <div className="absolute inset-0 opacity-20 dark:opacity-10">
      <div
        className="w-full h-full"
        style={{
          backgroundImage: `
            linear-gradient(cyan 1px, transparent 1px),
            linear-gradient(90deg, cyan 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
    </div>
  )
}

// Animated circuit lines
const CircuitLines = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Horizontal lines */}
      <motion.div
        className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
        animate={{
          scaleX: [0, 1, 0],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: 0,
        }}
      />
      <motion.div
        className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"
        animate={{
          scaleX: [0, 1, 0],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: 2,
        }}
      />
      
      {/* Vertical lines */}
      <motion.div
        className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-green-400/50 to-transparent"
        animate={{
          scaleY: [0, 1, 0],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: 1,
        }}
      />
      <motion.div
        className="absolute right-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-pink-400/50 to-transparent"
        animate={{
          scaleY: [0, 1, 0],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: 3,
        }}
      />
    </div>
  )
}

// Glowing orbs for ambient lighting
const GlowingOrbs = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute top-20 left-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />
    </div>
  )
}

// Scanner lines for futuristic effect
const ScannerLines = () => {
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 })

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent"
        animate={{
          y: [0, dimensions.height],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-purple-400/80 to-transparent"
        animate={{
          x: [0, dimensions.width],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
          delay: 2,
        }}
      />
    </div>
  )
}

// Cyberpunk HUD Interface Elements
const CyberpunkHUD = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Top-left corner HUD */}
      <div className="absolute top-4 left-4 text-[#00ff41] font-mono text-xs opacity-70">
        <div className="border border-[#00ff41]/50 p-2 bg-black/20 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 bg-[#39ff14] rounded-full animate-pulse"></div>
            <span>NEURAL_LINK_ACTIVE</span>
          </div>
          <div>STATUS: ONLINE</div>
          <div>PROTOCOL: AI_MATRIX_V2</div>
        </div>
      </div>

      {/* Top-right corner data streams */}
      <div className="absolute top-4 right-4 text-[#ff0080] font-mono text-xs opacity-70">
        <SimpleCyberpunkTerminal />
        <SimpleDataStream />
      </div>

      {/* Bottom scanning line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#00ff41] to-transparent"
        animate={{
          scaleX: [0, 1, 0],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating data hexagons */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-8 h-8 border border-[#00d4aa]/40"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            }}
            animate={{
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            <div className="w-full h-full bg-[#00d4aa]/10"></div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// Circuit Board Pattern Overlay
const CircuitPattern = () => {
  return (
    <div className="absolute inset-0 opacity-10 pointer-events-none">
      <svg className="w-full h-full">
        <defs>
          <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path
              d="M10,10 L90,10 M50,10 L50,50 M10,50 L90,50 M50,50 L50,90 M10,90 L90,90"
              stroke="#00ff41"
              strokeWidth="1"
              fill="none"
            />
            <circle cx="10" cy="10" r="2" fill="#ff0080" />
            <circle cx="90" cy="10" r="2" fill="#00d4aa" />
            <circle cx="50" cy="50" r="3" fill="#39ff14" />
            <circle cx="10" cy="90" r="2" fill="#ffaa00" />
            <circle cx="90" cy="90" r="2" fill="#ff0080" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>
    </div>
  )
}

// Digital Matrix Code Streams
const MatrixCodeStreams = () => {
  const isClient = useIsClient()
  const [streams, setStreams] = useState<Array<{
    id: number
    x: number
    y: number
    length: number
    speed: number
    delay: number
    chars: string[]
  }>>([])

  useEffect(() => {
    if (!isClient) return
    
    const binaryChars = ['0', '1', '01', '10', '001', '101', '110', '011']
    const matrixChars = ['ﾊ', 'ﾐ', 'ﾋ', 'ｰ', 'ｳ', 'ｼ', 'ﾅ', 'ﾓ', 'ﾆ', 'ｻ', 'ﾜ', 'ﾂ', 'ｵ', 'ﾘ', 'ｱ', 'ﾎ', 'ﾃ', 'ﾏ', 'ｹ', 'ﾒ', 'ｴ', 'ｶ', 'ｷ', 'ﾑ', 'ﾕ', 'ﾗ', 'ｾ', 'ﾈ', 'ｽ', 'ﾀ', 'ﾇ', 'ﾍ']
    const allChars = [...binaryChars, ...matrixChars]
    
    const streamArray = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      length: Math.floor(Math.random() * 15) + 8,
      speed: Math.random() * 2 + 1,
      delay: Math.random() * 3,
      chars: Array.from({ length: Math.floor(Math.random() * 15) + 8 }, () => 
        allChars[Math.floor(Math.random() * allChars.length)]
      )
    }))
    setStreams(streamArray)
  }, [isClient])

  if (!isClient) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-25">
      {streams.map((stream) => (
        <motion.div
          key={stream.id}
          className="absolute font-mono text-[#00ff41] text-xs"
          style={{
            left: `${stream.x}%`,
            top: `${stream.y}%`,
          }}
          animate={{
            y: [0, 50, 0],
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1.1, 0.8],
          }}
          transition={{
            duration: stream.speed,
            repeat: Infinity,
            delay: stream.delay,
            ease: "easeInOut",
          }}
        >
          <div className="flex flex-col space-y-1">
            {stream.chars.map((char, index) => (
              <motion.span
                key={index}
                className="block leading-none"
                style={{
                  textShadow: '0 0 8px #00ff41, 0 0 12px #00ff41',
                  filter: `brightness(${1 - (index / stream.length) * 0.6})`
                }}
                animate={{
                  opacity: [0.4, 1, 0.4],
                  scale: [0.9, 1.1, 0.9],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: index * 0.1 + stream.delay,
                  ease: "easeInOut",
                }}
              >
                {char}
              </motion.span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  )
}

// Matrix Background Pulse Effect
const MatrixBackgroundPulse = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-[#00ff41]/5 via-transparent to-transparent"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-cyan-400/5 via-transparent to-transparent"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </div>
  )
}

// Matrix Scanlines Effect
const MatrixScanlines = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <motion.div
        className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-[#00ff41]/40 to-transparent"
        animate={{
          y: ["-100vh", "100vh"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          filter: "blur(1px)",
          boxShadow: "0 0 20px #00ff41, 0 0 40px #00ff41",
        }}
      />
      <motion.div
        className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
        animate={{
          y: ["100vh", "-100vh"],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
          delay: 1.5,
        }}
        style={{
          filter: "blur(1px)",
          boxShadow: "0 0 15px cyan, 0 0 30px cyan",
        }}
      />
    </div>
  )
}

export function AIGamingBackground({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("relative min-h-screen overflow-hidden", className)}>
      {/* Base dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-800 dark:from-gray-900 dark:via-black dark:to-gray-800" />
      
      {/* Matrix Background Pulse */}
      <MatrixBackgroundPulse />
      
      {/* Matrix Code Streams */}
      <MatrixCodeStreams />
      
      {/* Matrix Scanlines */}
      <MatrixScanlines />
      
      {/* Animated background elements */}
      <GlowingOrbs />
      <TechGrid />
      <CircuitLines />
      <EnhancedMatrixParticles />
      <ScannerLines />
      <CyberpunkHUD />
      <CircuitPattern />
      
      {/* Subtle noise overlay for texture */}
      <div 
        className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Content overlay */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {children}
      </div>
      
      {/* Gradient overlay for content readability */}
      <div className="absolute inset-0 bg-black/20 dark:bg-black/30 pointer-events-none" />
    </div>
  )
}
