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
    <div className="flex flex-col w-full overflow-hidden pt-24 bg-[#FAFAFA]">
      {/* Hero */}
      <section className="py-20 bg-white border-b border-gray-100 text-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.h1 variants={fadeUp} initial="hidden" animate="visible" className="text-4xl md:text-5xl font-playfair font-bold text-red-brand mb-6">
            Contact Us & Book a Free Site Visit
          </motion.h1>
          <motion.p variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.1 }} className="text-xl text-dark-grey max-w-2xl mx-auto">
            Ready to secure your property? Reach out to Kerala's most trusted security experts today.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Form Side */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="w-full lg:w-3/5">
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-brand/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                
                <h2 className="text-3xl font-playfair font-bold text-deep-black mb-8 relative z-10">
                  Send Us A Message
                </h2>
                
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-semibold text-dark-grey">Full Name <span className="text-red-brand">*</span></label>
                      <input 
                        {...register("name", { required: true })}
                        className="bg-[#F5F5F5] border-transparent focus:bg-white focus:border-red-brand/50 focus:ring-2 focus:ring-red-brand/20 rounded-xl px-4 py-3 outline-none transition-all"
                        placeholder="John Doe"
                      />
                      {errors.name && <span className="text-red-brand text-xs">Name is required</span>}
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-semibold text-dark-grey">Phone Number <span className="text-red-brand">*</span></label>
                      <input 
                        {...register("phone", { required: true })}
                        className="bg-[#F5F5F5] border-transparent focus:bg-white focus:border-red-brand/50 focus:ring-2 focus:ring-red-brand/20 rounded-xl px-4 py-3 outline-none transition-all"
                        placeholder="+91 98765 43210"
                      />
                      {errors.phone && <span className="text-red-brand text-xs">Phone is required</span>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-semibold text-dark-grey">Email Address</label>
                      <input 
                        {...register("email")}
                        className="bg-[#F5F5F5] border-transparent focus:bg-white focus:border-red-brand/50 focus:ring-2 focus:ring-red-brand/20 rounded-xl px-4 py-3 outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-semibold text-dark-grey">Service Required</label>
                      <select 
                        {...register("service")}
                        className="bg-[#F5F5F5] border-transparent focus:bg-white focus:border-red-brand/50 focus:ring-2 focus:ring-red-brand/20 rounded-xl px-4 py-3 outline-none transition-all text-dark-grey"
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

                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-dark-grey">Message / Address <span className="text-red-brand">*</span></label>
                    <textarea 
                      {...register("message", { required: true })}
                      rows={4}
                      className="bg-[#F5F5F5] border-transparent focus:bg-white focus:border-red-brand/50 focus:ring-2 focus:ring-red-brand/20 rounded-xl px-4 py-3 outline-none transition-all resize-none"
                      placeholder="Please share your location and specific requirements..."
                    />
                    {errors.message && <span className="text-red-brand text-xs">Message is required</span>}
                  </div>

                  <button 
                    type="submit"
                    className="mt-4 bg-red-brand hover:bg-red-800 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-[0_4px_14px_rgba(204,0,0,0.3)] hover:shadow-[0_6px_20px_rgba(204,0,0,0.5)] hover:-translate-y-1"
                  >
                    <Send className="w-5 h-5" />
                    Request Free Site Visit
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Info Side */}
            <motion.div variants={slideLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} className="w-full lg:w-2/5 flex flex-col gap-8">
              
              <div className="relative h-64 rounded-3xl overflow-hidden shadow-lg border border-gray-100 group">
                <Image src="/images/contact_bg.png" alt="Red Alert Office" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-deep-black/60 mix-blend-multiply" />
                <div className="absolute inset-0 flex flex-col justify-center p-8 text-white">
                  <h3 className="font-playfair text-3xl font-bold mb-2">Visit Our Office</h3>
                  <p className="text-white/80 font-medium">We're always open for a coffee and a security consultation.</p>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-50 text-red-brand rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-deep-black mb-1">Phone & WhatsApp</h4>
                    <a href="tel:+9173567564337" className="text-dark-grey hover:text-red-brand block">+91 73567 564337</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-50 text-red-brand rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-deep-black mb-1">Email</h4>
                    <a href="mailto:Info@redsystems.co.in" className="text-dark-grey hover:text-red-brand block">Info@redsystems.co.in</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-50 text-red-brand rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-deep-black mb-1">Office Address</h4>
                    <p className="text-dark-grey leading-relaxed text-sm">
                      1st Floor, 14/291 H, Suite 42J, A Square, Edappally Pukkattupady Road, Kuzhivelippady, Ernakulam, Kerala — 683561
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-50 text-red-brand rounded-full flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-deep-black mb-1">Business Hours</h4>
                    <p className="text-dark-grey text-sm">Monday — Saturday<br/>9:00 AM — 6:00 PM</p>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Maps Embed */}
      <section className="h-[400px] w-full bg-gray-200 relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125745.3197170131!2d76.22557579126487!3d9.982631557993077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d514abec6bf%3A0xbd582caa5844192!2sKochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1714574921935!5m2!1sen!2sin" 
          className="absolute inset-0 w-full h-full border-0" 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps Location"
        />
      </section>
    </div>
  );
}
