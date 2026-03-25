"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { scaleIn, staggerContainer } from "@/lib/animations";

const stats = [
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 7, suffix: "+", label: "Years of Excellence" },
  { value: 1000, suffix: "+", label: "Devices Installed" },
  { value: 24, suffix: "/7", label: "Support Available" },
];

function Counter({ from, to, duration = 2 }: { from: number; to: number; duration?: number }) {
  const [count, setCount] = useState(from);
  const nodeRef = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setInView(true);
      },
      { threshold: 0.5 }
    );
    if (nodeRef.current) observer.observe(nodeRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      
      // Easing out function
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * (to - from) + from));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [inView, from, to, duration]);

  return <span ref={nodeRef}>{count}</span>;
}

export default function StatsSection() {
  return (
    <SectionWrapper dark className="bg-deep-black relative py-20 lg:py-24">
      {/* Decorative background grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />
      
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12 relative z-10"
      >
        {stats.map((stat, idx) => (
          <motion.div key={idx} variants={scaleIn} className="text-center">
            <div className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-accent-gold mb-4 text-glow flex justify-center items-center">
              <Counter from={0} to={stat.value} />
              <span>{stat.suffix}</span>
            </div>
            <p className="text-off-white/80 font-medium text-sm md:text-base uppercase tracking-widest">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
