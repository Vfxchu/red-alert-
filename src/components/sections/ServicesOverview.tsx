"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Camera, Wifi, Fingerprint, Bell, Laptop, Home } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GlassCard from "@/components/ui/GlassCard";
import { staggerContainer, fadeUp } from "@/lib/animations";

const services = [
  {
    icon: Camera,
    title: "CCTV & Video Surveillance",
    desc: "High-definition IP cameras with AI analytics and 24/7 remote monitoring.",
    href: "/services/cctv",
  },
  {
    icon: Wifi,
    title: "Networking & Cabling",
    desc: "Enterprise-grade LAN/Wi-Fi design and structured cabling solutions.",
    href: "/services/networking",
  },
  {
    icon: Fingerprint,
    title: "Biometric & Access",
    desc: "Smart time attendance and door access control via fingerprint or face ID.",
    href: "/services/biometric",
  },
  {
    icon: Bell,
    title: "Intruder & Fire Alarms",
    desc: "Instant hazard detection and alarm systems for maximum safety.",
    href: "/services/alarm",
  },
  {
    icon: Laptop,
    title: "IT & PC Support",
    desc: "Expert computer repair, software upgrades, and hardware sales.",
    href: "/services/it-support",
  },
  {
    icon: Home,
    title: "Smart Home Security",
    desc: "Integrated IoT security solutions engineered for premium residences.",
    href: "/services/cctv", 
  },
];

export default function ServicesOverview() {
  return (
    <SectionWrapper
      id="services"
      title="End-to-End Security Solutions"
      subtitle="Comprehensive protection engineered for homes and businesses across Ernakulam."
      className="bg-[#0B1120] relative overflow-hidden"
    >
      {/* Decorative background glow - White glass style */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[rgba(255,255,255,0.02)] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10"
      >
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div key={index} variants={fadeUp} className="h-full">
              <Link href={service.href} className="block h-full group">
                {/* Rely on GlassCard default utility classes */}
                <GlassCard className="h-full hover:border-[rgba(255,255,255,0.3)]">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] text-white rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-[rgba(255,255,255,0.1)] group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300">
                    <Icon className="w-6 h-6 md:w-8 md:h-8" stroke="currentColor" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-sora font-bold text-white mb-2 md:mb-3 group-hover:text-shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-all">
                    {service.title}
                  </h3>
                  <p className="text-[#B6C2CF] text-base md:text-lg leading-relaxed mb-4 md:mb-6 flex-grow group-hover:text-white transition-colors duration-300">
                    {service.desc}
                  </p>
                  <span className="text-white font-semibold text-sm md:text-base flex items-center gap-1 mt-auto border-b border-transparent group-hover:border-white inline-flex w-fit pb-0.5 transition-all">
                    Learn More <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </GlassCard>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
}
