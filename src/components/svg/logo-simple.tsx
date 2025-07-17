import { SVGProps } from "@/types/global"
import React from "react"

export const LogoSimple = (props: SVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="120"
      height="40"
      viewBox="0 0 120 40"
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      {/* Ultra-simple, clean logo for Tran Anh Duc */}
      
      <defs>
        <linearGradient id="simpleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" className="dark:stop-blue-400 stop-blue-600" />
          <stop offset="100%" className="dark:stop-purple-400 stop-purple-600" />
        </linearGradient>
      </defs>
      
      {/* T letter - minimal */}
      <g className="dark:fill-white fill-gray-900">
        <rect x="8" y="8" width="16" height="2.5" rx="1.25" />
        <rect x="14.75" y="8" width="2.5" height="24" rx="1.25" />
      </g>
      
      {/* A letter - minimal triangle approach */}
      <g className="dark:fill-white fill-gray-900">
        <path d="M 35 32 L 38.5 8 L 41.5 8 L 45 32 L 42.5 32 L 42 26 L 38 26 L 37.5 32 Z M 38.5 23.5 L 41.5 23.5 L 40 15 Z" />
      </g>
      
      {/* D letter - Alternative 1: Simple rounded rectangle */}
      <g className="dark:fill-white fill-gray-900">
        <rect x="58" y="8" width="2.5" height="24" rx="1.25" />
        <path d="M 60.5 8 L 68 8 Q 72 8 72 12 L 72 28 Q 72 32 68 32 L 60.5 32 Z M 63 10.5 L 63 29.5 L 67.5 29.5 Q 69.5 29.5 69.5 28 L 69.5 12 Q 69.5 10.5 67.5 10.5 Z" />
      </g>
      
      {/* Minimal accent */}
      <rect x="8" y="35" width="64" height="1.5" rx="0.75" fill="url(#simpleGradient)" opacity="0.6" />
    </svg>
  )
}

// Alternative D character versions
export const DCharacterVariants = {
  // Version 1: Rounded rectangle (current)
  rounded: (
    <g className="dark:fill-white fill-gray-900">
      <rect x="58" y="8" width="2.5" height="24" rx="1.25" />
      <path d="M 60.5 8 L 68 8 Q 72 8 72 12 L 72 28 Q 72 32 68 32 L 60.5 32 Z M 63 10.5 L 63 29.5 L 67.5 29.5 Q 69.5 29.5 69.5 28 L 69.5 12 Q 69.5 10.5 67.5 10.5 Z" />
    </g>
  ),
  
  // Version 2: Simple rectangle with rounded corner
  simpleRounded: (
    <g className="dark:fill-white fill-gray-900">
      <rect x="58" y="8" width="2.5" height="24" rx="1.25" />
      <rect x="60.5" y="8" width="8" height="2.5" rx="1.25" />
      <rect x="60.5" y="29.5" width="8" height="2.5" rx="1.25" />
      <rect x="66" y="10.5" width="2.5" height="19" rx="1.25" />
    </g>
  ),
  
  // Version 3: Ultra minimal - just lines
  minimal: (
    <g className="dark:fill-white fill-gray-900">
      <rect x="58" y="8" width="2.5" height="24" rx="1.25" />
      <rect x="60.5" y="8" width="10" height="2.5" rx="1.25" />
      <rect x="60.5" y="19" width="8" height="2" rx="1" />
      <rect x="60.5" y="29.5" width="10" height="2.5" rx="1.25" />
    </g>
  ),
  
  // Version 4: Geometric blocks
  geometric: (
    <g className="dark:fill-white fill-gray-900">
      <rect x="58" y="8" width="3" height="24" rx="0" />
      <rect x="61" y="8" width="8" height="3" rx="0" />
      <rect x="61" y="29" width="8" height="3" rx="0" />
      <rect x="66" y="11" width="3" height="18" rx="0" />
    </g>
  )
}
