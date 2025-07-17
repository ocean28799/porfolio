"use client"

import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
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
    <div className="space-y-12">
      {/* Social Proof */}
      <div className="text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-3xl font-bold">{t('contact.readyToBuild')}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t('contact.collaboration')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
          {SOCIAL_PROOF.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-4 text-center bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/50 border-slate-700/50 hover:border-slate-600/50 transition-all">
                <div className="flex items-center justify-center mb-2 text-emerald-400">
                  {item.icon}
                </div>
                <div className="text-2xl font-bold text-slate-100">{item.metric}</div>
                <div className="text-sm text-slate-400">{item.label}</div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Methods */}
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Quick Contact */}
          <Card className="p-6 bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/50 border-slate-700/50">
            <h3 className="text-xl font-semibold mb-4 text-slate-100">{t('contact.startConversation')}</h3>
            <div className="space-y-4">                <Button
                  size="lg"
                  className="w-full justify-start"
                  onClick={() => window.open('mailto:ocean28799@gmail.com', '_blank')}
                >
                  <Mail className="w-5 h-5 mr-3" />
                  ocean28799@gmail.com
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full justify-start"
                onClick={() => window.open('https://calendly.com/ocean28799/30min', '_blank')}
              >
                <MessageCircle className="w-5 h-5 mr-3" />
                {t('contact.scheduleCall')}
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full justify-start"
                onClick={() => window.open('https://calendly.com/ocean28799/30min', '_blank')}
              >
                <Calendar className="w-5 h-5 mr-3" />
                {t('contact.bookConsultation')}
              </Button>
            </div>
          </Card>

          {/* Social Links */}
          <Card className="p-6 bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/50 border-slate-700/50">
            <h3 className="text-xl font-semibold mb-4 text-slate-100">{t('contact.connectFollow')}</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">                <Button
                  variant="outline"
                  className="justify-start"
                  onClick={() => window.open('https://github.com/ocean28799', '_blank')}
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
                <Button 
                  variant="outline" 
                  className="justify-start"
                  onClick={() => window.open('https://www.linkedin.com/in/trananhduc99/', '_blank')}
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
              </div>
              
              <div className="pt-4 border-t border-slate-700">
                <p className="text-sm text-slate-400 mb-3">
                  {t('contact.quickResponse')}
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-slate-700/50 text-slate-300">{t('contact.availableForProjects')}</Badge>
                  <Badge variant="outline" className="border-slate-600 text-slate-400">{t('contact.remoteFriendly')}</Badge>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Final CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center space-y-4"
      >
        <h3 className="text-xl font-semibold">{t('contact.finalCTA.title')}</h3>
        <p className="text-muted-foreground">
          {t('contact.finalCTA.description')}
        </p>
        <Button 
          size="lg" 
          className="px-8"
          onClick={() => window.open('https://calendly.com/ocean28799/30min', '_blank')}
        >
          {t('contact.finalCTA.button')}
          <Calendar className="w-4 h-4 ml-2" />
        </Button>
      </motion.div>
    </div>
  )
}
