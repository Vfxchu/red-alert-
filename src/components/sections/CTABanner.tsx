"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeUp } from "@/lib/animations";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-red-brand">
      {/* Decorative large logo outline */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.05] pointer-events-none">
        <svg className="w-[800px] h-[800px] text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6 leading-tight">
            Ready to Secure Your Property?
          </h2>
          <p className="text-xl text-white/90 font-medium mb-10">
            Get a free, no-obligation site survey from our expert team. We'll assess your needs and design the perfect security ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white hover:bg-gray-100 text-red-brand px-10 py-4 rounded-full font-bold text-lg transition-all shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] hover:-translate-y-1"
            >
              Book a Free Site Visit
            </Link>
            <a
              href="https://wa.me/919961334337"
              className="bg-transparent hover:bg-white/10 border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg transition-all"
            >
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
