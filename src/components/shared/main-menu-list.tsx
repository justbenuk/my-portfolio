"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, Briefcase, Mail, BookOpen, Wrench } from "lucide-react";

export default function MainMenuList() {
  const pathname = usePathname();

  const menuItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/about", label: "About Me", icon: User },
    { href: "/services", label: "Services", icon: Wrench },
    { href: "/posts", label: "Blog", icon: BookOpen },
    { href: "/work", label: "My Work", icon: Briefcase },
    { href: "/watch-me", label: "Watch Me", icon: Briefcase },
    { href: "/contact", label: "Contact Me", icon: Mail },
  ];

  return (
    <nav className="flex flex-col space-y-3 mt-8 p-6">
      <p className="text-xs font-semibold text-teal-400 uppercase tracking-wider mb-2">
        Navigation
      </p>
      {menuItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${isActive
              ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg shadow-teal-500/30"
              : "bg-white/5 backdrop-blur-sm border border-white/10 hover:border-teal-500/50 hover:bg-white/10 text-slate-300"
              }`}
          >
            <Icon className={`w-5 h-5 transition-transform duration-300 ${isActive ? "" : "group-hover:scale-110"}`} />
            <span className="font-medium">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

