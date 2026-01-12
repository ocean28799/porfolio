import { Metadata } from "next"
import { Heart, Coffee, Star, Github, ExternalLink, Zap, Code2, Rocket, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Sponsors | Tran Anh Duc - Senior React Native & AI Integration Specialist",
  description: "Support Tran Anh Duc's open source work and development projects",
}

export default function Page() {
  const sponsorTiers = [
    {
      name: "Coffee Supporter",
      price: "$5/month",
      icon: Coffee,
      color: "from-amber-500 to-orange-500",
      features: ["Shoutout on socials", "Early access to articles", "Supporter badge"]
    },
    {
      name: "Star Sponsor",
      price: "$15/month",
      icon: Star,
      color: "from-emerald-500 to-teal-500",
      popular: true,
      features: ["All Coffee benefits", "Monthly newsletter", "Code snippets access", "Priority support"]
    },
    {
      name: "Premium Partner",
      price: "$50/month",
      icon: Rocket,
      color: "from-purple-500 to-pink-500",
      features: ["All Star benefits", "1-on-1 monthly call", "Custom code reviews", "Featured on website"]
    }
  ]

  const impactStats = [
    { label: "Open Source Projects", value: "10+", icon: Code2 },
    { label: "GitHub Stars", value: "500+", icon: Star },
    { label: "Developers Helped", value: "1000+", icon: Users },
    { label: "npm Downloads", value: "50K+", icon: Zap }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 dark:from-slate-900 via-white dark:via-slate-900 to-slate-100 dark:to-slate-800 text-slate-900 dark:text-white pt-20">
      {/* Optimized Static Background - no blur for performance */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ willChange: 'transform' }}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(236,72,153,0.08),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(236,72,153,0.05),transparent)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_100%,rgba(168,85,247,0.06),transparent)] dark:bg-[radial-gradient(ellipse_60%_40%_at_80%_100%,rgba(168,85,247,0.04),transparent)]"></div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-6xl mx-auto py-8 sm:py-12 px-4 sm:px-6 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-sm border border-pink-500/30 rounded-full">
            <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-pink-600 dark:text-pink-400" />
            <span className="text-pink-700 dark:text-pink-300 text-xs sm:text-sm font-medium">Support Open Source</span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 dark:from-white via-pink-700 dark:via-pink-200 to-purple-700 dark:to-purple-200 bg-clip-text text-transparent leading-tight mb-4 sm:mb-6 px-2">
            Become a Sponsor
          </h1>
          
          <p className="text-base sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4">
            Your support helps me create more open-source tools, educational content, and innovative solutions for the developer community.
          </p>
          
          {/* Impact Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto mb-8 sm:mb-12">
            {impactStats.map((stat) => (
              <div key={stat.label} className="p-4 sm:p-6 bg-white dark:bg-slate-800/30 backdrop-blur-sm border border-slate-200 dark:border-slate-700/50 rounded-xl">
                <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 dark:text-emerald-400 mx-auto mb-2" />
                <div className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</div>
                <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Sponsor Tiers */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl font-bold text-center text-slate-900 dark:text-white mb-6 sm:mb-8">
            Choose Your Support Level
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {sponsorTiers.map((tier) => (
              <div 
                key={tier.name}
                className={`relative p-5 sm:p-6 bg-white dark:bg-slate-800/30 backdrop-blur-sm border rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                  tier.popular 
                    ? 'border-emerald-500 shadow-emerald-500/20 shadow-lg' 
                    : 'border-slate-200 dark:border-slate-700/50 hover:border-emerald-500/50'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-medium rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-r ${tier.color} flex items-center justify-center mb-4`}>
                  <tier.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-1">{tier.name}</h3>
                <div className="text-2xl sm:text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-4">{tier.price}</div>
                
                <ul className="space-y-2 mb-6">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                      <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a
                  href="https://github.com/sponsors/ocean28799"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-medium transition-all ${
                    tier.popular
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-600 hover:to-teal-600'
                      : 'bg-slate-100 dark:bg-slate-700/50 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  <Heart className="w-4 h-4" />
                  <span>Sponsor</span>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* GitHub Sponsors Card */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl font-bold text-center text-slate-900 dark:text-white mb-6 sm:mb-8">
            Quick Sponsor via GitHub
          </h2>
          
          <div className="max-w-md mx-auto p-4 sm:p-6 bg-white dark:bg-slate-800/30 backdrop-blur-sm border border-slate-200 dark:border-slate-700/50 rounded-xl">
            <div className="aspect-[2/1] w-full overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700/50">
              <iframe
                src="https://github.com/sponsors/ocean28799/card"
                title="Sponsor ocean28799"
                className="w-full h-full"
                style={{ border: "0", minHeight: "200px" }}
              ></iframe>
            </div>
            
            <a
              href="https://github.com/sponsors/ocean28799"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#24292f] hover:bg-[#333] text-white rounded-lg font-medium transition-all"
            >
              <Github className="w-4 h-4" />
              <span>View on GitHub Sponsors</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Why Sponsor Section */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">
            Why Your Support Matters
          </h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 text-sm sm:text-base">
            As an independent developer, your sponsorship directly enables me to dedicate more time to creating valuable open-source tools, writing educational content, and helping fellow developers grow. Every contribution, no matter the size, makes a meaningful impact.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/ocean28799"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800/50 text-slate-900 dark:text-white rounded-lg font-medium hover:bg-slate-200 dark:hover:bg-slate-700/50 transition-all text-sm"
            >
              <Github className="w-4 h-4" />
              <span>Follow on GitHub</span>
            </a>
            <a
              href="https://github.com/sponsors/ocean28799"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg font-medium hover:from-pink-600 hover:to-purple-600 transition-all text-sm"
            >
              <Heart className="w-4 h-4" />
              <span>Become a Sponsor</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
