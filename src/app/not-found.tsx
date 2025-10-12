"use client";

import Link from 'next/link'
import { Home, Search, ArrowLeft } from 'lucide-react'
import { useEffect, useRef } from 'react'

export default function NotFound() {
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

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2,
        opacity: Math.random() * 0.3 + 0.1,
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
    <div className='relative min-h-screen flex flex-col items-center justify-center overflow-hidden'>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none opacity-30"
      />

      <div className='relative z-10 text-center space-y-8 px-4 max-w-3xl mx-auto'>
        <div className="animate-fade-in-up">
          <div className="relative inline-block">
            <h1 className='bg-gradient-to-r from-teal-300 via-teal-400 to-cyan-400 text-transparent bg-clip-text text-[12rem] md:text-[16rem] font-black leading-none animate-gradient-x'>
              404
            </h1>
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 blur-3xl -z-10" />
          </div>
        </div>

        <div className="space-y-4 animate-fade-in-up animation-delay-200">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Oops! Page Not Found
          </h2>
          <p className='text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed'>
            The page you&apos;re looking for seems to have wandered off into the digital void.
            Don&apos;t worry, let&apos;s get you back on track!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-400">
          <Link
            href="/"
            className="group flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl shadow-2xl shadow-teal-500/30 transition-all duration-300 hover:shadow-teal-500/50 hover:scale-105"
          >
            <Home className="w-5 h-5" />
            <span>Return Home</span>
          </Link>

          <Link
            href="/contact"
            className="group flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl shadow-xl transition-all duration-300 hover:bg-white/10 hover:border-teal-500/50 hover:scale-105"
          >
            <Search className="w-5 h-5" />
            <span>Get Help</span>
          </Link>
        </div>

        <div className="pt-8 animate-fade-in-up animation-delay-600">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Go back to previous page</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 animate-fade-in-up animation-delay-800">
          <Link href="/about" className="group p-6 rounded-2xl glass-effect hover:border-teal-500/50 transition-all duration-300 hover:scale-105">
            <h3 className="text-lg font-semibold text-white mb-2">About Me</h3>
            <p className="text-sm text-slate-400">Learn more about what I do</p>
          </Link>

          <Link href="/work" className="group p-6 rounded-2xl glass-effect hover:border-teal-500/50 transition-all duration-300 hover:scale-105">
            <h3 className="text-lg font-semibold text-white mb-2">My Work</h3>
            <p className="text-sm text-slate-400">Check out my portfolio</p>
          </Link>

          <Link href="/contact" className="group p-6 rounded-2xl glass-effect hover:border-teal-500/50 transition-all duration-300 hover:scale-105">
            <h3 className="text-lg font-semibold text-white mb-2">Contact</h3>
            <p className="text-sm text-slate-400">Get in touch with me</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
