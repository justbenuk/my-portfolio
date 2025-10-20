interface DashboardTitleProps {
  title: string
  description?: string
}

export default function DashboardTitle({ title, description }: DashboardTitleProps) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white">{title}</h1>
      <span className="text-slate-400">{description}</span>
    </div>
  )
}

