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

const team = [
  { name: "Rahul V.", role: "Managing Director / Founder" },
  { name: "Syam Kumar", role: "Lead Security Engineer" },
  { name: "Aby Thomas", role: "Network Infrastructure Head" },
  { name: "Priya M.", role: "Customer Support Lead" },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden pt-24">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-[#F5F5F5] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-red-brand mb-6 leading-tight">
              Protecting What Matters Most
            </h1>
            <p className="text-xl text-dark-grey leading-relaxed">
              Founded in 2017 in Ernakulam, Red Alert Security Systems was built on a single belief: every home and business in Kerala deserves world-class protection without compromise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brand Story & Image */}
      <SectionWrapper className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={slideLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl font-playfair font-bold text-deep-black mb-6">Our Journey</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed font-medium">
              <p>
                What started as a small security installation team has grown into Kerala's most trusted end-to-end security solutions partner — serving 500+ clients across Ernakulam, Thrissur, and beyond.
              </p>
              <p>
                We don't just install cameras. We build comprehensive security ecosystems — combining surveillance, access control, networking, and IT support into one seamless, managed solution tailored precisely to your unique needs.
              </p>
            </div>
          </motion.div>
          <motion.div variants={slideRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <Image src="/images/about_team.png" alt="Red Alert Team" fill className="object-cover" />
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Mission & Vision */}
      <SectionWrapper className="bg-[#FAFAFA]">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div variants={fadeUp}>
            <GlassCard className="bg-white/80 border-gray-100 shadow-xl">
              <Target className="w-12 h-12 text-red-brand mb-6" />
              <h3 className="text-2xl font-playfair font-bold text-deep-black mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To deliver intelligent, reliable, and affordable security solutions that protect what matters most — your family, your people, and your business.
              </p>
            </GlassCard>
          </motion.div>
          <motion.div variants={fadeUp}>
            <GlassCard className="bg-white/80 border-gray-100 shadow-xl">
              <Eye className="w-12 h-12 text-red-brand mb-6" />
              <h3 className="text-2xl font-playfair font-bold text-deep-black mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be Kerala's most innovative and trusted security technology partner by 2030, setting the benchmark for installation quality and after-sales support.
              </p>
            </GlassCard>
          </motion.div>
        </motion.div>
      </SectionWrapper>

      {/* Timeline */}
      <SectionWrapper className="bg-white" title="Our History" subtitle="A legacy of growth and technological excellence since 2017.">
        <div className="max-w-4xl mx-auto relative pt-10">
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-0.5 bg-red-brand/20 -translate-x-1/2"></div>
          
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-12">
            {timeline.map((item, idx) => (
              <motion.div key={idx} variants={fadeUp} className={`relative flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                {/* Center Node */}
                <div className="absolute left-[16px] md:left-1/2 w-6 h-6 bg-white border-4 border-red-brand rounded-full -translate-x-1/2 z-10 shadow-md"></div>
                
                {/* Content Box */}
                <div className={`ml-16 md:ml-0 md:w-1/2 pl-0 md:px-12 ${idx % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                  <GlassCard className="!p-6 !h-auto">
                    <span className="inline-block px-3 py-1 bg-red-50 text-red-brand font-bold text-sm rounded-full mb-3">
                      {item.year}
                    </span>
                    <h4 className="text-xl font-playfair text-deep-black font-bold mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </GlassCard>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Certifications & Trust */}
      <SectionWrapper className="bg-deep-black" dark>
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center">
          <motion.h2 variants={fadeUp} className="text-3xl font-playfair font-bold text-white mb-12">Certified & Trusted Partners</motion.h2>
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-80">
            <div className="flex flex-col items-center gap-3">
              <ShieldCheck className="w-10 h-10 text-accent-gold" />
              <span className="font-semibold text-sm tracking-wide">HIKVISION AUTHORISED</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Award className="w-10 h-10 text-accent-gold" />
              <span className="font-semibold text-sm tracking-wide">DAHUA CERTIFIED</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <ShieldCheck className="w-10 h-10 text-accent-gold" />
              <span className="font-semibold text-sm tracking-wide">CP PLUS DEALER</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Award className="w-10 h-10 text-accent-gold" />
              <span className="font-semibold text-sm tracking-wide">GST REGISTERED</span>
            </div>
          </motion.div>
        </motion.div>
      </SectionWrapper>

      {/* CTA */}
      <CTABanner />
    </div>
  );
}
