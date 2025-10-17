"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, User, LogOut, ShieldMinusIcon } from "lucide-react";
import { logoutUserAction } from "@/actions/auth-actions";
import { Button } from "@/components/ui/button";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";

interface SidebarProps {
  user: {
    name?: string | null;
    email?: string | null;
    role?: string | null;
    image?: string | null
  };
}

export default function PortalSidebar({ user }: SidebarProps) {
  const pathname = usePathname();

  const navItems = [
    {
      name: "Dashboard",
      href: "/portal",
      icon: LayoutDashboard,
    },
    {
      name: "Profile",
      href: "/portal/profile",
      icon: User,
    },
  ];

  const handleLogout = async () => {
    await logoutUserAction();
  };

  return (
    <Sidebar className="bg-slate-900" >
      <SidebarHeader className="bg-slate-900">
        <div className="p-6 border-b border-slate-800">
          <h1 className="text-xl font-bold text-white">Client Portal</h1>
          <p className="text-sm text-slate-400 mt-1">Welcome back</p>
        </div>
      </SidebarHeader>
      {/* Sidebar */}
      <SidebarContent className="bg-slate-900">

        {/* User Info */}
        <div className="p-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={user.image as string} />
              <AvatarFallback className="bg-gradient-to-br from-teal-500 to-cyan-500">BA</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">{user.name}</p>
              <p className="text-xs text-slate-400 truncate">{user.email}</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <SidebarMenu>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton asChild>
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive
                      ? "bg-teal-500/10 text-teal-400"
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
          {user.role === 'admin' && (
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link
                  href='/dashboard'
                  className="flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-slate-400"
                >
                  <ShieldMinusIcon />
                  <span className="font-medium">Dashboard</span>
                </Link>

              </SidebarMenuButton>
            </SidebarMenuItem>

          )}
        </SidebarMenu>

      </SidebarContent>
      <SidebarFooter className="bg-slate-900">
        <Button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-slate-800 text-slate-400 hover:bg-red-500/10 hover:text-red-400 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </Button>

      </SidebarFooter>
    </Sidebar>
  );
}
