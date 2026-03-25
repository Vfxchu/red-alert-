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
        className={`fixed top-4 left-0 right-0 z-50 mx-auto max-w-7xl px-4 transition-all duration-300 ${
          scrolled ? "top-2" : "top-6"
        }`}
      >
        <div className="bg-white/80 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.06)] rounded-full px-6 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-red-brand" />
            <span className="font-playfair font-bold text-xl text-deep-black tracking-tight">
              RED ALERT
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-dark-grey hover:text-red-brand transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium text-dark-grey hover:text-red-brand transition-colors">
              About
            </Link>
            <div className="relative group">
              <Link href="/services" className="text-sm font-medium text-dark-grey hover:text-red-brand transition-colors flex items-center gap-1">
                Services <ChevronDown className="w-4 h-4" />
              </Link>
              {/* Mega Dropdown */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200">
                <div className="bg-white border border-gray-100 shadow-xl rounded-2xl w-[320px] p-2 flex flex-col gap-1">
                  {services.map((service) => {
                    const Icon = service.icon;
                    return (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group/link"
                      >
                        <div className="bg-red-50 text-red-brand p-2 rounded-lg group-hover/link:bg-red-brand group-hover/link:text-white transition-colors">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-sm font-medium text-dark-grey">{service.name}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
            <Link href="/gallery" className="text-sm font-medium text-dark-grey hover:text-red-brand transition-colors">
              Gallery
            </Link>
            <Link href="/contact" className="text-sm font-medium text-dark-grey hover:text-red-brand transition-colors">
              Contact
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 text-dark-grey">
              <Phone className="w-4 h-4 text-red-brand" />
              <span className="text-sm font-semibold">+91 73567 564337</span>
            </div>
            <Link
              href="/contact"
              className="bg-red-brand hover:bg-red-700 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-[0_4px_14px_rgba(204,0,0,0.4)] hover:shadow-[0_6px_20px_rgba(204,0,0,0.6)] hover:-translate-y-0.5"
            >
              Free Site Visit
            </Link>
          </div>

          <button
            className="lg:hidden p-2 text-dark-grey"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-[60] transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-8">
            <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
              <Shield className="w-8 h-8 text-red-brand" />
              <span className="font-playfair font-bold text-xl text-deep-black">RED ALERT</span>
            </Link>
            <button className="p-2 text-dark-grey bg-gray-100 rounded-full" onClick={() => setIsOpen(false)}>
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-col gap-6 overflow-y-auto pb-24">
            <Link href="/" onClick={() => setIsOpen(false)} className="text-2xl font-playfair font-semibold text-deep-black">Home</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="text-2xl font-playfair font-semibold text-deep-black">About</Link>
            
            <div className="flex flex-col gap-4">
              <span className="text-2xl font-playfair font-semibold text-deep-black">Services</span>
              <div className="flex flex-col gap-3 pl-4 border-l-2 border-red-brand/20">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg text-dark-grey font-medium flex items-center gap-3"
                  >
                    <service.icon className="w-5 h-5 text-red-brand" />
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/gallery" onClick={() => setIsOpen(false)} className="text-2xl font-playfair font-semibold text-deep-black">Gallery</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="text-2xl font-playfair font-semibold text-deep-black">Contact</Link>
          </div>

          <div className="mt-auto pt-6 border-t border-gray-100 flex flex-col gap-4">
            <a href="tel:+9173567564337" className="flex items-center justify-center gap-2 text-lg font-semibold text-dark-grey">
              <Phone className="w-5 h-5 text-red-brand" />
              +91 73567 564337
            </a>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full text-center bg-red-brand text-white py-4 rounded-full font-semibold text-lg"
            >
              Book Free Site Visit
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
