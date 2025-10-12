"use client";

import PageContainer from "@/components/shared/page-container";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with cart, checkout, and payment integration",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    tags: ["Next.js", "Prisma", "Stripe", "Tailwind CSS"],
    category: "Web Development",
    date: "2024-10",
    featured: true,
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: 2,
    slug: "portfolio-website",
    title: "Creative Portfolio",
    description: "A stunning portfolio website for a photographer with image galleries and contact forms",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tags: ["React", "TypeScript", "Framer Motion"],
    category: "Design",
    date: "2024-09",
    featured: true,
    liveUrl: "https://example.com",
  },
  {
    id: 3,
    slug: "task-management-app",
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team features",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
    tags: ["Next.js", "PostgreSQL", "Socket.io"],
    category: "Web App",
    date: "2024-08",
    featured: false,
    githubUrl: "https://github.com",
  },
  {
    id: 4,
    slug: "restaurant-website",
    title: "Restaurant Website",
    description: "Modern restaurant website with online reservation system and menu management",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
    tags: ["Next.js", "Tailwind CSS", "Sanity CMS"],
    category: "Web Development",
    date: "2024-07",
    featured: false,
    liveUrl: "https://example.com",
  },
  {
    id: 5,
    slug: "fitness-tracking-app",
    title: "Fitness Tracking App",
    description: "Track workouts, nutrition, and progress with detailed analytics and charts",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
    tags: ["React Native", "Firebase", "Chart.js"],
    category: "Mobile App",
    date: "2024-06",
    featured: true,
    liveUrl: "https://example.com",
  },
  {
    id: 6,
    slug: "blog-platform",
    title: "Blog Platform",
    description: "A modern blogging platform with markdown support and comment system",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop",
    tags: ["Next.js", "MDX", "Prisma"],
    category: "Web Development",
    date: "2024-05",
    featured: false,
    githubUrl: "https://github.com",
  },
];

export default function WorkPage() {
  return (
    <PageContainer>
      <div className="space-y-16">
        {/* Header Section */}
        <div className="text-center space-y-6">
          <div className="inline-block animate-fade-in-up">
            <span className="px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium backdrop-blur-sm">
              Portfolio
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black animate-fade-in-up animation-delay-200">
            <span className="text-white">My Recent </span>
            <span className="block bg-gradient-to-r from-teal-300 via-teal-400 to-cyan-400 text-transparent bg-clip-text animate-gradient-x">
              Work
            </span>
          </h1>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
            A collection of projects I&apos;ve worked on, showcasing my skills in web development, design, and problem-solving.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-8 animate-fade-in-up animation-delay-600">
          <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.filter(p => p.featured).map((project, index) => (
              <Link
                key={project.id}
                href={`/work/${project.slug}`}
                className="group relative rounded-2xl overflow-hidden glass-effect hover:border-teal-500/50 transition-all duration-300 hover:scale-[1.02]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video relative overflow-hidden bg-slate-800">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent z-10" />
                  <div className="absolute inset-0 bg-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-medium">
                      {project.category}
                    </span>
                    <div className="flex gap-2">
                      {project.liveUrl && (
                        <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-teal-400 transition-colors" />
                      )}
                      {project.githubUrl && (
                        <Github className="w-5 h-5 text-slate-400 group-hover:text-teal-400 transition-colors" />
                      )}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white group-hover:text-teal-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-lg bg-white/5 text-slate-300 text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* All Projects */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-white">All Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Link
                key={project.id}
                href={`/work/${project.slug}`}
                className="group relative rounded-2xl overflow-hidden glass-effect hover:border-teal-500/50 transition-all duration-300 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="aspect-video relative overflow-hidden bg-slate-800">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent z-10" />
                  <div className="absolute inset-0 bg-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="px-2 py-1 rounded-full bg-teal-500/10 text-teal-400">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 text-sm line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 rounded-md bg-white/5 text-slate-300 text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6 py-12">
          <h3 className="text-3xl font-bold">
            <span className="bg-gradient-to-r from-teal-300 to-cyan-400 text-transparent bg-clip-text">
              Like What You See?
            </span>
          </h3>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Let&apos;s work together on your next project and create something amazing.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 text-lg font-semibold text-white bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl shadow-2xl shadow-teal-500/30 transition-all duration-300 hover:shadow-teal-500/50 hover:scale-105"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </PageContainer>
  );
}
