"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslation } from "react-i18next"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Send, 
  CheckCircle, 
  AlertCircle,
  Loader2,
  User,
  Mail,
  MessageSquare,
  Briefcase,
  DollarSign
} from "lucide-react"

interface FormData {
  name: string
  email: string
  projectType: string
  budget: string
  message: string
}

const projectTypes = [
  { value: "mobile-app", label: "Mobile App (React Native)" },
  { value: "web-app", label: "Web Application (Next.js)" },
  { value: "ai-integration", label: "AI/LLM Integration" },
  { value: "full-stack", label: "Full-Stack Development" },
  { value: "consulting", label: "Technical Consulting" },
  { value: "other", label: "Other" },
]

const budgetRanges = [
  { value: "under-5k", label: "Under $5,000" },
  { value: "5k-10k", label: "$5,000 - $10,000" },
  { value: "10k-25k", label: "$10,000 - $25,000" },
  { value: "25k-50k", label: "$25,000 - $50,000" },
  { value: "50k-plus", label: "$50,000+" },
  { value: "not-sure", label: "Not Sure Yet" },
]

export function ContactForm() {
  useTranslation() // Keep hook for potential future translation
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setErrorMessage("")

    try {
      // For now, we'll use mailto as fallback
      // In production, you would integrate with Resend, SendGrid, or your own API
      const mailtoLink = `mailto:trananhducdev@gmail.com?subject=${encodeURIComponent(
        `[Portfolio Contact] ${formData.projectType} Project - ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\nBudget: ${formData.budget}\n\nMessage:\n${formData.message}`
      )}`
      
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000))
      
      // Open mailto link
      window.open(mailtoLink, "_blank")
      
      setStatus("success")
      setFormData({
        name: "",
        email: "",
        projectType: "",
        budget: "",
        message: "",
      })
      
      // Reset status after 5 seconds
      setTimeout(() => setStatus("idle"), 5000)
    } catch {
      setStatus("error")
      setErrorMessage("Failed to send message. Please try again or email directly.")
      setTimeout(() => setStatus("idle"), 5000)
    }
  }

  return (
    <Card className="p-6 bg-gradient-to-br from-slate-900/80 via-slate-800/50 to-slate-900/80 border-slate-700/50">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
          <MessageSquare className="w-4 h-4 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-white">Send a Message</h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
            <User className="w-4 h-4" />
            Your Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="John Doe"
            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
            <Mail className="w-4 h-4" />
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="john@example.com"
            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
          />
        </div>

        {/* Project Type */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
            <Briefcase className="w-4 h-4" />
            Project Type *
          </label>
          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all appearance-none cursor-pointer"
          >
            <option value="" disabled>Select project type...</option>
            {projectTypes.map((type) => (
              <option key={type.value} value={type.value} className="bg-slate-800">
                {type.label}
              </option>
            ))}
          </select>
        </div>

        {/* Budget */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
            <DollarSign className="w-4 h-4" />
            Budget Range
          </label>
          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all appearance-none cursor-pointer"
          >
            <option value="" disabled>Select budget range...</option>
            {budgetRanges.map((range) => (
              <option key={range.value} value={range.value} className="bg-slate-800">
                {range.label}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
            <MessageSquare className="w-4 h-4" />
            Project Details *
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            placeholder="Tell me about your project, goals, and timeline..."
            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={status === "loading"}
          className="w-full py-6 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-semibold transition-all"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" />
              Send Message
            </>
          )}
        </Button>

        {/* Status Messages */}
        <AnimatePresence mode="wait">
          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center gap-2 p-4 bg-green-900/30 border border-green-500/30 rounded-lg text-green-400"
            >
              <CheckCircle className="w-5 h-5" />
              <span>Message prepared! Your email client should open shortly.</span>
            </motion.div>
          )}
          {status === "error" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center gap-2 p-4 bg-red-900/30 border border-red-500/30 rounded-lg text-red-400"
            >
              <AlertCircle className="w-5 h-5" />
              <span>{errorMessage}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </Card>
  )
}
