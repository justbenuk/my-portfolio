"use client";

import PageContainer from "@/components/shared/page-container";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    slug: "building-scalable-nextjs-apps",
    title: "Building Scalable Next.js Applications",
    excerpt: "Learn the best practices and patterns for building scalable applications with Next.js 15, including performance optimization and architecture decisions.",
    content: "",
    author: "Ben Andrews",
    date: "2024-10-15",
    readTime: "8 min read",
    category: "Web Development",
    tags: ["Next.js", "React", "Performance"],
    featured: true,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    slug: "mastering-tailwind-css",
    title: "Mastering Tailwind CSS: Tips and Tricks",
    excerpt: "Discover advanced Tailwind CSS techniques to speed up your development workflow and create beautiful, maintainable designs.",
    content: "",
    author: "Ben Andrews",
    date: "2024-10-08",
    readTime: "6 min read",
    category: "CSS",
    tags: ["Tailwind CSS", "CSS", "Design"],
    featured: true,
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    slug: "typescript-best-practices",
    title: "TypeScript Best Practices for 2024",
    excerpt: "A comprehensive guide to writing better TypeScript code with modern patterns and type safety techniques.",
    content: "",
    author: "Ben Andrews",
    date: "2024-10-01",
    readTime: "10 min read",
    category: "TypeScript",
    tags: ["TypeScript", "JavaScript", "Best Practices"],
    featured: false,
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    slug: "react-server-components-explained",
    title: "React Server Components Explained",
    excerpt: "Understanding React Server Components and how they improve performance and developer experience in modern React applications.",
    content: "",
    author: "Ben Andrews",
    date: "2024-09-24",
    readTime: "7 min read",
    category: "React",
    tags: ["React", "Next.js", "Server Components"],
    featured: true,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
  },
  {
    id: 5,
    slug: "database-design-principles",
    title: "Database Design Principles Every Developer Should Know",
    excerpt: "Essential database design principles and patterns to build robust, scalable data architectures.",
    content: "",
    author: "Ben Andrews",
    date: "2024-09-17",
    readTime: "12 min read",
    category: "Database",
    tags: ["Database", "SQL", "Architecture"],
    featured: false,
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=600&fit=crop",
  },
  {
    id: 6,
    slug: "modern-css-layouts",
    title: "Modern CSS Layouts with Grid and Flexbox",
    excerpt: "Master CSS Grid and Flexbox to create responsive, flexible layouts without the complexity of traditional methods.",
    content: "",
    author: "Ben Andrews",
    date: "2024-09-10",
    readTime: "9 min read",
    category: "CSS",
    tags: ["CSS", "Layout", "Responsive Design"],
    featured: false,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
  },
  {
    id: 7,
    slug: "api-security-best-practices",
    title: "API Security Best Practices",
    excerpt: "Protect your APIs with these essential security practices, from authentication to rate limiting and beyond.",
    content: "",
    author: "Ben Andrews",
    date: "2024-09-03",
    readTime: "11 min read",
    category: "Security",
    tags: ["API", "Security", "Best Practices"],
    featured: false,
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
  },
  {
    id: 8,
    slug: "optimizing-web-performance",
    title: "The Ultimate Guide to Web Performance Optimization",
    excerpt: "Comprehensive strategies for improving website performance, from image optimization to code splitting and caching.",
    content: "",
    author: "Ben Andrews",
    date: "2024-08-27",
    readTime: "15 min read",
    category: "Performance",
    tags: ["Performance", "Web Development", "Optimization"],
    featured: false,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  },
];

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.slice(0, 6);

  return (
    <PageContainer>
      <div className="space-y-16">
        {/* Header Section */}
        <div className="text-center space-y-6">
          <div className="inline-block animate-fade-in-up">
            <span className="px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium backdrop-blur-sm">
              Blog
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black animate-fade-in-up animation-delay-200">
            <span className="text-white">Thoughts on </span>
            <span className="block bg-gradient-to-r from-teal-300 via-teal-400 to-cyan-400 text-transparent bg-clip-text animate-gradient-x">
              Web Development
            </span>
          </h1>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
            Insights, tutorials, and thoughts on modern web development, design, and technology.
          </p>
        </div>

        {/* Featured Posts */}
        <div className="space-y-8 animate-fade-in-up animation-delay-600">
          <h2 className="text-3xl font-bold text-white">Featured Articles</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.slice(0, 2).map((post) => (
              <Link
                key={post.id}
                href={`/posts/${post.slug}`}
                className="group relative rounded-2xl overflow-hidden glass-effect hover:border-teal-500/50 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="aspect-[16/9] relative overflow-hidden bg-slate-800">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent z-10" />
                  <div className="absolute inset-0 bg-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-2 text-slate-400">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white group-hover:text-teal-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-slate-400 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-teal-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* All Posts */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-white">Recent Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post, index) => (
              <Link
                key={post.id}
                href={`/posts/${post.slug}`}
                className="group relative rounded-2xl overflow-hidden glass-effect hover:border-teal-500/50 transition-all duration-300 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="aspect-video relative overflow-hidden bg-slate-800">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent z-10" />
                  <div className="absolute inset-0 bg-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="px-2 py-1 rounded-full bg-teal-500/10 text-teal-400">
                      {post.category}
                    </span>
                    <span className="text-slate-400">•</span>
                    <span className="text-slate-400">{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-slate-400 text-sm line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-xs text-slate-400 pt-2">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* All Articles List */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-white">All Articles</h2>
          <div className="space-y-4">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                href={`/posts/${post.slug}`}
                className="group flex flex-col md:flex-row gap-6 p-6 rounded-2xl glass-effect hover:border-teal-500/50 transition-all duration-300 hover:scale-[1.01] animate-fade-in-up"
              >
                <div className="md:w-48 aspect-video rounded-xl overflow-hidden bg-slate-800 flex-shrink-0">
                  <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800" />
                </div>

                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-2 text-slate-400">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white group-hover:text-teal-400 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-slate-400 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 rounded-md bg-white/5 text-slate-300 text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center">
                  <ArrowRight className="w-6 h-6 text-teal-400 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="relative p-12 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border border-teal-500/20" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl" />

          <div className="relative z-10 text-center space-y-6 max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold">
              <span className="bg-gradient-to-r from-teal-300 to-cyan-400 text-transparent bg-clip-text">
                Stay Updated
              </span>
            </h3>
            <p className="text-xl text-slate-300">
              Get the latest articles and insights delivered straight to your inbox.
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
