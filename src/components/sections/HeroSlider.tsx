"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/images/hero_slide_1.png",
    quote: "Total Protection.\nAbsolute Peace of Mind.",
    subtitle: "Advanced Security Systems for Homes & Businesses in Ernakulam",
  },
  {
    image: "/images/hero_slide_2.png",
    quote: "See Everything.\nMiss Nothing.",
    subtitle: "Premium High-Definition CCTV & Video Surveillance",
  },
  {
    image: "/images/hero_slide_3.png",
    quote: "The Backbone of\nYour Business.",
    subtitle: "Enterprise-Grade Networking & Structured Cabling",
  },
  {
    image: "/images/hero_slide_4.png",
    quote: "Stay One Step Ahead\nof Every Threat.",
    subtitle: "Intelligent Alarms, Biometrics & Smart Home Security",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent(current === slides.length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-deep-black">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          {/* Image with zoom-out effect */}
          <div
            className={`absolute inset-0 transition-transform duration-[10000ms] ease-out ${
              index === current ? "scale-100" : "scale-110"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.quote.replace("\n", " ")}
              fill
              priority={index === 0}
              quality={90}
              className="object-cover"
            />
          </div>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-deep-black/80 via-deep-black/50 to-transparent" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-center max-w-7xl mx-auto px-6 lg:px-12">
            <div className={`max-w-2xl transform transition-all duration-1000 delay-300 ${
              index === current ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}>
              <div className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 font-montserrat text-xs font-bold tracking-widest uppercase text-accent-gold">
                Kerala's #1 Security Partner
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-white leading-tight mb-6 whitespace-pre-line text-glow">
                {slide.quote}
              </h1>
              <p className="text-lg md:text-xl text-off-white/90 font-montserrat font-medium mb-10 max-w-xl">
                {slide.subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/services"
                  className="bg-red-brand hover:bg-red-800 text-white px-8 py-4 rounded-full font-bold text-center transition-all shadow-[0_0_20px_rgba(204,0,0,0.4)] hover:shadow-[0_0_30px_rgba(204,0,0,0.6)] hover:-translate-y-1"
                >
                  Explore Our Solutions →
                </Link>
                <a
                  href="tel:+9173567564337"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold text-center transition-all hover:-translate-y-1"
                >
                  📞 73567 564337
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Controls */}
      <div className="absolute bottom-12 right-6 lg:right-12 z-20 flex items-center gap-6">
        <div className="flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`transition-all duration-300 rounded-full ${
                idx === current ? "w-8 h-2 bg-red-brand" : "w-2 h-2 bg-white/50"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
        
        <div className="flex gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-1">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full hover:bg-white/20 text-white transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full hover:bg-white/20 text-white transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
