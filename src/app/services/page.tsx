"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Camera, Wifi, Fingerprint, Bell, Laptop } from "lucide-react";
import CTABanner from "@/components/sections/CTABanner";

const allServices = [
  {
    icon: Camera,
    title: "CCTV & Video Surveillance",
    desc: "High-definition IP cameras with AI analytics, remote monitoring, and 24/7 recording for homes and businesses.",
    image: "/images/cctv_hero.png",
    href: "/services/cctv",
  },
  {
    icon: Wifi,
    title: "Networking & Cabling",
    desc: "Enterprise-grade networking infrastructure — designed for speed, reliability, and scale across any space.",
    image: "/images/networking_hero.png",
    href: "/services/networking",
  },
  {
    icon: Fingerprint,
    title: "Biometric & Access",
    desc: "Smart biometric attendance and access control systems powered by fingerprint, face recognition, and card tech.",
    image: "/images/biometric_hero.png",
    href: "/services/biometric",
  },
  {
    icon: Bell,
    title: "Intruder & Fire Alarms",
    desc: "Intelligent alarm systems that detect intrusion and fire hazards — alerting you instantly, protecting you always.",
    image: "/images/alarm_hero.png",
    href: "/services/alarm",
  },
  {
    icon: Laptop,
    title: "IT & PC Support",
    desc: "From repairs to upgrades to brand-new systems — we keep your business technology running at its best.",
    image: "/images/it_support_hero.png",
    href: "/services/it-support",
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden pt-24 bg-[#050816]">
      {/* Hero */}
      <section className="py-12 md:py-20 lg:py-24 bg-[#050816] border-b border-[rgba(255,255,255,0.05)] relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[rgba(255,255,255,0.02)] rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center relative z-10">
          <motion.h1 
            variants={fadeUp} 
            initial="hidden" 
            animate="visible"
            className="text-4xl md:text-6xl lg:text-7xl font-sora font-bold text-white mb-4 md:mb-6 text-glow tracking-tight"
          >
            Our Security Solutions
          </motion.h1>
          <motion.p 
            variants={fadeUp} 
            initial="hidden" 
            animate="visible"
            className="text-lg md:text-xl text-[#B6C2CF] max-w-3xl mx-auto"
          >
            We implement advanced, scalable, and reliable security ecosystems for residential and commercial properties.
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-12 md:py-24 lg:py-32 bg-[#0B1120]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-12 md:gap-16"
          >
            {allServices.map((service, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeUp}
                className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 md:gap-12 items-center bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] hover:border-[rgba(255,255,255,0.2)] rounded-[1.5rem] md:rounded-3xl p-5 md:p-8 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] transition-all duration-300 group`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2 h-[300px] md:h-[400px] relative rounded-xl md:rounded-2xl overflow-hidden">
                  <Image 
                    src={service.image} 
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/40 to-transparent flex items-end p-5 md:p-6 border border-[rgba(255,255,255,0.1)] rounded-xl md:rounded-2xl">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-[rgba(255,255,255,0.1)] backdrop-blur-md border border-[rgba(255,255,255,0.2)] rounded-2xl flex items-center justify-center text-white shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                      <service.icon className="w-6 h-6 md:w-8 md:h-8" stroke="currentColor" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <h2 className="text-2xl md:text-4xl lg:text-5xl font-sora font-bold text-white mb-4 md:mb-6 group-hover:text-shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all">
                    {service.title}
                  </h2>
                  <p className="text-base md:text-lg text-[#94A3B8] leading-relaxed mb-6 md:mb-8 group-hover:text-[#B6C2CF] transition-colors">
                    {service.desc}
                  </p>
                  <div>
                    <Link 
                      href={service.href}
                      className="inline-flex glass-btn items-center gap-2 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-sm md:text-base transition-all"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
