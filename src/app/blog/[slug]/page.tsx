import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { BlogArticle } from '@/components/blog/blog-article'
import { BLOG_ARTICLES } from '@/lib/constants/blog-articles'

interface BlogArticlePageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params
  const article = BLOG_ARTICLES.find(article => article.slug === slug)
  
  if (!article) {
    return {
      title: 'Article Not Found',
    }
  }

  return {
    title: `${article.title} | Tran Anh Duc`,
    description: article.excerpt,
    keywords: article.tags,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.publishDate,
      tags: article.tags,
    },
  }
}

export async function generateStaticParams() {
  return BLOG_ARTICLES.map((article) => ({
    slug: article.slug,
  }))
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params
  const article = BLOG_ARTICLES.find(article => article.slug === slug)

  if (!article) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <BlogArticle article={article} />
    </div>
  )
}
