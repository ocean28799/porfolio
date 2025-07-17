import { FullScreen } from "@/components/full-screen"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sponsors | Tran Anh Duc - Senior React Native & AI Integration Specialist",
  description: "Support Tran Anh Duc's open source work and development projects",
}

export default function Page() {
  return (
    <FullScreen>
      <HoverBorderGradient
        containerClassName="rounded-[10px]"
        as="button"
        className="dark:bg-[#0d1117] bg-white text-black dark:text-white flex items-center space-x-2 cursor-pointer w-full"
      >
        <iframe
          src="https://github.com/sponsors/ocean28799/card"
          title="Sponsor ocean28799"
          className="w-full h-full"
          style={{ border: "0" }}
        ></iframe>
      </HoverBorderGradient>
    </FullScreen>
  )
}
