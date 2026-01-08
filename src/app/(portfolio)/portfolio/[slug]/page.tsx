import { ArrowLeft, ExternalLink, Code2, Layers, Cpu } from 'lucide-react';
import Link from 'next/link';

export default function ProjectDetail() {
  return (
    <div className="py-12 md:py-20 max-w-4xl mx-auto">
      {/* Back Button */}
      <Link href="/portfolio" className="flex items-center gap-2 text-gray-500 hover:text-orange-400 transition-colors mb-12 group">
        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
        Back to Portfolio
      </Link>

      {/* Hero Header */}
      <header className="mb-16">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          SaaS Dashboard <br />
          <span className="text-orange-400 italic">Redesign.</span>
        </h1>
        <div className="flex flex-wrap gap-4 items-center text-gray-400">
          <span className="flex items-center gap-2 px-4 py-2 bg-dark-card border border-dark-border rounded-full">
            <Code2 size={16} className="text-orange-accent" /> Next.js
          </span>
          <span className="flex items-center gap-2 px-4 py-2 bg-dark-card border border-dark-border rounded-full">
            <Layers size={16} className="text-orange-accent" /> Tailwind CSS
          </span>
          <span className="flex items-center gap-2 px-4 py-2 bg-dark-card border border-dark-border rounded-full">
            <Cpu size={16} className="text-orange-accent" /> Prisma
          </span>
        </div>
      </header>

      {/* Main Content */}
      <div className="grid gap-16">
        <section className="bg-dark-card border border-dark-border rounded-3xl overflow-hidden shadow-2xl">
          <div className="aspect-video bg-linear-to-br from-orange-900/20 to-black flex items-center justify-center border-b border-dark-border">
            <p className="text-gray-500 uppercase tracking-widest font-bold">Project Screenshot / Demo</p>
          </div>
          <div className="p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              The client needed a way to visualize complex user data in real-time. The previous dashboard was slow,
              unresponsive on mobile, and lacked the visual clarity needed for executive reporting.
            </p>
            <div className="flex gap-4">
              <button className="bg-orange-400 text-dark-bg px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-orange-600 transition-all">
                Live Demo <ExternalLink size={18} />
              </button>
            </div>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-orange-400 underline underline-offset-8">The Solution</h3>
            <p className="text-gray-400 leading-relaxed">
              I rebuilt the architecture from the ground up using Next.js Server Components. By moving data fetching
              to the server, we reduced the bundle size by 40% and improved the Initial Server Response time significantly.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-orange-400 underline underline-offset-8">Key Features</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex gap-2"><span>•</span> Real-time data streaming via WebSockets</li>
              <li className="flex gap-2"><span>•</span> Custom charting library integration</li>
              <li className="flex gap-2"><span>•</span> Multi-tenant authentication with NextAuth</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
