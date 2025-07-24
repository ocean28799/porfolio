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

      {/* Modern Mobile Floating Menu Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, type: "spring", bounce: 0.3 }}
        className="fixed top-6 right-6 z-[60] md:hidden"
      >
        {/* Glow effect container */}
        <div className="relative">
          {/* Animated glow ring */}
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              boxShadow: isMobileMenuOpen 
                ? [
                    "0 0 20px rgba(59, 130, 246, 0.3), 0 0 40px rgba(59, 130, 246, 0.2), 0 0 60px rgba(59, 130, 246, 0.1)",
                    "0 0 30px rgba(59, 130, 246, 0.4), 0 0 50px rgba(59, 130, 246, 0.3), 0 0 70px rgba(59, 130, 246, 0.2)",
                    "0 0 20px rgba(59, 130, 246, 0.3), 0 0 40px rgba(59, 130, 246, 0.2), 0 0 60px rgba(59, 130, 246, 0.1)"
                  ]
                : [
                    "0 0 10px rgba(59, 130, 246, 0.2), 0 0 20px rgba(59, 130, 246, 0.1)",
                    "0 0 15px rgba(59, 130, 246, 0.3), 0 0 25px rgba(59, 130, 246, 0.2)",
                    "0 0 10px rgba(59, 130, 246, 0.2), 0 0 20px rgba(59, 130, 246, 0.1)"
                  ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Main button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative w-12 h-12 rounded-full overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600" />
            
            {/* Glass effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent" />
            
            {/* Border with gradient */}
            <div className="absolute inset-0 rounded-full border border-white/20" />
            
            {/* Backdrop blur effect */}
            <div className="absolute inset-1 rounded-full backdrop-blur-sm bg-black/10" />
            
            {/* Icon container */}
            <div className="relative w-full h-full flex items-center justify-center">
              <motion.div
                animate={{ 
                  rotate: isMobileMenuOpen ? 180 : 0,
                  scale: isMobileMenuOpen ? 1.1 : 1
                }}
                transition={{ 
                  duration: 0.4, 
                  type: "spring", 
                  stiffness: 200,
                  damping: 15
                }}
                className="text-white drop-shadow-lg"
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      exit={{ opacity: 0, scale: 0.5, rotate: 180 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ opacity: 0, scale: 0.5, rotate: 180 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      exit={{ opacity: 0, scale: 0.5, rotate: -180 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
            
            {/* Ripple effect on click */}
            <motion.div
              className="absolute inset-0 rounded-full bg-white/30"
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: isMobileMenuOpen ? [0, 1.5] : 0, opacity: [1, 0] }}
              transition={{ duration: 0.6 }}
            />
          </motion.button>
          
          {/* Floating particles effect */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-300 rounded-full"
              style={{
                top: `${20 + i * 10}%`,
                right: `${15 + i * 8}%`,
              }}
              animate={{
                y: [-5, -15, -5],
                opacity: [0.3, 0.8, 0.3],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Modern Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop with blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-[55] md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ 
                type: "spring", 
                damping: 25, 
                stiffness: 300,
                opacity: { duration: 0.2 }
              }}
              className="fixed right-0 top-0 h-screen w-80 z-[58] md:hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Glass morphism background */}
              <div className="h-full bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95 backdrop-blur-xl border-l border-white/10">
                {/* Subtle grid pattern overlay */}
                <div 
                  className="absolute inset-0 opacity-[0.02]"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='2' cy='2' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  }}
                />
                
                <div className="relative h-full p-6 space-y-8">
                  {/* Header */}
                  <motion.div 
                    className="text-center"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <motion.div 
                      className="w-16 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    />
                  </motion.div>

                  {/* Navigation Items */}
                  <motion.nav 
                    className="space-y-2"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {navItems.map((item, index) => {
                      const Icon = item.icon
                      const isActive = pathname === item.href
                      const label = t(item.labelKey) || item.label
                      
                      return (
                        <motion.div
                          key={item.href}
                          initial={{ opacity: 0, x: 30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ 
                            delay: 0.1 + index * 0.05,
                            type: "spring",
                            stiffness: 300,
                            damping: 20
                          }}
                        >
                          <Link
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="group relative block"
                          >
                            <motion.div
                              className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 ${
                                isActive
                                  ? "bg-gradient-to-r from-blue-500/20 via-purple-500/15 to-blue-500/20 text-blue-300 border border-blue-500/30 shadow-lg shadow-blue-500/10"
                                  : "text-slate-300 hover:text-white hover:bg-gradient-to-r hover:from-slate-800/60 hover:to-slate-700/40 border border-transparent hover:border-slate-600/30"
                              }`}
                              whileHover={{ x: 4, scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <div className={`p-2 rounded-xl transition-all duration-300 ${
                                isActive 
                                  ? "bg-blue-500/20 text-blue-300" 
                                  : "bg-slate-700/50 group-hover:bg-slate-600/60"
                              }`}>
                                <Icon className="w-5 h-5" />
                              </div>
                              <span className="font-medium flex-1">{label}</span>
                              {isActive && (
                                <motion.div
                                  layoutId="mobileDot"
                                  className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full shadow-lg shadow-blue-400/50"
                                  transition={{ type: "spring", bounce: 0.2 }}
                                />
                              )}
                              
                              {/* Hover glow effect */}
                              <motion.div
                                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                initial={false}
                              />
                            </motion.div>
                          </Link>
                        </motion.div>
                      )
                    })}
                  </motion.nav>

                  {/* Language Switcher */}
                  {/* <motion.div 
                    className="pt-6 border-t border-slate-700/50"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="space-y-4">
                      <p className="text-sm text-slate-400 font-medium flex items-center gap-2">
                        <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                        Language / 言語 / Ngôn ngữ
                      </p>
                      <div className="bg-slate-800/50 rounded-xl p-3 border border-slate-700/30">
                        <LanguageSwitcher />
                      </div>
                    </div>
                  </motion.div> */}

                  {/* Contact Info */}
                  <motion.div 
                    className="pt-6 border-t border-slate-700/50"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="text-center space-y-3">
                      <p className="text-sm text-slate-400 font-medium">Get in touch</p>
                      <motion.div
                        className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <p className="text-sm text-blue-300 font-medium">ocean28799@gmail.com</p>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
