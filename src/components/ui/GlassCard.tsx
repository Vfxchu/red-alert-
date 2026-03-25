import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  dark?: boolean;
}

export default function GlassCard({ children, className = "", dark = false }: GlassCardProps) {
  const baseClass = dark ? "glass-card-dark" : "glass-card";
  return (
    <div className={`${baseClass} rounded-2xl p-8 h-full flex flex-col ${className}`}>
      {children}
    </div>
  );
}
