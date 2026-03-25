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
      className="bg-white"
    >
      <div className="relative max-w-4xl mx-auto bg-[#F5F5F5] rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden border border-gray-100">
        {/* Abstract Map Background */}
        <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
          <svg viewBox="0 0 200 200" className="w-[800px] h-[800px] text-red-brand fill-current">
            <path d="M45,-77.5C59.3,-71.4,72.7,-60.7,80.1,-46.5C87.4,-32.3,88.7,-16.1,87.1,-0.9C85.5,14.3,81,28.6,73.1,40.7C65.2,52.8,53.8,62.8,40.6,69.5C27.4,76.2,13.7,79.5,-0.6,80.6C-14.9,81.6,-29.8,80.3,-41.8,73.1C-53.8,65.9,-63,52.8,-70.7,39C-78.4,25.2,-84.6,12.6,-85.4,-0.4C-86.2,-13.4,-81.6,-26.8,-73.4,-37.8C-65.2,-48.8,-53.4,-57.4,-40.5,-64.1C-27.6,-70.8,-13.8,-75.6,1.4,-78C16.6,-80.4,33.2,-80.4,45,-77.5Z" transform="translate(100 100)" />
          </svg>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
          <motion.div 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex-1"
          >
            <h3 className="text-2xl font-playfair font-bold text-deep-black mb-6">
              Wherever you are, we've got you covered.
            </h3>
            <p className="text-dark-grey leading-relaxed mb-8">
              Since 2017, we have expanded our reach to provide rapid, on-site support and installations outside our Ernakulam headquarters. Our primary service areas ensure same-week deployment and 24/7 AMC support.
            </p>
            <div className="flex flex-wrap gap-3">
              {districts.map((district, idx) => (
                <span 
                  key={idx} 
                  className="bg-white border border-gray-200 text-dark-grey px-4 py-2 rounded-full text-sm font-semibold shadow-sm flex items-center gap-1.5"
                >
                  <MapPin className="w-3.5 h-3.5 text-red-brand" />
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
              <div className="absolute inset-0 bg-red-brand/20 rounded-full animate-ping blur-md scale-150"></div>
              <div className="bg-white p-6 rounded-full shadow-2xl relative z-10 border-4 border-red-50">
                <MapPin className="w-16 h-16 text-red-brand" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
