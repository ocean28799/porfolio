"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  Home, 
  User, 
  Briefcase, 
  Menu, 
  X,
  Terminal,
  BookOpen,
  DollarSign
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useTranslation } from "react-i18next"

const navItems = [
  { href: "/", label: "Home", labelKey: "nav.home", icon: Home },
  { href: "/projects", label: "Projects", labelKey: "nav.projects", icon: Briefcase },
  { href: "/playground", label: "Playground", labelKey: "nav.playground", icon: Terminal },
  { href: "/blog", label: "Blog", labelKey: "nav.blog", icon: BookOpen },
  { href: "/about", label: "About", labelKey: "nav.about", icon: User },
  { href: "/pricing", label: "Pricing", labelKey: "nav.pricing", icon: DollarSign },
]

export function FloatingNavigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const { t } = useTranslation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Desktop Floating Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 hidden md:block transition-all duration-300 ${
          isScrolled
            ? "bg-slate-900/80 backdrop-blur-lg border border-slate-700/50 shadow-2xl"
            : "bg-transparent"
        }`}
        style={{
          borderRadius: "2rem",
          padding: isScrolled ? "0.75rem 1.5rem" : "1rem 2rem",
        }}
      >
        <div className="flex items-center gap-4">
          {/* Navigation Items */}
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            const label = t(item.labelKey) || item.label
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative group"
              >
                <motion.div
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-blue-500/20 text-blue-300"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{label}</span>
                </motion.div>
                
                {/* Active indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            )
          })}
          
          {/* Language Switcher */}
          {/* <div className="ml-2 pl-2 border-l border-slate-600">
            <LanguageSwitcher />
          </div> */}
        </div>
      </motion.nav>

      {/* Mobile Floating Menu Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="fixed top-6 right-6 z-50 md:hidden"
      >
        <Button
          size="lg"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-2xl shadow-blue-500/25"
        >
          <motion.div
            animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.div>
        </Button>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="absolute right-0 top-0 h-full w-80 bg-slate-900/95 backdrop-blur-lg border-l border-slate-700"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 space-y-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-2">Navigation</h3>
                  <div className="w-12 h-px bg-gradient-to-r from-blue-500 to-purple-500 mx-auto" />
                </div>

                <nav className="space-y-3">
                  {navItems.map((item, index) => {
                    const Icon = item.icon
                    const isActive = pathname === item.href
                    const label = t(item.labelKey) || item.label
                    
                    return (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
                            isActive
                              ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                              : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                          <span className="font-medium">{label}</span>
                          {isActive && (
                            <motion.div
                              layoutId="mobileDot"
                              className="w-2 h-2 bg-blue-400 rounded-full ml-auto"
                            />
                          )}
                        </Link>
                      </motion.div>
                    )
                  })}
                </nav>

                {/* Language Switcher in Mobile */}
                <div className="pt-6 border-t border-slate-700">
                  <div className="space-y-4">
                    <p className="text-sm text-slate-400 font-medium">Language / 言語 / Ngôn ngữ</p>
                    <LanguageSwitcher />
                  </div>
                </div>

                {/* Contact Info */}
                <div className="pt-6 border-t border-slate-700">
                  <div className="text-center space-y-2">
                    <p className="text-sm text-slate-400">Get in touch</p>
                    <p className="text-sm text-blue-300 font-medium">ocean28799@gmail.com</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
