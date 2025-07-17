"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useTranslation } from "react-i18next"
import { Download, FileText, Eye, ExternalLink } from "lucide-react"

export function MyResume() {
  const { t } = useTranslation()
  
  const handleDownloadTXT = () => {
    const link = document.createElement('a')
    link.href = '/files/TranAnhDuc-Comprehensive-CV-2025.txt'
    link.download = 'TranAnhDuc-Comprehensive-CV-2025.txt'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleViewHTML = () => {
    window.open('/files/TranAnhDuc-Modern-CV-2025.html', '_blank')
  }

  const handleDownloadPDF = () => {
    const link = document.createElement('a')
    link.href = '/files/TranAnhDuc-ATS-ReactNative-CV.pdf'
    link.download = 'TranAnhDuc-ReactNative-CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <Card className="h-full bg-transparent border-0 relative overflow-hidden">
      <CardContent className="p-6 h-full flex flex-col justify-between">
        {/* Header */}
        <div className="text-center space-y-3 mb-6">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            {t('resume.title')}
          </h3>
          <p className="text-sm text-gray-300">
            {t('resume.description')}
          </p>
          <div className="flex flex-wrap justify-center gap-1">
            <Badge className="bg-green-500/20 text-green-300 border-green-500/30 text-xs">
              {t('resume.badges.atsOptimized')}
            </Badge>
            <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 text-xs">
              {t('resume.badges.updated2025')}
            </Badge>
            <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 text-xs">
              {t('resume.badges.aiFocus')}
            </Badge>
          </div>
        </div>

        {/* Download Options - Compact Grid */}
        <div className="grid grid-cols-1 gap-3 mb-6">
          {/* PDF Version */}
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 hover:bg-red-500/20 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center">
                  <FileText className="w-4 h-4 text-red-400" />
                </div>
                <div>
                  <div className="text-sm font-medium text-red-400">{t('resume.versions.pdfVersion')}</div>
                  <div className="text-xs text-gray-400">{t('resume.descriptions.professionalFormat')}</div>
                </div>
              </div>
              <Button 
                onClick={handleDownloadPDF}
                size="sm"
                className="bg-red-500 hover:bg-red-600 text-white text-xs h-8"
              >
                <Download className="w-3 h-3 mr-1" />
                PDF
              </Button>
            </div>
          </div>

          {/* HTML Version */}
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3 hover:bg-blue-500/20 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Eye className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <div className="text-sm font-medium text-blue-400">{t('resume.versions.htmlVersion')}</div>
                  <div className="text-xs text-gray-400">{t('resume.descriptions.interactiveWebVersion')}</div>
                </div>
              </div>
              <Button 
                onClick={handleViewHTML}
                size="sm"
                className="bg-blue-500 hover:bg-blue-600 text-white text-xs h-8"
              >
                <ExternalLink className="w-3 h-3 mr-1" />
                {t('resume.actions.viewHTML')}
              </Button>
            </div>
          </div>

          {/* Text Version */}
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 hover:bg-green-500/20 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <FileText className="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <div className="text-sm font-medium text-green-400">{t('resume.versions.atsText')}</div>
                  <div className="text-xs text-gray-400">{t('resume.descriptions.atsOptimized')}</div>
                </div>
              </div>
              <Button 
                onClick={handleDownloadTXT}
                size="sm"
                className="bg-green-500 hover:bg-green-600 text-white text-xs h-8"
              >
                <Download className="w-3 h-3 mr-1" />
                TXT
              </Button>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="space-y-4">
          <div className="text-center">
            <h4 className="text-sm font-semibold text-gray-300 mb-3">{t('resume.metrics.title')}</h4>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            {/* Years Experience */}
            <div className="relative group">
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 border border-purple-500/30 rounded-xl p-3 hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                <div className="text-center space-y-1">
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">
                    4+
                  </div>
                  <div className="text-xs text-gray-400 font-medium">{t('resume.metrics.yearsExp')}</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Projects */}
            <div className="relative group">
              <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 border border-cyan-500/30 rounded-xl p-3 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                <div className="text-center space-y-1">
                  <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
                    50+
                  </div>
                  <div className="text-xs text-gray-400 font-medium">{t('resume.metrics.projects')}</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Users */}
            <div className="relative group">
              <div className="bg-gradient-to-br from-green-500/20 to-green-600/10 border border-green-500/30 rounded-xl p-3 hover:border-green-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20">
                <div className="text-center space-y-1">
                  <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
                    2M+
                  </div>
                  <div className="text-xs text-gray-400 font-medium">{t('resume.metrics.users')}</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* AI Apps */}
            <div className="relative group">
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/30 rounded-xl p-3 hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                <div className="text-center space-y-1">
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                    8+
                  </div>
                  <div className="text-xs text-gray-400 font-medium">{t('resume.metrics.aiApps')}</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>

          {/* Achievement Badges */}
          <div className="flex flex-wrap justify-center gap-1 pt-2">
            <div className="bg-gradient-to-r from-emerald-500/20 to-emerald-600/10 border border-emerald-500/30 rounded-full px-2 py-1">
              <span className="text-xs text-emerald-300 font-medium">{t('resume.tags.expert')}</span>
            </div>
            <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/10 border border-orange-500/30 rounded-full px-2 py-1">
              <span className="text-xs text-orange-300 font-medium">{t('resume.tags.aiFocus')}</span>
            </div>
            <div className="bg-gradient-to-r from-pink-500/20 to-pink-600/10 border border-pink-500/30 rounded-full px-2 py-1">
              <span className="text-xs text-pink-300 font-medium">{t('resume.tags.global')}</span>
            </div>
          </div>
        </div>

        {/* Background Effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-4 right-4 w-16 h-16 bg-purple-500/5 rounded-full blur-xl"></div>
          <div className="absolute bottom-4 left-4 w-12 h-12 bg-cyan-500/5 rounded-full blur-xl"></div>
        </div>
      </CardContent>
    </Card>
  )
}
