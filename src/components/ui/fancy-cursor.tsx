"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function FancyCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isClicking, setIsClicking] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    // Add mouse move listener
    window.addEventListener("mousemove", updateMousePosition)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  // Don't render on mobile devices
  if (isMobile) return null

  return (
    <>
      {/* Click Ripple Effect Only */}
      {isClicking && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9999]"
          style={{
            x: mousePosition.x - 20,
            y: mousePosition.y - 20,
          }}
        >
          <motion.div
            className="w-10 h-10 rounded-full border-2 border-cyan-400/60"
            initial={{ scale: 0.5, opacity: 0.8 }}
            animate={{ scale: 2.5, opacity: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut"
            }}
          />
          <motion.div
            className="absolute top-2 left-2 w-6 h-6 rounded-full border border-purple-400/40"
            initial={{ scale: 0.8, opacity: 0.6 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{
              duration: 0.4,
              ease: "easeOut"
            }}
          />
        </motion.div>
      )}
    </>
  )
}
