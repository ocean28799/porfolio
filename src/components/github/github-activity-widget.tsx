"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { 
  Github, 
  GitCommit, 
  GitPullRequest, 
  Star, 
  GitFork,
  ExternalLink,
  Code,
  Activity
} from "lucide-react"
import Link from "next/link"

// Static data for GitHub stats (in production, you'd fetch this from GitHub API)
const githubStats = {
  username: "ocean28799",
  publicRepos: 45,
  totalStars: 120,
  totalForks: 35,
  totalCommits: 2500,
  pullRequests: 180,
  contributions2024: 850,
  topLanguages: [
    { name: "TypeScript", percentage: 45, color: "#3178C6" },
    { name: "JavaScript", percentage: 25, color: "#F7DF1E" },
    { name: "Python", percentage: 15, color: "#3776AB" },
    { name: "Dart", percentage: 10, color: "#0175C2" },
    { name: "Other", percentage: 5, color: "#6B7280" },
  ],
  recentRepos: [
    {
      name: "ai-assistant-app",
      description: "AI-powered virtual assistant with React Native",
      stars: 45,
      forks: 12,
      language: "TypeScript",
      languageColor: "#3178C6",
    },
    {
      name: "nextjs-portfolio",
      description: "Modern portfolio website with Next.js 15",
      stars: 32,
      forks: 8,
      language: "TypeScript",
      languageColor: "#3178C6",
    },
    {
      name: "langchain-chatbot",
      description: "RAG-powered chatbot using LangChain",
      stars: 28,
      forks: 6,
      language: "Python",
      languageColor: "#3776AB",
    },
  ],
}

// Generate mock contribution graph data
const generateContributionData = () => {
  const weeks = 12
  const data = []
  for (let w = 0; w < weeks; w++) {
    const week = []
    for (let d = 0; d < 7; d++) {
      // Random contribution level 0-4
      week.push(Math.floor(Math.random() * 5))
    }
    data.push(week)
  }
  return data
}

const contributionColors = [
  "bg-slate-800", // 0 contributions
  "bg-green-900", // 1-2 contributions
  "bg-green-700", // 3-5 contributions
  "bg-green-500", // 6-10 contributions
  "bg-green-400", // 10+ contributions
]

export function GitHubActivityWidget() {
  const contributions = generateContributionData()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center">
            <Github className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">GitHub Activity</h3>
            <p className="text-sm text-slate-400">@{githubStats.username}</p>
          </div>
        </div>
        <Link
          href={`https://github.com/${githubStats.username}`}
          target="_blank"
          className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-sm text-slate-300 transition-colors"
        >
          View Profile
          <ExternalLink className="w-4 h-4" />
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: Code, label: "Repositories", value: githubStats.publicRepos, color: "text-blue-400" },
          { icon: Star, label: "Total Stars", value: githubStats.totalStars, color: "text-yellow-400" },
          { icon: GitCommit, label: "Commits", value: `${(githubStats.totalCommits / 1000).toFixed(1)}K`, color: "text-green-400" },
          { icon: GitPullRequest, label: "Pull Requests", value: githubStats.pullRequests, color: "text-purple-400" },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-4 bg-slate-800/50 border-slate-700/50 text-center">
              <stat.icon className={`w-5 h-5 mx-auto mb-2 ${stat.color}`} />
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-slate-400">{stat.label}</div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Contribution Graph */}
      <Card className="p-4 bg-slate-800/50 border-slate-700/50">
        <div className="flex items-center gap-2 mb-4">
          <Activity className="w-4 h-4 text-green-400" />
          <span className="text-sm font-medium text-white">{githubStats.contributions2024} contributions in the last year</span>
        </div>
        <div className="flex gap-1 overflow-x-auto pb-2">
          {contributions.map((week, weekIndex) => (
            <div key={weekIndex} className="flex flex-col gap-1">
              {week.map((level, dayIndex) => (
                <motion.div
                  key={dayIndex}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: weekIndex * 0.02 + dayIndex * 0.01 }}
                  className={`w-3 h-3 rounded-sm ${contributionColors[level]}`}
                  title={`${level} contributions`}
                />
              ))}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-end gap-2 mt-2 text-xs text-slate-500">
          <span>Less</span>
          {contributionColors.map((color, index) => (
            <div key={index} className={`w-3 h-3 rounded-sm ${color}`} />
          ))}
          <span>More</span>
        </div>
      </Card>

      {/* Top Languages */}
      <Card className="p-4 bg-slate-800/50 border-slate-700/50">
        <h4 className="text-sm font-medium text-white mb-3">Top Languages</h4>
        <div className="space-y-3">
          {githubStats.topLanguages.map((lang, index) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: lang.color }}
                  />
                  <span className="text-sm text-slate-300">{lang.name}</span>
                </div>
                <span className="text-sm text-slate-400">{lang.percentage}%</span>
              </div>
              <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${lang.percentage}%` }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="h-full rounded-full"
                  style={{ backgroundColor: lang.color }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </Card>

      {/* Recent Repositories */}
      <Card className="p-4 bg-slate-800/50 border-slate-700/50">
        <h4 className="text-sm font-medium text-white mb-3">Recent Repositories</h4>
        <div className="space-y-3">
          {githubStats.recentRepos.map((repo, index) => (
            <motion.a
              key={repo.name}
              href={`https://github.com/${githubStats.username}/${repo.name}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="block p-3 bg-slate-900/50 hover:bg-slate-900 border border-slate-700/50 hover:border-slate-600 rounded-lg transition-all group"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Code className="w-4 h-4 text-blue-400" />
                    <span className="font-medium text-white group-hover:text-blue-400 transition-colors">
                      {repo.name}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 line-clamp-1">{repo.description}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
              </div>
              <div className="flex items-center gap-4 mt-2 text-xs text-slate-500">
                <div className="flex items-center gap-1">
                  <div 
                    className="w-2 h-2 rounded-full" 
                    style={{ backgroundColor: repo.languageColor }}
                  />
                  {repo.language}
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  {repo.stars}
                </div>
                <div className="flex items-center gap-1">
                  <GitFork className="w-3 h-3" />
                  {repo.forks}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </Card>
    </motion.div>
  )
}
