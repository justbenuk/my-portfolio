"use client";

import MainNavbar from "./main-navbar";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-slate-900/80 border-b border-white/10 shadow-lg shadow-teal-500/5"
          : "bg-transparent"
      }`}
    >
      <div className="flex flex-row justify-between items-center px-6 py-4">
        <Link href="/" className="group">
          <h1 className="relative inline-block">
            <span className="bg-gradient-to-r from-teal-300 via-teal-400 to-cyan-400 text-transparent bg-clip-text font-black text-2xl md:text-3xl tracking-tight transition-all duration-300 group-hover:scale-105 inline-block">
              Ben Andrews
            </span>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
          </h1>
        </Link>

        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/about"
              className="text-slate-300 hover:text-teal-400 transition-colors duration-200 font-medium"
            >
              About
            </Link>
            <Link
              href="/work"
              className="text-slate-300 hover:text-teal-400 transition-colors duration-200 font-medium"
            >
              Work
            </Link>
            <Link
              href="/contact"
              className="px-6 py-2 text-sm font-semibold text-white bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg shadow-lg shadow-teal-500/20 transition-all duration-300 hover:shadow-teal-500/40 hover:scale-105"
            >
              Hire Me
            </Link>
          </nav>

          <div className="md:hidden">
            <MainNavbar />
          </div>
        </div>
      </div>
    </header>
  );
}

