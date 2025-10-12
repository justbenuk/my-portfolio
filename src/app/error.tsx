'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { AlertTriangle, RefreshCw, Home, ArrowLeft } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)

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
  }, [error])

  return (
    <div className='relative min-h-screen flex flex-col items-center justify-center overflow-hidden'>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none opacity-30"
      />

      <div className='relative z-10 text-center space-y-8 px-4 max-w-3xl mx-auto'>
        <div className="animate-fade-in-up">
          <div className="relative inline-flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 blur-3xl" />
            <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-red-500/10 to-orange-500/10 border-4 border-red-500/30 flex items-center justify-center animate-pulse-glow">
              <AlertTriangle className="w-16 h-16 text-red-400" />
            </div>
          </div>
        </div>

        <div className="space-y-4 animate-fade-in-up animation-delay-200">
          <h1 className="text-4xl md:text-5xl font-black text-white">
            Oops! Something Went Wrong
          </h1>
          <p className='text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed'>
            Don&apos;t worry, these things happen. Let&apos;s try to get you back on track.
          </p>
        </div>

        {/* Error Details - Only show in development */}
        {process.env.NODE_ENV === 'development' && error.message && (
          <div className="animate-fade-in-up animation-delay-300">
            <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/20 backdrop-blur-sm">
              <p className="text-sm text-red-400 font-mono break-words">
                {error.message}
              </p>
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-400">
          <button
            onClick={reset}
            className="group flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl shadow-2xl shadow-teal-500/30 transition-all duration-300 hover:shadow-teal-500/50 hover:scale-105"
          >
            <RefreshCw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
            <span>Try Again</span>
          </button>

          <Link
            href="/"
            className="group flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl shadow-xl transition-all duration-300 hover:bg-white/10 hover:border-teal-500/50 hover:scale-105"
          >
            <Home className="w-5 h-5" />
            <span>Go Home</span>
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

        <div className="pt-8 text-sm text-slate-500 animate-fade-in-up animation-delay-1000">
          <p>If this error persists, please <Link href="/contact" className="text-teal-400 hover:text-teal-300 underline">contact me</Link> for support.</p>
        </div>
      </div>
    </div>
  )
}
