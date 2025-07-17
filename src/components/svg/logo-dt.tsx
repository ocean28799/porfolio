import { SVGProps } from "@/types/global"
import React from "react"

export const LogoDT = (props: SVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="40"
      viewBox="0 0 80 40"
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      {/* Simple DT horizontal logo */}
      
      <defs>
        <linearGradient id="dtGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" className="dark:stop-blue-400 stop-blue-600" />
          <stop offset="100%" className="dark:stop-purple-400 stop-purple-600" />
        </linearGradient>
      </defs>
      
      {/* D letter */}
      <g className="dark:fill-white fill-gray-900">
        <rect x="8" y="8" width="3" height="24" rx="1.5" />
        <path d="M 11 8 L 20 8 Q 24 8 24 12 L 24 28 Q 24 32 20 32 L 11 32 Z M 14 11 L 14 29 L 19 29 Q 21 29 21 28 L 21 12 Q 21 11 19 11 Z" />
      </g>
      
      {/* T letter */}
      <g className="dark:fill-white fill-gray-900">
        <rect x="34" y="8" width="18" height="3" rx="1.5" />
        <rect x="41.5" y="8" width="3" height="24" rx="1.5" />
      </g>
      
      {/* Accent dot */}
      <circle cx="60" cy="20" r="2.5" fill="url(#dtGradient)" />
      
      {/* Minimal underline */}
      <rect x="8" y="35" width="44" height="1.5" rx="0.75" fill="url(#dtGradient)" opacity="0.7" />
    </svg>
  )
}
