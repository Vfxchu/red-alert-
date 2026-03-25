"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MapPin, Expand } from "lucide-react";
import CTABanner from "@/components/sections/CTABanner";
import { fadeUp } from "@/lib/animations";

const filters = ["All", "CCTV", "Networking", "Biometric", "Alarm"];

const projects = [
  { id: 1, category: "CCTV", image: "/images/gallery_1.png", title: "Commercial Warehouse CCTV Setup", location: "Kochi" },
  { id: 2, category: "Networking", image: "/images/gallery_2.png", title: "IT Park Structured Cabling", location: "Kakkanad" },
  { id: 3, category: "Biometric", image: "/images/gallery_3.png", title: "Corporate Access Control", location: "Ernakulam" },
  { id: 4, category: "Alarm", image: "/images/gallery_4.png", title: "Jewellery Shop Intrusion Alarm", location: "Thrissur" },
  { id: 5, category: "CCTV", image: "/images/cctv_hero.png", title: "Residential Villa Night Vision", location: "Edappally" },
  { id: 6, category: "Networking", image: "/images/networking_hero.png", title: "Enterprise Server Rack", location: "Aluva" },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredProjects = projects.filter(
    (project) => activeFilter === "All" || project.category === activeFilter
  );

  return (
    <div className="flex flex-col w-full overflow-hidden pt-24 bg-[#050816]">
      {/* Header */}
      <section className="py-12 md:py-20 bg-[#0B1120] border-b border-[rgba(255,255,255,0.05)] text-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.h1 variants={fadeUp} initial="hidden" animate="visible" className="text-4xl md:text-6xl font-sora font-bold text-white mb-4 md:mb-6 text-glow tracking-tight">
            Project Gallery
          </motion.h1>
          <motion.p variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.1 }} className="text-lg md:text-xl text-[#B6C2CF] max-w-2xl mx-auto mb-8 md:mb-10">
            A glimpse into our professional installations across Kerala.
          </motion.p>

          {/* Filters */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.2 }} className="flex flex-wrap justify-center gap-2 md:gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-1.5 md:px-6 md:py-2 rounded-full text-xs md:text-sm font-semibold transition-all shadow-sm backdrop-blur-md ${
                  activeFilter === filter
                    ? "bg-[rgba(255,255,255,0.15)] text-white border border-[rgba(255,255,255,0.3)] shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                    : "bg-[rgba(255,255,255,0.02)] text-[#94A3B8] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.2)] hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 md:py-20 min-h-[500px] bg-[#050816]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative rounded-[1.5rem] md:rounded-3xl overflow-hidden aspect-square md:aspect-[4/3] bg-[#0B1120] cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.6)] border border-[rgba(255,255,255,0.05)] hover:border-[rgba(255,255,255,0.2)] transition-colors"
                  onClick={() => setSelectedImage(project.image)}
                >
                  <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-700 md:group-hover:scale-110 opacity-80 md:group-hover:opacity-100" />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/50 to-transparent md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 md:p-6">
                    <span className="text-white text-[10px] md:text-xs font-bold tracking-widest uppercase mb-1 md:mb-2 bg-[rgba(255,255,255,0.1)] backdrop-blur-md px-3 py-1 rounded-full w-fit border border-[rgba(255,255,255,0.2)]">{project.category}</span>
                    <h3 className="text-white font-sora font-bold text-lg md:text-xl mb-1 md:mb-2 mt-2 md:mt-3 line-clamp-2">{project.title}</h3>
                    <div className="flex items-center gap-1.5 text-[#B6C2CF] text-xs md:text-sm">
                      <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#00C2FF]" />
                      {project.location}
                    </div>
                    <div className="hidden md:flex absolute top-6 right-6 w-10 h-10 bg-[rgba(255,255,255,0.1)] backdrop-blur-md border border-[rgba(255,255,255,0.2)] rounded-full items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-300 delay-100 shadow-[0_4px_15px_rgba(0,0,0,0.5)]">
                      <Expand className="w-5 h-5" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-[#050816]/95 backdrop-blur-xl flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)] border border-[rgba(255,255,255,0.1)]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={selectedImage} alt="Fullscreen Project View" fill className="object-cover" />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] border border-[rgba(255,255,255,0.2)] backdrop-blur-md text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors shadow-md"
                aria-label="Close fullscreen"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CTABanner />
    </div>
  );
}
