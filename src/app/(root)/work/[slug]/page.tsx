import PageContainer from "@/components/shared/page-container";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Calendar, Tag } from "lucide-react";
import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import { Metadata } from "next";
import { JsonValue } from "@prisma/client/runtime/library";

type Props = {
  params: Promise<{ slug: string }>
}

type Technology = {
  name: string;
  description: string;
}

type Challenge = {
  title: string;
  solution: string;
}

function isStringArray(value: JsonValue): value is string[] {
  return Array.isArray(value) && value.every(item => typeof item === 'string');
}

function isTechnologyArray(value: JsonValue): value is Technology[] {
  return Array.isArray(value) && value.every(item =>
    typeof item === 'object' && item !== null && 'name' in item && 'description' in item
  );
}

function isChallengeArray(value: JsonValue): value is Challenge[] {
  return Array.isArray(value) && value.every(item =>
    typeof item === 'object' && item !== null && 'title' in item && 'solution' in item
  );
}

export async function generatedMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params

  const project = await db.project.findUnique({
    where: {
      slug,
      published: true
    }
  })

  return {
    title: project?.title
  }
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project = await db.project.findUnique({
    where: {
      slug: params.slug,
      published: true,
    },
  });

  if (!project) {
    notFound();
  }

  // Parse features and technologies from JSON if they exist
  const features = project.features && isStringArray(project.features) ? project.features : null;
  const technologies = project.technologies && isTechnologyArray(project.technologies) ? project.technologies : null;
  const challenges = project.challenges && isChallengeArray(project.challenges) ? project.challenges : null;

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
            {project.completedAt && (
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <Calendar className="w-4 h-4" />
                <span>{new Date(project.completedAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
              </div>
            )}
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
            {features && features.length > 0 && (
              <div className="space-y-4 animate-fade-in-up animation-delay-700">
                <h2 className="text-3xl font-bold text-white">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
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
            {challenges && challenges.length > 0 && (
              <div className="space-y-6 animate-fade-in-up animation-delay-800">
                <h2 className="text-3xl font-bold text-white">Challenges & Solutions</h2>
                {challenges.map((challenge, index) => (
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
                {technologies && technologies.length > 0 ? (
                  technologies.map((tech, index) => (
                    <div key={index} className="space-y-1">
                      <div className="font-semibold text-white">{tech.name}</div>
                      <div className="text-sm text-slate-400">{tech.description}</div>
                    </div>
                  ))
                ) : (
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
