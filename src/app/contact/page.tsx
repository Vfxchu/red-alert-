"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import Image from "next/image";
import { fadeUp, slideLeft } from "@/lib/animations";

type FormData = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

export default function ContactPage() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    alert("Thank you! Your request for a free site visit has been received. Our team will contact you shortly.");
    reset();
  };

  return (
    <div className="flex flex-col w-full overflow-hidden pt-24 bg-[#050816]">
      {/* Hero */}
      <section className="py-12 md:py-20 bg-[#0B1120] border-b border-[rgba(255,255,255,0.05)] text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[rgba(255,255,255,0.02)] rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <motion.h1 variants={fadeUp} initial="hidden" animate="visible" className="text-4xl md:text-6xl font-sora font-bold text-white mb-4 md:mb-6 text-glow tracking-tight">
            Contact Us & Book a Free Site Visit
          </motion.h1>
          <motion.p variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.1 }} className="text-lg md:text-xl text-[#B6C2CF] max-w-2xl mx-auto">
            Ready to secure your property? Reach out to Kerala's most trusted security experts today.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-24 bg-[#050816]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            
            {/* Form Side */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="w-full lg:w-3/5">
              <div className="glass-card rounded-[1.5rem] md:rounded-3xl p-6 md:p-12 border border-[rgba(255,255,255,0.1)] relative overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
                <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-[rgba(255,255,255,0.03)] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                
                <h2 className="text-3xl md:text-4xl font-sora font-bold text-white mb-6 md:mb-8 relative z-10 tracking-tight">
                  Send Us A Message
                </h2>
                
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 md:gap-6 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                    <div className="flex flex-col gap-1.5 md:gap-2">
                      <label className="text-sm md:text-base font-semibold text-[#B6C2CF]">Full Name <span className="text-white">*</span></label>
                      <input 
                        {...register("name", { required: true })}
                        className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] focus:bg-[rgba(255,255,255,0.05)] focus:border-white focus:ring-1 focus:ring-white rounded-xl px-4 py-3 text-sm md:text-base outline-none transition-all text-white placeholder-[rgba(255,255,255,0.3)]"
                        placeholder="John Doe"
                      />
                      {errors.name && <span className="text-white text-xs opacity-70">Name is required</span>}
                    </div>
                    <div className="flex flex-col gap-1.5 md:gap-2">
                      <label className="text-sm md:text-base font-semibold text-[#B6C2CF]">Phone Number <span className="text-white">*</span></label>
                      <input 
                        {...register("phone", { required: true })}
                        className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] focus:bg-[rgba(255,255,255,0.05)] focus:border-white focus:ring-1 focus:ring-white rounded-xl px-4 py-3 text-sm md:text-base outline-none transition-all text-white placeholder-[rgba(255,255,255,0.3)]"
                        placeholder="+91 98765 43210"
                      />
                      {errors.phone && <span className="text-white text-xs opacity-70">Phone is required</span>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                    <div className="flex flex-col gap-1.5 md:gap-2">
                      <label className="text-sm md:text-base font-semibold text-[#B6C2CF]">Email Address</label>
                      <input 
                        {...register("email")}
                        className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] focus:bg-[rgba(255,255,255,0.05)] focus:border-white focus:ring-1 focus:ring-white rounded-xl px-4 py-3 text-sm md:text-base outline-none transition-all text-white placeholder-[rgba(255,255,255,0.3)]"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5 md:gap-2">
                      <label className="text-sm md:text-base font-semibold text-[#B6C2CF]">Service Required</label>
                      <select 
                        {...register("service")}
                        className="bg-[#050816] border border-[rgba(255,255,255,0.1)] focus:bg-[rgba(255,255,255,0.05)] focus:border-white focus:ring-1 focus:ring-white rounded-xl px-4 py-3 text-sm md:text-base outline-none transition-all text-white appearance-none"
                      >
                        <option value="cctv">CCTV Installation</option>
                        <option value="networking">Networking & Cabling</option>
                        <option value="biometric">Biometric Access</option>
                        <option value="alarm">Intruder & Fire Alarm</option>
                        <option value="it-support">IT & PC Support</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5 md:gap-2">
                    <label className="text-sm md:text-base font-semibold text-[#B6C2CF]">Message / Address <span className="text-white">*</span></label>
                    <textarea 
                      {...register("message", { required: true })}
                      rows={4}
                      className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] focus:bg-[rgba(255,255,255,0.05)] focus:border-white focus:ring-1 focus:ring-white rounded-xl px-4 py-3 text-sm md:text-base outline-none transition-all resize-none text-white placeholder-[rgba(255,255,255,0.3)]"
                      placeholder="Please share your location and specific requirements..."
                    />
                    {errors.message && <span className="text-white text-xs opacity-70">Message is required</span>}
                  </div>

                  <button 
                    type="submit"
                    className="mt-2 md:mt-4 glass-btn text-white font-bold py-3 md:py-4 text-base md:text-lg rounded-xl flex items-center justify-center gap-2 transition-all w-full"
                  >
                    <Send className="w-5 h-5 md:w-6 md:h-6" />
                    Request Free Site Visit
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Info Side */}
            <motion.div variants={slideLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} className="w-full lg:w-2/5 flex flex-col gap-6 md:gap-8">
              
              <div className="relative h-48 md:h-64 rounded-[1.5rem] md:rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)] border border-[rgba(255,255,255,0.1)] group">
                <Image src="/images/contact_bg.png" alt="Red Alert Office" fill className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" />
                <div className="absolute inset-0 bg-[#050816]/70 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 text-white z-10">
                  <h3 className="font-sora text-2xl md:text-3xl font-bold mb-1 md:mb-2">Visit Our Office</h3>
                  <p className="text-[#B6C2CF] text-sm md:text-base font-medium">We're always open for a coffee and a security consultation.</p>
                </div>
              </div>

              <div className="glass-card rounded-[1.5rem] md:rounded-3xl p-6 md:p-8 border border-[rgba(255,255,255,0.1)] flex flex-col gap-6 md:gap-8 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
                <div className="flex items-start gap-4 md:gap-5">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] text-white rounded-2xl flex items-center justify-center shrink-0 shadow-[0_4px_15px_rgba(0,0,0,0.3)]">
                    <Phone className="w-5 h-5 md:w-6 md:h-6" stroke="currentColor" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-0.5 md:mb-1 text-base md:text-lg">Phone & WhatsApp</h4>
                    <a href="tel:+9173567564337" className="text-[#B6C2CF] text-sm md:text-base hover:text-white transition-colors block">+91 73567 564337</a>
                  </div>
                </div>

                <div className="flex items-start gap-4 md:gap-5">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] text-white rounded-2xl flex items-center justify-center shrink-0 shadow-[0_4px_15px_rgba(0,0,0,0.3)]">
                    <Mail className="w-5 h-5 md:w-6 md:h-6" stroke="currentColor" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-0.5 md:mb-1 text-base md:text-lg">Email</h4>
                    <a href="mailto:Info@redsystems.co.in" className="text-[#B6C2CF] text-sm md:text-base hover:text-white transition-colors block">Info@redsystems.co.in</a>
                  </div>
                </div>

                <div className="flex items-start gap-4 md:gap-5">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] text-white rounded-2xl flex items-center justify-center shrink-0 shadow-[0_4px_15px_rgba(0,0,0,0.3)]">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6" stroke="currentColor" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-0.5 md:mb-1 text-base md:text-lg">Office Address</h4>
                    <p className="text-[#B6C2CF] leading-relaxed text-sm md:text-base">
                      1st Floor, 14/291 H, Suite 42J, A Square, Edappally Pukkattupady Road, Kuzhivelippady, Ernakulam, Kerala — 683561
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 md:gap-5">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] text-white rounded-2xl flex items-center justify-center shrink-0 shadow-[0_4px_15px_rgba(0,0,0,0.3)]">
                    <Clock className="w-5 h-5 md:w-6 md:h-6" stroke="currentColor" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-0.5 md:mb-1 text-base md:text-lg">Business Hours</h4>
                    <p className="text-[#B6C2CF] text-sm md:text-base leading-relaxed">Monday — Saturday<br/>9:00 AM — 6:00 PM</p>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Maps Embed - With CSS filter to map match dark theme */}
      <section className="h-[300px] md:h-[400px] w-full bg-[#050816] relative border-t border-[rgba(255,255,255,0.05)]">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125745.3197170131!2d76.22557579126487!3d9.982631557993077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d514abec6bf%3A0xbd582caa5844192!2sKochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1714574921935!5m2!1sen!2sin" 
          className="absolute inset-0 w-full h-full border-0 grayscale-[80%] invert-[90%] hue-rotate-180 contrast-125" 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps Location"
        />
        {/* Prevent interaction from breaking the dark mode illusion via the map container background */}
        <div className="absolute inset-0 pointer-events-none border border-[rgba(255,255,255,0.05)] shadow-[inset_0_0_20px_rgba(0,0,0,1)]"></div>
      </section>
    </div>
  );
}
