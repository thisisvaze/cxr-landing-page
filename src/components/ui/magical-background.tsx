"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib";

interface MagicalBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  particleCount?: number;
  primaryColor?: string;
  secondaryColor?: string;
  accentColor?: string;
}

export function MagicalBackground({
  className,
  particleCount = 20,
  primaryColor = "#9E7AFF",
  secondaryColor = "#FE8BBB",
  accentColor = "#3ABEFF",
  ...props
}: MagicalBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    let particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      opacity: number;
      opacitySpeed: number;
    }[] = [];
    
    const colors = [primaryColor, secondaryColor, accentColor];
    
    const resizeCanvas = () => {
      // Get the parent element's width to ensure full coverage
      const parentWidth = canvas.parentElement?.offsetWidth || window.innerWidth;
      const parentHeight = canvas.parentElement?.offsetHeight || window.innerHeight;
      
      // Set canvas dimensions to match parent or viewport
      canvas.width = parentWidth;
      canvas.height = parentHeight;
      
      initParticles();
    };
    
    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 4 + 1,
          speedX: Math.random() * 0.2 - 0.1,
          speedY: Math.random() * 0.2 - 0.1,
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: Math.random() * 0.5,
          opacitySpeed: Math.random() * 0.01
        });
      }
    };
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width / 1.5
      );
      gradient.addColorStop(0, "rgba(10, 10, 10, 1)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 1)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw particles
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color + Math.floor(particle.opacity * 255).toString(16).padStart(2, '0');
        ctx.fill();
        
        // Update particle position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Update opacity for twinkling effect
        particle.opacity += particle.opacitySpeed;
        if (particle.opacity <= 0 || particle.opacity >= 0.5) {
          particle.opacitySpeed = -particle.opacitySpeed;
        }
        
        // Wrap particles around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
      });
      
      requestAnimationFrame(animate);
    };
    
    // Add resize event listener to handle window resizing
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    animate();
    
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [particleCount, primaryColor, secondaryColor, accentColor]);
  
  return (
    <div className={cn("absolute inset-0 -z-10 overflow-hidden w-full", className)} {...props}>
      <canvas 
        ref={canvasRef} 
        className="w-full h-full"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      
      {/* Subtle glow effects */}
      <motion.div 
        className="absolute top-0 left-0 right-0 mx-auto w-3/4 h-1/3 rounded-full opacity-20 blur-[100px]"
        style={{ background: `linear-gradient(to right, ${primaryColor}, ${secondaryColor})` }}
        animate={{
          opacity: [0.1, 0.2, 0.1],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div 
        className="absolute bottom-0 left-0 right-0 mx-auto w-3/4 h-1/4 rounded-full opacity-15 blur-[80px]"
        style={{ background: `linear-gradient(to right, ${secondaryColor}, ${accentColor})` }}
        animate={{
          opacity: [0.1, 0.15, 0.1],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 2
        }}
      />
    </div>
  );
} 