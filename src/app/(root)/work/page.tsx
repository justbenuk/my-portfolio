import type { Metadata } from 'next';
import PageContainer from "@/components/shared/page-container";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { db } from "@/lib/db";

export const metadata: Metadata = {
  title: 'My Work'
};

export default async function WorkPage() {
  // Fetch projects from database
  const [featuredProjects, allProjects] = await Promise.all([
    db.project.findMany({
      where: {
        published: true,
        featured: true,
      },
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        slug: true,
        title: true,
        description: true,
        category: true,
        tags: true,
        image: true,
        imageAlt: true,
        liveUrl: true,
        githubUrl: true,
      },
    }),
    db.project.findMany({
      where: { published: true },
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        slug: true,
        title: true,
        description: true,
        category: true,
        tags: true,
        image: true,
        imageAlt: true,
        liveUrl: true,
        githubUrl: true,
      },
    }),
  ]);
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
            {featuredProjects.map((project, index) => (
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
            {allProjects.map((project, index) => (
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
