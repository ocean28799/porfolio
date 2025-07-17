import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { useBackground } from "@/contexts/background-context"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"
  const { getThemeColors } = useBackground()
  const colors = getThemeColors()

  // Dynamic gaming styles based on background theme
  const dynamicStyles = {
    "--gaming-primary": colors.primary,
    "--gaming-accent": colors.accent,
    "--gaming-glow": colors.glow,
    "--gaming-text": colors.text,
  } as React.CSSProperties

  return (
    <Comp
      data-slot="badge"
      className={cn(
        badgeVariants({ variant }),
        "transition-all duration-300",
        variant === "default" && `bg-[var(--gaming-primary)]/80 text-[var(--gaming-text)] border-[var(--gaming-accent)]/50 shadow-md shadow-[var(--gaming-primary)]/20`,
        variant === "secondary" && `bg-[var(--gaming-accent)]/20 text-[var(--gaming-text)] border-[var(--gaming-accent)]/40 backdrop-blur-sm`,
        variant === "outline" && `border-[var(--gaming-accent)]/60 text-[var(--gaming-text)] hover:bg-[var(--gaming-accent)]/10 hover:shadow-[var(--gaming-accent)]/30`,
        className
      )}
      style={dynamicStyles}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
