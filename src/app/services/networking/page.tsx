"use client";

import AdvancedServiceTemplate from "@/components/sections/AdvancedServiceTemplate";
import { Network, Server, Cable, Wifi, Shield, Globe } from "lucide-react";

export default function NetworkingPage() {
  return (
    <AdvancedServiceTemplate
      title="Enterprise Networking & Cabling"
      subtitle="Robust, high-speed data infrastructure that serves as the unbreakable backbone for your business operations."
      heroImage="/images/networking_hero.png"
      overviewHeading="The Power of Connectivity"
      overviewText={[
        "Modern business depends on every millisecond of connectivity. At Red Alert, we specialize in high-performance networking solutions that ensure zero downtime and maximum data throughput.",
        "From professional rack management to high-speed fiber optic integration, our certified network engineers design infrastructures that scale with your growth. We don't just pull cables; we build high-speed highways for your data.",
        "Based in Kochi, we serve businesses across Kerala, providing the stability and speed required in today's digital landscape."
      ]}
      overviewImage="/images/gallery_2.png"
      features={[
        {
          title: "Structured Cabling",
          description: "Flawless Cat6/Cat6A/Cat7 cabling with professional tagging, combing, and certification for industrial standards.",
          icon: Cable
        },
        {
          title: "Managed Wi-Fi 6",
          description: "High-density wireless solutions with seamless roaming, ensuring your staff stays connected even as they move.",
          icon: Wifi
        },
        {
          title: "Cloud-Managed Rack",
          description: "Smart rack installations that allow for remote troubleshooting and monitoring of your network health.",
          icon: Server
        },
        {
          title: "Fiber Optic Splicing",
          description: "Internal fiber backbones for ultra-high-speed links between floors or separate buildings on a campus.",
          icon: Globe
        },
        {
          title: "VLAN Segmentation",
          description: "Enhanced security by isolating guest Wi-Fi from internal business servers and security cameras.",
          icon: Shield
        },
        {
          title: "Load Balancing",
          description: "Dual-ISP configurations that automatically switch over if one provider fails, ensuring continuous uptime.",
          icon: Network
        }
      ]}
      processSteps={[
        { step: "01", title: "Heatmap Survey", desc: "We use professional tools to map Wi-Fi coverage and plan cable pathways across your facility." },
        { step: "02", title: "Infrastructure Design", desc: "Selection of enterprise-grade switches, routers, and cabinet sizes based on user load." },
        { step: "03", title: "Deployment", desc: "Expert pulling, terminating, and labeling. We ensure your server room looks like a work of art." },
        { step: "04", title: "Speed Validation", desc: "Every node is tested for speed and packets. Full documentation and IP map handed over." }
      ]}
      brands={["Cisco", "Ubiquiti", "D-Link", "CommScope", "Aruba", "Molex", "TP-Link"]}
      useCases={[
        { title: "Modern Offices", desc: "Gigabit speeds to every desk and encrypted Wi-Fi for all corporate devices." },
        { title: "Co-working Spaces", desc: "Isolated networks for different clients sharing the same physical infrastructure." },
        { title: "Education Campuses", desc: "High-capacity Wi-Fi across classrooms and fiber links between distant buildings." },
        { title: "Smart Homes", desc: "A backbone that supports 50+ smart devices, CCTV, and high-def streaming without lag." }
      ]}
      galleryImages={[
        "/images/gallery_2.png",
        "/images/networking_hero.png",
        "/images/hero_slide_3.png"
      ]}
    />
  );
}
