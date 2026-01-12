import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home, Search, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4">
      <div className="max-w-lg w-full text-center">
        {/* 404 Animation */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
            404
          </h1>
        </div>

        {/* Message */}
        <h2 className="text-2xl font-bold text-white mb-3">
          Page Not Found
        </h2>
        <p className="text-slate-400 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. 
          Let&apos;s get you back on track.
        </p>

        {/* Quick Links */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
          <Button
            asChild
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-slate-600 text-slate-300 hover:bg-slate-800"
          >
            <Link href="/projects">
              <Search className="w-4 h-4 mr-2" />
              View Projects
            </Link>
          </Button>
        </div>

        {/* Suggested Pages */}
        <div className="bg-slate-800/50 rounded-xl p-6 text-left">
          <h3 className="text-sm font-medium text-slate-300 mb-4">
            Popular Pages
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {[
              { href: '/about', label: 'About Me' },
              { href: '/projects', label: 'Projects' },
              { href: '/blog', label: 'Blog' },
              { href: '/contact', label: 'Contact' },
              { href: '/cv', label: 'My CV' },
              { href: '/pricing', label: 'Pricing' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-slate-700/50 transition-colors"
              >
                <ArrowLeft className="w-3 h-3" />
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
