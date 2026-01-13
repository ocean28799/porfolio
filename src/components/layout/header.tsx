"use client"

import { cn } from "@/lib/utils"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import { useBackground } from "@/contexts/background-context"
import { useAnimation } from "@/hooks/use-animation"
import { useTranslation } from "react-i18next"
import {
  IconHome,
  IconCode,
  IconUser,
  IconArrowUp,
  IconArticle,
  IconFileDescription,
  IconMenu2,
  IconX,
  IconSparkles,
} from "@tabler/icons-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState, useRef } from "react"
import { Logo } from "../svg/logo"
import { LanguageSwitcher } from "../language-switcher"

// Navigation items configuration - Updated with Pricing
const navItems = [
  { title: "Home", href: "/", icon: IconHome, external: false },
  { title: "Projects", href: "/projects", icon: IconCode, external: false },
  { title: "Blog", href: "/blog", icon: IconArticle, external: false },
  { title: "About", href: "/about", icon: IconUser, external: false },
  { title: "Pricing", href: "/pricing", icon: IconSparkles, external: false },
  { title: "CV", href: "/cv", icon: IconFileDescription, external: true },
]

// Floating Dock Navigation Item
const DockItem = ({
  item,
  isActive,
  index,
}: {
  item: (typeof navItems)[0]
  isActive: boolean
  index: number
}) => {
  const { backgroundType } = useBackground()
  const animConfig = useAnimation()
  const { t } = useTranslation()
  const Icon = item.icon
  const translatedTitle = t(`nav.${item.title.toLowerCase()}`) || item.title

  return (
    <Link
      href={item.href}
      target={item.external ? "_blank" : undefined}
      rel={item.external ? "noopener noreferrer" : undefined}
      className="relative group"
    >
      <motion.div
        className={cn(
          "relative flex items-center gap-2 px-4 py-2.5 rounded-2xl transition-all duration-300",
          "border backdrop-blur-md overflow-hidden",
          isActive
            ? backgroundType === "matrix"
              ? "bg-[#00ff41]/15 border-[#00ff41]/40 shadow-lg shadow-[#00ff41]/20"
              : "bg-white/15 border-white/30 shadow-lg shadow-blue-500/20"
            : backgroundType === "matrix"
              ? "bg-white/5 border-white/10 hover:bg-[#00ff41]/10 hover:border-[#00ff41]/30"
              : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
        )}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.05, duration: 0.3 }}
        whileHover={animConfig.enableAnimations ? { scale: 1.05, y: -2 } : {}}
        whileTap={animConfig.enableAnimations ? { scale: 0.95 } : {}}
      >
        {/* Shine effect on hover */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background:
              "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)",
            backgroundSize: "200% 200%",
          }}
          animate={
            animConfig.enableAnimations
              ? { backgroundPosition: ["200% 200%", "-200% -200%"] }
              : {}
          }
          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
        />

        {/* Active glow indicator */}
        {isActive && (
          <motion.div
            className={cn(
              "absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-1 rounded-full",
              backgroundType === "matrix" ? "bg-[#00ff41]" : "bg-blue-400"
            )}
            layoutId="activeIndicator"
            initial={{ width: 0 }}
            animate={{ width: "60%" }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}

        <Icon
          className={cn(
            "w-4 h-4 transition-colors duration-300",
            isActive
              ? backgroundType === "matrix"
                ? "text-[#00ff41]"
                : "text-white"
              : "text-gray-400 group-hover:text-white"
          )}
        />
        <span
          className={cn(
            "text-sm font-medium transition-colors duration-300",
            isActive
              ? backgroundType === "matrix"
                ? "text-[#00ff41]"
                : "text-white"
              : "text-gray-400 group-hover:text-white"
          )}
        >
          {translatedTitle}
        </span>
      </motion.div>
    </Link>
  )
}

// Mobile Menu Item
const MobileMenuItem = ({
  item,
  isActive,
  index,
  onClose,
}: {
  item: (typeof navItems)[0]
  isActive: boolean
  index: number
  onClose: () => void
}) => {
  const { backgroundType } = useBackground()
  const { t } = useTranslation()
  const Icon = item.icon
  const translatedTitle = t(`nav.${item.title.toLowerCase()}`) || item.title

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ delay: index * 0.05 }}
    >
      <Link
        href={item.href}
        target={item.external ? "_blank" : undefined}
        rel={item.external ? "noopener noreferrer" : undefined}
        onClick={onClose}
        className="block"
      >
        <motion.div
          className={cn(
            "flex items-center gap-4 p-4 rounded-2xl transition-all duration-300",
            "border backdrop-blur-md",
            isActive
              ? backgroundType === "matrix"
                ? "bg-[#00ff41]/15 border-[#00ff41]/40"
                : "bg-blue-500/15 border-blue-400/40"
              : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
          )}
          whileHover={{ x: 8, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div
            className={cn(
              "p-2.5 rounded-xl transition-all duration-300",
              isActive
                ? backgroundType === "matrix"
                  ? "bg-[#00ff41]/20"
                  : "bg-blue-400/20"
                : "bg-white/10"
            )}
          >
            <Icon
              className={cn(
                "w-5 h-5",
                isActive
                  ? backgroundType === "matrix"
                    ? "text-[#00ff41]"
                    : "text-blue-400"
                  : "text-gray-400"
              )}
            />
          </div>
          <span
            className={cn(
              "font-medium text-base flex-1",
              isActive
                ? backgroundType === "matrix"
                  ? "text-[#00ff41]"
                  : "text-blue-400"
                : "text-gray-300"
            )}
          >
            {translatedTitle}
          </span>
          {isActive && (
            <motion.div
              className={cn(
                "w-2 h-2 rounded-full",
                backgroundType === "matrix" ? "bg-[#00ff41]" : "bg-blue-400"
              )}
              layoutId="mobileActiveIndicator"
              transition={{ type: "spring", bounce: 0.2 }}
            />
          )}
        </motion.div>
      </Link>
    </motion.div>
  )
}

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const { scrollY } = useScroll()
  const lastScrollY = useRef(0)
  const { backgroundType } = useBackground()
  const animConfig = useAnimation()
  const pathname = usePathname()

  // Smart hide on scroll down, show on scroll up
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = lastScrollY.current
    
    if (latest > previous && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
    
    setIsScrolled(latest > 50)
    lastScrollY.current = latest
  })

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  return (
    <>
      {/* Desktop Navigation - Floating Pill */}
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex justify-center",
          "transition-all duration-500 pointer-events-none"
        )}
        initial={{ y: -100 }}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <motion.nav
          className={cn(
            "relative mt-4 mx-4 px-2 py-2 rounded-3xl pointer-events-auto",
            "transition-all duration-500",
            isScrolled
              ? cn(
                  "backdrop-blur-xl border shadow-2xl",
                  backgroundType === "matrix"
                    ? "bg-black/70 border-[#00ff41]/20 shadow-[#00ff41]/10"
                    : "bg-slate-900/70 border-white/10 shadow-black/20"
                )
              : "bg-transparent"
          )}
          layout
        >
          {/* Gradient border glow effect when scrolled */}
          {isScrolled && animConfig.enableGlow && (
            <motion.div
              className={cn(
                "absolute -inset-[1px] rounded-3xl opacity-50 -z-10",
                backgroundType === "matrix"
                  ? "bg-gradient-to-r from-[#00ff41]/30 via-transparent to-[#00ff41]/30"
                  : "bg-gradient-to-r from-blue-500/30 via-purple-500/20 to-pink-500/30"
              )}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 0.5 }}
            />
          )}

          <div className="flex items-center gap-1">
            {/* Logo */}
            <Link href="/" className="mr-2">
              <motion.div
                className={cn(
                  "p-2 rounded-xl transition-all duration-300",
                  "border backdrop-blur-md",
                  backgroundType === "matrix"
                    ? "border-[#00ff41]/30 bg-[#00ff41]/10 hover:bg-[#00ff41]/20"
                    : "border-white/20 bg-white/10 hover:bg-white/20"
                )}
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Logo className="w-6 h-6" />
              </motion.div>
            </Link>

            {/* Desktop Nav Items */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item, index) => (
                <DockItem
                  key={item.href}
                  item={item}
                  isActive={pathname === item.href}
                  index={index}
                />
              ))}
            </div>

            {/* Language Switcher - Desktop */}
            <div className="hidden md:block ml-2 pl-2 border-l border-white/10">
              <LanguageSwitcher />
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className={cn(
                "md:hidden p-2.5 rounded-xl transition-all duration-300",
                "border backdrop-blur-md",
                backgroundType === "matrix"
                  ? "border-[#00ff41]/30 bg-[#00ff41]/10 hover:bg-[#00ff41]/20"
                  : "border-white/20 bg-white/10 hover:bg-white/20"
              )}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
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
                    <IconX
                      className={cn(
                        "w-5 h-5",
                        backgroundType === "matrix"
                          ? "text-[#00ff41]"
                          : "text-white"
                      )}
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <IconMenu2
                      className={cn(
                        "w-5 h-5",
                        backgroundType === "matrix"
                          ? "text-[#00ff41]"
                          : "text-white"
                      )}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </motion.nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              className={cn(
                "fixed top-0 right-0 h-full w-80 max-w-[85vw] z-50 md:hidden",
                "border-l backdrop-blur-xl",
                backgroundType === "matrix"
                  ? "bg-black/90 border-[#00ff41]/20"
                  : "bg-slate-900/90 border-white/10"
              )}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              {/* Decorative gradient */}
              <div
                className={cn(
                  "absolute inset-0 opacity-30 pointer-events-none",
                  backgroundType === "matrix"
                    ? "bg-gradient-to-br from-[#00ff41]/20 via-transparent to-transparent"
                    : "bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-transparent"
                )}
              />

              <div className="relative p-6 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center gap-3 mb-8">
                  <motion.div
                    className={cn(
                      "p-2.5 rounded-xl",
                      "border backdrop-blur-md",
                      backgroundType === "matrix"
                        ? "border-[#00ff41]/30 bg-[#00ff41]/10"
                        : "border-white/20 bg-white/10"
                    )}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.1, type: "spring" }}
                  >
                    <Logo className="w-7 h-7" />
                  </motion.div>
                  <div>
                    <motion.h2
                      className={cn(
                        "font-bold text-lg bg-gradient-to-r bg-clip-text text-transparent",
                        backgroundType === "matrix"
                          ? "from-[#00ff41] to-emerald-400"
                          : "from-white to-gray-300"
                      )}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 }}
                    >
                      Navigation
                    </motion.h2>
                    <motion.p
                      className="text-xs text-gray-500"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      Explore the portfolio
                    </motion.p>
                  </div>
                </div>

                {/* Navigation Items */}
                <nav className="flex-1 space-y-2">
                  {navItems.map((item, index) => (
                    <MobileMenuItem
                      key={item.href}
                      item={item}
                      isActive={pathname === item.href}
                      index={index}
                      onClose={() => setIsMobileMenuOpen(false)}
                    />
                  ))}
                </nav>

                {/* Language Switcher */}
                <motion.div
                  className="pt-4 border-t border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <p className="text-xs text-gray-500 mb-3 flex items-center gap-2">
                    <IconSparkles className="w-3 h-3" />
                    Language
                  </p>
                  <LanguageSwitcher />
                </motion.div>

                {/* Sponsor Button */}
                <motion.div
                  className="mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                >
                  <div
                    className={cn(
                      "p-3 rounded-2xl text-center",
                      "border backdrop-blur-md",
                      backgroundType === "matrix"
                        ? "border-[#00ff41]/20 bg-[#00ff41]/5"
                        : "border-white/10 bg-white/5"
                    )}
                  >
                    <iframe
                      src="https://github.com/sponsors/ocean28799/button"
                      title="Sponsor ocean28799"
                      height="32"
                      width="114"
                      style={{ border: "0", borderRadius: "8px" }}
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </>
  )
}

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)
  const { backgroundType } = useBackground()

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <motion.button
            className={cn(
              "p-3 rounded-2xl transition-all duration-300",
              "border backdrop-blur-xl shadow-lg",
              backgroundType === "matrix"
                ? "bg-black/80 border-[#00ff41]/30 hover:border-[#00ff41]/60 shadow-[#00ff41]/20"
                : "bg-slate-900/80 border-white/20 hover:border-white/40 shadow-black/20"
            )}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <IconArrowUp
              className={cn(
                "w-5 h-5",
                backgroundType === "matrix" ? "text-[#00ff41]" : "text-white"
              )}
            />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
