"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GlassCard from "@/components/ui/GlassCard";
import CTABanner from "@/components/sections/CTABanner";
import { fadeUp, staggerContainer, slideLeft, slideRight } from "@/lib/animations";
import { Award, Target, Eye, ShieldCheck } from "lucide-react";

const timeline = [
  { year: "2017", title: "Founded in Ernakulam", desc: "Started with a core focus on advanced CCTV installations for local businesses." },
  { year: "2018", title: "Networking Division", desc: "Expanded operations to include enterprise-grade structured cabling and LAN design." },
  { year: "2019", title: "Biometrics Added", desc: "Introduced smart face ID and fingerprint access control systems." },
  { year: "2021", title: "200+ Projects", desc: "Crossed a major milestone serving over 200 satisfied clients across central Kerala." },
  { year: "2023", title: "Smart Home Security", desc: "Launched integrated IoT security solutions for premium residences." },
  { year: "Now", title: "Kerala's Trusted Partner", desc: "Currently protecting 500+ clients with 24/7 dedicated support and AMC." },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden pt-24 bg-[#050816]">
      {/* Hero Section */}
      <section className="relative py-12 lg:py-32 bg-[#0B1120] border-b border-[rgba(255,255,255,0.05)] overflow-hidden">
        {/* Abstract Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[rgba(255,255,255,0.02)] rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-sora font-bold text-white mb-4 md:mb-6 leading-tight text-glow tracking-tight">
              Protecting What Matters Most
            </h1>
            <p className="text-lg md:text-xl text-[#B6C2CF] leading-relaxed">
              Founded in 2017 in Ernakulam, Red Alert Security Systems was built on a single belief: every home and business in Kerala deserves world-class protection without compromise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brand Story & Image */}
      <SectionWrapper className="bg-[#050816]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div variants={slideLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-sora font-bold text-white mb-4 md:mb-6">Our Journey</h2>
            <div className="w-16 md:w-20 h-[2px] bg-[rgba(255,255,255,0.2)] mb-6 md:mb-8 shadow-[0_0_10px_rgba(255,255,255,0.3)]" />
            <div className="space-y-4 text-[#B6C2CF] text-base md:text-lg leading-relaxed font-medium">
              <p>
                What started as a small security installation team has grown into Kerala's most trusted end-to-end security solutions partner — serving 500+ clients across Ernakulam, Thrissur, and beyond.
              </p>
              <p>
                We don't just install cameras. We build comprehensive security ecosystems — combining surveillance, access control, networking, and IT support into one seamless, managed solution tailored precisely to your unique needs.
              </p>
            </div>
          </motion.div>
          <motion.div variants={slideRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative h-[350px] md:h-[500px] rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)] border border-[rgba(255,255,255,0.05)]">
            <Image src="/images/about_team.png" alt="Red Alert Team" fill className="object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent mix-blend-multiply" />
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Mission & Vision */}
      <SectionWrapper className="bg-[#0B1120] border-y border-[rgba(255,255,255,0.05)] py-12 md:py-24">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <motion.div variants={fadeUp} className="h-full">
            <GlassCard className="h-full border-[rgba(255,255,255,0.1)] shadow-[0_10px_40px_rgba(0,0,0,0.5)] !p-6 md:!p-10 group hover:border-[rgba(255,255,255,0.2)]">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-2xl flex items-center justify-center text-white mb-6 md:mb-8 group-hover:bg-[rgba(255,255,255,0.1)] transition-colors">
                <Target className="w-6 h-6 md:w-8 md:h-8" stroke="currentColor" />
              </div>
              <h3 className="text-xl md:text-2xl font-sora font-bold text-white mb-3 md:mb-4">Our Mission</h3>
              <p className="text-base md:text-lg text-[#94A3B8] leading-relaxed group-hover:text-[#B6C2CF] transition-colors">
                To deliver intelligent, reliable, and affordable security solutions that protect what matters most — your family, your people, and your business.
              </p>
            </GlassCard>
          </motion.div>
          <motion.div variants={fadeUp} className="h-full">
            <GlassCard className="h-full border-[rgba(255,255,255,0.1)] shadow-[0_10px_40px_rgba(0,0,0,0.5)] !p-6 md:!p-10 group hover:border-[rgba(255,255,255,0.2)]">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-2xl flex items-center justify-center text-white mb-6 md:mb-8 group-hover:bg-[rgba(255,255,255,0.1)] transition-colors">
                <Eye className="w-6 h-6 md:w-8 md:h-8" stroke="currentColor" />
              </div>
              <h3 className="text-xl md:text-2xl font-sora font-bold text-white mb-3 md:mb-4">Our Vision</h3>
              <p className="text-base md:text-lg text-[#94A3B8] leading-relaxed group-hover:text-[#B6C2CF] transition-colors">
                To be Kerala's most innovative and trusted security technology partner by 2030, setting the benchmark for installation quality and after-sales support.
              </p>
            </GlassCard>
          </motion.div>
        </motion.div>
      </SectionWrapper>

      {/* Timeline */}
      <SectionWrapper className="bg-[#050816]" title="Our History" subtitle="A legacy of growth and technological excellence since 2017.">
        <div className="max-w-4xl mx-auto relative pt-8 md:pt-10">
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-[2px] bg-[rgba(255,255,255,0.1)] -translate-x-1/2 shadow-[0_0_10px_rgba(255,255,255,0.1)]"></div>
          
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-8 md:gap-12">
            {timeline.map((item, idx) => (
              <motion.div key={idx} variants={fadeUp} className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-8 ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                {/* Center Node */}
                <div className="absolute left-[16px] md:left-1/2 w-6 h-6 bg-[rgba(255,255,255,0.1)] backdrop-blur-md border-[2px] border-[rgba(255,255,255,0.4)] rounded-full -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(255,255,255,0.3)]"></div>
                
                {/* Content Box */}
                <div className={`ml-16 md:ml-0 md:w-1/2 pl-0 md:px-12 w-full ${idx % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                  <GlassCard className="!p-5 md:!p-8 mix-blend-screen group hover:border-[rgba(255,255,255,0.2)] transition-colors">
                    <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] text-white font-bold text-xs md:text-sm tracking-widest uppercase rounded-full mb-3 md:mb-4 shadow-[0_4px_10px_rgba(0,0,0,0.3)] group-hover:bg-[rgba(255,255,255,0.1)] transition-colors">
                      {item.year}
                    </span>
                    <h4 className="text-xl md:text-2xl font-sora text-white font-bold mb-2 md:mb-3">{item.title}</h4>
                    <p className="text-[#94A3B8] text-sm md:text-base leading-relaxed group-hover:text-[#B6C2CF] transition-colors">{item.desc}</p>
                  </GlassCard>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Certifications & Trust */}
      <SectionWrapper className="bg-[#0B1120] border-t border-[rgba(255,255,255,0.05)]">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center">
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-sora font-bold text-white mb-10 md:mb-16">Certified & Trusted Partners</motion.h2>
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-8 md:gap-20 items-center">
            <div className="flex flex-col items-center gap-3 md:gap-4 group">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center group-hover:bg-[rgba(255,255,255,0.05)] group-hover:border-[rgba(255,255,255,0.3)] transition-all shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:-translate-y-2">
                <ShieldCheck className="w-6 h-6 md:w-8 md:h-8 text-[rgba(255,255,255,0.5)] group-hover:text-white transition-colors" />
              </div>
              <span className="font-semibold text-xs md:text-sm text-[#94A3B8] tracking-widest group-hover:text-white transition-colors">HIKVISION AUTHORISED</span>
            </div>
            <div className="flex flex-col items-center gap-3 md:gap-4 group">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center group-hover:bg-[rgba(255,255,255,0.05)] group-hover:border-[rgba(255,255,255,0.3)] transition-all shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:-translate-y-2">
                <Award className="w-6 h-6 md:w-8 md:h-8 text-[rgba(255,255,255,0.5)] group-hover:text-white transition-colors" />
              </div>
              <span className="font-semibold text-xs md:text-sm text-[#94A3B8] tracking-widest group-hover:text-white transition-colors">DAHUA CERTIFIED</span>
            </div>
            <div className="flex flex-col items-center gap-3 md:gap-4 group">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center group-hover:bg-[rgba(255,255,255,0.05)] group-hover:border-[rgba(255,255,255,0.3)] transition-all shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:-translate-y-2">
                <ShieldCheck className="w-6 h-6 md:w-8 md:h-8 text-[rgba(255,255,255,0.5)] group-hover:text-white transition-colors" />
              </div>
              <span className="font-semibold text-xs md:text-sm text-[#94A3B8] tracking-widest group-hover:text-white transition-colors">CP PLUS DEALER</span>
            </div>
            <div className="flex flex-col items-center gap-3 md:gap-4 group">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center group-hover:bg-[rgba(255,255,255,0.05)] group-hover:border-[rgba(255,255,255,0.3)] transition-all shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:-translate-y-2">
                <Award className="w-6 h-6 md:w-8 md:h-8 text-[rgba(255,255,255,0.5)] group-hover:text-white transition-colors" />
              </div>
              <span className="font-semibold text-xs md:text-sm text-[#94A3B8] tracking-widest group-hover:text-white transition-colors">GST REGISTERED</span>
            </div>
          </motion.div>
        </motion.div>
      </SectionWrapper>

      {/* CTA */}
      <CTABanner />
    </div>
  );
}
