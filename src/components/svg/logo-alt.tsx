import { SVGProps } from "@/types/global"
import React from "react"

export const LogoAlt = (props: SVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="140"
      height="60"
      viewBox="0 0 140 60"
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      {/* Tech-inspired logo for Tran Anh Duc with geometric elements */}
      
      {/* Background geometric shape */}
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" className="dark:stop-blue-400 stop-blue-600" />
          <stop offset="100%" className="dark:stop-purple-400 stop-purple-600" />
        </linearGradient>
      </defs>
      
      {/* Main container with subtle background */}
      <rect x="5" y="8" width="130" height="44" rx="8" className="dark:fill-gray-800/20 fill-gray-100/50" stroke="none" />
      
      {/* T letter - modern geometric */}
      <g className="dark:fill-white fill-gray-900">
        {/* T horizontal bar */}
        <rect x="15" y="15" width="18" height="3" rx="1.5" />
        {/* T vertical bar */}
        <rect x="22.5" y="15" width="3" height="30" rx="1.5" />
      </g>
      
      {/* A letter - angular tech style */}
      <g className="dark:fill-white fill-gray-900">
        <path d="M 42 45 L 46 15 L 49 15 L 53 45 L 50 45 L 49.2 38 L 45.8 38 L 45 45 Z M 46.5 35 L 48.5 35 L 47.5 25 Z" />
      </g>
      
      {/* D letter - rounded modern */}
      <g className="dark:fill-white fill-gray-900">
        {/* D vertical bar */}
        <rect x="62" y="15" width="3" height="30" rx="1.5" />
        {/* D curved part */}
        <path d="M 65 15 L 75 15 Q 80 15 80 20 L 80 40 Q 80 45 75 45 L 65 45 Z M 68 18 L 68 42 L 74 42 Q 77 42 77 40 L 77 20 Q 77 18 74 18 Z" />
      </g>
      
      {/* Tech accent elements */}
      <g fill="url(#gradient)">
        {/* React-inspired brackets */}
        <path d="M 90 20 L 92 20 L 92 18 L 95 18 L 95 20 L 97 20" stroke="url(#gradient)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M 90 40 L 92 40 L 92 42 L 95 42 L 95 40 L 97 40" stroke="url(#gradient)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        
        {/* Code-style dots */}
        <circle cx="100" cy="25" r="1.5" />
        <circle cx="103" cy="30" r="1" />
        <circle cx="100" cy="35" r="1.5" />
      </g>
      
      {/* Developer accent line */}
      <rect x="15" y="48" width="90" height="2" rx="1" fill="url(#gradient)" />
      
      {/* Optional: Small "DEV" text */}
      <text x="110" y="35" className="dark:fill-gray-400 fill-gray-600" fontSize="8" fontFamily="monospace">.dev</text>
    </svg>
  )
}
