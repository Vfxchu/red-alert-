"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp, staggerContainer, slideLeft, slideRight } from "@/lib/animations";
import GlassCard from "@/components/ui/GlassCard";
import CTABanner from "@/components/sections/CTABanner";
import { ArrowRight } from "lucide-react";
import React from "react";

export interface Feature {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface AdvancedServiceProps {
  title: string;
  subtitle: string;
  heroImage: string;
  overviewHeading: string;
  overviewText: string[];
  overviewImage: string;
  features: Feature[];
  processSteps: { step: string; title: string; desc: string }[];
  brands: string[];
  useCases: { title: string; desc: string }[];
  galleryImages: string[];
}

export default function AdvancedServiceTemplate({
  title,
  subtitle,
  heroImage,
  overviewHeading,
  overviewText,
  overviewImage,
  features,
  processSteps,
  brands,
  useCases,
  galleryImages,
}: AdvancedServiceProps) {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-[#050816]">
      
      {/* 1. Hero Parallax Banner */}
      <section className="relative h-[70vh] min-h-[500px] w-full flex items-center justify-center overflow-hidden pt-20 border-b border-[rgba(255,255,255,0.05)]">
        <motion.div 
          initial={{ scale: 1.1 }} 
          animate={{ scale: 1 }} 
          transition={{ duration: 1.5, ease: "easeOut" }} 
          className="absolute inset-0 z-0 opacity-40"
        >
          <Image src={heroImage} alt={title} fill className="object-cover" priority />
        </motion.div>
        
        {/* Strictly dark vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050816]/90 via-[#050816]/70 to-[#050816]" />
        
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4 md:px-8 mt-10">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.span variants={fadeUp} className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.15)] text-[#B6C2CF] text-xs md:text-sm font-bold tracking-widest uppercase mb-4 md:mb-6 backdrop-blur-md">
              Premium Installation Service
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-sora font-bold text-white mb-4 md:mb-6 leading-tight text-glow tracking-tight">
              {title}
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-[#94A3B8] max-w-3xl mx-auto font-medium">
              {subtitle}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 2. Overview / Why Choose Us */}
      <section className="py-12 md:py-24 bg-[#0B1120] relative border-b border-[rgba(255,255,255,0.05)]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div variants={slideLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-sora font-bold text-white mb-4 md:mb-6 leading-tight">
                {overviewHeading}
              </h2>
              {/* White glowing divider */}
              <div className="w-16 md:w-20 h-[2px] bg-[rgba(255,255,255,0.3)] mb-6 md:mb-8 shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
              <div className="space-y-4 md:space-y-6 text-[#B6C2CF] text-base md:text-lg leading-relaxed">
                {overviewText.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </motion.div>
            <motion.div variants={slideRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative h-[350px] md:h-[450px] rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)] border border-[rgba(255,255,255,0.1)] group">
              <Image src={overviewImage} alt="Service Overview" fill className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] to-transparent mix-blend-multiply"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Core Features Grid */}
      <section className="py-12 md:py-24 bg-[#050816] border-b border-[rgba(255,255,255,0.05)]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
            <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl md:text-4xl lg:text-5xl font-sora font-bold text-white mb-4">
              Advanced Technology & Features
            </motion.h2>
            <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-[#94A3B8] text-base md:text-lg">
              Engineered for maximum reliability and unmatched performance.
            </motion.p>
          </div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, idx) => (
              <motion.div key={idx} variants={fadeUp} className="h-full">
                <GlassCard className="h-full !p-5 md:!p-8 hover:border-[rgba(255,255,255,0.3)] group">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-2xl flex items-center justify-center text-white mb-4 md:mb-6 group-hover:bg-[rgba(255,255,255,0.1)] transition-colors">
                    <feature.icon className="w-6 h-6 md:w-8 md:h-8" stroke="currentColor" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-sora font-bold text-white mb-2 md:mb-3 group-hover:text-shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-all">{feature.title}</h3>
                  <p className="text-sm md:text-base text-[#B6C2CF] leading-relaxed group-hover:text-white transition-colors">{feature.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. Our Process Step-by-Step */}
      <section className="py-12 md:py-24 bg-[#0B1120] border-b border-[rgba(255,255,255,0.05)]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-sora font-bold text-white mb-12 md:mb-16 text-center">
            Our Proven 4-Step Process
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-8 relative">
            {/* Desktop connecting line - Dark glass variant */}
            <div className="hidden md:block absolute top-[48px] left-[10%] right-[10%] h-[1px] bg-[rgba(255,255,255,0.15)] z-0"></div>
            
            {processSteps.map((step, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                {/* Step Circle - Dark Glass */}
                <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-[rgba(255,255,255,0.02)] backdrop-blur-xl border border-[rgba(255,255,255,0.15)] shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex items-center justify-center mb-4 md:mb-6 relative overflow-hidden group-hover:border-[rgba(255,255,255,0.5)] transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                  <span className="text-2xl md:text-3xl font-sora font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">{step.title}</h3>
                <p className="text-[#94A3B8] text-sm md:text-base leading-relaxed max-w-[250px] group-hover:text-[#B6C2CF] transition-colors">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Supported Brands Marquee Strip */}
      <section className="py-8 md:py-12 bg-[#050816] overflow-hidden border-b border-[rgba(255,255,255,0.05)]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center mb-6 md:mb-8">
          <h3 className="text-[#94A3B8] font-inter tracking-widest uppercase text-xs md:text-sm font-semibold">Authorised Dealer & Integrator For</h3>
        </div>
        <div className="flex w-[200%] gap-8 animate-[slide_20s_linear_infinite]">
          {[...brands, ...brands, ...brands].map((brand, idx) => (
            <div key={idx} className="flex-none px-8 md:px-12 py-3 md:py-4">
              <span className="text-3xl md:text-5xl font-bold text-[rgba(255,255,255,0.15)] font-sora hover:text-white transition-colors cursor-default whitespace-nowrap">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Ideal Use Cases */}
      <section className="py-12 md:py-24 bg-[#0B1120] border-b border-[rgba(255,255,255,0.05)]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-sora font-bold text-white mb-10 md:mb-12 text-center">
            Industries We Secure
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] rounded-[1.5rem] md:rounded-2xl p-5 md:p-8 hover:bg-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.2)] group transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
              >
                <div className="w-10 h-[2px] bg-[rgba(255,255,255,0.2)] mb-4 md:mb-6 group-hover:bg-white group-hover:shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all duration-300"></div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-white">{useCase.title}</h3>
                <p className="text-sm md:text-base text-[#94A3B8] leading-relaxed group-hover:text-[#B6C2CF] transition-colors">{useCase.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Gallery Snapshot */}
      <section className="py-12 md:py-24 bg-[#050816]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex justify-between items-end mb-8 md:mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-sora font-bold text-white mb-3 md:mb-4">Installation Gallery</h2>
              <p className="text-[#B6C2CF] text-base md:text-lg">Real setups executed flawlessly by our expert engineers.</p>
            </div>
            <a href="/gallery" className="hidden md:flex items-center gap-2 text-base md:text-lg text-white font-bold hover:text-[#B6C2CF] transition-colors">
              View All Projects <ArrowRight className="w-6 h-6" stroke="currentColor" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryImages.map((img, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="relative h-64 md:h-80 rounded-[1.5rem] md:rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.6)] border border-[rgba(255,255,255,0.1)] group"
              >
                <Image src={img} alt="Installation photo" fill className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-[#050816]/40 group-hover:bg-transparent transition-colors duration-500"></div>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <a href="/gallery" className="inline-flex glass-btn items-center gap-2 text-white font-bold px-6 py-3 rounded-full transition-all text-base">
              View All Projects <ArrowRight className="w-5 h-5" stroke="currentColor" />
            </a>
          </div>
        </div>
      </section>

      {/* 8. CTA */}
      <CTABanner />

      {/* Animation CSS for Marquee */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </div>
  );
}
