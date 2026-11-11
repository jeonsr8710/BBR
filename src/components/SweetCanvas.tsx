"use client";

import { useEffect, useRef } from "react";

interface SweetCanvasProps {
  color?: string;
  secondaryColor?: string;
  density?: number;
}

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  kind: "dot" | "heart" | "sprinkle";
  angle: number;
}

export function SweetCanvas({
  color = "rgba(253, 224, 71, 0.8)",
  secondaryColor = "rgba(251, 113, 133, 0.8)",
  density = 48,
}: SweetCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId = 0;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const kinds: Particle["kind"][] = ["dot", "heart", "sprinkle"];
    const particles: Particle[] = Array.from({ length: density }, (_, i) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 3.5 + 2.2,
      speedY: Math.random() * 0.75 + 0.35,
      speedX: (Math.random() - 0.5) * 0.45,
      opacity: Math.random() * 0.55 + 0.3,
      kind: kinds[i % kinds.length],
      angle: Math.random() * Math.PI * 2,
    }));

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);

    const drawHeart = (x: number, y: number, r: number) => {
      ctx.beginPath();
      ctx.moveTo(x, y + r * 0.35);
      ctx.bezierCurveTo(x - r, y - r * 0.4, x - r * 1.1, y + r * 0.6, x, y + r * 1.2);
      ctx.bezierCurveTo(x + r * 1.1, y + r * 0.6, x + r, y - r * 0.4, x, y + r * 0.35);
      ctx.fill();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(p.y * 0.015) * 0.22;
        p.angle += 0.015;

        if (p.y > height + 10) {
          p.y = -10;
          p.x = Math.random() * width;
        }
        if (p.x > width + 10) p.x = -10;
        if (p.x < -10) p.x = width + 10;

        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.kind === "heart" ? secondaryColor : color;

        if (p.kind === "heart") {
          drawHeart(p.x, p.y, p.size * 1.1);
        } else if (p.kind === "sprinkle") {
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.angle);
          ctx.fillRect(-p.size * 0.9, -p.size * 0.3, p.size * 1.8, p.size * 0.6);
          ctx.restore();
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 0.65, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;
      animationId = window.requestAnimationFrame(render);
    };

    render();

    return () => {
      window.cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, [color, secondaryColor, density]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
