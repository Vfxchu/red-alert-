import Link from "next/link";
import { Shield, MessageCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B1120] pt-12 pb-6 md:pt-20 border-t border-[rgba(255,255,255,0.05)] mt-auto relative overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.15)] to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="inline-flex w-fit items-center group">
              <img src="/images/logo.png" alt="Red Alert Security Systems" className="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-105 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]" />
            </Link>
            <p className="text-[#B6C2CF] text-sm md:text-base leading-relaxed pr-4">
              Kerala&apos;s most trusted end-to-end security solutions partner. Protecting homes and businesses across Ernakulam since 2017.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-[#B6C2CF] hover:text-white hover:bg-[rgba(255,255,255,0.1)] transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-[#B6C2CF] hover:text-white hover:bg-[rgba(255,255,255,0.1)] transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-[#B6C2CF] hover:text-white hover:bg-[rgba(255,255,255,0.1)] transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" /></svg>
              </a>
              <a href="https://wa.me/919961334337" className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-[#B6C2CF] hover:text-white hover:bg-[rgba(255,255,255,0.1)] transition-all">
                <MessageCircle className="w-5 h-5 md:w-6 md:h-6" stroke="currentColor" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-sora font-bold text-xl md:text-2xl text-white mb-4 md:mb-6">Quick Links</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="/" className="text-[#B6C2CF] hover:text-white transition-colors text-sm md:text-base font-medium">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-[#B6C2CF] hover:text-white transition-colors text-sm md:text-base font-medium">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="text-[#B6C2CF] hover:text-white transition-colors text-sm md:text-base font-medium">All Services</Link>
              </li>
              <li>
                <Link href="/gallery" className="text-[#B6C2CF] hover:text-white transition-colors text-sm md:text-base font-medium">Project Gallery</Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#B6C2CF] hover:text-white transition-colors text-sm md:text-base font-medium">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="font-sora font-bold text-xl md:text-2xl text-white mb-4 md:mb-6">Our Services</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="/services/cctv" className="text-[#B6C2CF] hover:text-white transition-colors text-sm md:text-base font-medium">CCTV & Surveillance</Link>
              </li>
              <li>
                <Link href="/services/networking" className="text-[#B6C2CF] hover:text-white transition-colors text-sm md:text-base font-medium">Networking & Cabling</Link>
              </li>
              <li>
                <Link href="/services/biometric" className="text-[#B6C2CF] hover:text-white transition-colors text-sm md:text-base font-medium">Biometric & Access</Link>
              </li>
              <li>
                <Link href="/services/alarm" className="text-[#B6C2CF] hover:text-white transition-colors text-sm md:text-base font-medium">Alarm Systems</Link>
              </li>
              <li>
                <Link href="/services/it-support" className="text-[#B6C2CF] hover:text-white transition-colors text-sm md:text-base font-medium">IT & PC Support</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-sora font-bold text-xl md:text-2xl text-white mb-4 md:mb-6">Contact Us</h3>
            <ul className="flex flex-col gap-4">
              <li className="text-[#B6C2CF] text-sm md:text-base group">
                <span className="font-semibold block mb-1 text-white">Phone:</span>
                <a href="tel:+9173567564337" className="group-hover:text-white transition-colors">+91 73567 564337</a>
              </li>
              <li className="text-[#B6C2CF] text-sm md:text-base group">
                <span className="font-semibold block mb-1 text-white">Email:</span>
                <a href="mailto:Info@redsystems.co.in" className="group-hover:text-white transition-colors">Info@redsystems.co.in</a>
              </li>
              <li className="text-[#B6C2CF] text-sm md:text-base leading-relaxed">
                <span className="font-semibold block mb-1 text-white">Address:</span>
                1st Floor, 14/291 H, Suite 42J, A Square, Edappally Pukkattupady Road, Kuzhivelippady, Ernakulam, Kerala — 683561
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="pt-8 border-t border-[rgba(255,255,255,0.05)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#94A3B8] text-sm md:text-base font-medium">
            © {currentYear} Red Alert Security Systems. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm md:text-base font-medium text-[#94A3B8]">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
