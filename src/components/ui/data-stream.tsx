"use client"

import { motion } from "motion/react"
import { useEffect, useState } from "react"

interface DataStreamProps {
  className?: string
  intensity?: number
}

export function DataStream({ className = "", intensity = 10 }: DataStreamProps) {
  const [streams, setStreams] = useState<Array<{
    id: number
    x: number
    delay: number
    speed: number
    color: string
    data: string[]
  }>>([])

  useEffect(() => {
    const colors = ['#00ff41', '#ff0080', '#00d4aa', '#39ff14', '#ffaa00', '#00ffff']
    const dataTypes = [
      ['01001011', '11010110', '10101010', '01110011'],
      ['NEURAL_NET', 'AI_CORE', 'MATRIX_ID', 'CYPHER'],
      ['░░▒▒▓▓██', '████▓▓▒▒', '▒▒░░████', '▓▓██░░▒▒'],
      ['◊◈◉●○', '▲▼◀▶', '♦♠♣♥', '⚡⚙⚗⚛']
    ]

    const streamArray = Array.from({ length: intensity }, (_, i) => ({
      id: i,
      x: (i * (100 / intensity)) + Math.random() * (100 / intensity),
      delay: Math.random() * 3,
      speed: 0.5 + Math.random() * 1.5,
      color: colors[Math.floor(Math.random() * colors.length)],
      data: dataTypes[Math.floor(Math.random() * dataTypes.length)]
    }))
    
    setStreams(streamArray)
  }, [intensity])

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {streams.map((stream) => (
        <div
          key={stream.id}
          className="absolute top-0 w-px"
          style={{ left: `${stream.x}%` }}
        >
          {stream.data.map((data, index) => (
            <motion.div
              key={`${stream.id}-${index}`}
              className="absolute whitespace-nowrap text-xs font-mono"
              style={{ 
                color: stream.color,
                textShadow: `0 0 5px ${stream.color}`,
                transform: 'rotate(90deg)',
                transformOrigin: 'left center'
              }}
              animate={{
                y: ['-100vh', '100vh'],
                opacity: [0, 1, 1, 0]
              }}
              transition={{
                duration: 8 / stream.speed,
                delay: stream.delay + (index * 0.3),
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {data}
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  )
}
