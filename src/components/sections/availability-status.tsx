'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Clock, CheckCircle, XCircle, AlertCircle, ChevronRight, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type AvailabilityStatus = 'available' | 'limited' | 'unavailable'

interface TimeSlot {
  day: string
  hours: string
  available: boolean
}

// Configure your availability here
const AVAILABILITY_CONFIG = {
  status: 'available' as AvailabilityStatus,
  statusMessage: 'Open to new projects',
  nextAvailable: 'Immediately',
  responseTime: '< 12 hours',
  timezone: 'UTC+7 (Vietnam)',
  preferredProjects: [
    'React Native Apps',
    'Next.js Web Apps',
    'AI Integration',
    'Enterprise Solutions',
  ],
  weeklySchedule: [
    { day: 'Monday', hours: '9:00 - 18:00', available: true },
    { day: 'Tuesday', hours: '9:00 - 18:00', available: true },
    { day: 'Wednesday', hours: '9:00 - 18:00', available: true },
    { day: 'Thursday', hours: '9:00 - 18:00', available: true },
    { day: 'Friday', hours: '9:00 - 18:00', available: true },
    { day: 'Saturday', hours: 'Flexible', available: true },
    { day: 'Sunday', hours: 'Off', available: false },
  ] as TimeSlot[],
  currentCapacity: 70, // percentage of current workload
}

const statusConfig = {
  available: {
    color: 'bg-emerald-500',
    textColor: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/30',
    icon: CheckCircle,
    label: 'Available',
  },
  limited: {
    color: 'bg-amber-500',
    textColor: 'text-amber-400',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/30',
    icon: AlertCircle,
    label: 'Limited Availability',
  },
  unavailable: {
    color: 'bg-red-500',
    textColor: 'text-red-400',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500/30',
    icon: XCircle,
    label: 'Fully Booked',
  },
}

// Simple badge component for showing in header/hero
export function AvailabilityBadge({ className }: { className?: string }) {
  const config = statusConfig[AVAILABILITY_CONFIG.status]

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1.5 rounded-full border",
        config.bgColor,
        config.borderColor,
        className
      )}
    >
      <span className={cn("w-2 h-2 rounded-full animate-pulse", config.color)} />
      <span className={cn("text-sm font-medium", config.textColor)}>
        {config.label}
      </span>
    </div>
  )
}

// Detailed availability card component
export function AvailabilityCard() {
  const [isExpanded, setIsExpanded] = useState(false)
  const config = statusConfig[AVAILABILITY_CONFIG.status]
  const Icon = config.icon

  return (
    <motion.div
      layout
      className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden"
    >
      {/* Header */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={cn("p-2 rounded-lg", config.bgColor)}>
              <Icon className={cn("w-5 h-5", config.textColor)} />
            </div>
            <div>
              <h3 className="text-white font-semibold">Availability Status</h3>
              <p className={cn("text-sm", config.textColor)}>{AVAILABILITY_CONFIG.statusMessage}</p>
            </div>
          </div>
          <AvailabilityBadge />
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-3 bg-slate-900/50 rounded-xl">
            <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
              <Clock className="w-3 h-3" />
              Response Time
            </div>
            <p className="text-white font-medium">{AVAILABILITY_CONFIG.responseTime}</p>
          </div>
          <div className="p-3 bg-slate-900/50 rounded-xl">
            <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
              <Calendar className="w-3 h-3" />
              Next Available
            </div>
            <p className="text-white font-medium">{AVAILABILITY_CONFIG.nextAvailable}</p>
          </div>
        </div>

        {/* Capacity Bar */}
        <div className="mt-4">
          <div className="flex justify-between text-xs mb-2">
            <span className="text-slate-400">Current Capacity</span>
            <span className="text-white font-medium">{AVAILABILITY_CONFIG.currentCapacity}%</span>
          </div>
          <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${AVAILABILITY_CONFIG.currentCapacity}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
              className={cn(
                "h-full rounded-full",
                AVAILABILITY_CONFIG.currentCapacity < 50 ? "bg-emerald-500" :
                AVAILABILITY_CONFIG.currentCapacity < 80 ? "bg-amber-500" : "bg-red-500"
              )}
            />
          </div>
        </div>
      </div>

      {/* Expand/Collapse Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-6 py-3 flex items-center justify-between bg-slate-900/30 hover:bg-slate-900/50 transition-colors border-t border-slate-700"
      >
        <span className="text-sm text-slate-400">View Schedule Details</span>
        <ChevronRight
          className={cn(
            "w-4 h-4 text-slate-400 transition-transform",
            isExpanded && "rotate-90"
          )}
        />
      </button>

      {/* Expanded Details */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-slate-700"
          >
            <div className="p-6 space-y-4">
              {/* Timezone */}
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-slate-400" />
                <span className="text-slate-400">Timezone:</span>
                <span className="text-white">{AVAILABILITY_CONFIG.timezone}</span>
              </div>

              {/* Weekly Schedule */}
              <div>
                <h4 className="text-sm font-medium text-slate-300 mb-3">Weekly Schedule</h4>
                <div className="grid gap-2">
                  {AVAILABILITY_CONFIG.weeklySchedule.map((slot) => (
                    <div
                      key={slot.day}
                      className="flex items-center justify-between py-2 px-3 bg-slate-900/30 rounded-lg"
                    >
                      <span className="text-sm text-slate-300">{slot.day}</span>
                      <div className="flex items-center gap-2">
                        <span className={cn(
                          "text-sm",
                          slot.available ? "text-slate-400" : "text-slate-500"
                        )}>
                          {slot.hours}
                        </span>
                        <span className={cn(
                          "w-2 h-2 rounded-full",
                          slot.available ? "bg-emerald-500" : "bg-slate-600"
                        )} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Preferred Projects */}
              <div>
                <h4 className="text-sm font-medium text-slate-300 mb-3">Preferred Projects</h4>
                <div className="flex flex-wrap gap-2">
                  {AVAILABILITY_CONFIG.preferredProjects.map((project) => (
                    <span
                      key={project}
                      className="px-3 py-1 text-xs bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full"
                    >
                      {project}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <Button asChild className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700">
                <Link href="/contact">
                  <Mail className="w-4 h-4 mr-2" />
                  Start a Conversation
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// Floating availability indicator
export function FloatingAvailabilityIndicator() {
  const config = statusConfig[AVAILABILITY_CONFIG.status]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2 }}
      className="fixed bottom-6 left-6 z-40 hidden md:block"
    >
      <Link href="/contact" className="group">
        <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-full shadow-lg hover:bg-slate-700/90 transition-all hover:scale-105">
          <span className={cn("w-2 h-2 rounded-full animate-pulse", config.color)} />
          <span className="text-sm text-slate-300 group-hover:text-white transition-colors">
            {config.label} for new projects
          </span>
          <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
        </div>
      </Link>
    </motion.div>
  )
}
