import { Sparkles, Code } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="py-12 md:py-20">
      <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-16 leading-tight">
        Passionate about Code, <br /> Driven by <span className="text-orange-400 italic">Curiosity.</span>
      </h1>

      <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <Sparkles className="text-orange-400 w-8 h-8 shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-semibold mb-2 text-orange-400">My Journey</h2>
              <p className="text-gray-400 leading-relaxed">
                I didn&apos;t take the traditional route. My journey into development started with a &quot;what if?&quot; and turned into a full-time obsession with clean code and efficient architecture. Every line of code I write is a step further into solving complex problems with elegant solutions.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Code className="text-orange-400 w-8 h-8 shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-semibold mb-2 text-orange-400">What I Do</h2>
              <p className="text-gray-400 leading-relaxed">
                Based in The Midlands, I focus on building accessible, scalable web apps. My expertise lies in turning intricate requirements into seamless user experiences, primarily leveraging the power of Next.js, React, and Tailwind CSS.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-dark-card p-8 rounded-2xl border border-dark-border shadow-lg">
          <h3 className="text-2xl font-semibold text-orange-400 mb-6">Skills & Technologies</h3>
          <div className="grid grid-cols-2 gap-x-6 gap-y-4 text-gray-300">
            <div>
              <h4 className="font-semibold text-lg mb-2">Frontend</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>React / Next.js</li>
                <li>JavaScript / TypeScript</li>
                <li>Tailwind CSS</li>
                <li>HTML5 / CSS3</li>
                <li>Framer Motion</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">Backend & Tools</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Node.js / Express</li>
                <li>Prisma / SQL</li>
                <li>MongoDB</li>
                <li>Git / GitHub</li>
                <li>Vercel / Netlify</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
