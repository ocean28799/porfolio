import { PROJECTS } from "@/lib/constants/projects"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import ProjectDetailClient from "./project-detail-client"

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>
}

// Generate project slugs from titles
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

// Generate static params for all projects
export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: generateSlug(project.title),
  }))
}

// Generate metadata for project pages
export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = PROJECTS.find(p => generateSlug(p.title) === slug)
  
  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.title} | Tran Anh Duc - React Native + AI Integration Specialist`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      url: `https://trananhducdev.com/projects/${slug}`,
      siteName: "Tran Anh Duc Portfolio",
      images: [
        {
          url: `https://trananhducdev.com${project.src}`,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [`https://trananhducdev.com${project.src}`],
    },
    keywords: [...project.techStack, "React Native", "Next.js", "AI Integration", "Cross-platform", "Mobile Apps", "Web Development"],
  }
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params
  
  // Find project by generated slug
  const project = PROJECTS.find(p => generateSlug(p.title) === slug)
  
  if (!project) {
    notFound()
  }

  return <ProjectDetailClient project={project} />
}
