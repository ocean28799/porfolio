"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface CyberpunkTerminalProps {
  className?: string;
  texts?: string[];
  speed?: number;
}

export function CyberpunkTerminal({
  className = "",
  texts = [
    "INITIALIZING NEURAL LINK...",
    "MATRIX CONNECTION ESTABLISHED",
    "AI CORE STATUS: ONLINE",
    "ENCRYPTION LEVEL: MAXIMUM",
    "WELCOME TO THE GRID",
  ],
  speed = 100,
}: CyberpunkTerminalProps) {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = texts[textIndex];

      if (!isDeleting) {
        if (currentIndex < fullText.length) {
          setCurrentText(fullText.substring(0, currentIndex + 1));
          setCurrentIndex((prev) => prev + 1);
        } else {
          // Wait before starting to delete
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentIndex > 0) {
          setCurrentText(fullText.substring(0, currentIndex - 1));
          setCurrentIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? speed / 2 : speed);
    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, textIndex, texts, speed]);

  return (
    <div className={`font-mono text-sm ${className}`}>
      <div className="bg-black/40 border border-[#00ff41]/30 rounded-lg p-4 backdrop-blur-sm">      
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[#ff0080]">root@matrix:~$</span>
          <div className="flex-1">
            <span className="text-[#00ff41]">{currentText}</span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="text-[#00ff41]"
            >
              █
            </motion.span>
          </div>
        </div>

        {/* Additional terminal lines for atmosphere */}
        <div className="space-y-1 text-xs opacity-60">
          <div className="text-[#ffaa00]">Security protocol: AES-256</div>
          <div className="text-[#39ff14]">Neural interface: ACTIVE</div>
        </div>
      </div>
    </div>
  );
}
