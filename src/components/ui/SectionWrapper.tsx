"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  title?: string;
  subtitle?: string;
  dark?: boolean;
}

export default function SectionWrapper({
  children,
  id = "",
  className = "",
  title,
  subtitle,
  dark = false,
}: SectionWrapperProps) {
  return (
    <section 
      id={id} 
      className={`py-24 lg:py-32 ${dark ? "bg-deep-black text-white" : "bg-white text-dark-grey"} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {(title || subtitle) && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
          >
            {title && (
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-red-brand mb-6 leading-tight">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={`text-lg font-medium ${dark ? "text-off-white/80" : "text-gray-600"}`}>
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        
        {children}
      </div>
    </section>
  );
}
