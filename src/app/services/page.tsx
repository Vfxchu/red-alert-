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
    <div className="flex flex-col w-full overflow-hidden pt-24 bg-[#FAFAFA]">
      {/* Hero */}
      <section className="py-20 lg:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.h1 
            variants={fadeUp} 
            initial="hidden" 
            animate="visible"
            className="text-5xl md:text-6xl font-playfair font-bold text-red-brand mb-6"
          >
            Our Security Solutions
          </motion.h1>
          <motion.p 
            variants={fadeUp} 
            initial="hidden" 
            animate="visible"
            className="text-xl text-dark-grey max-w-3xl mx-auto"
          >
            We implement advanced, scalable, and reliable security ecosystems for residential and commercial properties.
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-16"
          >
            {allServices.map((service, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeUp}
                className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2 h-[400px] relative rounded-2xl overflow-hidden group">
                  <Image 
                    src={service.image} 
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-black/60 to-transparent flex items-end p-6">
                    <service.icon className="w-12 h-12 text-white/90 drop-shadow-lg" />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-deep-black mb-6 hover:text-red-brand transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-dark-grey text-lg leading-relaxed mb-8">
                    {service.desc}
                  </p>
                  <div>
                    <Link 
                      href={service.href}
                      className="inline-flex items-center gap-2 bg-red-brand hover:bg-red-800 text-white px-8 py-4 rounded-full font-bold transition-all shadow-md hover:-translate-y-1"
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
