"use client";

import { motion } from "framer-motion";
import { useBackground } from "@/contexts/background-context";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  MessageSquare,
  Globe,
} from "lucide-react";

export function ConnectCard() {
  const { getThemeColors } = useBackground();
  const colors = getThemeColors();

  const connections = [
    {
      id: "github",
      name: "GitHub",
      icon: Github,
      href: "https://github.com/ocean28799",
      description: "50+ projects & contributions",
      color: "#333333",
      bgColor: "from-gray-900/60 to-gray-800/60",
      hoverColor: "hover:from-gray-800/70 hover:to-gray-700/70",
      iconBg: "bg-gray-700/60",
      iconHover: "group-hover:bg-gray-600/70",
      accent: "text-gray-300",
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/trananhduc99/",
      description: "Professional network",
      color: "#0077B5",
      bgColor: "from-blue-900/60 to-blue-800/60",
      hoverColor: "hover:from-blue-800/70 hover:to-blue-700/70",
      iconBg: "bg-blue-700/60",
      iconHover: "group-hover:bg-blue-600/70",
      accent: "text-blue-300",
    },
    {
      id: "email",
      name: "Email",
      icon: Mail,
      href: "mailto:ocean28799@gmail.com",
      description: "Direct contact • 24h response",
      color: "#EA4335",
      bgColor: "from-red-900/60 to-red-800/60",
      hoverColor: "hover:from-red-800/70 hover:to-red-700/70",
      iconBg: "bg-red-700/60",
      iconHover: "group-hover:bg-red-600/70",
      accent: "text-red-300",
    },
  ];

  return (
    <Card className="h-full overflow-hidden relative group w-full max-w-sm mx-auto">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-xl" />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-cyan-500/10 to-pink-500/20 opacity-70" />

      {/* Animated Border */}
      <div className="absolute inset-0 rounded-xl">
        <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-purple-500/50 via-cyan-500/50 to-pink-500/50 bg-clip-border opacity-0 group-hover:opacity-100 transition-all duration-500" />
      </div>

      {/* Globe Icon */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-6 right-6 text-cyan-400/60 z-10"
      >
        <Globe className="w-6 h-6" />
      </motion.div>

      {/* Premium Glass Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-white/[0.02] backdrop-blur-xl rounded-xl" />

      <CardHeader className="relative z-20 pb-6 pt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center space-y-3"
        >
          <div className="flex items-center justify-center gap-3">
            <motion.div
              className="p-3 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-sm border border-purple-500/30"
              whileHover={{
                scale: 1.1,
                rotate: 360,
                background:
                  "linear-gradient(45deg, rgba(139, 92, 246, 0.4), rgba(34, 211, 238, 0.4))",
              }}
              transition={{ duration: 0.6 }}
            >
              <MessageSquare className="w-6 h-6 text-purple-400" />
            </motion.div>
          </div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">
            Connect
          </h3>
          <p className="text-sm text-slate-300 font-medium">
            Ready to start your next project?
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>
      </CardHeader>

      <CardContent className="relative z-20 space-y-3 pb-6 px-6">
        {connections.map((connection, index) => (
          <motion.div
            key={connection.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.15 }}
            className="group/item"
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <Button
                variant="ghost"
                className={`w-full h-auto p-4 justify-start text-left bg-gradient-to-r ${connection.bgColor} ${connection.hoverColor} border border-slate-700/50 hover:border-slate-500/70 transition-all duration-300 group-hover/item:shadow-xl group-hover/item:shadow-purple-500/25 backdrop-blur-sm rounded-lg`}
                onClick={() => window.open(connection.href, "_blank")}
              >
                <div className="flex items-center gap-3 w-full min-w-0">
                  <motion.div
                    className={`p-2.5 rounded-xl ${connection.iconBg} ${connection.iconHover} transition-all duration-300 relative overflow-hidden border border-white/10 flex-shrink-0`}
                    whileHover={{
                      scale: 1.1,
                      rotate: [0, -10, 10, 0],
                      boxShadow: `0 8px 25px ${connection.color}40`,
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <connection.icon className="w-5 h-5 text-white relative z-10" />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  </motion.div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4
                        className={`font-bold text-base ${connection.accent} group-hover/item:text-white transition-colors truncate`}
                      >
                        {connection.name}
                      </h4>
                      <motion.div
                        className="text-slate-400 group-hover/item:text-slate-200 transition-colors flex-shrink-0"
                        whileHover={{ x: 4, scale: 1.2 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.div>
                    </div>
                    <p className="text-xs text-slate-400 group-hover/item:text-slate-300 transition-colors leading-relaxed font-medium break-words">
                      {connection.description}
                    </p>
                  </div>
                </div>
              </Button>
            </motion.div>
          </motion.div>
        ))}

        {/* Enhanced Status Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9 }}
          className="pt-6 border-t border-slate-700/50"
        >
          <div className="flex items-center justify-center gap-3">
            <motion.div
              className="w-3 h-3 bg-green-400 rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                boxShadow: [
                  "0 0 0 0 rgba(34, 197, 94, 0.7)",
                  "0 0 0 10px rgba(34, 197, 94, 0)",
                  "0 0 0 0 rgba(34, 197, 94, 0.7)",
                ],
              }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
            <Badge
              variant="secondary"
              className="bg-green-400/15 text-green-300 border-green-400/30 hover:bg-green-400/25 transition-all duration-300 font-semibold px-4 py-2 text-sm"
            >
              Available for projects
            </Badge>
          </div>
        </motion.div>
      </CardContent>

      {/* Enhanced Hover Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${colors.primary}25, ${colors.accent}15, transparent 70%)`,
        }}
      />

      {/* Premium Shine Effect */}
      <motion.div
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/8 to-transparent -skew-x-12 pointer-events-none"
      />

      {/* Ambient Glow */}
      <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-pink-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
    </Card>
  );
}
