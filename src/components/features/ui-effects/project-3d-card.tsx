"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Globe, ExternalLink, Star, TrendingUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Project3DCardProps {
  title: string
  description: string
  image: string
  techStack: string[]
  demoUrl: string
  metrics: string
  features: string[]
  category: string
}

export function Project3DCard({
  title,
  description,
  image,
  techStack,
  demoUrl,
  metrics,
  category,
}: Project3DCardProps) {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const rotateXValue = (e.clientY - centerY) / 10
    const rotateYValue = (e.clientX - centerX) / 10

    setRotateX(-rotateXValue)
    setRotateY(rotateYValue)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
    setIsHovered(false)
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  return (
    <motion.div
      ref={cardRef}
      className="group perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        perspective: "1000px",
      }}
    >
      <motion.div
        className="relative preserve-3d"
        animate={{
          rotateX,
          rotateY,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
      >
        <Card className="overflow-hidden bg-slate-900/80 border-slate-700 hover:border-slate-500 backdrop-blur-sm transition-all duration-500 transform-gpu">
          {/* Floating Glow Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-lg opacity-0 transition-opacity duration-500"
            animate={{
              opacity: isHovered ? 1 : 0,
            }}
          />

          {/* 3D Floating Elements */}
          <motion.div
            className="absolute top-4 right-4 z-10"
            animate={{
              y: isHovered ? -10 : 0,
              rotateZ: isHovered ? 15 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <Badge className="bg-green-500/20 text-green-300 border-green-500/50 backdrop-blur-sm shadow-lg">
              <Star className="w-3 h-3 mr-1" />
              Featured
            </Badge>
          </motion.div>

          {/* Project Image with Parallax */}
          <div className="relative aspect-video overflow-hidden">
            <motion.div
              animate={{
                scale: isHovered ? 1.1 : 1,
                rotateZ: rotateY / 10,
              }}
              transition={{ duration: 0.5 }}
              className="relative w-full h-full"
            >
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
              />
            </motion.div>

            {/* 3D Overlay Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"
              animate={{
                opacity: isHovered ? 0.9 : 0.6,
              }}
              transition={{ duration: 0.3 }}
            />

            {/* Floating Category Badge */}
            <motion.div
              className="absolute top-4 left-4"
              animate={{
                y: isHovered ? -5 : 0,
                rotateZ: isHovered ? -10 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/50 backdrop-blur-sm shadow-lg">
                {category.split(" ")[0]}
              </Badge>
            </motion.div>
          </div>

          {/* Content Section with 3D Transform */}
          <motion.div
            className="p-6 space-y-4 relative"
            animate={{
              z: isHovered ? 20 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Floating Background Card */}
            <motion.div
              className="absolute inset-0 bg-slate-800/30 rounded-lg backdrop-blur-sm opacity-0"
              animate={{
                opacity: isHovered ? 1 : 0,
                scale: isHovered ? 1.02 : 1,
              }}
              transition={{ duration: 0.3 }}
            />

            <div className="relative z-10 space-y-4">
              {/* Title with 3D effect */}
              <motion.h3
                className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors"
                animate={{
                  y: isHovered ? -2 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                {title}
              </motion.h3>

              {/* Description */}
              <motion.p
                className="text-slate-400 text-sm leading-relaxed line-clamp-2"
                animate={{
                  y: isHovered ? -1 : 0,
                }}
                transition={{ duration: 0.3, delay: 0.05 }}
              >
                {description}
              </motion.p>

              {/* Tech Stack with Floating Effect */}
              <motion.div
                className="flex flex-wrap gap-2"
                animate={{
                  y: isHovered ? -1 : 0,
                }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {techStack.slice(0, 4).map((tech, index) => (
                  <motion.div
                    key={tech}
                    animate={{
                      y: isHovered ? -index * 2 : 0,
                      rotateZ: isHovered ? (index % 2 === 0 ? 2 : -2) : 0,
                    }}
                    transition={{ duration: 0.3, delay: index * 0.02 }}
                  >
                    <Badge
                      variant="outline"
                      className="text-xs border-slate-600 text-slate-300 hover:border-blue-500 hover:text-blue-300 transition-colors shadow-sm"
                    >
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
                {techStack.length > 4 && (
                  <Badge variant="outline" className="text-xs border-slate-600 text-slate-400">
                    +{techStack.length - 4}
                  </Badge>
                )}
              </motion.div>

              {/* Metrics with Icon */}
              <motion.div
                className="flex items-center gap-2 text-sm text-slate-400"
                animate={{
                  y: isHovered ? -1 : 0,
                }}
                transition={{ duration: 0.3, delay: 0.15 }}
              >
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span>{metrics}</span>
              </motion.div>

              {/* Action Buttons with 3D Hover */}
              <motion.div
                className="flex gap-3 pt-2"
                animate={{
                  y: isHovered ? -2 : 0,
                }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1"
                >
                  <Button
                    size="sm"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/25"
                    asChild
                  >
                    <Link href={demoUrl} target="_blank">
                      <Globe className="w-4 h-4 mr-2" />
                      Live Demo
                    </Link>
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, rotateY: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-slate-600 text-slate-300 hover:border-slate-500 hover:bg-slate-800 shadow-lg"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </motion.div>
              </motion.div>
            </div>

            {/* Floating Particles */}
            {isHovered && (
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-blue-400/60 rounded-full"
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${20 + Math.random() * 60}%`,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                      y: [0, -20],
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.1,
                      repeat: Infinity,
                    }}
                  />
                ))}
              </div>
            )}
          </motion.div>
        </Card>
      </motion.div>
    </motion.div>
  )
}
