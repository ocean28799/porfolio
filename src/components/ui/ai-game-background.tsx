"use client"

import React from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

// Circuit board pattern component
const CircuitPattern = ({ theme }: { theme: string }) => {
  return (
    <div className="absolute inset-0 opacity-20">
      <svg
        className="w-full h-full"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id={`circuit-${theme}`}
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M20 0V40M0 20H40M10 10H30M10 30H30"
              stroke={theme === "dark" ? "#00ff88" : "#3b82f6"}
              strokeWidth="0.5"
              opacity="0.3"
            />
            <circle
              cx="20"
              cy="20"
              r="2"
              fill={theme === "dark" ? "#00ff88" : "#3b82f6"}
              opacity="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#circuit-${theme})`} />
      </svg>
    </div>
  )
}

// Floating code fragments
const CodeFragments = ({ theme }: { theme: string }) => {
  const fragments = [
    "const ai = () =>", 
    "{ return magic; }", 
    "async/await", 
    "useState()", 
    "AI.predict()", 
    "neural.net",
    "matrix.mult()",
    "quantum.bit"
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {fragments.map((fragment, i) => (
        <motion.div
          key={i}
          className={`absolute text-xs font-mono ${
            theme === "dark" 
              ? "text-cyan-400/30" 
              : "text-blue-600/20"
          }`}
          initial={{ 
            x: Math.random() * window.innerWidth, 
            y: window.innerHeight + 50,
            opacity: 0 
          }}
          animate={{
            y: -50,
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: i * 2,
            ease: "linear"
          }}
          style={{
            left: `${Math.random() * 90}%`,
          }}
        >
          {fragment}
        </motion.div>
      ))}
    </div>
  )
}

// Neural network nodes
const NeuralNodes = ({ theme }: { theme: string }) => {
  const nodes = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="w-full h-full">
        {/* Connection lines */}
        {nodes.map((node, i) => 
          nodes.slice(i + 1).map((otherNode, j) => {
            const distance = Math.sqrt(
              Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2)
            )
            if (distance < 25) {
              return (
                <motion.line
                  key={`${i}-${j}`}
                  x1={`${node.x}%`}
                  y1={`${node.y}%`}
                  x2={`${otherNode.x}%`}
                  y2={`${otherNode.y}%`}
                  stroke={theme === "dark" ? "#00ff88" : "#3b82f6"}
                  strokeWidth="0.5"
                  opacity="0.3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: Math.random() * 2
                  }}
                />
              )
            }
            return null
          })
        )}
        
        {/* Nodes */}
        {nodes.map((node) => (
          <motion.circle
            key={node.id}
            cx={`${node.x}%`}
            cy={`${node.y}%`}
            r={node.size}
            fill={theme === "dark" ? "#00ff88" : "#3b82f6"}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 1, 1.2, 1],
              opacity: [0, 0.6, 0.8, 0.6]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: node.id * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </svg>
    </div>
  )
}

// Matrix rain effect
const MatrixRain = ({ theme }: { theme: string }) => {
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const columns = isMobile ? 10 : 20
  const characters = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン"

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      {Array.from({ length: columns }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute top-0 font-mono text-xs"
          style={{ left: `${(i / columns) * 100}%` }}
          animate={{ y: ["-100vh", "100vh"] }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 2
          }}
        >
          {Array.from({ length: 20 }).map((_, j) => (
            <div
              key={j}
              className={`block leading-tight ${
                theme === "dark" ? "text-green-400" : "text-blue-500"
              }`}
              style={{ 
                opacity: Math.max(0, 1 - j * 0.1),
                fontSize: `${8 + Math.random() * 4}px`
              }}
            >
              {characters[Math.floor(Math.random() * characters.length)]}
            </div>
          ))}
        </motion.div>
      ))}
    </div>
  )
}

// Gaming grid overlay
const GamingGrid = ({ theme }: { theme: string }) => {
  return (
    <div className="absolute inset-0 opacity-10">
      <div 
        className={`w-full h-full ${
          theme === "dark" 
            ? "bg-[linear-gradient(rgba(0,255,136,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,136,0.1)_1px,transparent_1px)]"
            : "bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)]"
        }`}
        style={{ backgroundSize: "50px 50px" }}
      />
    </div>
  )
}

export function AIGameBackground({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <div>{children}</div>

  return (
    <div className="relative min-h-screen w-full">
      {/* Fixed background elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Base gradient background */}
        <div className={`absolute inset-0 ${
          theme === "dark"
            ? "bg-gradient-to-br from-gray-900 via-gray-800 to-black"
            : "bg-gradient-to-br from-blue-50 via-white to-cyan-50"
        }`} />

        {/* Circuit board pattern */}
        <CircuitPattern theme={theme || "dark"} />

        {/* Gaming grid */}
        <GamingGrid theme={theme || "dark"} />

        {/* Neural network visualization */}
        <NeuralNodes theme={theme || "dark"} />

        {/* Matrix rain effect */}
        <MatrixRain theme={theme || "dark"} />

        {/* Floating code fragments */}
        <CodeFragments theme={theme || "dark"} />

        {/* Animated orbs */}
        <div className="absolute inset-0">
          <motion.div
            className={`absolute top-1/4 left-1/4 w-32 h-32 rounded-full blur-3xl ${
              theme === "dark"
                ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20"
                : "bg-gradient-to-r from-blue-400/30 to-purple-400/30"
            }`}
            style={{ willChange: "transform" }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
              x: [0, 50, -30, 0],
              y: [0, -30, 50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <motion.div
            className={`absolute top-3/4 right-1/4 w-40 h-40 rounded-full blur-3xl ${
              theme === "dark"
                ? "bg-gradient-to-r from-green-500/20 to-emerald-500/20"
                : "bg-gradient-to-r from-green-400/30 to-teal-400/30"
            }`}
            style={{ willChange: "transform" }}
            animate={{
              scale: [1.1, 1, 1.3, 1.1],
              rotate: [360, 180, 0],
              x: [0, -40, 60, 0],
              y: [0, 40, -20, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className={`absolute top-1/2 right-1/6 w-24 h-24 rounded-full blur-2xl ${
              theme === "dark"
                ? "bg-gradient-to-r from-purple-500/25 to-pink-500/25"
                : "bg-gradient-to-r from-purple-400/35 to-pink-400/35"
            }`}
            style={{ willChange: "transform" }}
            animate={{
              scale: [1, 1.4, 0.8, 1],
              rotate: [0, 270, 180, 360],
              x: [0, 80, -50, 0],
              y: [0, -60, 40, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Scanning lines effect */}
        <motion.div
          className={`absolute top-0 left-0 w-full h-0.5 ${
            theme === "dark"
              ? "bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
              : "bg-gradient-to-r from-transparent via-blue-500 to-transparent"
          }`}
          animate={{ y: [0, typeof window !== "undefined" ? window.innerHeight : 800] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Content layer */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
