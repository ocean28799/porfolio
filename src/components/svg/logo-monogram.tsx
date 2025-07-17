import { SVGProps } from "@/types/global"
import React from "react"

export const LogoMonogram = (props: SVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      viewBox="0 0 80 80"
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      {/* Circular monogram logo for Duc Tran - "DT" */}
      
      <defs>
        <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" className="dark:stop-blue-500 stop-blue-600" />
          <stop offset="50%" className="dark:stop-purple-500 stop-purple-600" />
          <stop offset="100%" className="dark:stop-pink-500 stop-pink-600" />
        </linearGradient>
        <filter id="shadow">
          <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.3"/>
        </filter>
      </defs>
      
      {/* Outer circle with gradient */}
      <circle cx="40" cy="40" r="35" fill="url(#circleGradient)" filter="url(#shadow)" />
      
      {/* Inner circle for contrast */}
      <circle cx="40" cy="40" r="32" className="dark:fill-gray-900 fill-white" />
      
      {/* DT monogram */}
      <g className="dark:fill-white fill-gray-900">
        {/* D - positioned left */}
        <g transform="translate(20, 28)">
          <rect x="0" y="0" width="3" height="24" rx="1.5" />
          <path d="M 3 0 L 12 0 Q 16 0 16 4 L 16 20 Q 16 24 12 24 L 3 24 Z M 6 3 L 6 21 L 11 21 Q 13 21 13 20 L 13 4 Q 13 3 11 3 Z" />
        </g>
        
        {/* T - positioned right */}
        <g transform="translate(44, 28)">
          <rect x="0" y="0" width="16" height="3" rx="1.5" />
          <rect x="6.5" y="0" width="3" height="24" rx="1.5" />
        </g>
      </g>
      
      {/* Small accent dots around the circle */}
      <g fill="url(#circleGradient)" opacity="0.6">
        <circle cx="40" cy="10" r="1.5" />
        <circle cx="65" cy="25" r="1" />
        <circle cx="70" cy="40" r="1.5" />
        <circle cx="65" cy="55" r="1" />
        <circle cx="40" cy="70" r="1.5" />
        <circle cx="15" cy="55" r="1" />
        <circle cx="10" cy="40" r="1.5" />
        <circle cx="15" cy="25" r="1" />
      </g>
    </svg>
  )
}
