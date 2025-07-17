"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="icon"
        className="relative border-2 size-12 rounded-2xl p-2 bg-white/50 dark:bg-black/50 backdrop-blur-sm border-neutral-200/50 dark:border-neutral-700/50 transition-all duration-300"
      >
        <div className="h-5 w-5 bg-neutral-300 dark:bg-neutral-600 rounded animate-pulse" />
      </Button>
    )
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="relative border-2 size-12 rounded-2xl p-2 bg-white/50 dark:bg-black/50 backdrop-blur-sm border-neutral-200/50 dark:border-neutral-700/50 hover:bg-white/80 dark:hover:bg-black/80 hover:border-purple-300 dark:hover:border-purple-500 transition-all duration-300 group overflow-hidden"
    >
      {/* Background gradient effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Sun icon */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={false}
        animate={{
          scale: theme === "dark" ? 0 : 1,
          rotate: theme === "dark" ? -90 : 0,
          opacity: theme === "dark" ? 0 : 1,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <Sun className="h-5 w-5 text-orange-500" />
      </motion.div>

      {/* Moon icon */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={false}
        animate={{
          scale: theme === "dark" ? 1 : 0,
          rotate: theme === "dark" ? 0 : 90,
          opacity: theme === "dark" ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <Moon className="h-5 w-5 text-blue-400" />
      </motion.div>

      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
