"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Shield, Phone, Camera, Wifi, Fingerprint, Bell, Laptop } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    { name: "CCTV & Surveillance", href: "/services/cctv", icon: Camera },
    { name: "Networking", href: "/services/networking", icon: Wifi },
    { name: "Biometric & Access", href: "/services/biometric", icon: Fingerprint },
    { name: "Alarm Systems", href: "/services/alarm", icon: Bell },
    { name: "IT Support", href: "/services/it-support", icon: Laptop },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={`fixed left-0 right-0 z-50 mx-auto max-w-7xl px-4 transition-all duration-500 ease-out ${scrolled ? "top-3 md:top-4" : "top-6 md:top-8"
          }`}
      >
        {/* Ultra-Glassy Elegant Capsule */}
        <div className="bg-gradient-to-b from-[rgba(255,255,255,0.06)] to-[rgba(255,255,255,0.01)] backdrop-blur-2xl border border-[rgba(255,255,255,0.12)] shadow-[0_8px_32px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.15)] rounded-full px-4 py-2.5 md:px-8 md:py-3.5 flex items-center justify-between ring-1 ring-white/5">

          <Link href="/" className="flex items-center group">
            <img src="/images/logo.png" alt="Red Alert Security Systems" className="h-8 md:h-10 w-auto object-contain transition-transform group-hover:scale-105 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]" />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-2">
            <Link href="/" className="px-4 py-2 rounded-full text-[15px] font-medium text-[#B6C2CF] hover:text-white hover:bg-[rgba(255,255,255,0.06)] transition-all">
              Home
            </Link>
            <Link href="/about" className="px-4 py-2 rounded-full text-[15px] font-medium text-[#B6C2CF] hover:text-white hover:bg-[rgba(255,255,255,0.06)] transition-all">
              About
            </Link>
            <div className="relative group/menu">
              <Link href="/services" className="px-4 py-2 rounded-full text-[15px] font-medium text-[#B6C2CF] group-hover/menu:text-white hover:bg-[rgba(255,255,255,0.06)] transition-all flex items-center gap-1.5">
                Services <ChevronDown className="w-4 h-4 opacity-70 group-hover/menu:rotate-180 transition-transform duration-300" />
              </Link>
              {/* Ultra-Glassy Mega Dropdown */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 translate-y-2 pointer-events-none group-hover/menu:opacity-100 group-hover/menu:translate-y-0 group-hover/menu:pointer-events-auto transition-all duration-300 ease-out">
                <div className="bg-gradient-to-b from-[#111827]/95 to-[#0B1120]/95 backdrop-blur-2xl border border-[rgba(255,255,255,0.1)] shadow-[0_20px_60px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.1)] rounded-3xl w-[320px] p-3 flex flex-col gap-1 ring-1 ring-white/5">
                  {services.map((service) => {
                    const Icon = service.icon;
                    return (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="flex items-center gap-4 p-3 rounded-[1rem] hover:bg-[rgba(255,255,255,0.06)] transition-all group/link"
                      >
                        <div className="bg-[rgba(255,255,255,0.03)] text-[#B6C2CF] p-2.5 rounded-xl group-hover/link:text-white group-hover/link:bg-[rgba(0,194,255,0.15)] group-hover/link:shadow-[0_0_15px_rgba(0,194,255,0.2)] transition-all border border-[rgba(255,255,255,0.05)] group-hover/link:border-[rgba(0,194,255,0.3)]">
                          <Icon className="w-5 h-5" stroke="currentColor" />
                        </div>
                        <span className="text-[15px] font-medium text-[#B6C2CF] group-hover/link:text-white transition-colors">{service.name}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
            <Link href="/gallery" className="px-4 py-2 rounded-full text-[15px] font-medium text-[#B6C2CF] hover:text-white hover:bg-[rgba(255,255,255,0.06)] transition-all">
              Gallery
            </Link>
            <Link href="/contact" className="px-4 py-2 rounded-full text-[15px] font-medium text-[#B6C2CF] hover:text-white hover:bg-[rgba(255,255,255,0.06)] transition-all">
              Contact
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-5">
            <div className="flex items-center gap-2 text-[#B6C2CF] group cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center group-hover:bg-[rgba(255,255,255,0.1)] transition-colors">
                <Phone className="w-4 h-4 text-[#00C2FF]" stroke="currentColor" />
              </div>
              <span className="text-[15px] font-semibold group-hover:text-white transition-colors">+91 73567 564337</span>
            </div>
            {/* Elegant glass button variant */}
            <Link
              href="/contact"
              className="bg-gradient-to-r from-[rgba(0,194,255,0.15)] to-[rgba(0,194,255,0.05)] hover:from-[rgba(0,194,255,0.25)] hover:to-[rgba(0,194,255,0.1)] border border-[rgba(0,194,255,0.4)] border-t-[rgba(0,194,255,0.6)] text-white px-6 py-2.5 rounded-full text-[15px] font-semibold transition-all shadow-[0_8px_20px_rgba(0,194,255,0.15)] hover:shadow-[0_12px_30px_rgba(0,194,255,0.3)] flex items-center gap-2"
            >
              Free Site Visit
            </Link>
          </div>

          <button
            className="lg:hidden w-10 h-10 rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-[#B6C2CF] hover:text-white hover:bg-[rgba(255,255,255,0.1)] transition-all"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="w-5 h-5" stroke="currentColor" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Pure Dark Layer */}
      <div
        className={`fixed inset-0 bg-[#050816]/98 backdrop-blur-3xl z-[60] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="p-6 flex flex-col h-full border-l border-[rgba(255,255,255,0.05)]">
          <div className="flex justify-between items-center mb-8">
            <Link href="/" className="flex items-center group" onClick={() => setIsOpen(false)}>
              <img src="/images/logo.png" alt="Red Alert Security Systems" className="h-8 md:h-10 w-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]" />
            </Link>
            <button className="w-10 h-10 flex items-center justify-center text-[#B6C2CF] hover:text-white bg-[rgba(255,255,255,0.05)] rounded-full transition-all border border-[rgba(255,255,255,0.1)]" onClick={() => setIsOpen(false)}>
              <X className="w-5 h-5" stroke="currentColor" />
            </button>
          </div>

          <div className="flex flex-col gap-6 overflow-y-auto pb-24 px-2">
            <Link href="/" onClick={() => setIsOpen(false)} className="text-xl font-sora font-semibold text-[#B6C2CF] hover:text-white transition-colors">Home</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="text-xl font-sora font-semibold text-[#B6C2CF] hover:text-white transition-colors">About</Link>

            <div className="flex flex-col gap-5">
              <span className="text-xl font-sora font-semibold text-white">Services</span>
              <div className="flex flex-col gap-4 pl-4 border-l border-[rgba(255,255,255,0.1)]">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    onClick={() => setIsOpen(false)}
                    className="text-base text-[#94A3B8] hover:text-white font-medium flex items-center gap-4 transition-colors p-2 rounded-xl hover:bg-[rgba(255,255,255,0.03)]"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] flex items-center justify-center">
                      <service.icon className="w-5 h-5" stroke="currentColor" />
                    </div>
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/gallery" onClick={() => setIsOpen(false)} className="text-xl font-sora font-semibold text-[#B6C2CF] hover:text-white transition-colors">Gallery</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="text-xl font-sora font-semibold text-[#B6C2CF] hover:text-white transition-colors">Contact</Link>
          </div>

          <div className="mt-auto pt-6 border-t border-[rgba(255,255,255,0.1)] flex flex-col gap-5">
            <a href="tel:+9173567564337" className="flex items-center justify-center gap-3 text-base font-semibold text-white group bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] py-4 rounded-2xl hover:bg-[rgba(255,255,255,0.08)] transition-all">
              <Phone className="w-5 h-5 text-[#00C2FF]" stroke="currentColor" />
              +91 73567 564337
            </a>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full text-center glass-btn text-white py-4 rounded-2xl font-semibold text-base shadow-[0_8px_20px_rgba(0,194,255,0.15)]"
            >
              Book Free Site Visit
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
