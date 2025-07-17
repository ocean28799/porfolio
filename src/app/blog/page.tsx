import { Metadata } from 'next'
import { BlogListing } from '@/components/blog/blog-listing'

export const metadata: Metadata = {
  title: 'Technical Articles & Industry Insights | Tran Anh Duc',
  description: 'In-depth tutorials and real-world development experiences. Learn from 4+ years of React Native, Next.js, and AI integration expertise through practical guides.',
  keywords: ['React Native', 'Next.js', 'AI Integration', 'Senior Developer', 'Mobile Development', 'Tech Blog', 'Enterprise Applications'],
  openGraph: {
    title: 'Technical Articles & Industry Insights | Tran Anh Duc',
    description: 'Learn from 4+ years of React Native, Next.js, and AI integration expertise through practical guides and case studies.',
    type: 'website',
  },
}

export default function BlogPage() {
  return <BlogListing />
}
