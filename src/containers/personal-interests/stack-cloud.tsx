"use client"

import { IconCloud } from "@/components/magicui/icon-cloud"

const slugs = [
  "typescript",
  "javascript", 
  "react",
  "nextdotjs",
  "openai",
  "tensorflow",
  "python",
  "unity",
  "unrealengine",
  "threejs",
  "firebase",
  "graphql",
  "sqlite",
  "tailwindcss",
  "framermotion",
  "zustand",
  "reactquery",
  "html5",
  "css3",
  "nodejs",
  "git",
  "github",
  "visualstudiocode",
  "figma",
  "vercel",
  "docker",
  "pytorch",
]

export function StackCloud() {
  const images = slugs.map(
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
