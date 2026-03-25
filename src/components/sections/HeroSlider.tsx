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
    <div className="relative h-screen w-full overflow-hidden bg-[#050816]">
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

          {/* Dark Overlay - Extremely deep for high contrast and masking image quality */}
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050816]/95 via-[#050816]/70 to-transparent" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-center max-w-7xl mx-auto px-4 md:px-8">
            <div className={`max-w-2xl transform transition-all duration-1000 delay-300 ${
              index === current ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}>
              {/* Pure dark glass badge */}
              <div className="inline-block py-1 px-3 md:py-1.5 md:px-4 rounded-full bg-[rgba(255,255,255,0.05)] backdrop-blur-md border border-[rgba(255,255,255,0.15)] mb-4 md:mb-6 font-inter text-xs md:text-sm font-bold tracking-widest uppercase text-white shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                Kerala's #1 Security Partner
              </div>
              <h1 className="text-4xl md:text-6xl font-sora font-bold text-white leading-tight mb-4 md:mb-6 whitespace-pre-line text-glow tracking-tight">
                {slide.quote}
              </h1>
              <p className="text-base md:text-lg text-[#B6C2CF] font-inter font-medium mb-8 md:mb-10 max-w-xl">
                {slide.subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/services"
                  className="glass-btn text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-center text-sm md:text-base transition-all bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.15)] border-[rgba(255,255,255,0.2)] hover:border-white shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                >
                  Explore Our Solutions →
                </Link>
                <a
                  href="tel:+9173567564337"
                  className="glass-btn text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-center text-sm md:text-base transition-all shadow-md"
                >
                  📞 73567 564337
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Controls */}
      <div className="absolute bottom-8 right-4 md:bottom-12 md:right-12 z-20 flex items-center gap-4 md:gap-6">
        <div className="flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`transition-all duration-300 rounded-full ${
                idx === current ? "w-6 h-2 md:w-8 bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]" : "w-2 h-2 bg-[rgba(255,255,255,0.3)] hover:bg-[rgba(255,255,255,0.5)]"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
        
        {/* Navigation Arrows in Glass Pill */}
        <div className="flex gap-2 bg-[rgba(255,255,255,0.05)] backdrop-blur-md border border-[rgba(255,255,255,0.15)] rounded-full p-1 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full hover:bg-[rgba(255,255,255,0.1)] text-white transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" stroke="currentColor" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full hover:bg-[rgba(255,255,255,0.1)] text-white transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" stroke="currentColor" />
          </button>
        </div>
      </div>
    </div>
  );
}
