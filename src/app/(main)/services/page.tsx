import ServiceCard from '@/components/service-card';
import Pagecontainer from '@/components/shared/page-container';
import { Code2, Layout, Zap, Database, Globe, Cloud } from 'lucide-react';

export default function ServicesPage() {
  return (
    <Pagecontainer className="py-12 md:py-20">
      <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-16 leading-tight">
        My <span className="text-orange-400 italic">Services.</span> <br />
        Bringing Your Ideas to Life.
      </h1>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <ServiceCard
          icon={<Code2 />}
          title="Custom Web App Development"
          description="Building bespoke, scalable web applications from scratch using modern frameworks like Next.js and React."
        />
        <ServiceCard
          icon={<Layout />}
          title="UI/UX Design & Prototyping"
          description="Crafting intuitive and engaging user interfaces with a focus on user experience, conversion, and aesthetics."
        />
        <ServiceCard
          icon={<Zap />}
          title="Performance Optimization"
          description="Transforming slow applications into lightning-fast experiences, focusing on Core Web Vitals and efficient code."
        />
        <ServiceCard
          icon={<Database />}
          title="Backend & API Development"
          description="Developing robust and secure backend systems and APIs to power your web applications with Node.js and various databases."
        />
        <ServiceCard
          icon={<Globe />}
          title="Website Audits & Consulting"
          description="Comprehensive review of your existing website for performance, accessibility, SEO, and code quality with actionable insights."
        />
        <ServiceCard
          icon={<Cloud />}
          title="Deployment & Hosting"
          description="Setting up efficient and reliable deployment pipelines and hosting solutions on platforms like Vercel and Netlify."
        />
      </div>
    </Pagecontainer>
  );
}
