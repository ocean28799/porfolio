import { FullScreen } from "@/components/full-screen";
import { MyInformation } from "@/components/sections/about-me";
import { MyUniverse } from "@/components/sections/my-universe";
import { PerformanceMetrics } from "@/components/sections/performance-metrics";
import { ContactCTA } from "@/components/sections/contact-cta";
import { ModernHeroSection } from "@/components/sections/modern-hero-section";
import { AdvancedSkillsVisualization } from "@/components/sections/advanced-skills-visualization";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { EnhancedProjectShowcase } from "@/components/sections/enhanced-project-showcase-fixed";
import { PROJECTS } from "@/lib/constants/projects";

export default function Home() {
  return (
    <div className="space-y-0 pt-20">
      {/* Modern Hero Section */}
      <ModernHeroSection />
      
      {/* Original Universe Section - Keep as artistic showcase */}
      <FullScreen className="w-full xl:w-[85%] mx-auto">
        <MyUniverse />
      </FullScreen>

      <FullScreen className="w-full xl:w-[85%] mx-auto flex flex-col gap-6">
        <MyInformation />
      </FullScreen>

      {/* Advanced Skills Visualization */}
      <FullScreen className="w-full xl:w-[85%] mx-auto">
        <AdvancedSkillsVisualization />
      </FullScreen>

      {/* Enhanced Project Showcase */}
      <FullScreen className="w-full xl:w-[85%] mx-auto">
        <EnhancedProjectShowcase projects={PROJECTS.slice(0, 6)} />
      </FullScreen>

      <FullScreen className="w-full xl:w-[85%] mx-auto">
        <PerformanceMetrics />
      </FullScreen>

      {/* Testimonials Section */}
      <FullScreen className="w-full xl:w-[85%] mx-auto">
        <TestimonialsSection />
      </FullScreen>

      <FullScreen className="w-full xl:w-[85%] mx-auto">
        <ContactCTA />
      </FullScreen>

      {/* <Resume /> */}
    </div>
  );
}
