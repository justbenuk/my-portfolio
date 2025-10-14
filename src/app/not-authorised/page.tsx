"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { ShieldAlert, Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotAuthorisedPage() {
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
        ctx.fillStyle = `rgba(239, 68, 68, ${particle.opacity})`;
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
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden p-4">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none opacity-30"
      />

      <div className="relative z-10 w-full max-w-4xl">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition duration-500" />

          <div className="relative p-8 md:p-12 rounded-3xl glass-effect border border-white/10">
            {/* Header */}
            <div className="flex flex-col items-center gap-6 mb-8 animate-fade-in-up">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center shadow-lg shadow-red-500/30">
                <ShieldAlert className="w-10 h-10 text-white" />
              </div>

              <div className="text-center space-y-4">
                <h1 className="text-4xl md:text-5xl font-black text-white">
                  Access Denied
                </h1>
                <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                  You don&apos;t have permission to access this page
                </p>
                <p className="text-base text-slate-400 max-w-xl mx-auto">
                  This area is restricted to authorized personnel only. If you believe this is an error, please contact your administrator.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-200">
              <Link href="/portal">
                <Button className="w-full sm:w-auto h-12 px-8 text-base font-semibold text-white bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 rounded-xl shadow-lg shadow-teal-500/30 hover:shadow-teal-500/50 transition-all duration-300 hover:scale-[1.02] group">
                  <ArrowLeft className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
                  <span>Back to Portal</span>
                </Button>
              </Link>

              <Link href="/">
                <Button className="w-full sm:w-auto h-12 px-8 text-base font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl transition-all duration-300 hover:scale-[1.02] group">
                  <Home className="mr-2 w-5 h-5" />
                  <span>Go Home</span>
                </Button>
              </Link>
            </div>

            {/* Additional Info */}
            <div className="mt-8 pt-6 border-t border-white/10 text-center animate-fade-in-up animation-delay-400">
              <p className="text-sm text-slate-500">
                Error Code: <span className="text-slate-400 font-mono">403 - FORBIDDEN</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
