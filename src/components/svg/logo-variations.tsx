import { SVGProps } from "@/types/global"
import React from "react"

export const LogoVariations = (props: SVGProps) => {
  return (
    <div className="space-y-8 p-4">
      <h3 className="text-lg font-semibold">D Character Variations</h3>
      
      {/* Variation 1: Rectangular blocks */}
      <div className="space-y-2">
        <p className="text-sm text-gray-600">Option 1: Rectangular blocks (Current)</p>
        <svg width="50" height="40" viewBox="70 10 20 30">
          <g className="dark:fill-white fill-gray-900">
            <rect x="70" y="10" width="3" height="30" rx="1.5" />
            <rect x="73" y="10" width="12" height="3" rx="1.5" />
            <rect x="73" y="37" width="12" height="3" rx="1.5" />
            <rect x="82" y="13" width="3" height="24" rx="1.5" />
          </g>
        </svg>
      </div>
      
      {/* Variation 2: Rounded corner */}
      <div className="space-y-2">
        <p className="text-sm text-gray-600">Option 2: Single rounded corner</p>
        <svg width="50" height="40" viewBox="70 10 20 30">
          <g className="dark:fill-white fill-gray-900">
            <rect x="70" y="10" width="3" height="30" rx="1.5" />
            <rect x="73" y="10" width="10" height="3" rx="1.5" />
            <rect x="73" y="37" width="10" height="3" rx="1.5" />
            <path d="M 83 13 Q 85 13 85 15 L 85 35 Q 85 37 83 37 L 80 37 L 80 34 L 82 34 L 82 16 L 80 16 L 80 13 Z" />
          </g>
        </svg>
      </div>
      
      {/* Variation 3: Minimal curved */}
      <div className="space-y-2">
        <p className="text-sm text-gray-600">Option 3: Minimal curved</p>
        <svg width="50" height="40" viewBox="70 10 20 30">
          <g className="dark:fill-white fill-gray-900">
            <rect x="70" y="10" width="3" height="30" rx="1.5" />
            <path d="M 73 10 L 81 10 Q 85 10 85 14 L 85 36 Q 85 40 81 40 L 73 40 Z M 76 13 L 76 37 L 80 37 Q 82 37 82 36 L 82 14 Q 82 13 80 13 Z" />
          </g>
        </svg>
      </div>
      
      {/* Variation 4: Ultra simple */}
      <div className="space-y-2">
        <p className="text-sm text-gray-600">Option 4: Ultra simple lines</p>
        <svg width="50" height="40" viewBox="70 10 20 30">
          <g className="dark:fill-white fill-gray-900">
            <rect x="70" y="10" width="2" height="30" rx="1" />
            <rect x="72" y="10" width="10" height="2" rx="1" />
            <rect x="72" y="24" width="8" height="2" rx="1" />
            <rect x="72" y="38" width="10" height="2" rx="1" />
          </g>
        </svg>
      </div>
    </div>
  )
}
