"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { 
  Coffee, 
  Code2, 
  Headphones, 
  MapPin, 
  Heart, 
  Lightbulb,
  GamepadIcon,
  BookOpen,
  Plane,
  Clock
} from "lucide-react"

interface QuickFact {
  icon: React.ElementType
  label: string
  value: string
  color: string
}

const quickFacts: QuickFact[] = [
  { icon: MapPin, label: "Based In", value: "Ho Chi Minh City, Vietnam", color: "text-red-400" },
  { icon: Coffee, label: "Daily Coffee", value: "3+ Cups ☕", color: "text-amber-400" },
  { icon: Code2, label: "Favorite Language", value: "TypeScript", color: "text-blue-400" },
  { icon: Headphones, label: "Coding Music", value: "Lo-fi & EDM", color: "text-purple-400" },
  { icon: GamepadIcon, label: "Hobby", value: "Gaming & Gym", color: "text-green-400" },
  { icon: BookOpen, label: "Currently Learning", value: "Rust & Web3", color: "text-cyan-400" },
  { icon: Heart, label: "Passion", value: "Building Products", color: "text-pink-400" },
  { icon: Clock, label: "Best Time to Code", value: "Late Night 🌙", color: "text-indigo-400" },
  { icon: Plane, label: "Dream", value: "Work Remotely Worldwide", color: "text-sky-400" },
  { icon: Lightbulb, label: "Fun Fact", value: "Self-taught Developer", color: "text-yellow-400" },
]

export function QuickFacts() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 dark:from-blue-400 dark:via-purple-500 dark:to-cyan-400 bg-clip-text text-transparent mb-4">
            Quick Facts About Me
          </h2>
          <p className="text-gray-600 dark:text-slate-400 max-w-2xl mx-auto">
            A glimpse into who I am beyond the code
          </p>
        </motion.div>

        {/* Facts Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {quickFacts.map((fact, index) => (
            <motion.div
              key={fact.label}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card className="p-4 h-full bg-gradient-to-br from-white/80 dark:from-slate-900/80 via-gray-50/50 dark:via-slate-800/50 to-white/80 dark:to-slate-900/80 border-gray-200/50 dark:border-slate-700/50 hover:border-gray-300/50 dark:hover:border-slate-600/50 transition-all duration-300 text-center group shadow-sm dark:shadow-none">
                <fact.icon className={`w-8 h-8 mx-auto mb-3 ${fact.color} group-hover:scale-110 transition-transform`} />
                <p className="text-xs text-gray-500 dark:text-slate-500 mb-1">{fact.label}</p>
                <p className="text-sm font-medium text-gray-900 dark:text-white">{fact.value}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Fun Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Card className="inline-block p-6 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 border-gray-200/50 dark:border-slate-700/50 shadow-sm dark:shadow-none">
            <p className="text-lg text-gray-700 dark:text-slate-300 italic">
              &quot;I believe great software is built with passion, curiosity, and lots of coffee.&quot;
            </p>
            <p className="text-sm text-gray-500 dark:text-slate-500 mt-2">— Tran Anh Duc</p>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
