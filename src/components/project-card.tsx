import Link from 'next/link';
import Image from 'next/image'; 

interface ProjectCardProps {
    title: string
    description: string
    imageSrc: string
    tags: string[]
    link: string
}

export default function ProjectCard({ title, description, imageSrc, tags, link }: ProjectCardProps) {
  return (
    <Link href={link} className="group block rounded-2xl overflow-hidden bg-dark-card border border-dark-border hover:border-orange-400/50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-orange-400/10">
      <div className="relative h-48 w-full">
        {/* Placeholder for project image */}
        <Image 
          src={imageSrc || '/placeholder-project.png'} 
          alt={title} 
          layout="fill" 
          objectFit="cover" 
          className="transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-dark-bg/80 to-transparent"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-orange-400 transition-colors">{title}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 bg-dark-bg/50 rounded-full text-xs text-orange-accent border border-orange-accent/30">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}