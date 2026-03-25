"use client";

import AdvancedServiceTemplate from "@/components/sections/AdvancedServiceTemplate";
import { Laptop, Cpu, Settings, Headphones, HardDrive, RefreshCw } from "lucide-react";

export default function ITSupportPage() {
  return (
    <AdvancedServiceTemplate
      title="Professional IT & PC Support"
      subtitle="Expert hardware repairs and software solutions to keep your productivity flowing without technical interruptions."
      heroImage="/images/it_support_hero.png"
      overviewHeading="Expert Care for Your Digital Tools"
      overviewText={[
        "Technology should work for you, not against you. At Red Alert, we provide end-to-end IT support for both individual users and corporate fleets, ensuring your hardware is running at peak performance.",
        "From complex laptop motherboard repairs to setting up dedicated office server environments, our skilled technicians bring years of hardware expertise to every job. We understand how critical your devices are to your daily life.",
        "We don't just fix problems; we optimize your systems for speed, longevity, and security, serving clients throughout the Ernakulam district."
      ]}
      overviewImage="/images/why_choose_us.png"
      features={[
        {
          title: "Hardware Repairs",
          description: "Expert chip-level repairs for laptops, desktops, and servers, including screen and keyboard replacements.",
          icon: Laptop
        },
        {
          title: "Performance Tuning",
          description: "Speed up slow machines with SSD upgrades, RAM expansions, and deep system cleaning.",
          icon: Cpu
        },
        {
          title: "OS & Software",
          description: "Clean installations of Windows/Linux, driver updates, and licensed software deployment.",
          icon: Settings
        },
        {
          title: "Data Recovery",
          description: "Specialized service to recover lost files from damaged hard drives or corrupted SD cards.",
          icon: HardDrive
        },
        {
          title: "Remote Assistance",
          description: "Instant software troubleshooting for minor issues over secure remote desktop connections.",
          icon: Headphones
        },
        {
          title: "Annual AMC",
          description: "Worry-free annual maintenance contracts for offices, including monthly health checks and cleaning.",
          icon: RefreshCw
        }
      ]}
      processSteps={[
        { step: "01", title: "Diagnosis", desc: "A thorough check of both hardware and software to find the root cause of the issue." },
        { step: "02", title: "Cost Estimate", desc: "Transparent pricing upfront before any repair work or parts replacement begins." },
        { step: "03", title: "Precision Fix", desc: "Clean, lab-environment repairs using high-quality genuine replacement parts." },
        { step: "04", title: "Quality QA", desc: "Stress testing the machine to ensure it won't fail again shortly after delivery." }
      ]}
      brands={["Dell", "HP", "Lenovo", "Apple", "Asus", "Acer", "Microsoft"]}
      useCases={[
        { title: "Home Users", desc: "Fast repair turnarounds for school or personal laptops with data safety guarantee." },
        { title: "Startup Offices", desc: "Complete IT setup including printers, NAS storage, and local file sharing." },
        { title: "Graphic Studios", desc: "Building high-end custom workstations for video editing and 3D rendering." },
        { title: "Retail Groups", desc: "Support for POS machines and billing computers across multiple store locations." }
      ]}
      galleryImages={[
        "/images/why_choose_us.png",
        "/images/it_support_hero.png",
        "/images/hero_slide_2.png"
      ]}
    />
  );
}
