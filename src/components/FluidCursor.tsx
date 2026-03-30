"use client";
import { useEffect, useRef } from "react";

export default function FluidCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let points: { x: number; y: number; age: number }[] = [];
    const maxAge = 100;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const addPoint = (x: number, y: number) => {
      points.push({ x, y, age: 0 });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and Draw "Intelligence Nodes"
      points = points.filter((p) => p.age < maxAge);
      points.forEach((p) => {
        p.age++;
        const opacity = 1 - p.age / maxAge;
        
        // Use your brand colors: Emerald Green (#10b981)
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 150 * opacity);
        gradient.addColorStop(0, `rgba(16, 185, 129, ${0.15 * opacity})`);
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
        
        ctx.fillStyle = gradient;
        ctx.arc(p.x, p.y, 150 * opacity, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", (e) => addPoint(e.clientX, e.clientY));
    
    resize();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", (e) => addPoint(e.clientX, e.clientY));
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1]"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
