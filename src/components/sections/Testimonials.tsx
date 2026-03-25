"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GlassCard from "@/components/ui/GlassCard";
import { fadeUp, staggerContainer } from "@/lib/animations";

const testimonials = [
  {
    name: "Rahul N.",
    role: "Business Owner, Ernakulam",
    quote: "Red Alert transformed our entire office security. Their IP camera installation was fast, clean, and the app lets me monitor everything remotely in 4K.",
    rating: 5,
  },
  {
    name: "Anjali S.",
    role: "Homeowner, Edappally",
    quote: "We installed the smart home alarm system. Last month, it detected smoke in the kitchen before we even noticed. Highly reliable and great service.",
    rating: 5,
  },
  {
    name: "Thomas V.",
    role: "School Administrator",
    quote: "Their structured networking and biometric attendance systems were exactly what we needed. Honest pricing and their post-sale support is excellent.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <SectionWrapper 
      id="testimonials" 
      title="Trusted by 500+ Clients" 
      subtitle="Don't just take our word for it. Here's what Kerala's home and business owners have to say about Red Alert."
      className="bg-[#050816]"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pt-8"
      >
        {testimonials.map((test, idx) => (
          <motion.div key={idx} variants={fadeUp} className="h-full">
            {/* Added extra top margin to account for the overlapping quote circular badge */}
            <GlassCard className="relative h-full mt-6 hover:-translate-y-2 transition-transform duration-300">
              {/* Floating Quote Icon - White Glass */}
              <div className="absolute -top-6 left-6 md:-top-8 md:left-8 bg-[rgba(255,255,255,0.1)] backdrop-blur-md border border-[rgba(255,255,255,0.2)] text-white w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
                <Quote className="fill-current w-5 h-5 md:w-8 md:h-8" />
              </div>
              
              <div className="pt-6 md:pt-8 h-full flex flex-col">
                {/* White Stars */}
                <div className="flex gap-1 mb-4 md:mb-6 text-white">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-current" />
                  ))}
                </div>
                
                <p className="text-[#B6C2CF] text-base md:text-lg leading-relaxed italic mb-6 md:mb-8 flex-grow">
                  "{test.quote}"
                </p>
                
                <div className="mt-auto border-t border-[rgba(255,255,255,0.1)] pt-4 md:pt-5">
                  <h4 className="font-bold text-lg md:text-xl text-white font-sora">{test.name}</h4>
                  <span className="text-sm md:text-base font-medium text-[#94A3B8]">{test.role}</span>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
