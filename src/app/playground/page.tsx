import { Metadata } from 'next'
import { CodePlayground } from '@/components/playground/code-playground-optimized'
import { PagePerformanceTracker } from '@/components/performance-reporter'

export const metadata: Metadata = {
  title: 'Code Playground | Tran Anh Duc',
  description: 'Interactive code playground for testing JavaScript, TypeScript, Python, and more. Execute code in real-time and experiment with different programming languages.',
  keywords: ['Code Playground', 'JavaScript', 'TypeScript', 'Python', 'Online IDE', 'Code Editor'],
  openGraph: {
    title: 'Code Playground | Tran Anh Duc',
    description: 'Interactive code playground for testing and experimenting with code in real-time.',
    type: 'website',
  },
}

export default function PlaygroundPage() {
  return (
    <div className="min-h-screen pt-14 xs:pt-12 sm:pt-16 lg:pt-20 pb-safe">
      <PagePerformanceTracker pageName="playground" />
      <CodePlayground />
    </div>
  )
}
