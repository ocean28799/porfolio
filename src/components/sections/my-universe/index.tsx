"use client"

import {
  type AnimationVariant,
  TextAnimate,
} from "@/components/features/ui-effects/text-animate"
import { Compare } from "@/components/ui/compare"
import { Cover } from "@/components/ui/cover"
import { useBackground } from "@/contexts/background-context"
import { useTranslation } from "react-i18next"
import { ROLE_TITLES } from "@/lib/constants/role-titles"
import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import { memo, useEffect, useState } from "react"
import { useHydrationSafe } from "@/hooks/use-hydration-safe"

const animationTypes: AnimationVariant[] = [
  "fadeIn",
  "blurIn",
  "blurInUp",
  "blurInDown",
  "slideUp",
  "slideDown",
  "slideLeft",
  "slideRight",
  "scaleUp",
  "scaleDown",
]

interface ThemeColors {
  primary: string
  accent: string
  secondary: string
  success: string
  warning: string
}

interface ComponentProps {
  colors: ThemeColors
  backgroundType: string
}

export const MyUniverse = () => {
  const { getThemeColors } = useBackground()
  const { t } = useTranslation()
  
  // Get colors based on current theme
  const colors = getThemeColors()
  
  // Get translated roles
  const translatedRoles = t('hero.roles', { returnObjects: true }) as string[]
  
  const [currentText, setCurrentText] = useState(translatedRoles[0] || ROLE_TITLES[0])
  const [currentAnimation, setCurrentAnimation] = useState(animationTypes[0])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => {
        const textIndex = translatedRoles.indexOf(prev)
        if (textIndex === translatedRoles.length - 1) {
          return translatedRoles[0]
        }

        return translatedRoles[textIndex + 1]
      })
      setCurrentAnimation(
        animationTypes[Math.floor(Math.random() * animationTypes.length)]
      )
    }, 3000)
    return () => clearInterval(interval)
  }, [translatedRoles])

  return (
    <div className="w-full flex flex-col-reverse lg:flex-row justify-between items-center gap-20 px-2 md:px-6 relative">
      <div className="flex-1 relative w-full lg:w-auto">
        <div className="text-xs bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-500/30 w-max rounded-full flex items-center gap-2 px-3 py-1.5">
          <div className="size-2 rounded-full bg-cyan-400 font-medium animate-pulse" />
          <span className="text-cyan-300">{t('hero.enchanted')}</span>
        </div>
        <div className="flex flex-row gap-4 items-center my-4 lg:my-0 lg:block">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight my-4 md:my-8 text-white">
            <span style={{ color: colors.primary }}>{t('hero.greeting')}</span><span className="lg:hidden text-cyan-300">,</span>
          </h1>

          <Title />
        </div>

        {/* Responsive positioning for floating elements */}
        <div className={cn(
          "px-3 py-2 hidden sm:block absolute top-8 left-16 sm:left-32 backdrop-blur-sm rounded-[6px] w-max font-medium border animate-wiggle duration-1000 shadow-lg",
          `bg-gradient-to-r from-[${colors.accent}]/30 to-[${colors.secondary}]/30 border-[${colors.accent}]/40 shadow-[${colors.accent}]/25`
        )} style={{ color: colors.accent }}>
          <span style={{ color: colors.accent }}>React Native</span>
        </div>

        <div className={cn(
          "px-3 py-2 hidden sm:block absolute top-24 right-4 sm:right-10 backdrop-blur-sm rounded-[6px] w-max font-medium border animate-wiggle duration-1000 shadow-lg",
          `bg-gradient-to-r from-[${colors.primary}]/30 to-[${colors.secondary}]/30 border-[${colors.primary}]/40 shadow-[${colors.primary}]/25`
        )} style={{ color: colors.primary }}>
          <span style={{ color: colors.primary }}>Next.js</span>
        </div>

        {/* <div className="px-3 py-2 hidden sm:block absolute bottom-36 right-2 sm:right-20 bg-yellow-500/20 rounded-[6px] w-max font-medium dark:text-yellow-300 text-yellow-500 border border-yellow-500/20 animate-wiggle duration-1000">
          Innovation
        </div> */}

        <div className="flex items-center justify-center md:justify-start">
          <motion.div
            layout
            className={cn(
              "md:w-fit w-full py-2 px-4 sm:px-8 text-base sm:text-lg md:text-xl font-bold my-5 rounded-lg pt-2 pb-3 text-center text-white relative overflow-hidden",
              "bg-gradient-to-br from-black/60 via-cyan-900/20 to-purple-900/20",
              "border border-cyan-500/30 backdrop-blur-xl",
              "shadow-[0_0_20px_rgba(0,255,255,0.3)]"
            )}
          >
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse" />
            
            <TextAnimate
              duration={1}
              animation={currentAnimation}
              by="character"
              startOnView={false}
              className="break-words relative z-10"
              style={{ color: colors.primary }}
            >
              {currentText}
            </TextAnimate>
          </motion.div>
        </div>
        <div className="text-lg text-cyan-300 my-6 md:my-10 font-bold">
          <span style={{ color: colors.primary }}>{t('hero.expertLine').split(' | ')[0]}</span> | <span style={{ color: colors.accent }}>{t('hero.expertLine').split(' | ')[1]}</span>
          <br />{" "}
          <span className="font-normal italic text-gray-300 dark:text-gray-300">
            {t('hero.buildingText')}
          </span>
        </div>
      </div>
      <div className="flex-1 flex justify-center lg:justify-end w-full mt-8 lg:mt-0">
        <CompareDemo />
      </div>
    </div>
  )
}

export function CompareDemo() {
  const { backgroundType, getThemeColors } = useBackground()
  const colors = getThemeColors()
  
  return (
    <div className={cn(
      "w-full border-2 rounded-3xl backdrop-blur-xl shadow-2xl relative overflow-hidden",
      backgroundType === 'matrix' 
        ? `border-[${colors.primary}]/50 bg-black/60 shadow-[${colors.primary}]/20`
        : `border-slate-500/30 bg-slate-800/40 shadow-blue-500/20`
    )}>
      {/* Gaming border glow effect */}
      <div className={cn(
        "absolute inset-0 rounded-3xl blur-sm",
        backgroundType === 'matrix'
          ? `bg-gradient-to-r from-[${colors.primary}]/20 via-[${colors.accent}]/20 to-[${colors.secondary}]/20`
          : "bg-gradient-to-r from-blue-500/15 via-purple-500/15 to-emerald-500/15"
      )} />
      
      
      <Compare
        firstComponent={<BasicInfoComponent colors={colors} backgroundType={backgroundType} />}
        secondComponent={<NewProjectsComponent colors={colors} backgroundType={backgroundType} />}
        className="h-[200px] sm:h-[250px] md:h-[400px] lg:h-[500px] w-full relative z-10"
        slideMode="hover"
        autoplay={false}
      />
    </div>
  )
}

// Basic Info Component
function BasicInfoComponent({ colors }: ComponentProps) {
  const { t } = useTranslation()
  const isHydrated = useHydrationSafe()
  
  const basicInfo = [
    { label: t('hero.basicInfo.name'), value: t('hero.name'), icon: "👨‍💻" },
    { label: t('hero.basicInfo.role'), value: isHydrated ? t('hero.basicInfo.roleValue') : 'React Native Developer', icon: "🚀" },
    { label: t('hero.basicInfo.experience'), value: t('hero.basicInfo.experienceValue'), icon: "⏰" },
    { label: t('hero.basicInfo.location'), value: t('hero.basicInfo.locationValue'), icon: "📍" },
    { label: t('hero.basicInfo.expertise'), value: t('hero.basicInfo.expertiseValue'), icon: "⚛️" },
    { label: t('hero.basicInfo.focus'), value: t('hero.basicInfo.focusValue'), icon: "📱" },
  ]

  const skills = [
    { name: t('hero.skills.reactNative'), color: colors.primary },
    { name: t('hero.skills.reactJs'), color: colors.success },
    { name: t('hero.skills.nextJs'), color: colors.accent },
    { name: t('hero.skills.typescript'), color: colors.warning },
  ]

  return (
    <div className={cn(
      "w-full h-full p-3 sm:p-4 relative overflow-hidden bg-black flex flex-col"
    )}>
      <div className="flex-1 flex flex-col justify-between min-h-0">
        {/* Personal Info */}
        <div className="space-y-1.5 flex-shrink-0">
          {basicInfo.map((info, index) => (
            <motion.div
              key={info.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              className="flex items-center gap-2"
            >
              <span className="text-sm flex-shrink-0">{info.icon}</span>
              <div className="flex-1 min-w-0">
                <div className="text-xs text-gray-400">{info.label}</div>
                <div className="text-xs sm:text-sm font-semibold text-white truncate">{info.value}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Preview */}
        <div className="mt-3 flex-shrink-0">
          <div className="text-xs text-gray-400 mb-2">{t('hero.skills.title')}</div>
          <div className="grid grid-cols-2 gap-1.5">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
                className="p-1.5 rounded bg-gray-800/50 border border-gray-700/50"
              >
                <span className="text-xs font-medium text-white">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Stats */}
        <div className="mt-3 grid grid-cols-2 gap-2 flex-shrink-0">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.4 }}
            className="text-center p-2 rounded-lg bg-gray-800/50"
          >
            <div className="text-base sm:text-lg font-bold" style={{ color: colors.primary }}>{t('hero.stats.projectsValue')}</div>
            <div className="text-xs text-gray-300">{t('hero.stats.projects')}</div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.4 }}
            className="text-center p-2 rounded-lg bg-gray-800/50"
          >
            <div className="text-base sm:text-lg font-bold" style={{ color: colors.accent }}>{t('hero.stats.countriesValue')}</div>
            <div className="text-xs text-gray-300">{t('hero.stats.countries')}</div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

// Projects Component
function NewProjectsComponent({ colors }: ComponentProps) {
  const { t } = useTranslation()
  
  const projectSummary = {
    totalProjects: 7,
    categories: t('hero.portfolio.categories', { returnObjects: true }) as string[],
    technologies: t('hero.portfolio.technologies', { returnObjects: true }) as string[],
    achievements: t('hero.portfolio.achievements', { returnObjects: true }) as string[]
  }

  const featuredStats = [
    { label: t('hero.portfolio.featuredStats.aiProjects'), value: t('hero.portfolio.featuredStats.aiProjectsValue'), icon: "🤖", color: colors.success },
    { label: t('hero.portfolio.featuredStats.mobileApps'), value: t('hero.portfolio.featuredStats.mobileAppsValue'), icon: "📱", color: colors.primary },
    { label: t('hero.portfolio.featuredStats.webPlatforms'), value: t('hero.portfolio.featuredStats.webPlatformsValue'), icon: "🌐", color: colors.accent },
    { label: t('hero.portfolio.featuredStats.iotSystems'), value: t('hero.portfolio.featuredStats.iotSystemsValue'), icon: "🏠", color: colors.warning }
  ]

  return (
    <div className={cn(
      "w-full h-full p-3 sm:p-4 relative overflow-hidden flex flex-col",
      "bg-gradient-to-br from-gray-900/90 via-slate-800/80 to-gray-900/90"
    )}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.3),transparent_50%)]" />
      </div>
      
      <div className="relative z-10 flex-1 flex flex-col justify-between min-h-0">
        {/* Project Categories */}
        <div className="flex-shrink-0">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-3"
          >
            <h3 className="text-sm font-bold text-white mb-2">{t('hero.portfolio.title')}</h3>
            <div className="grid grid-cols-1 gap-1">
              {projectSummary.categories.slice(0, 4).map((category, index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="text-xs text-gray-300 px-2 py-1 bg-gray-800/40 rounded border border-gray-700/30"
                >
                  • {category}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Project Stats */}
        <div className="flex-shrink-0">
          <div className="grid grid-cols-2 gap-1.5">
            {featuredStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.7, duration: 0.4 }}
                className="text-center p-2 rounded bg-gray-800/50 border border-gray-700/30"
              >
                <div className="text-lg">{stat.icon}</div>
                <div className="text-sm font-bold" style={{ color: stat.color }}>
                  {stat.value}
                </div>
                <div className="text-xs text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
          
          {/* Summary Achievement */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="mt-3 text-center p-2 rounded-lg bg-gradient-to-r from-gray-800/60 to-gray-700/60 border border-gray-600/40"
          >
            <div className="text-sm font-bold" style={{ color: colors.success }}>
              🏆 React Native Specialist
            </div>
            <div className="text-xs text-gray-300 mt-1">
              Cross-Platform • Enterprise • Innovation
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export const Title = memo(() => {
  const { getThemeColors } = useBackground()
  const colors = getThemeColors()
  
  return (
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight sm:my-6 text-white">
      I&apos;m <span style={{ color: colors.accent }}><Cover>Duc Tran</Cover></span>
    </h1>
  )
})

Title.displayName = "Title"
