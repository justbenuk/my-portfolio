"use client";

import PageContainer from "@/components/shared/page-container";
import { Code2, Sparkles, Zap, Rocket } from "lucide-react";

export default function AboutPage() {
  const skills = [
    { name: "Next.js", level: 95 },
    { name: "React", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Prisma", level: 85 },
    { name: "Node.js", level: 90 },
  ];

  const features = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time",
    },
    {
      icon: Zap,
      title: "Fast Performance",
      description: "Optimized for speed with modern best practices and techniques",
    },
    {
      icon: Sparkles,
      title: "Modern Design",
      description: "Beautiful, responsive designs that work seamlessly across devices",
    },
    {
      icon: Rocket,
      title: "Quick Delivery",
      description: "Efficient workflow ensuring timely project completion",
    },
  ];

  return (
    <PageContainer>
      <div className="space-y-20">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500 animate-pulse-glow" />
              <div className="relative w-72 h-72 rounded-3xl overflow-hidden border-4 border-teal-500/20 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                <div className="text-8xl font-bold text-gradient">BA</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-6">
            <div className="inline-block animate-fade-in-up">
              <span className="px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium">
                About Me
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-black animate-fade-in-up animation-delay-200">
              <span className="bg-gradient-to-r from-teal-300 to-cyan-400 text-transparent bg-clip-text">
                Ben Andrews
              </span>
            </h1>

            <h2 className="text-2xl text-slate-300 font-semibold animate-fade-in-up animation-delay-400">
              Freelance Web Developer
            </h2>

            <div className="space-y-4 text-lg text-slate-300 leading-relaxed animate-fade-in-up animation-delay-600">
              <p>
                For the last 10 years, I&apos;ve been a self-taught developer, happily tinkering away in my digital workshop. Recently, I had a thought: &quot;Hey, maybe some of this stuff is actually useful!&quot; This portfolio is the result of that earth-shattering revelation.
              </p>
              <p>
                My love for learning is borderline obsessive, which means I&apos;m always ready to tackle a new challenge. If it can be coded, it can be done.
              </p>
              <p>
                Currently, I&apos;m wielding the power of{" "}
                <span className="text-teal-400 font-semibold">Next.js</span>,{" "}
                <span className="text-teal-400 font-semibold">Prisma</span>, and{" "}
                <span className="text-teal-400 font-semibold">Tailwind CSS</span>{" "}
                to build custom, mobile-friendly websites, from slick e-commerce solutions to powerful web apps.
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-center">
            <span className="bg-gradient-to-r from-teal-300 to-cyan-400 text-transparent bg-clip-text">
              What I Bring to the Table
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group p-6 rounded-2xl glass-effect hover:border-teal-500/50 transition-all duration-300 hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Skills Section */}
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-center">
            <span className="bg-gradient-to-r from-teal-300 to-cyan-400 text-transparent bg-clip-text">
              Technical Skills
            </span>
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-teal-400 font-semibold">{skill.level}%</span>
                </div>
                <div className="h-3 bg-white/5 rounded-full overflow-hidden backdrop-blur-sm border border-white/10">
                  <div
                    className="h-full bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg group-hover:shadow-teal-500/50"
                    style={{
                      width: `${skill.level}%`,
                      animation: "pulse-glow 2s ease-in-out infinite",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6 py-12">
          <h2 className="text-4xl font-bold">
            <span className="bg-gradient-to-r from-teal-300 to-cyan-400 text-transparent bg-clip-text">
              Let&apos;s Build Something Amazing
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Ready to bring your project to life? Let&apos;s have a chat about how I can help.
          </p>
          <a
            href="/contact"
            className="inline-block px-10 py-4 text-lg font-semibold text-white bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl shadow-2xl shadow-teal-500/30 transition-all duration-300 hover:shadow-teal-500/50 hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </PageContainer>
  );
}

