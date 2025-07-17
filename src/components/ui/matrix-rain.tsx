"use client"

import { useEffect, useRef } from "react"
import { useIsClient } from "@/hooks/use-client"

interface MatrixRainProps {
  className?: string
  intensity?: number
  speed?: number
}

export function MatrixRain({ className = "", intensity = 50, speed = 1 }: MatrixRainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const isClient = useIsClient()

  useEffect(() => {
    if (!isClient) return
    
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasSize()
    window.addEventListener("resize", setCanvasSize)

    // Enhanced Matrix characters - AI/Gaming/Cyberpunk symbols
    const chars = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン01ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]{}|;:,.<>?◊◈◉●○◐◑▲▼◀▶♦♠♣♥※∞∆∇∊∋∀∃∴∵⚡⚙⚗⚛☢☣⚠⚤⚥⚡⚶⚸⚹⚺⚻⚼⚽⚾"
    const fontSize = 14
    const columns = Math.floor(canvas.width / fontSize)

    // Array to track drop position and properties for each column
    const drops: Array<{y: number, color: string, char: string, opacity: number}> = []
    const colors = ['#00ff41', '#ff0080', '#00d4aa', '#39ff14', '#ffaa00', '#00ffff', '#ff6b35', '#8a2be2']
    
    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = {
        y: Math.random() * canvas.height,
        color: colors[Math.floor(Math.random() * colors.length)],
        char: chars[Math.floor(Math.random() * chars.length)],
        opacity: Math.random() * 0.8 + 0.2
      }
    }

    function draw() {
      if (!ctx || !canvas) return

      // Create trailing effect with darker background
      ctx.fillStyle = "rgba(0, 0, 0, 0.08)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.font = `${fontSize}px 'Courier New', monospace`

      // Draw characters
      for (let i = 0; i < drops.length; i++) {
        const drop = drops[i]
        
        // Use the drop's stored character and update occasionally
        if (Math.random() < 0.1) {
          drop.char = chars[Math.floor(Math.random() * chars.length)]
        }
        
        // x position
        const x = i * fontSize
        
        // y position
        const y = drop.y

        // Set color with opacity
        ctx.fillStyle = drop.color.replace(')', `, ${drop.opacity})`)
        if (!drop.color.includes('rgba')) {
          ctx.fillStyle = drop.color + Math.floor(drop.opacity * 255).toString(16).padStart(2, '0')
        }
        
        ctx.fillText(drop.char, x, y)

        // Add glow effect for some drops
        if (Math.random() < 0.1) {
          ctx.shadowColor = drop.color
          ctx.shadowBlur = 5
          ctx.fillText(drop.char, x, y)
          ctx.shadowBlur = 0
        }

        // Reset drop when it reaches bottom or randomly
        if (drop.y > canvas.height + fontSize || (drop.y > canvas.height * 0.8 && Math.random() > 0.98)) {
          drops[i] = {
            y: -fontSize,
            color: colors[Math.floor(Math.random() * colors.length)],
            char: chars[Math.floor(Math.random() * chars.length)],
            opacity: Math.random() * 0.8 + 0.2
          }
        }

        // Move drop down with variable speed
        drop.y += speed * (Math.random() * 1.5 + 0.5) * intensity / 20
      }
    }

    // Control animation speed based on intensity
    const interval = setInterval(draw, 100 - intensity)

    return () => {
      window.removeEventListener("resize", setCanvasSize)
      clearInterval(interval)
    }
  }, [intensity, speed, isClient])

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 opacity-20 ${className}`}
      style={{ mixBlendMode: "screen" }}
    />
  )
}
