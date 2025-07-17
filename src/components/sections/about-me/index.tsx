"use client"

import { motion } from "motion/react"
import { useTranslation } from "react-i18next"
import { useHydrationSafe } from "@/hooks/use-hydration-safe"

import { VelocityScroll } from "@/components/features/ui-effects/scroll-based-velocity"
import { Badge } from "@/components/ui/badge"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import { MY_NETWORKS } from "@/lib/constants/my-networks"
import { Code, Layers, UserRound, Zap } from "lucide-react"
import { MyResume } from "../my-resume"
import { useBackground } from "@/contexts/background-context"

export function MyInformation() {
  const { t } = useTranslation()
  
  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full">
          {/* <Card className="col-span-1 md:col-span-1 lg:col-span-2 dark:bg-black/50 bg-white/50 p-0 order-2 md:order-1">
            <CardContent className="!p-0 h-full">
              <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background">
                <Image
                  src="/images/Subject4.png"
                  alt="avatar"
                  width={1000}
                  height={1000}
                  className="z-10 object-contain md:translate-y-32 hidden dark:block"
                />

                <Image
                  src="/images/Subject5.png"
                  alt="avatar"
                  width={1000}
                  height={1000}
                  className="z-10 object-contain md:translate-y-32 dark:hidden"
                />
                <Ripple className="" />
              </div>
            </CardContent>
          </Card> */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2 bg-black/40 backdrop-blur-xl border border-cyan-500/30 rounded-3xl p-0 order-2 md:order-1 shadow-2xl shadow-cyan-500/20">
            <MyResume />
          </div>

          <div className="relative h-full rounded-2xl border border-purple-500/30 bg-black/40 backdrop-blur-xl p-2 md:rounded-3xl md:p-3 col-span-1 md:col-span-2 lg:col-span-3 order-1 md:order-2 shadow-2xl shadow-purple-500/20">
            {/* Gaming glow effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/10 via-cyan-500/10 to-pink-500/10 animate-pulse" />
            
            <GlowingEffect
              blur={0}
              borderWidth={3}
              spread={80}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
            />
            <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 shadow-[0px_0px_27px_0px_rgba(139,92,246,0.3)]">
              <div className="relative flex flex-1 flex-col gap-6 z-10">
                <div className="flex w-full md:flex-row flex-col items-center justify-between">
                  <div className="flex items-center gap-4">
                    <ThemeAwareUserIcon />

                    <div>
                      <p className="text-lg sm:text-xl relative z-20 mt-2 font-medium text-white">
                        {t('about.name')}
                      </p>
                      <ThemeAwareCompanyInfo />
                    </div>
                  </div>

                  <SocialNetwork />
                </div>
                <div className="space-y-6 flex-1 flex flex-col items-center justify-center">
                  <ThemeAwareMainTitle />
                  <h2 className="text-sm/[1.125rem] text-gray-300 md:text-base/[1.375rem] [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                    {t('about.mainDescription')}
                  </h2>
                </div>

                <div className="space-y-4">
                  <ThemeAwareExpertiseTitle />
                  <KeySkills />
                </div>

                <KeyAchievements />
              </div>
            </div>
          </div>
        </div>
      </div>

      <VelocityScroll
        numRows={1}
        className="!text-xl md:!text-3xl opacity-50 my-6"
      >
        {t('about.scrollText')}
      </VelocityScroll>
    </>
  )
}

const SocialNetwork = () => {
  const isClient = useHydrationSafe()

  if (!isClient) {
    return (
      <div className="relative z-20 mt-4 sm:mt-0">
        <div className="flex flex-wrap items-center gap-2">
          {/* Placeholder for SSR */}
          <div className="border p-2 rounded-xl sm:rounded-2xl w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 animate-pulse bg-gray-300"></div>
          <div className="border p-2 rounded-xl sm:rounded-2xl w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 animate-pulse bg-gray-300"></div>
          <div className="border p-2 rounded-xl sm:rounded-2xl w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 animate-pulse bg-gray-300"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative z-20 mt-4 sm:mt-0">
      <div className="flex flex-wrap items-center gap-2">
        {MY_NETWORKS.map((network) => (
          <a
            key={network.name}
            href={network.href}
            target="_blank"
            rel="noopener noreferrer"
            className="border p-2 rounded-xl sm:rounded-2xl hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors duration-300"
          >
            <network.icon className="size-5 sm:size-6 md:size-7 lg:size-8" />
          </a>
        ))}
      </div>
    </div>
  )
}

const KeyAchievements = () => {
  const { getThemeColors } = useBackground()
  const { t } = useTranslation()
  const colors = getThemeColors()
  
  const achievementItems = [
    {
      icon: Code,
      title: t('about.expertise.aiIntegration.title'),
      description: t('about.expertise.aiIntegration.description'),
      color: colors.primary,
      hoverBg: `${colors.primary}20`
    },
    {
      icon: Layers,
      title: t('about.expertise.crossPlatform.title'),
      description: t('about.expertise.crossPlatform.description'),
      color: colors.accent,
      hoverBg: `${colors.accent}20`
    },
    {
      icon: Zap,
      title: t('about.expertise.modernTech.title'),
      description: t('about.expertise.modernTech.description'),
      color: colors.warning,
      hoverBg: `${colors.warning}20`
    }
  ]
  
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6"
      key="achievements-section"
    >
      {achievementItems.map((item, index) => (
        <motion.div
          key={index}
          className="p-4 rounded-lg backdrop-blur-sm flex flex-col items-center text-center cursor-pointer transition-all duration-300 border"
          style={{
            backgroundColor: `${colors.secondary}10`,
            borderColor: `${colors.accent}30`,
          }}
          whileHover={{
            scale: 1.05,
            backgroundColor: item.hoverBg,
            borderColor: item.color,
            boxShadow: `0 10px 25px ${item.color}20`,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <motion.div
            whileHover={
              index === 0 
                ? { rotate: [0, -10, 10, -10, 0], transition: { duration: 0.5 } }
                : index === 1 
                ? { y: [0, -8, 0], transition: { duration: 0.5 } }
                : { scale: [1, 1.2, 1], transition: { duration: 0.5 } }
            }
          >
            <item.icon 
              className="h-8 w-8 mb-2 transition-colors duration-300" 
              style={{ color: item.color }}
            />
          </motion.div>
          <h4 
            className="font-medium transition-colors duration-300"
            style={{ color: colors.text }}
          >
            {item.title}
          </h4>
          <p 
            className="text-sm transition-colors duration-300"
            style={{ color: colors.textSecondary }}
          >
            {item.description}
          </p>
        </motion.div>
      ))}
    </div>
  )
}

const KeySkills = () => {
  const { backgroundType } = useBackground()
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  // Animation variants for individual skill badges
  const badgeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 300, damping: 20 },
    },
  }

  // Array of skills with their colors for hover effects
  const skills = [
    {
      name: "React Native",
      color: "rgb(219 234 254)",
      darkColor: "rgba(59, 130, 246, 0.2)",
    },
    {
      name: "Next.js 15",
      color: "rgb(224 231 255)",
      darkColor: "rgba(99, 102, 241, 0.2)",
    },
    {
      name: "OpenAI API",
      color: "rgb(220 252 231)",
      darkColor: "rgba(16, 185, 129, 0.2)",
    },
    {
      name: "TypeScript",
      color: "rgb(219 234 254)",
      darkColor: "rgba(59, 130, 246, 0.2)",
    },
    {
      name: "Expo",
      color: "rgb(207 250 254)",
      darkColor: "rgba(6, 182, 212, 0.2)",
    },
    {
      name: "TensorFlow.js",
      color: "rgb(254 243 199)",
      darkColor: "rgba(245, 158, 11, 0.2)",
    },
    {
      name: "Zustand",
      color: "rgb(237 233 254)",
      darkColor: "rgba(124, 58, 237, 0.2)",
    },
    {
      name: "Supabase",
      color: "rgb(220 252 231)",
      darkColor: "rgba(16, 185, 129, 0.2)",
    },
    {
      name: "React Query",
      color: "rgb(254 226 226)",
      darkColor: "rgba(239, 68, 68, 0.2)",
    },
    {
      name: "AI Integration",
      color: "rgb(237 233 254)",
      darkColor: "rgba(124, 58, 237, 0.2)",
    },
  ]
  return (
    <motion.div
      className="flex flex-wrap gap-2"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          variants={badgeVariants}
          whileHover={{
            scale: 1.1,
            backgroundColor:
              backgroundType === "matrix" ? skill.darkColor : skill.color,
            boxShadow:
              "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            y: -5,
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Badge
            variant="secondary"
            className="px-3 py-1 cursor-pointer dark:bg-gray-700 dark:text-gray-200 transition-colors duration-300"
          >
            {skill.name}
          </Badge>
        </motion.div>
      ))}
    </motion.div>
  )
}

const ThemeAwareUserIcon = () => {
  const { getThemeColors } = useBackground()
  const colors = getThemeColors()
  
  return (
    <div 
      className="rounded-lg border backdrop-blur-sm p-2 shadow-lg"
      style={{
        borderColor: `${colors.accent}50`,
        background: `linear-gradient(to right, ${colors.primary}20, ${colors.accent}20)`,
        boxShadow: `0 8px 32px ${colors.glow}25`
      }}
    >
      <UserRound 
        className="h-4 w-4" 
        style={{ color: colors.accent }}
      />
    </div>
  )
}

const ThemeAwareCompanyInfo = () => {
  const { getThemeColors } = useBackground()
  const { t } = useTranslation()
  const colors = getThemeColors()
  
  return (
    <>
      <p 
        className="relative z-20 text-sm sm:text-base font-medium uppercase"
        style={{ color: colors.secondary }}
      >
        Senior React Native & AI Integration Specialist
      </p>
      <p 
        className="relative z-20 text-sm sm:text-base font-medium uppercase"
        style={{ color: colors.accent }}
      >
        {t('hero.subtitle')}
      </p>
    </>
  )
}

const ThemeAwareMainTitle = () => {
  const { getThemeColors } = useBackground()
  const { t } = useTranslation()
  const colors = getThemeColors()
  
  return (
    <h3 className="pt-0.5 text-lg font-bold text-balance text-white md:text-4xl">
      <span style={{ color: colors.primary }}>{t('about.subtitle')}</span>
    </h3>
  )
}

const ThemeAwareExpertiseTitle = () => {
  const { getThemeColors } = useBackground()
  const { t } = useTranslation()
  const colors = getThemeColors()
  
  return (
    <h3 
      className="text-lg font-semibold"
      style={{ color: colors.success }}
    >
      {t('about.expertise.title')}
    </h3>
  )
}
