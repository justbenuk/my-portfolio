import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import Link from 'next/link';

export default function BlogPostDetail() {
  return (
    <article className="py-12 md:py-20 max-w-3xl mx-auto">
      {/* Navigation */}
      <Link href="/blog" className="flex items-center gap-2 text-gray-500 hover:text-orange-400 transition-colors mb-12 group">
        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
        Back to Blog
      </Link>

      {/* Blog Metadata */}
      <header className="mb-12">
        <div className="flex gap-6 text-sm text-gray-500 mb-6 font-medium uppercase tracking-widest">
          <span className="flex items-center gap-2"><Calendar size={14} className="text-orange-400" /> Oct 26, 2023</span>
          <span className="flex items-center gap-2"><User size={14} className="text-orange-400" /> Self-Taught Dev</span>
          <span className="flex items-center gap-2"><Clock size={14} className="text-orange-400" /> 8 min read</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-8">
          How I Taught Myself Full-Stack Dev in <span className="text-orange-accent italic">12 Months.</span>
        </h1>
      </header>

      {/* Blog Content */}
      <div className="prose prose-invert prose-orange max-w-none">
        <p className="text-xl text-gray-300 leading-relaxed italic border-l-4 border-orange-400 pl-6 mb-12">
          &quot;The biggest hurdle isn&apos;t learning the syntax; it&apos;s learning how to learn when there is no curriculum.&quot;
        </p>

        <h2 className="text-2xl font-bold text-white mt-12 mb-4">Phase 1: The Foundation</h2>
        <p className="text-gray-400 leading-relaxed mb-6">
          I started where everyone else does: HTML and CSS. But instead of just watching videos, I built
          three clones of my favorite landing pages. This taught me more about the Box Model and Flexbox
          than any course ever could.
        </p>

        <h2 className="text-2xl font-bold text-white mt-12 mb-4">Phase 2: The JavaScript Struggle</h2>
        <p className="text-gray-400 leading-relaxed mb-6">
          JavaScript was the &quot;brick wall.&quot; To overcome it, I stopped following tutorials and started
          building a simple Calculator. When it broke (and it broke often), I spent hours in the console
          debugging. This is where the real learning happens.
        </p>

        {/* Example Quote Block */}
        <div className="my-12 p-8 bg-dark-card border border-dark-border rounded-2xl">
          <h3 className="text-orange-400 font-bold mb-2">Pro Tip:</h3>
          <p className="text-gray-300 italic">
            Don&apos;t get stuck in tutorial hell. Build one project for every three tutorials you watch.
            The struggle of fixing a bug is worth ten hours of watching someone else code.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-white mt-12 mb-4">Summary</h2>
        <p className="text-gray-400 leading-relaxed mb-6">
          Becoming a developer is a marathon, not a sprint. Consistency—even just 30 minutes a day—is
          the secret ingredient to success.
        </p>
      </div>

      {/* Newsletter / CTA */}
      <div className="mt-20 p-10 bg-linear-to-br from-orange-950/30 to-black border border-orange-400/20 rounded-3xl text-center">
        <h3 className="text-2xl font-bold mb-4">Liked this post?</h3>
        <p className="text-gray-400 mb-6">Subscribe to get my weekly tips on Next.js and self-taught development.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <input type="email" placeholder="Enter your email" className="bg-dark-bg border border-dark-border p-3 rounded-xl focus:border-orange-accent outline-none sm:w-64" />
          <button className="bg-orange-accent text-dark-bg px-6 py-3 rounded-xl font-bold hover:bg-orange-600 transition-all">Subscribe</button>
        </div>
      </div>
    </article>
  );
}
