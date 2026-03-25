"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { fadeUp, scaleIn } from "@/lib/animations";

const districts = [
  "Ernakulam",
  "Thrissur",
  "Kochi",
  "Kakkanad",
  "Edappally",
  "Angamaly",
  "Perumbavoor",
];

export default function ServiceAreas() {
  return (
    <SectionWrapper 
      id="areas"
      title="Our Service Coverage"
      subtitle="Based in Ernakulam, proudly protecting homes and businesses across central Kerala."
      className="bg-[#0B1120]"
    >
      <div className="relative max-w-4xl mx-auto glass-card rounded-3xl p-5 md:p-8 lg:p-12 overflow-hidden">
        {/* Abstract Map Background - Dark Glass Style */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
          <svg viewBox="0 0 200 200" className="w-[800px] h-[800px] text-white fill-current">
            <path d="M45,-77.5C59.3,-71.4,72.7,-60.7,80.1,-46.5C87.4,-32.3,88.7,-16.1,87.1,-0.9C85.5,14.3,81,28.6,73.1,40.7C65.2,52.8,53.8,62.8,40.6,69.5C27.4,76.2,13.7,79.5,-0.6,80.6C-14.9,81.6,-29.8,80.3,-41.8,73.1C-53.8,65.9,-63,52.8,-70.7,39C-78.4,25.2,-84.6,12.6,-85.4,-0.4C-86.2,-13.4,-81.6,-26.8,-73.4,-37.8C-65.2,-48.8,-53.4,-57.4,-40.5,-64.1C-27.6,-70.8,-13.8,-75.6,1.4,-78C16.6,-80.4,33.2,-80.4,45,-77.5Z" transform="translate(100 100)" />
          </svg>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          <motion.div 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex-1"
          >
            <h3 className="text-xl md:text-2xl font-sora font-bold text-white mb-4 md:mb-6">
              Wherever you are, we've got you covered.
            </h3>
            <p className="text-base md:text-lg text-[#B6C2CF] leading-relaxed mb-6 md:mb-8">
              Since 2017, we have expanded our reach to provide rapid, on-site support and installations outside our Ernakulam headquarters. Our primary service areas ensure same-week deployment and 24/7 AMC support.
            </p>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {districts.map((district, idx) => (
                <span 
                  key={idx} 
                  className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] text-[#FFFFFF] px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold shadow-sm flex items-center gap-1.5 hover:bg-[rgba(255,255,255,0.1)] transition-colors cursor-default"
                >
                  <MapPin className="w-3 h-3 md:w-3.5 md:h-3.5 text-[#00C2FF]" stroke="currentColor" />
                  {district}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Animated Pin Marker Graphic */}
          <motion.div 
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full md:w-1/3 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[#00C2FF]/20 rounded-full animate-ping blur-md scale-150"></div>
              <div className="bg-[rgba(255,255,255,0.05)] backdrop-blur-xl p-4 md:p-6 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.5)] relative z-10 border border-[rgba(255,255,255,0.1)]">
                <MapPin className="w-12 h-12 md:w-16 md:h-16 text-[#00C2FF]" stroke="currentColor" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
