import * as React from "react"

import { cn } from "@/lib/utils"
import { useBackground } from "@/contexts/background-context"

function Card({ className, ...props }: React.ComponentProps<"div">) {
  const { getThemeColors } = useBackground()
  const colors = getThemeColors()

  // Dynamic gaming styles based on background theme
  const dynamicStyles = {
    "--gaming-primary": colors.primary,
    "--gaming-accent": colors.accent,
    "--gaming-glow": colors.glow,
    "--gaming-text": colors.text,
    "--gaming-surface": colors.secondary,
  } as React.CSSProperties

  return (
    <div
      data-slot="card"
      className={cn(
        "flex flex-col gap-6 rounded-xl py-6 shadow-sm transition-all duration-300",
        "bg-[var(--gaming-surface)]/80 text-[var(--gaming-text)] border border-[var(--gaming-accent)]/30",
        "backdrop-blur-sm shadow-lg shadow-[var(--gaming-accent)]/10",
        "hover:shadow-[var(--gaming-accent)]/20 hover:border-[var(--gaming-accent)]/50",
        className
      )}
      style={dynamicStyles}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
