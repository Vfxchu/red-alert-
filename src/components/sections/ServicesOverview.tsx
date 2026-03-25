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
    href: "/services/cctv", // Routing to existing services for MVP
  },
];

export default function ServicesOverview() {
  return (
    <SectionWrapper
      id="services"
      title="End-to-End Security Solutions"
      subtitle="Comprehensive protection engineered for homes and businesses across Ernakulam."
      className="bg-[#F5F5F5] relative overflow-hidden"
    >
      {/* Decorative background circle */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-brand/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
      >
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div key={index} variants={fadeUp} className="h-full">
              <Link href={service.href} className="block h-full group">
                <GlassCard className="transition-all duration-300 hover:border-red-brand hover:shadow-[0_12px_40px_rgba(204,0,0,0.1)]">
                  <div className="w-14 h-14 bg-red-50 text-red-brand rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-brand group-hover:text-white transition-colors duration-300 shadow-sm">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-deep-black mb-3 group-hover:text-red-brand transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-dark-grey/80 text-sm leading-relaxed mb-6 flex-grow">
                    {service.desc}
                  </p>
                  <span className="text-red-brand font-semibold text-sm flex items-center gap-1 mt-auto">
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
