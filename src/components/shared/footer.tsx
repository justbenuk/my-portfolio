"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const navigation = {
    main: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Work", href: "/work" },
      { name: "Contact", href: "/contact" },
    ],
    social: [
      {
        name: "GitHub",
        href: "https://github.com",
        icon: Github,
      },
      {
        name: "LinkedIn",
        href: "https://linkedin.com",
        icon: Linkedin,
      },
      {
        name: "Twitter",
        href: "https://twitter.com",
        icon: Twitter,
      },
      {
        name: "Email",
        href: "mailto:justbenuk@gmail.com",
        icon: Mail,
      },
    ],
  };

  return (
    <footer className="relative mt-20 border-t border-white/10">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-950/5 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block group">
              <h2 className="text-3xl font-black bg-gradient-to-r from-teal-300 via-teal-400 to-cyan-400 text-transparent bg-clip-text animate-gradient-x">
                Ben Andrews
              </h2>
            </Link>
            <p className="text-slate-400 max-w-md leading-relaxed">
              Freelance web developer specialising in building fast, responsive,
              and beautiful websites that help businesses grow.
            </p>
            <div className="flex items-center gap-4">
              {navigation.social.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-10 h-10 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-teal-500/50 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-teal-500/10"
                  >
                    <Icon className="w-5 h-5 text-slate-400 group-hover:text-teal-400 transition-colors duration-300" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-teal-400 transition-colors duration-200 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-teal-400 group-hover:w-4 transition-all duration-300" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Get In Touch</h3>
            <div className="space-y-3 text-slate-400">
              <a
                href="mailto:justbenuk@gmail.com"
                className="block hover:text-teal-400 transition-colors duration-200"
              >
                justbenuk@gmail.com
              </a>
              <a
                href="tel:07916019809"
                className="block hover:text-teal-400 transition-colors duration-200"
              >
                07916 019 809
              </a>
              <p>Tamworth, UK</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm text-center md:text-left">
            © {currentYear} Ben Andrews. All rights reserved. Made with{" "}
            <Heart className="inline w-4 h-4 text-red-500 fill-current animate-pulse" />{" "}
            in the UK.
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-teal-500/50 text-slate-400 hover:text-teal-400 transition-all duration-300 hover:scale-105"
          >
            <span className="text-sm font-medium">Back to top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Decorative gradient orbs */}
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
    </footer>
  );
}
