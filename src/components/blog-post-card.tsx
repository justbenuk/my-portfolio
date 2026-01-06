import Link from 'next/link';

interface BlogCardProps {
  title: string,
  date: string
  excerpt: string
  link: string
}

export default function BlogPostCard({ title, date, excerpt, link }: BlogCardProps) {
  return (
    <Link href={link} className="group block p-8 rounded-2xl bg-dark-card border border-dark-border hover:border-orange-400/50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-orange-400/10">
      <h3 className="text-2xl font-semibold mb-2 text-white group-hover:text-orange-400 transition-colors">{title}</h3>
      <p className="text-sm text-gray-500 mb-4">{date}</p>
      <p className="text-gray-400 text-base line-clamp-3">{excerpt}</p>
      <span className="mt-4 inline-block text-orange-400 group-hover:underline transition-colors">Read More &rarr;</span>
    </Link>
  );
}
