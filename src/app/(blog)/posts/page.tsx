import BlogPostCard from "@/components/blog-post-card";

export default function BlogPage() {
  const posts = [
    {
      title: "How I Taught Myself Full-Stack Dev in 12 Months",
      date: "October 26, 2023",
      excerpt: "My journey into self-taught development: the tools, the struggles, and the triumphs that led me to build production-ready applications.",
      link: "/blog/self-taught-journey"
    },
    {
      title: "Mastering Next.js Server Components: A Deep Dive",
      date: "September 15, 2023",
      excerpt: "Exploring the power of React Server Components in Next.js and how they can revolutionize your web development workflow.",
      link: "/blog/nextjs-server-components"
    },
    {
      title: "Styling with Tailwind CSS: Best Practices & Tips",
      date: "August 20, 2023",
      excerpt: "A comprehensive guide to leveraging Tailwind CSS for rapid and consistent styling, from setup to advanced techniques.",
      link: "/blog/tailwind-best-practices"
    },
    {
      title: "Building Accessible Web Forms: A Practical Guide",
      date: "July 10, 2023",
      excerpt: "Ensuring your web forms are usable by everyone: ARIA attributes, semantic HTML, and accessibility testing.",
      link: "/blog/accessible-forms"
    },
  ];

  return (
    <div className="py-12 md:py-20">
      <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-16 leading-tight">
        My <span className="text-orange-400 italic">Insights.</span> <br />
        Thoughts on Development & Tech.
      </h1>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {posts.map((post, index) => (
          <BlogPostCard key={index} {...post} />
        ))}
      </div>
    </div>
  );
}
