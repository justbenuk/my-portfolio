import { ReactElement } from "react";

interface CardProps {
  icon: ReactElement,
  title: string,
  description: string
}

export default function ServiceCard({ icon, title, description }: CardProps) {
  return (
    <div className="group p-8 rounded-2xl bg-dark-card border border-dark-border hover:border-orange-400/50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-orange-400/10">
      <div className="mb-4 bg-dark-bg/50 w-14 h-14 flex items-center justify-center rounded-xl group-hover:bg-orange-400/10 transition-colors duration-300 text-orange-400 group-hover:text-orange-400">
        <div className="w-8 h-8">
          {icon}
        </div>
      </div>
      <h3 className="text-2xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-gray-400 text-base leading-relaxed">{description}</p>
    </div>
  );
}
