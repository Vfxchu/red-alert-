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
    <div className="flex flex-col w-full overflow-hidden pt-24 bg-[#F5F5F5]">
      {/* Header */}
      <section className="py-20 bg-white border-b border-gray-100 text-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.h1 variants={fadeUp} initial="hidden" animate="visible" className="text-4xl md:text-5xl font-playfair font-bold text-red-brand mb-6">
            Project Gallery
          </motion.h1>
          <motion.p variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.1 }} className="text-xl text-dark-grey max-w-2xl mx-auto mb-10">
            A glimpse into our professional installations across Kerala.
          </motion.p>

          {/* Filters */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.2 }} className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all shadow-sm ${
                  activeFilter === filter
                    ? "bg-red-brand text-white shadow-md border-transparent"
                    : "bg-white text-dark-grey border border-gray-200 hover:border-red-brand/50 hover:text-red-brand"
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 min-h-[500px]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative rounded-2xl overflow-hidden aspect-square md:aspect-[4/3] bg-gray-200 cursor-pointer shadow-lg"
                  onClick={() => setSelectedImage(project.image)}
                >
                  <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-black/90 via-deep-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-accent-gold text-xs font-bold tracking-widest uppercase mb-1">{project.category}</span>
                    <h3 className="text-white font-playfair font-bold text-xl mb-2">{project.title}</h3>
                    <div className="flex items-center gap-1.5 text-off-white/80 text-sm">
                      <MapPin className="w-4 h-4 text-red-brand" />
                      {project.location}
                    </div>
                    <div className="absolute top-6 right-6 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
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
            className="fixed inset-0 z-[100] bg-deep-black/95 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-5xl aspect-video rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={selectedImage} alt="Fullscreen Project View" fill className="object-cover" />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white/10 hover:bg-red-brand backdrop-blur-md text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
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
