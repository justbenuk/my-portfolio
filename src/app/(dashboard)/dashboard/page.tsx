import { getDashboardStats, getRecentPosts } from "@/actions/dashboard-actions";
import RecentPostsTable from "@/components/dashboard/recent-posts-table";
import { FileText, Briefcase, Users, Eye } from "lucide-react";

export default async function DashboardPage() {

  const recentPosts = await getRecentPosts()
  const [postsCount, projectsCount, usersCount, publishedPostsCount] = await getDashboardStats()

  const stats = [
    {
      name: "Total Posts",
      value: postsCount,
      icon: FileText,
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
    },
    {
      name: "Published Posts",
      value: publishedPostsCount,
      icon: Eye,
      color: "text-green-400",
      bgColor: "bg-green-500/10",
    },
    {
      name: "Total Projects",
      value: projectsCount,
      icon: Briefcase,
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
    },
    {
      name: "Total Users",
      value: usersCount,
      icon: Users,
      color: "text-cyan-400",
      bgColor: "bg-cyan-500/10",
    },
  ];

  return (
    <div className="p-6 lg:p-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-slate-400">Welcome to your admin dashboard</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.name}
              className="bg-slate-900 border border-slate-800 rounded-lg p-6 hover:border-slate-700 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`${stat.bgColor} p-3 rounded-lg`}>
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
              <p className="text-sm text-slate-400 mb-1">{stat.name}</p>
              <p className="text-3xl font-bold text-white">{stat.value}</p>
            </div>
          );
        })}
      </div>

      {/* Recent Posts */}
      <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
        <h2 className="text-xl font-bold text-white mb-4">Recent Posts</h2>
        <div className="space-y-3">
          <RecentPostsTable recentPosts={recentPosts} />
        </div>
      </div>
    </div>
  );
}

