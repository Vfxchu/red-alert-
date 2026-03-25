import Link from "next/link";
import { Shield, MessageCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F5F5F5] pt-20 pb-6 border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2">
              <Shield className="w-8 h-8 text-red-brand" />
              <span className="font-playfair font-bold text-xl text-deep-black tracking-tight">
                RED ALERT
              </span>
            </Link>
            <p className="text-dark-grey text-sm leading-relaxed pr-4">
              Kerala's most trusted end-to-end security solutions partner. Protecting homes and businesses across Ernakulam since 2017.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-dark-grey hover:text-red-brand hover:shadow-md transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-dark-grey hover:text-red-brand hover:shadow-md transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-dark-grey hover:text-red-brand hover:shadow-md transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
              </a>
              <a href="https://wa.me/919961334337" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-dark-grey hover:text-green-500 hover:shadow-md transition-all">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair font-bold text-lg text-deep-black mb-6">Quick Links</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="/" className="text-dark-grey hover:text-red-brand transition-colors text-sm font-medium">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-dark-grey hover:text-red-brand transition-colors text-sm font-medium">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="text-dark-grey hover:text-red-brand transition-colors text-sm font-medium">All Services</Link>
              </li>
              <li>
                <Link href="/gallery" className="text-dark-grey hover:text-red-brand transition-colors text-sm font-medium">Project Gallery</Link>
              </li>
              <li>
                <Link href="/contact" className="text-dark-grey hover:text-red-brand transition-colors text-sm font-medium">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="font-playfair font-bold text-lg text-deep-black mb-6">Our Services</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="/services/cctv" className="text-dark-grey hover:text-red-brand transition-colors text-sm font-medium">CCTV & Surveillance</Link>
              </li>
              <li>
                <Link href="/services/networking" className="text-dark-grey hover:text-red-brand transition-colors text-sm font-medium">Networking & Cabling</Link>
              </li>
              <li>
                <Link href="/services/biometric" className="text-dark-grey hover:text-red-brand transition-colors text-sm font-medium">Biometric & Access</Link>
              </li>
              <li>
                <Link href="/services/alarm" className="text-dark-grey hover:text-red-brand transition-colors text-sm font-medium">Alarm Systems</Link>
              </li>
              <li>
                <Link href="/services/it-support" className="text-dark-grey hover:text-red-brand transition-colors text-sm font-medium">IT & PC Support</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-playfair font-bold text-lg text-deep-black mb-6">Contact Us</h3>
            <ul className="flex flex-col gap-4">
              <li className="text-dark-grey text-sm">
                <span className="font-semibold block mb-1 text-deep-black">Phone:</span>
                <a href="tel:+9173567564337" className="hover:text-red-brand transition-colors">+91 73567 564337</a>
              </li>
              <li className="text-dark-grey text-sm">
                <span className="font-semibold block mb-1 text-deep-black">Email:</span>
                <a href="mailto:Info@redsystems.co.in" className="hover:text-red-brand transition-colors">Info@redsystems.co.in</a>
              </li>
              <li className="text-dark-grey text-sm leading-relaxed">
                <span className="font-semibold block mb-1 text-deep-black">Address:</span>
                1st Floor, 14/291 H, Suite 42J, A Square, Edappally Pukkattupady Road, Kuzhivelippady, Ernakulam, Kerala — 683561
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="pt-8 border-t border-accent-gold/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-dark-grey text-sm font-medium">
            © {currentYear} Red Alert Security Systems. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm font-medium text-dark-grey">
            <Link href="#" className="hover:text-red-brand transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-red-brand transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
