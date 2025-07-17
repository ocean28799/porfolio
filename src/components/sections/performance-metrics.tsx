"use client"

import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Users, Server } from "lucide-react"

export function PerformanceMetrics() {
  const { t } = useTranslation()
  
  const PROJECT_IMPACT = [
    {
      title: t('performance.projects.aiAssistantApp'),
      users: "50K+",
      engagement: "85%",
      retention: "72%",
      rating: "4.8/5",
      downloads: "2M+"
    },
    {
      title: "E-commerce Platform",
      users: "25K+", 
      engagement: "92%",
      retention: "68%",
      rating: "4.9/5",
      revenue: "$2.5M+"
    },
    {
      title: t('performance.projects.healthcareApp'),
      users: "15K+",
      engagement: "88%",
      retention: "75%",
      rating: "4.7/5",
      compliance: t('performance.compliance.hipaa')
    }
  ]
  
  return (
    <div className="space-y-8">
      {/* Project Impact */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-center">{t('performance.title')}</h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          {PROJECT_IMPACT.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 text-center space-y-4 bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/50 border-slate-700/50 hover:border-slate-600/50 transition-all">
                <h4 className="font-semibold text-lg text-slate-100">{project.title}</h4>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="space-y-1">
                    <div className="flex items-center justify-center gap-1">
                      <Users className="w-4 h-4 text-emerald-400" />
                      <span className="font-medium text-slate-200">{project.users}</span>
                    </div>
                    <p className="text-slate-400">{t('performance.activeUsers')}</p>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex items-center justify-center gap-1">
                      <TrendingUp className="w-4 h-4 text-emerald-400" />
                      <span className="font-medium text-slate-200">{project.engagement}</span>
                    </div>
                    <p className="text-slate-400">{t('performance.engagement')}</p>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex items-center justify-center gap-1">
                      <Server className="w-4 h-4 text-emerald-400" />
                      <span className="font-medium text-slate-200">{project.retention}</span>
                    </div>
                    <p className="text-slate-400">{t('performance.retention')}</p>
                  </div>
                  
                  <div className="space-y-1">
                    <span className="font-medium text-emerald-400">{project.rating}</span>
                    <p className="text-slate-400">{t('performance.rating')}</p>
                  </div>
                </div>
                
                {project.downloads && (
                  <Badge variant="outline" className="w-full border-slate-600 text-slate-300 bg-slate-800/30">
                    {project.downloads} {t('performance.downloads')}
                  </Badge>
                )}
                {project.revenue && (
                  <Badge variant="outline" className="w-full border-emerald-400/50 text-emerald-400 bg-emerald-400/10">
                    {project.revenue} {t('performance.revenueGenerated')}
                  </Badge>
                )}
                {project.compliance && (
                  <Badge variant="outline" className="w-full border-slate-600 text-slate-300 bg-slate-800/30">
                    {project.compliance} {t('performance.compliant')}
                  </Badge>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
