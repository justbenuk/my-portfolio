"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, FileText, Briefcase, Users, MessageSquare, LogOut, ListIcon } from "lucide-react";
import { logoutUserAction } from "@/actions/auth-actions";
import { Button } from "@/components/ui/button";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback, AvatarImage } from "../ui/avatar";

interface SidebarProps {
  user: {
    name?: string | null;
    email?: string | null;
    role?: string | null;
    image?: string | null
  };
}

export default function DashboardSidebar({ user }: SidebarProps) {
  const pathname = usePathname();

  const navItems = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Blog Posts",
      href: "/dashboard/posts",
      icon: FileText,
    },
    {
      name: "Projects",
      href: "/dashboard/projects",
      icon: Briefcase,
    },
    {
      name: "Users",
      href: "/dashboard/users",
      icon: Users,
    },
    {
      name: "Comments",
      href: "/dashboard/comments",
      icon: MessageSquare,
    },
    {
      name: "Categories",
      href: "/dashboard/categories",
      icon: ListIcon
    }
  ];

  const handleLogout = async () => {
    await logoutUserAction();
  };

  return (
    <Sidebar>
      <SidebarHeader className="bg-slate-900">
        <div className="p-6 border-b border-slate-800">
          <h1 className="text-xl font-bold text-white">Admin Dashboard</h1>
          <span className="text-sm text-slate-400 mt-1">Content Management</span>
        </div>
      </SidebarHeader>
      <SidebarContent className="bg-slate-900">
        <div className="p-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <Avatar>
                <AvatarImage src={user.image as string} className="rounded-full" />
                <AvatarFallback>BA</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex-1 min-w-0 flex flex-col">
              <span className="text-sm font-medium text-white truncate">{user.name}</span>
              <span className="text-xs text-slate-400 truncate capitalize">{user.role}</span>
            </div>
          </div>
        </div>
        <SidebarMenu className="flex-1 p-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton asChild>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive
                      ? "bg-purple-500/10 text-purple-400"
                      : "text-slate-400 hover:bg-slate-800 hover:text-white"
                      }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                  </Link>

                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-4 border-t border-slate-800 bg-slate-900">
        <Button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-slate-800 text-slate-400 hover:bg-red-500/10 hover:text-red-400 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </Button>
      </SidebarFooter>
    </Sidebar >
  );
}
