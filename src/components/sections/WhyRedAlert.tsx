"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { CheckCircle2 } from "lucide-react";
import { fadeUp, slideLeft, staggerContainer } from "@/lib/animations";

const points = [
  { title: "Local Expertise", desc: "Serving Ernakulam, Thrissur & all Kerala with fast on-site support." },
  { title: "Certified Technicians", desc: "Trained professionals for Hikvision, Dahua, and all major brands." },
  { title: "24/7 Emergency Support", desc: "Always on call to ensure your systems never go offline." },
  { title: "Fast Installation", desc: "Same-week deployment with clean, professional wiring." },
  { title: "Transparent Pricing", desc: "Honest quotes with absolutely no hidden charges." },
  { title: "Post-Sale AMC", desc: "Comprehensive Annual Maintenance Contracts available." },
];

export default function WhyRedAlert() {
  return (
    <SectionWrapper id="why-us" className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left: Image */}
        <motion.div
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl"
        >
          <Image
            src="/images/why_choose_us.png"
            alt="Security engineer installing cables"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-black/60 to-transparent flex flex-col justify-end p-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
              <p className="text-white font-playfair text-2xl font-bold mb-2">Est. 2017</p>
              <p className="text-white/90 text-sm">7+ years of protecting what matters most.</p>
            </div>
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeUp} className="mb-10">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-red-brand mb-6 leading-tight">
              Why Choose Red Alert?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We don't just install cameras. We build comprehensive security ecosystems — 
              combining surveillance, access control, and networking into one seamless solution.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
            {points.map((point, idx) => (
              <motion.div key={idx} variants={fadeUp} className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-red-brand shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-deep-black mb-2">{point.title}</h3>
                  <p className="text-dark-grey/80 text-sm leading-relaxed">{point.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
      </div>
    </SectionWrapper>
  );
}
