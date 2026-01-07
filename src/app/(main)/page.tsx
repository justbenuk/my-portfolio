import BlogPostCard from '@/components/blog-post-card';
import ProjectCard from '@/components/project-card';
import ServiceCard from '@/components/service-card';
import { ArrowRight, Code2, Layout, Zap } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <section className="text-center py-20 md:py-32 mb-20">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight animate-fade-in-up">
          Building Digital Solutions <br />
          <span className="text-orange-400 italic">from the Ground Up.</span>
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg md:text-xl mb-10 animate-fade-in-up delay-200">
          Self-taught developer specializing in high-performance Next.js applications that turn complex problems into seamless user experiences.
        </p>
        <div className="flex justify-center gap-4 animate-fade-in-up delay-400">
          <Link href="/portfolio" className="bg-orange-400 hover:bg-orange-600 text-dark-bg px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2 group">
            View My Work <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/contact" className="border border-dark-border hover:border-orange-400 px-8 py-4 rounded-full font-bold transition-all text-white hover:text-orange-400">
            Get In Touch
          </Link>
        </div>
      </section>
      <section className="mb-20">
        <h2 className="text-sm uppercase tracking-[0.3em] text-orange-400 mb-12 text-center font-extrabold animate-fade-in-up">My Expertise</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Code2 />}
            title="Custom Web Apps"
            description="Full-stack development using Next.js, React, and robust APIs for scalable and performant applications."
          />
          <ServiceCard
            icon={<Layout />}
            title="UI/UX Design"
            description="Crafting intuitive and engaging user interfaces that prioritize user experience and aesthetic appeal."
          />
          <ServiceCard
            icon={<Zap />}
            title="Performance Optimization"
            description="Transforming slow, clunky sites into lightning-fast, highly optimized web experiences."
          />
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-sm uppercase tracking-[0.3em] text-orange-400 mb-12 text-center font-extrabold animate-fade-in-up">Featured Project</h2>
        <div className="max-w-3xl mx-auto">
          <ProjectCard
            title="SaaS Dashboard Redesign"
            description="A complete overhaul of a legacy SaaS platform dashboard, improving user experience and adding new analytics features."
            imageSrc="/assets/image4.jpg"
            tags={['Next.js', 'TypeScript', 'Tailwind CSS', 'API Integration']}
            link="/assets/image4.jpg"
          />
        </div>
      </section>
      <section className="mb-20">
        <h2 className="text-sm uppercase tracking-[0.3em] text-orange-400 mb-12 text-center font-extrabold animate-fade-in-up">Latest Insights</h2>
        <div className="max-w-3xl mx-auto">
          <BlogPostCard
            title="How I Taught Myself Full-Stack Dev in 12 Months"
            date="October 26, 2023"
            excerpt="My journey into self-taught development: the tools, the struggles, and the triumphs that led me to build production-ready applications."
            link="/blog/self-taught-journey"
          />
        </div>
      </section>
    </>

  );
}
