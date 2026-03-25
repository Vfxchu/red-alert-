"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { CheckCircle2 } from "lucide-react";
import { fadeUp, slideLeft, staggerContainer } from "@/lib/animations";

const points = [
  { title: "Local Expertise", desc: "Serving Ernakulam, Thrissur & all Kerala with fast on-site support." },
  { title: "Certified Technicians", desc: "Trained professionals for Hikvision, Dahua, and all major brands." },
  { title: "24/7 Emergency Support", desc: "Always on call to ensure your systems never go offline." },
  { title: "Fast Installation", desc: "Same-week deployment with clean, professional wiring." },
  { title: "Transparent Pricing", desc: "Honest quotes with absolutely no hidden charges." },
  { title: "Post-Sale AMC", desc: "Comprehensive Annual Maintenance Contracts available." },
];

export default function WhyRedAlert() {
  return (
    <SectionWrapper id="why-us" className="bg-[#050816]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
        
        {/* Left: Image */}
        <motion.div
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative h-[400px] md:h-[600px] w-full rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)] border border-[rgba(255,255,255,0.05)]"
        >
          <Image
            src="/images/why_choose_us.png"
            alt="Security engineer installing cables"
            fill
            className="object-cover opacity-80"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* Pure dark overlay for the image */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/40 to-transparent flex flex-col justify-end p-6 md:p-8">
            <div className="bg-[rgba(255,255,255,0.05)] backdrop-blur-xl border border-[rgba(255,255,255,0.15)] p-4 md:p-6 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
              <p className="text-white font-sora text-xl md:text-2xl font-bold mb-1 md:mb-2">Est. 2017</p>
              <p className="text-[#B6C2CF] text-xs md:text-sm font-medium">7+ years of protecting what matters most.</p>
            </div>
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeUp} className="mb-8 md:mb-10">
            <h2 className="text-3xl md:text-5xl font-sora font-bold text-white mb-4 md:mb-6 leading-tight text-glow">
              Why Choose Red Alert?
            </h2>
            <p className="text-base md:text-lg text-[#B6C2CF] leading-relaxed">
              We don't just install cameras. We build comprehensive security ecosystems — 
              combining surveillance, access control, and networking into one seamless solution.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 md:gap-x-8 gap-y-6 md:gap-y-10">
            {points.map((point, idx) => (
              <motion.div key={idx} variants={fadeUp} className="flex gap-4 group">
                {/* Icon inside a tiny glass pill instead of raw color */}
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[rgba(255,255,255,0.15)] transition-colors">
                  <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-white" stroke="currentColor" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">{point.title}</h3>
                  <p className="text-[#94A3B8] text-sm md:text-base leading-relaxed">{point.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
      </div>
    </SectionWrapper>
  );
}
