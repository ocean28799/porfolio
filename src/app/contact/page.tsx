import { Metadata } from "next"
import { ContactContent } from "./contact-content"

export const metadata: Metadata = {
  title: "Contact | Tran Anh Duc - Let's Work Together",
  description: "Get in touch with Tran Anh Duc for mobile development, web applications, AI integration projects, and technical consulting. Available for freelance and full-time opportunities.",
  keywords: [
    "hire react native developer",
    "hire senior developer",
    "mobile app development",
    "web development services",
    "AI integration",
    "freelance developer",
    "software consultant",
    "Tran Anh Duc contact"
  ],
  openGraph: {
    title: "Contact | Tran Anh Duc",
    description: "Let's build something amazing together. Get in touch for your next project.",
    type: "website",
  },
}

export default function ContactPage() {
  return <ContactContent />
}
