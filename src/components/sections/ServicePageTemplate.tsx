"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GlassCard from "@/components/ui/GlassCard";
import CTABanner from "@/components/sections/CTABanner";
import { fadeUp, staggerContainer, slideLeft } from "@/lib/animations";

interface ServicePageTemplateProps {
  title: string;
  subtitle: string;
  heroImage: string;
  offers: string[];
  brands?: string[];
  useCases: string[];
}

export default function ServicePageTemplate({
  title,
  subtitle,
  heroImage,
  offers,
  brands,
  useCases,
}: ServicePageTemplateProps) {
  return (
    <div className="flex flex-col w-full overflow-hidden pt-24 bg-[#050816]">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center border-b border-[rgba(255,255,255,0.05)]">
        <Image
          src={heroImage}
          alt={title}
          fill
          priority
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-[#050816]/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/40 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center mt-10">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-6xl lg:text-7xl font-sora font-bold text-white mb-4 md:mb-6 leading-tight text-glow tracking-tight"
          >
            {title}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-[#B6C2CF] font-medium max-w-3xl mx-auto"
          >
            {subtitle}
          </motion.p>
        </div>
      </section>

      {/* What We Offer */}
      <SectionWrapper title="What We Offer" className="bg-[#0B1120]">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {offers.map((offer, idx) => (
            <motion.div key={idx} variants={fadeUp} className="h-full">
              <GlassCard className="!p-5 md:!p-8 flex items-start gap-4 hover:border-[rgba(255,255,255,0.2)] group">
                <CheckCircle2 className="w-6 h-6 md:w-8 md:h-8 text-white shrink-0 mt-0.5 group-hover:text-white transition-colors" stroke="currentColor" />
                <span className="font-semibold text-base md:text-lg text-white group-hover:text-shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-all">{offer}</span>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* How It Works (3 Steps) */}
      <SectionWrapper className="bg-[#050816]">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-sora font-bold text-white mb-4">How It Works</h2>
        </div>
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 relative"
        >
          {/* Connecting line (desktop only) - Dark glass variant */}
          <div className="hidden md:block absolute top-[44px] left-[16%] right-[16%] h-[1px] bg-[rgba(255,255,255,0.1)] -z-10" />

          {[
            { step: "01", title: "Free Site Survey", desc: "Our expert visits, evaluates your space, and recommends solutions." },
            { step: "02", title: "Custom Design", desc: "We create a tailored plan and select the best brands for your budget." },
            { step: "03", title: "Professional Install", desc: "Clean wiring, full system configuration, and user training." }
          ].map((item, idx) => (
            <motion.div key={idx} variants={fadeUp} className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-[rgba(255,255,255,0.05)] backdrop-blur-md border-[2px] border-[rgba(255,255,255,0.1)] flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.5)] mb-4 md:mb-6 text-white font-sora text-2xl md:text-3xl font-bold group-hover:border-[rgba(255,255,255,0.3)] transition-colors">
                {item.step}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">{item.title}</h3>
              <p className="text-base md:text-lg text-[#94A3B8] leading-relaxed group-hover:text-[#B6C2CF] transition-colors">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* Brands & Use Cases */}
      <SectionWrapper className="bg-[#0B1120] text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {brands && brands.length > 0 && (
            <motion.div variants={slideLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-sora font-bold text-white mb-6 md:mb-8">Brands We Install</h2>
              <div className="flex flex-wrap gap-3 md:gap-4">
                {brands.map((brand, idx) => (
                  <span key={idx} className="bg-[rgba(255,255,255,0.05)] backdrop-blur-md border border-[rgba(255,255,255,0.15)] text-sm md:text-base px-4 py-2 md:px-6 md:py-3 rounded-xl font-semibold tracking-wide text-white shadow-[0_4px_16px_rgba(0,0,0,0.3)] hover:bg-[rgba(255,255,255,0.1)] transition-colors cursor-default">
                    {brand}
                  </span>
                ))}
              </div>
            </motion.div>
          )}

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-sora font-bold text-white mb-6 md:mb-8">Ideal For</h2>
            <div className="flex flex-wrap gap-3 md:gap-4">
              {useCases.map((useCase, idx) => (
                <span key={idx} className="bg-white text-[#050816] text-sm md:text-base px-4 py-2 md:px-6 md:py-3 rounded-full font-bold shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                  {useCase}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </SectionWrapper>

      <CTABanner />
    </div>
  );
}
