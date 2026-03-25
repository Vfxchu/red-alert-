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
      className="bg-[#FAFAFA]"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {testimonials.map((test, idx) => (
          <motion.div key={idx} variants={fadeUp} className="h-full">
            <GlassCard className="relative overflow-visible mt-6 hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute -top-6 left-8 bg-red-brand text-white w-12 h-12 rounded-full flex items-center justify-center shadow-[0_4px_16px_rgba(204,0,0,0.4)]">
                <Quote className="fill-current w-5 h-5" />
              </div>
              <div className="pt-6">
                <div className="flex gap-1 mb-4 text-accent-gold">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-dark-grey leading-relaxed italic mb-6 flex-grow">
                  "{test.quote}"
                </p>
                <div className="mt-auto border-t border-gray-100 pt-4">
                  <h4 className="font-bold text-deep-black font-playfair">{test.name}</h4>
                  <span className="text-sm text-gray-500">{test.role}</span>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
