import ProjectCard from "@/components/project-card";

export default function PortfolioPage() {
  const projects = [
    {
      title: "SaaS Dashboard Redesign",
      description: "A complete overhaul of a legacy SaaS platform dashboard, improving user experience and adding new analytics features.",
      imageSrc: "/project-dashboard.jpg",
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'API Integration'],
      link: "/portfolio/saas-dashboard"
    },
    {
      title: "E-commerce Storefront",
      description: "Developed a modern e-commerce platform with Stripe integration and a custom product management system.",
      imageSrc: "/project-ecommerce.jpg",
      tags: ['React', 'Next.js', 'Stripe', 'GraphQL'],
      link: "/portfolio/ecommerce-store"
    },
    {
      title: "Real-time Chat Application",
      description: "Built a real-time chat application with WebSockets, offering instant messaging and user presence features.",
      imageSrc: "/project-chat.jpg",
      tags: ['Node.js', 'Socket.io', 'React', 'MongoDB'],
      link: "/portfolio/chat-app"
    },
    {
      title: "Portfolio Website Template",
      description: "Designed and developed a flexible portfolio template for designers and developers to showcase their work.",
      imageSrc: "/project-template.jpg",
      tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      link: "/portfolio/portfolio-template"
    },
    {
      title: "Task Management PWA",
      description: "A Progressive Web App for task management, featuring offline capabilities and push notifications.",
      imageSrc: "/project-pwa.jpg",
      tags: ['React', 'PWA', 'IndexedDB', 'Service Workers'],
      link: "/portfolio/task-manager-pwa"
    },
    {
      title: "Blog & CMS Integration",
      description: "Integrated a headless CMS (Sanity.io) with a Next.js blog, enabling easy content management.",
      imageSrc: "/project-blog.jpg",
      tags: ['Next.js', 'Sanity.io', 'GraphQL', 'MDX'],
      link: "/portfolio/blog-cms"
    },
  ];

  return (
    <div className="py-12 md:py-20">
      <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-16 leading-tight">
        My Creative <span className="text-orange-400 italic">Work.</span> <br />
        Projects That Speak Volumes.
      </h1>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}