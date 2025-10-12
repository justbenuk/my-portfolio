"use client";

import PageContainer from "@/components/shared/page-container";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Share2, User } from "lucide-react";
import { notFound } from "next/navigation";

const blogPosts = [
  {
    id: 1,
    slug: "building-scalable-nextjs-apps",
    title: "Building Scalable Next.js Applications",
    excerpt: "Learn the best practices and patterns for building scalable applications with Next.js 15, including performance optimization and architecture decisions.",
    author: "Ben Andrews",
    date: "2024-10-15",
    readTime: "8 min read",
    category: "Web Development",
    tags: ["Next.js", "React", "Performance"],
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=800&fit=crop",
    content: `
## Introduction

Next.js has become the go-to framework for building production-ready React applications. With the release of Next.js 15, we've seen significant improvements in performance, developer experience, and scalability features. In this comprehensive guide, we'll explore the best practices and patterns for building scalable Next.js applications.

## Understanding App Router Architecture

The App Router represents a paradigm shift in how we build Next.js applications. Unlike the Pages Router, it leverages React Server Components by default, providing better performance and more intuitive data fetching patterns.

### Key Benefits:

- **Automatic code splitting** - Only load the JavaScript needed for each route
- **Streaming and Suspense** - Show content progressively as it loads
- **Built-in layouts** - Share UI between routes without re-rendering
- **Server Components by default** - Reduce client-side JavaScript bundle

## Performance Optimization Strategies

### 1. Image Optimization

Next.js Image component provides automatic image optimization out of the box. Always use it instead of regular \`<img>\` tags:

\`\`\`jsx
import Image from 'next/image'

export default function Hero() {
  return (
    <Image
      src="/hero.jpg"
      alt="Hero image"
      width={1200}
      height={600}
      priority // Load above the fold images first
    />
  )
}
\`\`\`

### 2. Font Optimization

Use \`next/font\` to automatically optimize and load fonts:

\`\`\`jsx
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  )
}
\`\`\`

### 3. Code Splitting and Dynamic Imports

Leverage dynamic imports to split your code and reduce initial bundle size:

\`\`\`jsx
import dynamic from 'next/dynamic'

const DynamicComponent = dynamic(() => import('../components/heavy-component'), {
  loading: () => <p>Loading...</p>,
  ssr: false // Disable server-side rendering if needed
})
\`\`\`

## Data Fetching Patterns

### Server Components (Default)

Server Components can fetch data directly without client-side overhead:

\`\`\`jsx
async function getData() {
  const res = await fetch('https://api.example.com/data', {
    cache: 'force-cache' // or 'no-store' for dynamic data
  })
  return res.json()
}

export default async function Page() {
  const data = await getData()
  return <main>{/* Render data */}</main>
}
\`\`\`

### Parallel Data Fetching

Fetch multiple data sources in parallel for better performance:

\`\`\`jsx
async function Page() {
  const userPromise = getUser()
  const postsPromise = getPosts()

  const [user, posts] = await Promise.all([userPromise, postsPromise])

  return <main>{/* Render */}</main>
}
\`\`\`

## Caching Strategies

Next.js provides multiple caching layers:

1. **Request Memoization** - Automatic deduplication of fetch requests
2. **Data Cache** - Persistent cache across requests
3. **Full Route Cache** - Cache entire routes at build time
4. **Router Cache** - Client-side cache for navigation

### Revalidation

Control when cached data should be refreshed:

\`\`\`jsx
// Time-based revalidation (ISR)
export const revalidate = 3600 // Revalidate every hour

// On-demand revalidation
import { revalidatePath } from 'next/cache'

async function action() {
  'use server'
  revalidatePath('/posts')
}
\`\`\`

## Database Optimization

### Connection Pooling

Use connection pooling to manage database connections efficiently:

\`\`\`javascript
import { Pool } from 'pg'

const pool = new Pool({
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})
\`\`\`

### Query Optimization

- Use indexes for frequently queried fields
- Select only needed columns
- Implement pagination for large datasets
- Use database-level caching where appropriate

## Monitoring and Analytics

Track your application's performance with:

- **Core Web Vitals** - Monitor LCP, FID, and CLS
- **Error tracking** - Sentry, Bugsnag, or similar
- **Performance monitoring** - Vercel Analytics, Google Analytics
- **Custom metrics** - Track business-specific KPIs

## Deployment Considerations

### Environment Variables

Properly manage environment variables:

\`\`\`env
# Public variables (available in browser)
NEXT_PUBLIC_API_URL=https://api.example.com

# Server-only variables
DATABASE_URL=postgresql://...
API_SECRET=...
\`\`\`

### Edge vs. Node.js Runtime

Choose the right runtime for your use case:

- **Edge Runtime** - Ultra-low latency, limited APIs
- **Node.js Runtime** - Full Node.js API access, more compute time

## Conclusion

Building scalable Next.js applications requires careful consideration of architecture, performance, and deployment strategies. By following these best practices, you'll create applications that are fast, maintainable, and ready to scale.

Remember that scalability isn't just about handling more users—it's about maintaining performance and developer productivity as your application grows.

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Server Components](https://react.dev/blog/2023/03/22/react-labs-what-we-have-been-working-on-march-2023)
- [Web.dev Performance](https://web.dev/performance/)

---

Have questions or feedback? Feel free to reach out on [Twitter](https://twitter.com) or via the [contact form](/contact).
    `,
  },
  {
    id: 2,
    slug: "mastering-tailwind-css",
    title: "Mastering Tailwind CSS: Tips and Tricks",
    excerpt: "Discover advanced Tailwind CSS techniques to speed up your development workflow and create beautiful, maintainable designs.",
    author: "Ben Andrews",
    date: "2024-10-08",
    readTime: "6 min read",
    category: "CSS",
    tags: ["Tailwind CSS", "CSS", "Design"],
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=1200&h=800&fit=crop",
    content: `
## Introduction

Tailwind CSS has revolutionized how we write CSS by providing a utility-first approach that speeds up development without sacrificing design quality. In this guide, we'll explore advanced techniques to master Tailwind CSS.

## Custom Configuration

Extend Tailwind's default configuration to match your design system:

\`\`\`javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          // ... more shades
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    }
  }
}
\`\`\`

## Component Patterns

Create reusable component classes using @apply:

\`\`\`css
@layer components {
  .btn-primary {
    @apply px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors;
  }
}
\`\`\`

## Advanced Techniques

- Custom variants for complex states
- JIT mode for dynamic values
- Plugin system for custom utilities
- Dark mode implementation

Stay tuned for more advanced Tailwind CSS techniques!
    `,
  },
];

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  return (
    <PageContainer>
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Back Button */}
        <Link
          href="/posts"
          className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors duration-200 animate-fade-in-up"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to all posts</span>
        </Link>

        {/* Article Header */}
        <article className="space-y-8">
          <header className="space-y-6 animate-fade-in-up animation-delay-200">
            <div className="flex items-center gap-3">
              <span className="px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium">
                {post.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-slate-300">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-slate-400">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative rounded-2xl overflow-hidden aspect-video bg-slate-800 animate-fade-in-up animation-delay-400">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent z-10" />
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none animate-fade-in-up animation-delay-600">
            <div className="space-y-6 text-slate-300 leading-relaxed">
              {post.content.split('\n').map((paragraph, index) => {
                if (paragraph.trim().startsWith('##')) {
                  return (
                    <h2 key={index} className="text-3xl font-bold text-white mt-12 mb-6">
                      {paragraph.replace('##', '').trim()}
                    </h2>
                  );
                }
                if (paragraph.trim().startsWith('###')) {
                  return (
                    <h3 key={index} className="text-2xl font-bold text-white mt-8 mb-4">
                      {paragraph.replace('###', '').trim()}
                    </h3>
                  );
                }
                if (paragraph.trim().startsWith('```')) {
                  return null; // Handle code blocks separately if needed
                }
                if (paragraph.trim().startsWith('-')) {
                  return (
                    <li key={index} className="ml-6">
                      {paragraph.replace('-', '').trim()}
                    </li>
                  );
                }
                if (paragraph.trim() === '') {
                  return null;
                }
                return (
                  <p key={index} className="text-lg">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </div>

          {/* Share Section */}
          <div className="pt-12 border-t border-white/10 animate-fade-in-up animation-delay-800">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">Share this article</h3>
              <button className="flex items-center gap-2 px-6 py-3 rounded-xl glass-effect hover:border-teal-500/50 transition-all duration-300 hover:scale-105">
                <Share2 className="w-5 h-5 text-teal-400" />
                <span className="text-white">Share</span>
              </button>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="pt-12 space-y-8">
            <h2 className="text-3xl font-bold text-white">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/posts/${relatedPost.slug}`}
                  className="group rounded-2xl overflow-hidden glass-effect hover:border-teal-500/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="aspect-video relative overflow-hidden bg-slate-800">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent z-10" />
                  </div>

                  <div className="p-6 space-y-3">
                    <span className="px-2 py-1 rounded-full bg-teal-500/10 text-teal-400 text-xs">
                      {relatedPost.category}
                    </span>

                    <h3 className="text-lg font-bold text-white group-hover:text-teal-400 transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>

                    <p className="text-slate-400 text-sm line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="relative p-12 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border border-teal-500/20" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl" />

          <div className="relative z-10 text-center space-y-6">
            <h3 className="text-3xl font-bold">
              <span className="bg-gradient-to-r from-teal-300 to-cyan-400 text-transparent bg-clip-text">
                Let&apos;s Work Together
              </span>
            </h3>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Have a project in mind? I&apos;d love to hear about it and discuss how I can help.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 text-lg font-semibold text-white bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl shadow-2xl shadow-teal-500/30 transition-all duration-300 hover:shadow-teal-500/50 hover:scale-105"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
