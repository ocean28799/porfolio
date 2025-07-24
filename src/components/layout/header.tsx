"use client"

import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import { useBackground } from "@/contexts/background-context"
import { useAnimation } from "@/hooks/use-animation"
import { useTranslation } from "react-i18next"
import {
  IconHome,
  IconCode,
  IconUser,
  IconCurrencyDollar,
  IconArrowUp,
  IconArticle,
  IconTerminal2,
} from "@tabler/icons-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useCallback, useEffect, useState } from "react"
import { Logo } from "../svg/logo"
import { Button } from "../ui/button"
import { LanguageSwitcher } from "../language-switcher"
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

const pathNameDisableHeaderScroll = [""]

// NavLink Component
const NavLink = ({ title, href, icon: Icon, backgroundType }: {
  title: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  backgroundType: string
}) => {
  const pathname = usePathname()
  const isActive = pathname === href
  const animConfig = useAnimation()

  return (
    <Link href={href}>
      <motion.div
        className={cn(
          "relative px-4 py-2 rounded-xl transition-all duration-300 group",
          "border backdrop-blur-sm cursor-pointer overflow-hidden",
          isActive
            ? backgroundType === 'matrix'
              ? "border-[#00ff41]/50 bg-[#00ff41]/20 shadow-lg shadow-[#00ff41]/25"
              : "border-blue-400/50 bg-blue-400/20 shadow-lg shadow-blue-400/25"
            : backgroundType === 'matrix'
              ? "border-[#00ff41]/20 bg-black/20 hover:border-[#00ff41]/40 hover:bg-[#00ff41]/10"
              : "border-blue-400/20 bg-slate-800/20 hover:border-blue-400/40 hover:bg-blue-400/10",
          // Remove backdrop blur in basic mode for performance
          !animConfig.enableBlur && "backdrop-blur-none",
          // Remove shadows in basic mode
          !animConfig.enableShadows && "shadow-none hover:shadow-none"
        )}
        whileHover={animConfig.enableAnimations ? { scale: 1.05, y: -2 } : {}}
        whileTap={animConfig.enableAnimations ? { scale: 0.95 } : {}}
        transition={{ duration: animConfig.defaultDuration }}
      >
        {/* Animated background on hover - only in matrix mode */}
        {animConfig.enableAnimations && (
          <motion.div
            className={cn(
              "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
              backgroundType === 'matrix'
                ? "bg-gradient-to-r from-[#00ff41]/10 to-[#00d4aa]/10"
                : "bg-gradient-to-r from-blue-400/10 to-purple-400/10"
            )}
            initial={{ scale: 0 }}
            whileHover={{ scale: 1 }}
            transition={{ duration: animConfig.defaultDuration }}
          />
        )}

        {/* Glowing border effect - only in matrix mode */}
        {isActive && animConfig.enableGlow && (
          <motion.div
            className={cn(
              "absolute inset-0 rounded-xl",
              backgroundType === 'matrix'
                ? "shadow-[0_0_20px_rgba(0,255,65,0.3)]"
                : "shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            )}
            animate={animConfig.enableAnimations ? { opacity: [0.5, 1, 0.5] } : {}}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}

        <div className="relative z-10 flex items-center gap-2">
          <Icon 
            className={cn(
              "w-4 h-4 transition-colors duration-300",
              isActive
                ? backgroundType === 'matrix' ? "text-[#00ff41]" : "text-blue-400"
                : "text-gray-400 group-hover:text-white"
            )} 
          />
          <span className={cn(
            "text-sm font-medium transition-colors duration-300",
            isActive
              ? backgroundType === 'matrix' ? "text-[#00ff41]" : "text-blue-400"
              : "text-gray-300 group-hover:text-white"
          )}>
            {title}
          </span>
        </div>
      </motion.div>
    </Link>
  )
}

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const { backgroundType, getThemeColors } = useBackground()
  const animConfig = useAnimation()
  const { t } = useTranslation()
  const colors = getThemeColors()
  const pathname = usePathname()

  // Dynamic links with translations and fallbacks for hydration
  const links = [
    {
      title: t('nav.home') || 'Home',
      href: "/",
      icon: IconHome,
    },
    {
      title: t('nav.projects') || 'Projects',
      href: "/projects",
      icon: IconCode,
    },
    {
      title: t('nav.playground') || 'Playground',
      href: "/playground",
      icon: IconTerminal2,
    },
    {
      title: t('nav.blog') || 'Blog',
      href: "/blog",
      icon: IconArticle,
    },
    {
      title: t('nav.about') || 'About',
      href: "/about",
      icon: IconUser,
    },
    {
      title: t('nav.pricing') || 'Pricing',
      href: "/pricing",
      icon: IconCurrencyDollar,
    },
  ]

  const isDisableHeaderScroll = pathNameDisableHeaderScroll.includes(pathname)

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY

    if (isDisableHeaderScroll) {
      setIsScrolled(false)
      return
    }

    if (currentScrollY === 0) {
      setIsScrolled(false)
    } else if (currentScrollY > 50) {
      setIsScrolled(true)
    }
  }, [isDisableHeaderScroll])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          !isDisableHeaderScroll && "sticky"
        )}
        initial={animConfig.enableAnimations ? { y: -100 } : {}}
        animate={animConfig.enableAnimations ? { y: 0 } : {}}
        transition={{ duration: animConfig.enableAnimations ? 0.6 : 0, ease: "easeOut" }}
      >
        {/* Neural Network Background - Only in matrix mode */}
        {backgroundType === 'matrix' && animConfig.enableParticles && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className={cn(
              "absolute inset-0 opacity-20",
              backgroundType === 'matrix' 
                ? "bg-gradient-to-r from-[#00ff41]/10 via-transparent to-[#ff0080]/10" 
                : "bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10"
            )} />
            
            {/* Animated grid pattern */}
            <motion.div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(${colors.primary}20 1px, transparent 1px),
                  linear-gradient(90deg, ${colors.primary}20 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px',
              }}
              animate={animConfig.enableAnimations ? { 
                backgroundPositionX: ['0px', '20px'],
              } : {}}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            />
          </div>
        )}

        <motion.div
          className={cn(
            "mx-auto flex justify-between items-center transition-all duration-500 relative z-10",
            isScrolled
              ? cn(
                  "px-6 py-3",
                  animConfig.enableBlur ? "bg-black/80 backdrop-blur-xl" : "bg-black/90",
                  "border-b",
                  animConfig.enableShadows ? "shadow-2xl" : ""
                )
              : "bg-transparent px-8 py-6",
            backgroundType === 'matrix' && isScrolled
              ? "border-[#00ff41]/30 shadow-[#00ff41]/20"
              : "border-slate-600/30 shadow-blue-500/20"
          )}
          layout={animConfig.enableAnimations}
        >
          {/* Logo Section */}
          <motion.div 
            className="flex items-center gap-3"
            whileHover={animConfig.enableAnimations ? { scale: 1.05 } : {}}
            transition={{ duration: animConfig.reducedDuration }}
          >
            <div className={cn(
              "relative p-2 rounded-xl border",
              animConfig.enableBlur ? "backdrop-blur-sm" : "",
              backgroundType === 'matrix'
                ? "border-[#00ff41]/30 bg-[#00ff41]/10"
                : "border-blue-400/30 bg-blue-400/10"
            )}>
              {/* Glowing effect - only in matrix mode */}
              {animConfig.enableGlow && (
                <div className={cn(
                  "absolute inset-0 rounded-xl blur-md opacity-50",
                  backgroundType === 'matrix'
                    ? "bg-[#00ff41]/20"
                    : "bg-blue-400/20"
                )} />
              )}
              <Logo className="relative z-10 w-8 h-8" />
            </div>
            
            <div className="hidden sm:block">
              <motion.h1 
                className={cn(
                  "text-xl font-bold bg-gradient-to-r bg-clip-text text-transparent",
                  backgroundType === 'matrix'
                    ? "from-[#00ff41] to-[#00d4aa]"
                    : "from-blue-400 to-purple-400"
                )}
                initial={animConfig.enableAnimations ? { opacity: 0, x: -20 } : {}}
                animate={animConfig.enableAnimations ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 }}
              >
                Tran Anh Duc
              </motion.h1>
              <motion.p 
                className="text-xs text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Senior React Native Developer
              </motion.p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {links.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <NavLink 
                  {...link} 
                  backgroundType={backgroundType}
                />
              </motion.div>
            ))}
            
            {/* Language Switcher */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * links.length }}
              className="ml-2"
            >
              <LanguageSwitcher />
            </motion.div>
          </nav>

          {/* Modern Mobile Menu Button */}
          <div className="md:hidden">
            <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
              <DrawerTrigger asChild>
                <motion.button
                  className={cn(
                    "relative flex items-center justify-center w-12 h-12 rounded-2xl transition-all duration-300 overflow-hidden group focus:outline-none focus:ring-2 focus:ring-offset-2",
                    animConfig.enableBlur ? "backdrop-blur-lg" : "",
                    backgroundType === 'matrix'
                      ? cn(
                          "bg-black/40 hover:bg-black/60 border border-[#00ff41]/30 hover:border-[#00ff41]/60 focus:ring-[#00ff41]/50",
                          animConfig.enableShadows ? "shadow-lg shadow-black/50 hover:shadow-xl hover:shadow-[#00ff41]/20" : ""
                        )
                      : cn(
                          "bg-slate-900/40 hover:bg-slate-800/60 border border-blue-400/30 hover:border-blue-400/60 focus:ring-blue-400/50",
                          animConfig.enableShadows ? "shadow-lg shadow-black/50 hover:shadow-xl hover:shadow-blue-400/20" : ""
                        )
                  )}
                  whileHover={animConfig.enableAnimations ? { scale: 1.05 } : {}}
                  whileTap={animConfig.enableAnimations ? { scale: 0.95 } : {}}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  aria-label={isDrawerOpen ? "Close menu" : "Open menu"}
                >
                  {/* Modern gradient glow effect */}
                  {animConfig.enableAnimations && (
                    <motion.div
                      className={cn(
                        "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                        backgroundType === 'matrix'
                          ? "bg-gradient-to-br from-[#00ff41]/10 via-[#00d4aa]/10 to-transparent"
                          : "bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-transparent"
                      )}
                      initial={{ scale: 1.2, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                  )}
                  
                  {/* Modern Hamburger Menu Icon */}
                  <div className="relative w-6 h-6 flex flex-col justify-center items-center">
                    <motion.span
                      className={cn(
                        "block h-0.5 w-6 rounded-full transition-all duration-300",
                        backgroundType === 'matrix' ? "bg-[#00ff41]" : "bg-blue-400"
                      )}
                      animate={isDrawerOpen ? {
                        rotate: 45,
                        y: 6,
                        scaleX: 1.1
                      } : {
                        rotate: 0,
                        y: 0,
                        scaleX: 1
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                    <motion.span
                      className={cn(
                        "block h-0.5 w-6 rounded-full mt-1.5 transition-all duration-300",
                        backgroundType === 'matrix' ? "bg-[#00ff41]" : "bg-blue-400"
                      )}
                      animate={isDrawerOpen ? {
                        opacity: 0,
                        scaleX: 0
                      } : {
                        opacity: 1,
                        scaleX: 1
                      }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                    />
                    <motion.span
                      className={cn(
                        "block h-0.5 w-6 rounded-full mt-1.5 transition-all duration-300",
                        backgroundType === 'matrix' ? "bg-[#00ff41]" : "bg-blue-400"
                      )}
                      animate={isDrawerOpen ? {
                        rotate: -45,
                        y: -6,
                        scaleX: 1.1
                      } : {
                        rotate: 0,
                        y: 0,
                        scaleX: 1
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                  </div>

                  {/* Pulse effect on tap */}
                  {animConfig.enableAnimations && (
                    <motion.div
                      className={cn(
                        "absolute inset-0 rounded-2xl pointer-events-none",
                        backgroundType === 'matrix'
                          ? "bg-[#00ff41]/20"
                          : "bg-blue-400/20"
                      )}
                      initial={{ scale: 1, opacity: 0 }}
                      whileTap={{ scale: 1.2, opacity: 1 }}
                      transition={{ duration: 0.15 }}
                    />
                  )}
                </motion.button>
              </DrawerTrigger>
              
              <DrawerContent className={cn(
                "mobile-menu-content max-h-[85vh] border-t-0 rounded-t-3xl transform transition-all duration-500 ease-out",
                animConfig.enableBlur ? "backdrop-blur-3xl" : "",
                backgroundType === 'matrix'
                  ? "bg-black/95 border-[#00ff41]/20 shadow-2xl shadow-[#00ff41]/10"
                  : "bg-slate-900/95 border-blue-500/20 shadow-2xl shadow-blue-500/10"
              )}>
                {/* Drag handle */}
                <div className="mx-auto mt-3 mb-2 h-1.5 w-12 rounded-full bg-gray-400/30" />
                
                {/* Animated background overlay */}
                <div className={cn(
                  "absolute inset-0 rounded-t-3xl overflow-hidden",
                  backgroundType === 'matrix'
                    ? "bg-gradient-to-br from-[#00ff41]/8 via-[#ff0080]/5 to-transparent"
                    : "bg-gradient-to-br from-blue-500/8 via-purple-500/5 to-pink-500/3"
                )} />
                
                {/* Grid pattern overlay */}
                <motion.div
                  className="absolute inset-0 opacity-10 rounded-t-3xl"
                  style={{
                    backgroundImage: `
                      linear-gradient(${colors.primary}40 1px, transparent 1px),
                      linear-gradient(90deg, ${colors.primary}40 1px, transparent 1px)
                    `,
                    backgroundSize: '24px 24px',
                  }}
                  animate={{ 
                    backgroundPositionX: ['0px', '24px'],
                  }}
                  transition={{ 
                    duration: 25, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                />
                
                <DrawerHeader className="pb-2 pt-4 relative z-10">
                  <DrawerTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <motion.div 
                        className={cn(
                          "relative p-2.5 rounded-2xl border backdrop-blur-sm",
                          backgroundType === 'matrix'
                            ? "border-[#00ff41]/40 bg-[#00ff41]/15"
                            : "border-blue-400/40 bg-blue-400/15"
                        )}
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className={cn(
                          "absolute inset-0 rounded-2xl blur-md opacity-60",
                          backgroundType === 'matrix'
                            ? "bg-[#00ff41]/25"
                            : "bg-blue-400/25"
                        )} />
                        <Logo className="relative z-10 w-7 h-7" />
                      </motion.div>
                      
                      <div>
                        <motion.h1 
                          className={cn(
                            "text-xl font-bold bg-gradient-to-r bg-clip-text text-transparent",
                            backgroundType === 'matrix'
                              ? "from-[#00ff41] to-[#00d4aa]"
                              : "from-blue-400 to-purple-400"
                          )}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 }}
                        >
                          Tran Anh Duc
                        </motion.h1>
                        <motion.p 
                          className="text-sm text-gray-400"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          Senior React Native Developer
                        </motion.p>
                      </div>
                    </div>
                  </DrawerTitle>
                </DrawerHeader>

                <div className="px-6 flex flex-col gap-3 pb-8 relative z-10">
                  {/* Quick Language Switcher */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mb-2"
                  >
                    <LanguageSwitcher />
                  </motion.div>

                  {/* Navigation Links */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {links.map((link, index) => {
                      const isActive = pathname === link.href
                      return (
                        <motion.div
                          key={link.title}
                          initial={{ opacity: 0, y: 20, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ 
                            delay: 0.05 * index, 
                            duration: 0.3,
                            ease: "easeOut"
                          }}
                        >
                          <Link
                            href={link.href}
                            className={cn(
                              "mobile-menu-item relative flex flex-col items-center gap-3 p-4 rounded-2xl border backdrop-blur-sm transition-all duration-300 group overflow-hidden min-h-[100px] justify-center",
                              isActive
                                ? backgroundType === 'matrix'
                                  ? "border-[#00ff41]/50 bg-[#00ff41]/20 shadow-lg shadow-[#00ff41]/25"
                                  : "border-blue-400/50 bg-blue-400/20 shadow-lg shadow-blue-400/25"
                                : backgroundType === 'matrix'
                                  ? "border-[#00ff41]/25 bg-black/20 hover:border-[#00ff41]/50 hover:bg-[#00ff41]/15 hover:shadow-lg hover:shadow-[#00ff41]/20"
                                  : "border-blue-400/25 bg-slate-800/20 hover:border-blue-400/50 hover:bg-blue-400/15 hover:shadow-lg hover:shadow-blue-400/20"
                            )}
                            onClick={() => setIsDrawerOpen(false)}
                          >
                            {/* Animated background */}
                            <motion.div
                              className={cn(
                                "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                                backgroundType === 'matrix'
                                  ? "bg-gradient-to-br from-[#00ff41]/15 to-[#00d4aa]/10"
                                  : "bg-gradient-to-br from-blue-400/15 to-purple-400/10"
                              )}
                              initial={{ scale: 0, rotate: 45 }}
                              whileHover={{ scale: 1, rotate: 0 }}
                              transition={{ duration: 0.4 }}
                            />

                            {/* Icon with animation */}
                            <motion.div
                              className={cn(
                                "relative z-10 p-2 rounded-xl transition-all duration-300",
                                isActive
                                  ? backgroundType === 'matrix'
                                    ? "bg-[#00ff41]/20"
                                    : "bg-blue-400/20"
                                  : "group-hover:scale-110"
                              )}
                              whileHover={{ rotate: 5, scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <link.icon className={cn(
                                "size-6 transition-colors duration-300",
                                isActive
                                  ? backgroundType === 'matrix' ? "text-[#00ff41]" : "text-blue-400"
                                  : "text-gray-400 group-hover:text-white"
                              )} />
                            </motion.div>

                            {/* Text with better typography */}
                            <span className={cn(
                              "relative z-10 font-semibold text-center transition-colors duration-300 text-sm",
                              isActive
                                ? backgroundType === 'matrix' ? "text-[#00ff41]" : "text-blue-400"
                                : "text-gray-300 group-hover:text-white"
                            )}>
                              {link.title}
                            </span>

                            {/* Active indicator */}
                            {isActive && (
                              <motion.div
                                className={cn(
                                  "absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-1 rounded-full",
                                  backgroundType === 'matrix' ? "bg-[#00ff41]" : "bg-blue-400"
                                )}
                                initial={{ width: 0 }}
                                animate={{ width: 32 }}
                                transition={{ delay: 0.2, duration: 0.3 }}
                              />
                            )}
                          </Link>
                        </motion.div>
                      )
                    })}
                  </div>
                  
                  {/* Enhanced Separator */}
                  <motion.div 
                    className={cn(
                      "h-px w-full my-3 relative",
                      backgroundType === 'matrix'
                        ? "bg-gradient-to-r from-transparent via-[#00ff41]/40 to-transparent"
                        : "bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"
                    )}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  />
                  
                  {/* Sponsor Section with better styling */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className={cn(
                      "flex items-center justify-center p-4 rounded-2xl border backdrop-blur-sm",
                      backgroundType === 'matrix'
                        ? "border-[#00ff41]/20 bg-[#00ff41]/5"
                        : "border-blue-400/20 bg-blue-400/5"
                    )}
                  >
                    <iframe
                      src="https://github.com/sponsors/ocean28799/button"
                      title="Sponsor ocean28799"
                      height="32"
                      width="114"
                      style={{ border: "0", borderRadius: "8px" }}
                    />
                  </motion.div>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </motion.div>
      </motion.header>

      {isDisableHeaderScroll && <ScrollToTopButton />}
    </>
  )
}

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)
  const { backgroundType } = useBackground()

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      className="fixed bottom-4 right-8 md:right-20 z-[9999]"
    >
      <Button
        variant="outline"
        size="icon"
        className={cn(
          "size-12 backdrop-blur-xl rounded-xl border transition-all duration-300 hover:scale-110",
          backgroundType === 'matrix'
            ? "bg-black/80 border-[#00ff41]/30 hover:border-[#00ff41]/50 hover:shadow-lg hover:shadow-[#00ff41]/25"
            : "bg-black/80 border-blue-500/30 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/25"
        )}
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }}
      >
        <IconArrowUp className={cn(
          "size-5",
          backgroundType === 'matrix' ? "text-[#00ff41]" : "text-blue-400"
        )} />
      </Button>
    </motion.div>
  )
}
