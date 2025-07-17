"use client"

import { cn } from "@/lib/utils"
import {
  IconBrandGithub,
  IconMenu2,
  IconX,
  IconHome,
  IconUser,
  IconCode,
  IconCurrencyDollar,
} from "@tabler/icons-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ModeToggle } from "../mode-toggle"
import { Logo } from "../svg/logo"
import { Button } from "../ui/button"

const navigationLinks = [
  {
    title: "Home",
    href: "/",
    icon: IconHome,
  },
  {
    title: "Tech Feed",
    href: "/tech-feed", 
    icon: IconCode,
  },
  {
    title: "Pricing",
    href: "/pricing",
    icon: IconCurrencyDollar,
  },
  {
    title: "About",
    href: "/about",
    icon: IconUser,
  },
]

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-[55] transition-all duration-300",
          isScrolled 
            ? "bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50 shadow-lg" 
            : "bg-transparent"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <Logo className="w-10 h-10 lg:w-12 lg:h-12 transition-transform group-hover:scale-105" />
              <div className="hidden sm:block">
                <div className="text-lg lg:text-xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                  Duc Tran
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  React Developer
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navigationLinks.map((link) => (
                <NavLink key={link.href} link={link} />
              ))}
            </div>

            {/* Right side actions */}
            <div className="flex items-center space-x-3">
              {/* GitHub Link */}
              <motion.a
                href="https://github.com/ocean28799"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconBrandGithub className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors" />
              </motion.a>

              <ModeToggle />

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden relative"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <IconX className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <IconMenu2 className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-black/95 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50 shadow-lg"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-6 space-y-3">
                {navigationLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "flex items-center space-x-3 px-3 py-3 rounded-lg transition-colors",
                        pathname === link.href
                          ? "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
                          : "hover:bg-gray-100 dark:hover:bg-gray-800"
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <link.icon className="w-5 h-5" />
                      <span className="font-medium">{link.title}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}

// Desktop Navigation Link Component
const NavLink = ({ link }: { link: typeof navigationLinks[0] }) => {
  const pathname = usePathname()
  const isActive = pathname === link.href

  return (
    <Link href={link.href}>
      <motion.div
        className={cn(
          "relative flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
          isActive
            ? "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-purple-600 dark:hover:text-purple-400"
        )}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <link.icon className="w-4 h-4" />
        <span>{link.title}</span>
        
        {isActive && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-lg"
            layoutId="activeBackground"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
      </motion.div>
    </Link>
  )
}
