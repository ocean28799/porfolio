"use client"

import { IconCloud } from "@/components/features/ui-effects/icon-cloud"
import { TECH_STACK } from "@/lib/constants/tech-stack"

export function StackCloud() {
  const images = TECH_STACK.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  )

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <div className="scale-75">
        <IconCloud images={images} />
      </div>
    </div>
  )
}
