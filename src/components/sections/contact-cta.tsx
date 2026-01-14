"use client"

import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ContactForm } from "@/components/contact/contact-form"
import { 
  Mail, 
  MessageCircle, 
  Calendar, 
  Github, 
  Linkedin, 
  Star,
  Users,
  Download
} from "lucide-react"

export function ContactCTA() {
  const { t } = useTranslation()
  
  const SOCIAL_PROOF = [
    {
      metric: "50K+",
      label: t('contact.socialProof.downloads'),
      icon: <Download className="w-5 h-5" />
    },
    {
      metric: "4.8/5",
      label: t('contact.socialProof.rating'),
      icon: <Star className="w-5 h-5" />
    },
    {
      metric: "25+",
      label: t('contact.socialProof.clients'),
      icon: <Users className="w-5 h-5" />
    }
  ]

  return (
    <div className="space-y-8 sm:space-y-12 px-4 sm:px-0">
      {/* Social Proof */}
      <div className="text-center space-y-6 sm:space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-3 sm:space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">{t('contact.readyToBuild')}</h2>
          <p className="text-slate-600 dark:text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            {t('contact.collaboration')}
          </p>
        </motion.div>

        <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-2xl mx-auto">
          {SOCIAL_PROOF.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-3 sm:p-4 text-center bg-gradient-to-br from-emerald-50 via-white to-blue-50 dark:from-emerald-950/30 dark:via-slate-900/50 dark:to-blue-950/30 border-emerald-200/50 dark:border-emerald-700/30 hover:border-emerald-500/70 dark:hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10 dark:hover:shadow-emerald-500/20 transition-all shadow-sm backdrop-blur-sm">
                <div className="flex items-center justify-center mb-1 sm:mb-2 text-emerald-500 dark:text-emerald-400">
                  {item.icon}
                </div>
                <div className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">{item.metric}</div>
                <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">{item.label}</div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Methods */}
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Contact Form */}
          <ContactForm />

          {/* Quick Contact & Social Links */}
          <div className="space-y-4 sm:space-y-6">
            {/* Quick Contact */}
            <Card className="p-4 sm:p-6 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950/30 dark:via-slate-900/50 dark:to-purple-950/30 border-blue-200/50 dark:border-blue-700/30 hover:border-blue-500/50 dark:hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-blue-500/20 transition-all shadow-sm backdrop-blur-sm">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-slate-900 dark:text-slate-100">{t('contact.startConversation')}</h3>
              <div className="space-y-3 sm:space-y-4">
                <Button
                  size="lg"
                  className="w-full justify-start text-sm sm:text-base"
                  onClick={() => window.open('mailto:trananhducdev@gmail.com', '_blank')}
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0" />
                  <span className="truncate">trananhducdev@gmail.com</span>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full justify-start text-sm sm:text-base border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                  onClick={() => window.open('https://calendly.com/ocean28799/30min', '_blank')}
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0" />
                  {t('contact.scheduleCall')}
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full justify-start text-sm sm:text-base border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                  onClick={() => window.open('https://calendly.com/ocean28799/30min', '_blank')}
                >
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0" />
                  {t('contact.bookConsultation')}
                </Button>
              </div>
            </Card>

            {/* Social Links */}
            <Card className="p-4 sm:p-6 bg-white dark:bg-gradient-to-br dark:from-slate-900/50 dark:via-slate-800/30 dark:to-slate-900/50 border-slate-200 dark:border-slate-700/50 shadow-sm dark:shadow-none">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-slate-900 dark:text-slate-100">{t('contact.connectFollow')}</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    variant="outline"
                    className="justify-start border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                    onClick={() => window.open('https://github.com/ocean28799', '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                  <Button 
                    variant="outline" 
                    className="justify-start border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                    onClick={() => window.open('https://www.linkedin.com/in/trananhduc99/', '_blank')}
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                </div>
                
                <div className="pt-3 sm:pt-4 border-t border-slate-200 dark:border-slate-700">
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-3">
                    {t('contact.quickResponse')}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 text-xs">{t('contact.availableForProjects')}</Badge>
                    <Badge variant="outline" className="border-slate-300 dark:border-slate-600 text-slate-500 dark:text-slate-400 text-xs">{t('contact.remoteFriendly')}</Badge>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center space-y-3 sm:space-y-4"
      >
        <h3 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white">{t('contact.finalCTA.title')}</h3>
        <p className="text-slate-600 dark:text-muted-foreground text-sm sm:text-base">
          {t('contact.finalCTA.description')}
        </p>
        <Button 
          size="lg" 
          className="px-6 sm:px-8"
          onClick={() => window.open('https://calendly.com/ocean28799/30min', '_blank')}
        >
          {t('contact.finalCTA.button')}
          <Calendar className="w-4 h-4 ml-2" />
        </Button>
      </motion.div>
    </div>
  )
}
