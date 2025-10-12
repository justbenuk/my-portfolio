"use client";

import LoginForm from "@/forms/auth/login-form";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Lock } from "lucide-react";

export default function LoginPage() {
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
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden p-4">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none opacity-30"
      />

      <div className="relative z-10 w-full max-w-4xl">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition duration-500" />

          <div className="relative p-8 md:p-12 rounded-3xl glass-effect border border-white/10">
            {/* Header */}
            <div className="flex flex-col items-center gap-6 mb-8 animate-fade-in-up">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-teal-500/30">
                <Lock className="w-8 h-8 text-white" />
              </div>

              <div className="text-center space-y-2">
                <h1 className="text-3xl font-black text-white">
                  Client Login
                </h1>
                <p className="text-slate-400">
                  Enter your credentials to access your account
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="animate-fade-in-up animation-delay-200">
              <LoginForm />
            </div>

            {/* Footer */}
            <div className="mt-8 pt-6 border-t border-white/10 text-center animate-fade-in-up animation-delay-400">
              <p className="text-sm text-slate-400">
                Don&apos;t have an account?{" "}
                <Link
                  href="/register"
                  className="text-teal-400 hover:text-teal-300 font-medium transition-colors"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-6 text-center animate-fade-in-up animation-delay-600">
          <Link
            href="/"
            className="text-slate-400 hover:text-teal-400 transition-colors text-sm"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
