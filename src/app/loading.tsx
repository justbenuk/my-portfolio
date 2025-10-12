"use client";

import React, { useEffect, useRef } from "react";

export default function LoadingPage() {
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

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3,
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
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none opacity-40"
      />

      <div className="relative z-10 flex flex-col items-center space-y-8">
        {/* Animated Logo/Text */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/30 to-cyan-500/30 blur-3xl animate-pulse-glow" />
          <h1 className="relative text-6xl md:text-7xl font-black bg-gradient-to-r from-teal-300 via-teal-400 to-cyan-400 text-transparent bg-clip-text animate-gradient-x">
            BA
          </h1>
        </div>

        {/* Spinner Container */}
        <div className="relative">
          {/* Outer ring */}
          <div className="w-20 h-20 rounded-full border-4 border-white/10 absolute inset-0" />

          {/* Animated ring */}
          <div
            className="w-20 h-20 rounded-full border-4 border-transparent border-t-teal-400 border-r-cyan-400 animate-spin"
            role="status"
          >
            <span className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>

          {/* Inner pulse */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3 h-3 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full animate-pulse" />
          </div>
        </div>

        {/* Loading text */}
        <div className="flex items-center space-x-2">
          <p className="text-xl font-semibold text-slate-300">Loading</p>
          <div className="flex space-x-1">
            <span className="w-2 h-2 bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
            <span className="w-2 h-2 bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
            <span className="w-2 h-2 bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
          </div>
        </div>

        {/* Subtle message */}
        <p className="text-sm text-slate-400 animate-pulse">
          Preparing something amazing...
        </p>
      </div>
    </div>
  );
}
