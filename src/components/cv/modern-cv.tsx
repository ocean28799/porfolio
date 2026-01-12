'use client';

import { useTranslation } from 'react-i18next';
import { Mail, Phone, Globe, Linkedin, Github, MapPin, Download, Printer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from '@/components/language-switcher';

interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  location: string;
  achievements: string[];
}

interface SkillCategory {
  name: string;
  items: string[];
}

interface ProjectItem {
  name: string;
  description: string;
  tech: string;
  impact: string;
}

interface EducationItem {
  degree: string;
  school: string;
  period: string;
  location: string;
  honors: string;
}

interface LanguageItem {
  name: string;
  level: string;
}

export function ModernCV() {
  const { t } = useTranslation();

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = () => {
    window.print();
  };

  // Helper to safely get arrays from translations
  const getExperienceItems = (): ExperienceItem[] => {
    const items = t('cv.experience.items', { returnObjects: true });
    return Array.isArray(items) ? items as ExperienceItem[] : [];
  };

  const getSkillCategories = (): SkillCategory[] => {
    const items = t('cv.skills.categories', { returnObjects: true });
    return Array.isArray(items) ? items as SkillCategory[] : [];
  };

  const getProjectItems = (): ProjectItem[] => {
    const items = t('cv.projects.items', { returnObjects: true });
    return Array.isArray(items) ? items as ProjectItem[] : [];
  };

  const getEducationItems = (): EducationItem[] => {
    const items = t('cv.education.items', { returnObjects: true });
    return Array.isArray(items) ? items as EducationItem[] : [];
  };

  const getLanguageItems = (): LanguageItem[] => {
    const items = t('cv.languages.items', { returnObjects: true });
    return Array.isArray(items) ? items as LanguageItem[] : [];
  };

  const getCertifications = (): string[] => {
    const items = t('cv.certifications.items', { returnObjects: true });
    return Array.isArray(items) ? items as string[] : [];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-50 to-gray-100 py-8 px-4 print:p-0 print:bg-white">
      {/* Action Bar - Hidden on Print */}
      <div className="max-w-[210mm] mx-auto mb-6 flex items-center justify-between print:hidden">
        <div className="flex gap-3">
          <Button 
            onClick={handleDownloadPDF}
            className="gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Download className="h-4 w-4" />
            {t('cv.downloadPDF')}
          </Button>
          <Button 
            onClick={handlePrint}
            variant="outline"
            className="gap-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
          >
            <Printer className="h-4 w-4" />
            {t('cv.printCV')}
          </Button>
        </div>
        <LanguageSwitcher />
      </div>

      {/* A4 Page Container with Paper Effect */}
      <div className="max-w-[210mm] min-h-[297mm] mx-auto bg-white shadow-[0_0_40px_rgba(0,0,0,0.1)] print:shadow-none rounded-sm print:rounded-none relative overflow-hidden">
        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/10 to-transparent print:hidden" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-500/10 to-transparent print:hidden" />
        
        {/* Header Section */}
        <div className="relative bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 text-white p-8 print:p-6 overflow-hidden">
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-10 print:hidden" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
          
          <div className="relative space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-4xl print:text-3xl font-bold tracking-tight bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent print:text-white">
                  {t('cv.header.name')}
                </h1>
                <p className="text-xl print:text-lg font-medium text-blue-300 print:text-blue-200 mt-2">
                  {t('cv.header.title')}
                </p>
              </div>
              {/* QR Code placeholder area */}
              <div className="hidden print:hidden w-20 h-20 bg-white/10 rounded-lg" />
            </div>
            <p className="text-sm text-slate-300 print:text-slate-400 max-w-lg">
              {t('cv.header.tagline')}
            </p>
          </div>

          {/* Contact Info - Modern Pill Style */}
          <div className="mt-6 flex flex-wrap gap-3 text-sm print:text-xs">
            <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
              <MapPin className="h-3.5 w-3.5 flex-shrink-0 text-blue-300" />
              <span>{t('cv.header.location')}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
              <Mail className="h-3.5 w-3.5 flex-shrink-0 text-blue-300" />
              <a href={`mailto:${t('cv.header.email')}`} className="hover:text-blue-200 transition-colors">
                {t('cv.header.email')}
              </a>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
              <Phone className="h-3.5 w-3.5 flex-shrink-0 text-blue-300" />
              <span>{t('cv.header.phone')}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
              <Globe className="h-3.5 w-3.5 flex-shrink-0 text-blue-300" />
              <a href={`https://${t('cv.header.website')}`} target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition-colors">
                {t('cv.header.website')}
              </a>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
              <Linkedin className="h-3.5 w-3.5 flex-shrink-0 text-blue-300" />
              <a href={`https://${t('cv.header.linkedin')}`} target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition-colors">
                LinkedIn
              </a>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
              <Github className="h-3.5 w-3.5 flex-shrink-0 text-blue-300" />
              <a href={`https://${t('cv.header.github')}`} target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 print:p-6 space-y-6 print:space-y-4 relative">
          {/* Profile Summary */}
          <section>
            <h2 className="text-xl print:text-lg font-bold text-slate-800 mb-3 pb-2 flex items-center gap-3">
              <span className="w-1.5 h-6 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full" />
              {t('cv.profile.title')}
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed pl-5">
              {t('cv.profile.content')}
            </p>
          </section>

          {/* Professional Experience */}
          <section>
            <h2 className="text-xl print:text-lg font-bold text-slate-800 mb-4 pb-2 flex items-center gap-3">
              <span className="w-1.5 h-6 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full" />
              {t('cv.experience.title')}
            </h2>
            <div className="space-y-5 print:space-y-4 pl-5">
              {getExperienceItems().map((item, index) => (
                <div key={index} className="space-y-2 relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-5 top-2 w-2 h-2 bg-blue-500 rounded-full" />
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-base print:text-sm font-semibold text-slate-800">
                        {item.position}
                      </h3>
                      <p className="text-sm print:text-xs font-medium text-blue-600">
                        {item.company}
                      </p>
                    </div>
                    <div className="text-right text-xs print:text-[10px] text-gray-500 bg-slate-50 px-2 py-1 rounded">
                      <p className="font-medium">{item.period}</p>
                      <p>{item.location}</p>
                    </div>
                  </div>
                  <ul className="list-disc list-outside ml-4 space-y-1 text-sm print:text-xs text-gray-600">
                    {item.achievements.map((achievement: string, achIndex: number) => (
                      <li key={achIndex}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Technical Skills */}
          <section className="break-inside-avoid">
            <h2 className="text-xl print:text-lg font-bold text-slate-800 mb-4 pb-2 flex items-center gap-3">
              <span className="w-1.5 h-6 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full" />
              {t('cv.skills.title')}
            </h2>
            <div className="grid grid-cols-2 gap-4 print:gap-3 pl-5">
              {getSkillCategories().map((category, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-sm print:text-xs font-semibold text-slate-700">
                    {category.name}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {category.items.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2.5 py-1 print:px-2 print:py-0.5 bg-gradient-to-r from-slate-50 to-blue-50 text-slate-700 border border-slate-200 rounded-md text-xs font-medium hover:border-blue-300 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Featured Projects */}
          <section className="break-inside-avoid">
            <h2 className="text-xl print:text-lg font-bold text-slate-800 mb-4 pb-2 flex items-center gap-3">
              <span className="w-1.5 h-6 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full" />
              {t('cv.projects.title')}
            </h2>
            <div className="grid grid-cols-3 gap-4 print:gap-3 pl-5">
              {getProjectItems().map((project, index) => (
                <div key={index} className="p-3 bg-slate-50 rounded-lg border border-slate-100 space-y-1.5">
                  <h3 className="text-sm print:text-xs font-semibold text-slate-800">
                    {project.name}
                  </h3>
                  <p className="text-xs print:text-[10px] text-gray-600 line-clamp-2">
                    {project.description}
                  </p>
                  <p className="text-[10px] text-gray-500">
                    {project.tech}
                  </p>
                  <p className="text-xs text-blue-600 font-medium">
                    {project.impact}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Education and Certifications Grid */}
          <div className="grid grid-cols-2 gap-6 print:gap-4">
            {/* Education */}
            <section className="break-inside-avoid">
              <h2 className="text-xl print:text-lg font-bold text-slate-800 mb-3 pb-2 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full" />
                {t('cv.education.title')}
              </h2>
              <div className="space-y-3 pl-5">
                {getEducationItems().map((edu, index) => (
                  <div key={index} className="space-y-1">
                    <h3 className="text-sm print:text-xs font-semibold text-slate-800">
                      {edu.degree}
                    </h3>
                    <p className="text-xs print:text-[10px] font-medium text-blue-600">
                      {edu.school}
                    </p>
                    <p className="text-[10px] text-gray-500">{edu.period} • {edu.location}</p>
                    <p className="text-[10px] text-slate-600 italic">{edu.honors}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Languages */}
            <section className="break-inside-avoid">
              <h2 className="text-xl print:text-lg font-bold text-slate-800 mb-3 pb-2 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full" />
                {t('cv.languages.title')}
              </h2>
              <div className="space-y-2 pl-5">
                {getLanguageItems().map((lang, index) => (
                  <div key={index} className="flex justify-between items-center py-1 border-b border-slate-100 last:border-0">
                    <span className="text-sm print:text-xs font-medium text-slate-700">
                      {lang.name}
                    </span>
                    <span className="text-xs text-slate-500 bg-slate-50 px-2 py-0.5 rounded">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Certifications */}
          <section className="break-inside-avoid">
            <h2 className="text-xl print:text-lg font-bold text-slate-800 mb-3 pb-2 flex items-center gap-3">
              <span className="w-1.5 h-6 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full" />
              {t('cv.certifications.title')}
            </h2>
            <div className="flex flex-wrap gap-2 pl-5">
              {getCertifications().map((cert, index) => (
                <span 
                  key={index} 
                  className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-amber-50 to-yellow-50 text-amber-800 border border-amber-200 rounded-full text-xs font-medium"
                >
                  <span className="mr-1.5">🏆</span>
                  {cert}
                </span>
              ))}
            </div>
          </section>
        </div>
        
        {/* Footer */}
        <div className="px-8 py-4 bg-slate-50 border-t border-slate-100 text-center print:hidden">
          <p className="text-xs text-slate-500">
            Last updated: January 2026 • Generated from{' '}
            <a href="https://tranhanhduc.dev" className="text-blue-600 hover:underline">
              tranhanhduc.dev
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
