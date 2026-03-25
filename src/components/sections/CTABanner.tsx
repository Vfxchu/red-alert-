"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeUp } from "@/lib/animations";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-[#050816] border-y border-[rgba(255,255,255,0.05)]">
      {/* Decorative large logo outline - Dark Glass style */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none">
        <svg className="w-[800px] h-[800px] text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B1120]/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-24 relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mx-auto bg-[rgba(255,255,255,0.02)] backdrop-blur-sm border border-[rgba(255,255,255,0.08)] p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-sora font-bold text-white mb-4 md:mb-6 leading-tight text-glow">
            Ready to Secure Your Property?
          </h2>
          <p className="text-base md:text-lg text-[#B6C2CF] font-medium mb-8 md:mb-10">
            Get a free, no-obligation site survey from our expert team. We'll assess your needs and design the perfect security ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="glass-btn text-white px-6 py-3 md:px-10 md:py-4 rounded-full font-bold text-base md:text-lg transition-all shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.6)] hover:-translate-y-1"
            >
              Book a Free Site Visit
            </Link>
            <a
              href="https://wa.me/919961334337"
              className="bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] text-white px-6 py-3 md:px-10 md:py-4 rounded-full font-bold text-base md:text-lg transition-all"
            >
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
