"use client";

import PageContainer from "@/components/shared/page-container";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Calendar, Tag } from "lucide-react";
import { notFound } from "next/navigation";

const projects = [
  {
    id: 1,
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with cart, checkout, and payment integration",
    fullDescription: `This comprehensive e-commerce platform was built to provide a seamless shopping experience for customers while giving administrators powerful tools to manage their inventory and orders.

The platform features a modern, responsive design that works flawlessly across all devices. Customers can browse products, add items to their cart, and complete purchases securely through Stripe integration.

Key features include real-time inventory management, order tracking, customer accounts, wishlist functionality, and advanced search with filters. The admin dashboard provides detailed analytics, sales reports, and easy product management.`,
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&h=800&fit=crop",
    tags: ["Next.js", "Prisma", "Stripe", "Tailwind CSS", "TypeScript", "PostgreSQL"],
    category: "Web Development",
    date: "2024-10",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    features: [
      "Secure payment processing with Stripe",
      "Real-time inventory management",
      "Customer account system",
      "Order tracking and history",
      "Admin dashboard with analytics",
      "Product search and filtering",
      "Wishlist and favorites",
      "Responsive design",
    ],
    technologies: [
      { name: "Next.js 15", description: "React framework for production" },
      { name: "Prisma", description: "Database ORM" },
      { name: "Stripe", description: "Payment processing" },
      { name: "Tailwind CSS", description: "Utility-first CSS framework" },
      { name: "PostgreSQL", description: "Database" },
      { name: "TypeScript", description: "Type-safe JavaScript" },
    ],
    challenges: [
      {
        title: "Payment Integration",
        solution: "Implemented Stripe webhooks for reliable payment confirmation and order processing, ensuring no orders are lost even if the user closes the browser.",
      },
      {
        title: "Performance Optimization",
        solution: "Used Next.js ISR (Incremental Static Regeneration) for product pages and implemented efficient caching strategies to handle high traffic.",
      },
    ],
  },
  {
    id: 2,
    slug: "portfolio-website",
    title: "Creative Portfolio",
    description: "A stunning portfolio website for a photographer with image galleries and contact forms",
    fullDescription: `A visually stunning portfolio website designed for a professional photographer to showcase their work. The site emphasizes visual impact while maintaining fast load times and smooth interactions.

The design features elegant animations powered by Framer Motion, creating a memorable user experience without sacrificing performance. High-resolution images are optimized and lazy-loaded to ensure quick page loads.

The portfolio includes multiple galleries organized by category, a dedicated 'about' section, client testimonials, and an integrated contact form for booking inquiries.`,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
    tags: ["React", "TypeScript", "Framer Motion", "Next.js", "Sanity CMS"],
    category: "Design",
    date: "2024-09",
    liveUrl: "https://example.com",
    features: [
      "Image gallery with lightbox",
      "Smooth page transitions",
      "Category-based organization",
      "Client testimonials section",
      "Integrated contact form",
      "Mobile-optimized viewing",
      "SEO optimized",
      "CMS for easy content updates",
    ],
    technologies: [
      { name: "React", description: "UI library" },
      { name: "Framer Motion", description: "Animation library" },
      { name: "Sanity CMS", description: "Content management" },
      { name: "Next.js", description: "React framework" },
    ],
    challenges: [
      {
        title: "Image Performance",
        solution: "Implemented Next.js Image optimization with blur placeholders and lazy loading to maintain fast page speeds despite high-res images.",
      },
    ],
  },
  {
    id: 3,
    slug: "task-management-app",
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team features",
    fullDescription: `A powerful task management application designed for teams to collaborate effectively. Real-time updates ensure everyone stays in sync, and the intuitive interface makes project management effortless.

The app supports multiple projects, team members, task assignments, due dates, priorities, and comments. Real-time notifications keep team members informed of changes and mentions.

Built with scalability in mind, the application handles multiple concurrent users and large project datasets efficiently.`,
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&h=800&fit=crop",
    tags: ["Next.js", "PostgreSQL", "Socket.io", "TypeScript", "Prisma"],
    category: "Web App",
    date: "2024-08",
    githubUrl: "https://github.com",
    features: [
      "Real-time collaboration",
      "Task assignments and tracking",
      "Project organization",
      "Team member management",
      "Due dates and reminders",
      "Priority levels",
      "Comment threads",
      "Activity timeline",
    ],
    technologies: [
      { name: "Next.js", description: "Full-stack framework" },
      { name: "Socket.io", description: "Real-time communication" },
      { name: "PostgreSQL", description: "Relational database" },
      { name: "Prisma", description: "Database toolkit" },
    ],
    challenges: [
      {
        title: "Real-time Sync",
        solution: "Implemented Socket.io for instant updates across all connected clients while maintaining database consistency.",
      },
    ],
  },
];

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <PageContainer>
      <div className="space-y-12">
        {/* Back Button */}
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors duration-200 animate-fade-in-up"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to all projects</span>
        </Link>

        {/* Project Header */}
        <div className="space-y-6 animate-fade-in-up animation-delay-200">
          <div className="flex items-center gap-3">
            <span className="px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium">
              {project.category}
            </span>
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <Calendar className="w-4 h-4" />
              <span>{new Date(project.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-black text-white">
            {project.title}
          </h1>

          <p className="text-xl text-slate-300 max-w-3xl">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl shadow-lg shadow-teal-500/30 transition-all duration-300 hover:shadow-teal-500/50 hover:scale-105"
              >
                <ExternalLink className="w-5 h-5" />
                <span>View Live Site</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-6 py-3 text-base font-semibold text-white bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl shadow-xl transition-all duration-300 hover:bg-white/10 hover:border-teal-500/50 hover:scale-105"
              >
                <Github className="w-5 h-5" />
                <span>View Source</span>
              </a>
            )}
          </div>
        </div>

        {/* Project Image */}
        <div className="relative rounded-2xl overflow-hidden aspect-video bg-slate-800 animate-fade-in-up animation-delay-400">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent z-10" />
        </div>

        {/* Project Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Description */}
            <div className="space-y-4 animate-fade-in-up animation-delay-600">
              <h2 className="text-3xl font-bold text-white">About This Project</h2>
              <div className="prose prose-invert max-w-none">
                {project.fullDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-slate-300 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Features */}
            {project.features && (
              <div className="space-y-4 animate-fade-in-up animation-delay-700">
                <h2 className="text-3xl font-bold text-white">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 rounded-xl glass-effect"
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 mt-2" />
                      <span className="text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Challenges */}
            {project.challenges && (
              <div className="space-y-6 animate-fade-in-up animation-delay-800">
                <h2 className="text-3xl font-bold text-white">Challenges & Solutions</h2>
                {project.challenges.map((challenge, index) => (
                  <div key={index} className="p-6 rounded-2xl glass-effect space-y-3">
                    <h3 className="text-xl font-semibold text-teal-400">
                      {challenge.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      {challenge.solution}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Technologies */}
            <div className="p-6 rounded-2xl glass-effect space-y-4 animate-fade-in-up animation-delay-600">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Tag className="w-5 h-5 text-teal-400" />
                Technologies Used
              </h3>
              <div className="space-y-3">
                {project.technologies?.map((tech, index) => (
                  <div key={index} className="space-y-1">
                    <div className="font-semibold text-white">{tech.name}</div>
                    <div className="text-sm text-slate-400">{tech.description}</div>
                  </div>
                )) || (
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
                )}
              </div>
            </div>

            {/* CTA */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border border-teal-500/20 space-y-4 animate-fade-in-up animation-delay-700">
              <h3 className="text-xl font-bold text-white">
                Interested in working together?
              </h3>
              <p className="text-slate-300">
                I&apos;d love to hear about your project and discuss how I can help bring your ideas to life.
              </p>
              <Link
                href="/contact"
                className="block w-full px-6 py-3 text-center font-semibold text-white bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl shadow-lg shadow-teal-500/30 transition-all duration-300 hover:shadow-teal-500/50 hover:scale-105"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
