"use client";

import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  dark?: boolean;
}

export default function GlassCard({ children, className = "", dark = false }: GlassCardProps) {
  // Relying on the pure dark glass CSS utilities defined in globals.css
  // .glass-card = translucent layer
  // .glass-card-dark = deeper frosted layer
  const baseClass = dark ? "glass-card-dark" : "glass-card";
  
  return (
    <div className={`${baseClass} rounded-3xl p-5 md:p-8 relative overflow-hidden group ${className}`}>
      {/* Subtle top inner glow for a premium glassy feel */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.2)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative z-10 h-full flex flex-col">
        {children}
      </div>
    </div>
  );
}
