"use client";

import AdvancedServiceTemplate from "@/components/sections/AdvancedServiceTemplate";
import { Bell, ShieldAlert, Zap, Radio, PhoneCall, Volume2 } from "lucide-react";

export default function AlarmPage() {
  return (
    <AdvancedServiceTemplate
      title="Intruder & Fire Alarm Systems"
      subtitle="Uncompromising early-detection systems that trigger instant alerts to stop threats before they escalate."
      heroImage="/images/alarm_hero.png"
      overviewHeading="Seconds Matter When Security is Breached"
      overviewText={[
        "Security is about response time. Our advanced Intruder and Fire alarm systems are designed to detect unauthorized entry or smoke in its earliest stages, giving you the critical seconds needed to act.",
        "We combine wireless sensors, vibration detectors, and intelligent smoke probes into a unified defense network. When a sensor is tripped, your phone rings and the sirens sound, ensuring every intrusion is met with a loud, visible response.",
        "From small homes to large industrial plants in Kerala, Red Alert builds the safety net that never sleeps."
      ]}
      overviewImage="/images/gallery_4.png"
      features={[
        {
          title: "Wireless Hybrid Tech",
          description: "Clean installations without messy wires, using encrypted long-range radio to communicate with the panel.",
          icon: Radio
        },
        {
          title: "Vibration Detectors",
          description: "Specialized sensors for glass windows and walls that detect drilling or breaking before a thief enters.",
          icon: ShieldAlert
        },
        {
          title: "Dual-Path Calling",
          description: "The system alerts you via Wi-Fi and 4G SIM simultaneously, ensuring notifications reach you even if lines are cut.",
          icon: PhoneCall
        },
        {
          title: "Pet-Immune PIR",
          description: "Movement sensors that ignore house pets while instantly flagging human-sized intruders.",
          icon: Zap
        },
        {
          title: "High-Decibel Sirens",
          description: "External sirens with strobe lights that serve as a massive psychological deterrent and notify neighbors.",
          icon: Volume2
        },
        {
          title: "Smoke & Heat Sensors",
          description: "Early fire detection that sounds a specific alert, giving your family or staff a clear path to safety.",
          icon: Bell
        }
      ]}
      processSteps={[
        { step: "01", title: "Vulnerability Test", desc: "Our team tests your doors, windows, and weak points for easy intrusion paths." },
        { step: "02", title: "Sensor Zoning", desc: "Logic design where different areas (e.g. Ground Floor) can be armed while you sleep upstairs." },
        { step: "03", title: "Clean Install", desc: "Discreet sensor mounting and central panel placement for easy arming/disarming." },
        { step: "04", title: "Alert Routing", desc: "Configuring the app to call multiple phone numbers and emergency contacts on trigger." }
      ]}
      brands={["Ajax", "Honeywell", "Bosch", "Godrej", "Securico", "Hikvision", "Texecom"]}
      useCases={[
        { title: "Jewellery Shops", desc: "High-grade vibration sensors on vaults and panic buttons for emergency staff use." },
        { title: "Empty Residences", desc: "Perfect for NRI homes; get instant mobile alerts if someone steps onto your property." },
        { title: "Bank ATMs", desc: "Integrated heat and shake sensors to detect gas-cutting or physical machine tempering." },
        { title: "Warehouses", desc: "Comprehensive fire and smoke detection across large ceiling spans with beam sensors." }
      ]}
      galleryImages={[
        "/images/gallery_4.png",
        "/images/alarm_hero.png",
        "/images/hero_slide_1.png"
      ]}
    />
  );
}
