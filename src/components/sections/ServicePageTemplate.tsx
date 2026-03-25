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
    <div className="flex flex-col w-full overflow-hidden pt-24 bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <Image
          src={heroImage}
          alt={title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-deep-black/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-white mb-6 leading-tight drop-shadow-xl"
          >
            {title}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-off-white font-medium max-w-3xl mx-auto drop-shadow-lg"
          >
            {subtitle}
          </motion.p>
        </div>
      </section>

      {/* What We Offer */}
      <SectionWrapper title="What We Offer" className="bg-[#F5F5F5]">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {offers.map((offer, idx) => (
            <motion.div key={idx} variants={fadeUp} className="h-full">
              <GlassCard className="!p-6 flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-red-brand shrink-0 mt-0.5" />
                <span className="font-semibold text-deep-black">{offer}</span>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* How It Works (3 Steps) */}
      <SectionWrapper className="bg-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold text-red-brand mb-4">How It Works</h2>
        </div>
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 relative"
        >
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-[44px] left-[16%] right-[16%] h-0.5 bg-red-brand/20 -z-10" />

          {[
            { step: "01", title: "Free Site Survey", desc: "Our expert visits, evaluates your space, and recommends solutions." },
            { step: "02", title: "Custom Design", desc: "We create a tailored plan and select the best brands for your budget." },
            { step: "03", title: "Professional Install", desc: "Clean wiring, full system configuration, and user training." }
          ].map((item, idx) => (
            <motion.div key={idx} variants={fadeUp} className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-white border-4 border-red-brand flex items-center justify-center shadow-xl mb-6 text-red-brand font-playfair text-3xl font-bold">
                {item.step}
              </div>
              <h3 className="text-2xl font-bold text-deep-black mb-3">{item.title}</h3>
              <p className="text-dark-grey leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* Brands & Use Cases */}
      <SectionWrapper className="bg-deep-black text-white" dark>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {brands && brands.length > 0 && (
            <motion.div variants={slideLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="text-3xl font-playfair font-bold text-accent-gold mb-8">Brands We Install</h2>
              <div className="flex flex-wrap gap-4">
                {brands.map((brand, idx) => (
                  <span key={idx} className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-xl font-semibold tracking-wide">
                    {brand}
                  </span>
                ))}
              </div>
            </motion.div>
          )}

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl font-playfair font-bold text-red-brand mb-8">Ideal For</h2>
            <div className="flex flex-wrap gap-4">
              {useCases.map((useCase, idx) => (
                <span key={idx} className="bg-white text-deep-black px-6 py-3 rounded-full font-semibold shadow-md">
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
