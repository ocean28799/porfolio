"use client"

import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import { useBackground } from "@/contexts/background-context"
import { useTranslation } from "react-i18next"
import {
  IconMenu2,
  IconX,
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
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer"

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
              : "border-blue-400/20 bg-slate-800/20 hover:border-blue-400/40 hover:bg-blue-400/10"
        )}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        {/* Animated background on hover */}
        <motion.div
          className={cn(
            "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
            backgroundType === 'matrix'
              ? "bg-gradient-to-r from-[#00ff41]/10 to-[#00d4aa]/10"
              : "bg-gradient-to-r from-blue-400/10 to-purple-400/10"
          )}
          initial={{ scale: 0 }}
          whileHover={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        />

        {/* Glowing border effect */}
        {isActive && (
          <motion.div
            className={cn(
              "absolute inset-0 rounded-xl",
              backgroundType === 'matrix'
                ? "shadow-[0_0_20px_rgba(0,255,65,0.3)]"
                : "shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            )}
            animate={{ opacity: [0.5, 1, 0.5] }}
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

// Separator Component
const Separator = () => {
  const { backgroundType } = useBackground()
  return (
    <div className={cn(
      "h-px w-full my-4",
      backgroundType === 'matrix'
        ? "bg-gradient-to-r from-transparent via-[#00ff41]/30 to-transparent"
        : "bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
    )} />
  )
}

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const { backgroundType, getThemeColors } = useBackground()
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
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Neural Network Background */}
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
            animate={{ 
              backgroundPositionX: ['0px', '20px'],
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          />
        </div>

        <motion.div
          className={cn(
            "mx-auto flex justify-between items-center transition-all duration-500 relative z-10",
            isScrolled
              ? "bg-black/80 backdrop-blur-xl border-b shadow-2xl px-6 py-3"
              : "bg-transparent px-8 py-6",
            backgroundType === 'matrix' && isScrolled
              ? "border-[#00ff41]/30 shadow-[#00ff41]/20"
              : "border-slate-600/30 shadow-blue-500/20"
          )}
          layout
        >
          {/* Logo Section */}
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className={cn(
              "relative p-2 rounded-xl border backdrop-blur-sm",
              backgroundType === 'matrix'
                ? "border-[#00ff41]/30 bg-[#00ff41]/10"
                : "border-blue-400/30 bg-blue-400/10"
            )}>
              {/* Glowing effect */}
              <div className={cn(
                "absolute inset-0 rounded-xl blur-md opacity-50",
                backgroundType === 'matrix'
                  ? "bg-[#00ff41]/20"
                  : "bg-blue-400/20"
              )} />
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
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
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

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
              <DrawerTrigger asChild>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className={cn(
                      "border backdrop-blur-sm size-11 rounded-xl p-2 transition-all duration-300",
                      backgroundType === 'matrix'
                        ? "border-[#00ff41]/30 bg-black/20 hover:bg-[#00ff41]/10 hover:border-[#00ff41]/50 hover:shadow-lg hover:shadow-[#00ff41]/25"
                        : "border-blue-400/30 bg-slate-800/20 hover:bg-blue-400/10 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-400/25"
                    )}
                  >
                    <motion.div
                      animate={isDrawerOpen ? { rotate: 180 } : { rotate: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {isDrawerOpen ? (
                        <IconX className={cn(
                          backgroundType === 'matrix' ? "text-[#00ff41]" : "text-blue-400"
                        )} />
                      ) : (
                        <IconMenu2 className={cn(
                          backgroundType === 'matrix' ? "text-[#00ff41]" : "text-blue-400"
                        )} />
                      )}
                    </motion.div>
                  </Button>
                </motion.div>
              </DrawerTrigger>
              
              <DrawerContent className={cn(
                "min-h-dvh backdrop-blur-xl border-t",
                backgroundType === 'matrix'
                  ? "bg-black/90 border-[#00ff41]/30"
                  : "bg-black/90 border-blue-500/30"
              )}>
                <div className={cn(
                  "absolute inset-0",
                  backgroundType === 'matrix'
                    ? "bg-gradient-to-br from-[#00ff41]/5 via-[#ff0080]/5 to-transparent"
                    : "bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"
                )} />
                
                <DrawerHeader className="flex justify-between relative z-10">
                  <DrawerTitle className="flex items-center gap-3">
                    <Logo className="size-10" />
                    <span className={cn(
                      "text-lg font-bold",
                      backgroundType === 'matrix' ? "text-[#00ff41]" : "text-blue-400"
                    )}>
                      Tran Anh Duc
                    </span>
                  </DrawerTitle>
                  <DrawerClose asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className={cn(
                        "size-8 border backdrop-blur-sm",
                        backgroundType === 'matrix'
                          ? "border-[#00ff41]/30 hover:bg-[#00ff41]/10"
                          : "border-blue-400/30 hover:bg-blue-400/10"
                      )}
                    >
                      <IconX className={cn(
                        "size-4",
                        backgroundType === 'matrix' ? "text-[#00ff41]" : "text-blue-400"
                      )} />
                    </Button>
                  </DrawerClose>
                </DrawerHeader>

                <div className="px-6 flex flex-col gap-4 relative z-10">
                  {links.map((link) => (
                    <motion.div
                      key={link.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          "flex items-center gap-3 p-4 rounded-xl border backdrop-blur-sm transition-all duration-300",
                          backgroundType === 'matrix'
                            ? "border-[#00ff41]/20 hover:border-[#00ff41]/40 hover:bg-[#00ff41]/10"
                            : "border-blue-400/20 hover:border-blue-400/40 hover:bg-blue-400/10"
                        )}
                        onClick={() => setIsDrawerOpen(false)}
                      >
                        <link.icon className={cn(
                          "size-5",
                          backgroundType === 'matrix' ? "text-[#00ff41]" : "text-blue-400"
                        )} />
                        <span className="font-medium text-lg text-white">{link.title}</span>
                      </Link>
                    </motion.div>
                  ))}
                  
                  <Separator />
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="pb-6"
                  >
                    <iframe
                      src="https://github.com/sponsors/ocean28799/button"
                      title="Sponsor ocean28799"
                      height="32"
                      width="114"
                      style={{ border: "0", borderRadius: "6px" }}
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
