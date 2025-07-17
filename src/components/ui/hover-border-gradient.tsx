/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import React, { useEffect, useState } from "react"

import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import { useBackground } from "@/contexts/background-context"

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT"

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  duration = 1,
  clockwise = true,
  ...props
}: React.PropsWithChildren<
  {
    as?: any
    containerClassName?: string
    className?: string
    duration?: number
    clockwise?: boolean
  } & React.HTMLAttributes<HTMLElement>
>) {
  const [hovered, setHovered] = useState<boolean>(false)
  const [direction, setDirection] = useState<Direction>("TOP")
  const { getThemeColors } = useBackground()
  const colors = getThemeColors()

  const rotateDirection = (currentDirection: Direction): Direction => {
    const directions: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"]
    const currentIndex = directions.indexOf(currentDirection)
    const nextIndex = clockwise
      ? (currentIndex - 1 + directions.length) % directions.length
      : (currentIndex + 1) % directions.length
    return directions[nextIndex]
  }

  // Dynamic gradients based on theme colors
  const getGradientForDirection = (dir: Direction): string => {
    const colorGradient = colors.accent
    switch (dir) {
      case "TOP":
        return `radial-gradient(20.7% 50% at 50% 0%, ${colorGradient} 0%, rgba(255, 255, 255, 0) 100%)`
      case "LEFT":
        return `radial-gradient(16.6% 43.1% at 0% 50%, ${colorGradient} 0%, rgba(255, 255, 255, 0) 100%)`
      case "BOTTOM":
        return `radial-gradient(20.7% 50% at 50% 100%, ${colorGradient} 0%, rgba(255, 255, 255, 0) 100%)`
      case "RIGHT":
        return `radial-gradient(16.2% 41.199999999999996% at 100% 50%, ${colorGradient} 0%, rgba(255, 255, 255, 0) 100%)`
      default:
        return `radial-gradient(20.7% 50% at 50% 0%, ${colorGradient} 0%, rgba(255, 255, 255, 0) 100%)`
    }
  }

  const movingMap: Record<Direction, string> = {
    TOP: getGradientForDirection("TOP"),
    LEFT: getGradientForDirection("LEFT"),
    BOTTOM: getGradientForDirection("BOTTOM"),
    RIGHT: getGradientForDirection("RIGHT"),
  }

  const highlight = `radial-gradient(75% 181.15942028985506% at 50% 50%, ${colors.primary} 0%, rgba(255, 255, 255, 0) 100%)`

  // Dynamic styles
  const dynamicStyles = {
    "--gaming-primary": colors.primary,
    "--gaming-accent": colors.accent,
    "--gaming-text": colors.text,
  } as React.CSSProperties

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prevState) => rotateDirection(prevState))
      }, duration * 1000)
      return () => clearInterval(interval)
    }
  }, [hovered])
  return (
    <Tag
      onMouseEnter={() => {
        setHovered(true)
      }}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative flex rounded-full border content-center transition duration-500 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone w-fit",
        "bg-[var(--gaming-primary)]/10 hover:bg-[var(--gaming-primary)]/20 border-[var(--gaming-accent)]/30",
        containerClassName
      )}
      style={dynamicStyles}
      {...props}
    >
      <>
        <div
          className={cn(
            "w-auto z-10 px-4 py-2 rounded-[inherit] backdrop-blur-sm",
            "bg-[var(--gaming-primary)]/80 text-[var(--gaming-text)]",
            className
          )}
        >
          {children}
        </div>
        <motion.div
          className={cn(
            "flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]"
          )}
          style={{
            filter: "blur(2px)",
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
          initial={{ background: movingMap[direction] }}
          animate={{
            background: hovered
              ? [movingMap[direction], highlight]
              : movingMap[direction],
          }}
          transition={{ ease: "linear", duration: duration ?? 1 }}
        />
        <div 
          className="absolute z-1 flex-none inset-[2px] rounded-[100px]"
          style={{ backgroundColor: `var(--gaming-primary)` }}
        />
      </>
    </Tag>
  )
}
