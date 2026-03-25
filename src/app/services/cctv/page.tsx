"use client";

import AdvancedServiceTemplate from "@/components/sections/AdvancedServiceTemplate";
import { Camera, ShieldCheck, Zap, Monitor, HardDrive, Smartphone } from "lucide-react";

export default function CCTVPage() {
  return (
    <AdvancedServiceTemplate
      title="Next-Gen CCTV & Video Surveillance"
      subtitle="Advanced monitoring solutions designed for absolute clarity, 24/7 reliability, and total peace of mind for your home or business."
      heroImage="/images/cctv_hero.png"
      overviewHeading="Smart Surveillance for a Safer Tomorrow"
      overviewText={[
        "In an era where security is paramount, Red Alert provides cutting-edge Video Surveillance systems that do more than just record. Our AI-powered solutions offer proactive threat detection, high-definition clarity, and seamless remote access.",
        "Whether you need to secure a small retail shop, a vast industrial warehouse, or your private residence in Kerala, our expert engineers design and install systems tailored to your specific environment and risk profile.",
        "From thermal imaging to advanced license plate recognition, we bring world-class security technology right to your doorstep."
      ]}
      overviewImage="/images/cctv_operator.png"
      features={[
        {
          title: "AI Human Detection",
          description: "Smart algorithms that distinguish between humans, vehicles, and pets to eliminate false alarms and focus on real threats.",
          icon: Camera
        },
        {
          title: "4K Ultra-HD Clarity",
          description: "Capture every detail with crystal clear 8MP resolution cameras, ensuring high-quality evidence during critical events.",
          icon: Monitor
        },
        {
          title: "Full-Color Night Vision",
          description: "Advanced star-light sensors that provide vibrant, full-color video even in pitch-black environments.",
          icon: Zap
        },
        {
          title: "Intelligent Storage",
          description: "H.265+ compression technology that saves up to 80% bandwidth and storage space without losing quality.",
          icon: HardDrive
        },
        {
          title: "Mobile Link App",
          description: "Watch your property live from anywhere in the world. Receive instant push notifications on suspicious activity.",
          icon: Smartphone
        },
        {
          title: "Privacy Masking",
          description: "Legally compliant zones that allow you to block out private areas from being recorded or monitored.",
          icon: ShieldCheck
        }
      ]}
      processSteps={[
        { step: "01", title: "Site Assessment", desc: "Our experts visit your location to identify blind spots and strategic camera placements." },
        { step: "02", title: "Custom Design", desc: "We create a detailed system blueprint selecting the right lenses and storage for your needs." },
        { step: "03", title: "Precision Install", desc: "Neat, professional cabling and camera mounting by certified Red Alert technicians." },
        { step: "04", title: "Live Handoff", desc: "Final testing, mobile app configuration, and staff training on how to use the system." }
      ]}
      brands={["Hikvision", "Dahua", "CP Plus", "Honeywell", "Bosch", "Uniview", "Axis"]}
      useCases={[
        { title: "Residential Villas", desc: "Complete perimeter protection with high-end dome cameras and gate intercom integration." },
        { title: "Retail Stores", desc: "Monitor stock, prevent shoplifting, and analyze customer heatmaps for better store layout." },
        { title: "Warehouses", desc: "Long-range PTZ cameras to cover vast areas and outdoor-rated bullet cameras for yard security." },
        { title: "Corporate Offices", desc: "Internal corridor monitoring and server room security with specialized pinhole cameras." }
      ]}
      galleryImages={[
        "/images/gallery_1.png",
        "/images/cctv_hero.png",
        "/images/gallery_4.png"
      ]}
    />
  );
}
