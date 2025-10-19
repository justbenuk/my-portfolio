"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";


export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      dx: number;
      dy: number;
      size: number;
      opacity: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(45, 212, 191, ${particle.opacity})`;
        ctx.fill();

        particle.x += particle.dx;
        particle.y += particle.dy;

        if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1;
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative flex items-center justify-center text-center min-h-[calc(100vh-120px)] overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none opacity-40"
      />

      <div className="relative z-10 max-w-6xl px-4">
        <div className="inline-block animate-fade-in-up">
          <span className="px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium backdrop-blur-sm">
            Welcome to my portfolio
          </span>
        </div>

        <h1 className="mt-8 text-5xl sm:text-6xl md:text-8xl font-black tracking-tight leading-tight animate-fade-in-up animation-delay-200">
          <span className="inline-block bg-gradient-to-r from-white via-teal-100 to-white text-transparent bg-clip-text">
            Crafting Digital
          </span>
          <br />
          <span className="inline-block bg-gradient-to-r from-teal-300 via-teal-400 to-cyan-400 text-transparent bg-clip-text animate-gradient-x">
            Experiences
          </span>
        </h1>

        <p className="mt-8 text-xl sm:text-2xl max-w-3xl mx-auto text-slate-300 animate-fade-in-up animation-delay-400 leading-relaxed">
          I&apos;m{" "}
          <span className="font-semibold text-teal-400">Ben Andrews</span>, a
          freelance web developer specialising in building{" "}
          <span className="text-white font-medium">fast</span>,{" "}
          <span className="text-white font-medium">responsive</span>, and{" "}
          <span className="text-white font-medium">beautiful</span> websites
          that help businesses grow.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6 animate-fade-in-up animation-delay-600">
          <Link
            href="/work"
            className="group relative px-10 py-4 text-lg font-semibold text-white bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl shadow-2xl shadow-teal-500/30 transition-all duration-300 hover:shadow-teal-500/50 hover:scale-105 overflow-hidden"
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>

          <Link
            href="/contact"
            className="group relative px-10 py-4 text-lg font-semibold text-white bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl shadow-xl transition-all duration-300 hover:bg-white/10 hover:border-teal-500/50 hover:scale-105"
          >
            <span className="relative z-10 bg-gradient-to-r from-white to-teal-200 text-transparent bg-clip-text">
              Hire Me
            </span>
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in-up animation-delay-800">
          <div className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-teal-500/50 transition-all duration-300 hover:scale-105">
            <div className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 text-transparent bg-clip-text">
              10+
            </div>
            <div className="mt-2 text-slate-300">Years Experience</div>
          </div>

          <div className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-teal-500/50 transition-all duration-300 hover:scale-105">
            <div className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 text-transparent bg-clip-text">
              Many
            </div>
            <div className="mt-2 text-slate-300">Projects Completed</div>
          </div>

          <div className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-teal-500/50 transition-all duration-300 hover:scale-105">
            <div className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 text-transparent bg-clip-text">
              100%
            </div>
            <div className="mt-2 text-slate-300">Satisfaction</div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-950/5 to-transparent pointer-events-none" />
    </div>
  );
}
