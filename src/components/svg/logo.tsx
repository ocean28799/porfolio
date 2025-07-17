import { SVGProps } from "@/types/global"
import React from "react"

export const Logo = (props: SVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="50"
      viewBox="0 0 100 50"
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      {/* Clean, professional logo for Duc Tran - "DT" monogram */}
      
      <defs>
        <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" className="dark:stop-blue-400 stop-blue-600" />
          <stop offset="100%" className="dark:stop-purple-400 stop-purple-600" />
        </linearGradient>
      </defs>
      
      {/* D letter */}
      <g className="dark:fill-white fill-gray-900">
        {/* D vertical bar */}
        <rect x="15" y="10" width="2.5" height="30" rx="1.25" />
        {/* D curved shape */}
        <path d="M 17.5 10 L 25 10 Q 30 10 30 15 L 30 35 Q 30 40 25 40 L 17.5 40 Z M 20 12.5 L 20 37.5 L 24.5 37.5 Q 27.5 37.5 27.5 35 L 27.5 15 Q 27.5 12.5 24.5 12.5 Z" />
      </g>
      
      {/* T letter */}
      <g className="dark:fill-white fill-gray-900">
        {/* T horizontal bar */}
        <rect x="40" y="10" width="20" height="2.5" rx="1.25" />
        {/* T vertical bar */}
        <rect x="48.75" y="10" width="2.5" height="30" rx="1.25" />
      </g>
      
      {/* Modern accent elements */}
      <g>
        {/* Stylized dot accent */}
        <circle cx="70" cy="20" r="2" fill="url(#accentGradient)" />
        <circle cx="75" cy="25" r="1.5" fill="url(#accentGradient)" opacity="0.7" />
        <circle cx="70" cy="30" r="2" fill="url(#accentGradient)" />
      </g>
      
      {/* Subtle underline */}
      <rect x="15" y="43" width="45" height="2" rx="1" fill="url(#accentGradient)" opacity="0.8" />
    </svg>
  )
}
