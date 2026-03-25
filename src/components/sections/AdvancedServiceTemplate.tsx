"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp, staggerContainer, slideLeft, slideRight } from "@/lib/animations";
import GlassCard from "@/components/ui/GlassCard";
import CTABanner from "@/components/sections/CTABanner";
import { CheckCircle2, ArrowRight } from "lucide-react";
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
    <div className="flex flex-col w-full overflow-hidden bg-[#FAFAFA]">
      
      {/* 1. Hero Parallax Banner */}
      <section className="relative h-[70vh] min-h-[500px] w-full flex items-center justify-center overflow-hidden pt-20">
        <motion.div 
          initial={{ scale: 1.1 }} 
          animate={{ scale: 1 }} 
          transition={{ duration: 1.5, ease: "easeOut" }} 
          className="absolute inset-0 z-0"
        >
          <Image src={heroImage} alt={title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-deep-black/80 via-deep-black/50 to-deep-black/90" />
        </motion.div>
        
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6 mt-10">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.span variants={fadeUp} className="inline-block px-4 py-1.5 rounded-full bg-red-brand/20 border border-red-brand/50 text-white text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
              Premium Installation Service
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-white mb-6 leading-tight drop-shadow-xl">
              {title}
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl md:text-2xl text-off-white/90 max-w-3xl mx-auto font-medium drop-shadow-md">
              {subtitle}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 2. Overview / Why Choose Us */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={slideLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-deep-black mb-6 leading-tight">
                {overviewHeading}
              </h2>
              <div className="w-20 h-1 bg-red-brand mb-8 rounded-full"></div>
              <div className="space-y-6 text-dark-grey text-lg leading-relaxed">
                {overviewText.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </motion.div>
            <motion.div variants={slideRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl group">
              <Image src={overviewImage} alt="Service Overview" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-red-brand/10 mix-blend-overlay"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Core Features Grid */}
      <section className="py-24 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl lg:text-4xl font-playfair font-bold text-deep-black mb-4">
              Advanced Technology & Features
            </motion.h2>
            <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-dark-grey text-lg">
              Engineered for maximum reliability and unmatched performance.
            </motion.p>
          </div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div key={idx} variants={fadeUp}>
                <GlassCard className="bg-white/90 border border-gray-100 shadow-xl hover:-translate-y-2 transition-transform duration-300 h-full !p-8">
                  <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-red-brand mb-6 shadow-inner">
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-deep-black mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. Our Process Step-by-Step */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-deep-black mb-16 text-center">
            Our Proven 4-Step Process
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Desktop connecting line */}
            <div className="hidden md:block absolute top-[45px] left-[10%] right-[10%] h-0.5 bg-gray-200 z-0"></div>
            
            {processSteps.map((step, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 rounded-full bg-white border-4 border-white shadow-xl flex items-center justify-center mb-6 relative overflow-hidden group-hover:border-red-brand transition-colors duration-300">
                  <div className="absolute inset-0 bg-[#F5F5F5] -z-10 group-hover:bg-red-50 transition-colors duration-300"></div>
                  <span className="text-3xl font-playfair font-bold text-red-brand">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-deep-black mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-[250px]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Supported Brands Marquee Strip */}
      <section className="py-12 bg-deep-black overflow-hidden border-y border-red-brand/30">
        <div className="max-w-7xl mx-auto px-6 text-center mb-8">
          <h3 className="text-accent-gold font-semibold tracking-widest uppercase text-sm">Authorised Dealer & Integrator For</h3>
        </div>
        <div className="flex w-[200%] gap-8 animate-[slide_20s_linear_infinite]">
          {/* Double the array for seamless loop */}
          {[...brands, ...brands, ...brands].map((brand, idx) => (
            <div key={idx} className="flex-none px-12 py-4">
              <span className="text-3xl md:text-5xl font-bold text-white/40 font-playfair hover:text-white transition-colors cursor-default whitespace-nowrap">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Ideal Use Cases */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-deep-black mb-12 text-center">
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
                className="bg-[#F5F5F5] rounded-2xl p-8 hover:bg-red-brand hover:text-white group transition-colors duration-300"
              >
                <div className="w-10 h-1 bg-red-brand mb-6 group-hover:bg-white transition-colors duration-300"></div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-white text-deep-black">{useCase.title}</h3>
                <p className="text-sm group-hover:text-white/90 text-gray-600 leading-relaxed">{useCase.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Gallery Snapshot */}
      <section className="py-24 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-deep-black mb-4">Installation Gallery</h2>
              <p className="text-dark-grey text-lg">Real setups executed flawlessly by our expert engineers.</p>
            </div>
            <a href="/gallery" className="hidden md:flex items-center gap-2 text-red-brand font-bold hover:text-red-900 transition-colors">
              View All Projects <ArrowRight className="w-5 h-5" />
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
                className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg group"
              >
                <Image src={img} alt="Installation photo" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-deep-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <a href="/gallery" className="inline-flex items-center gap-2 text-red-brand font-bold border border-red-brand px-6 py-3 rounded-full hover:bg-red-brand hover:text-white transition-all">
              View All Projects <ArrowRight className="w-5 h-5" />
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
