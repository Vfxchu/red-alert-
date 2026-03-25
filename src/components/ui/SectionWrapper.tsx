"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  title?: string;
  subtitle?: string;
  dark?: boolean; // Kept for API compatibility, but effectively everything is dark now
}

export default function SectionWrapper({
  children,
  id,
  className = "",
  title,
  subtitle,
  dark = true,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`py-12 md:py-24 bg-[#050816] text-[#B6C2CF] ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {(title || subtitle) && (
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
            {title && (
              <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="text-3xl md:text-5xl font-sora font-bold text-white mb-4 md:mb-6 leading-tight"
              >
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.1 }}
                className="text-base md:text-lg font-medium text-[#94A3B8]"
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
