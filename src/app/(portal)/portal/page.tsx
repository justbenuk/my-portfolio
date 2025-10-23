import { auth } from "@/lib/auth";
import { LayoutDashboard, User, Clock } from "lucide-react";

export const dynamic = 'force-dynamic';

export default async function PortalPage() {
  const session = await auth();

  const stats = [
    {
      name: "Account Status",
      value: "Active",
      icon: User,
      color: "text-teal-400",
    },
    {
      name: "Member Since",
      value: "2024",
      icon: Clock,
      color: "text-cyan-400",
    },
  ];

  return (
    <div className="p-6 lg:p-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">
          Dashboard
        </h1>
        <span className="text-slate-400">
          Welcome back, {session?.user?.name}
        </span>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.name}
              className="bg-slate-900 border border-slate-800 rounded-lg p-6 hover:border-slate-700 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className={`${stat.color}`}>
                  <Icon className="w-8 h-8" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-slate-400">{stat.name}</span>
                  <span className="text-2xl font-bold text-white">{stat.value}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Welcome Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
            <LayoutDashboard className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-2">
              Welcome to Your Portal
            </h2>
            <span className="text-slate-400">
              This is your personal dashboard where you can manage your account and access various features.
              Use the sidebar to navigate between different sections.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

