"use client";

import AdvancedServiceTemplate from "@/components/sections/AdvancedServiceTemplate";
import { Fingerprint, Users, Clock, Lock, ShieldCheck, Database } from "lucide-react";

export default function BiometricPage() {
  return (
    <AdvancedServiceTemplate
      title="Biometric & Access Control"
      subtitle="Modern attendance and high-security entry systems that ensure only the right people have the right access."
      heroImage="/images/biometric_hero.png"
      overviewHeading="Security at Your Fingertips"
      overviewText={[
        "Ditch the traditional keys and paper logs. Red Alert brings advanced biometric technology to Kerala's businesses, providing foolproof identity verification and automated attendance tracking.",
        "Whether you need a simple fingerprint scanner for a small office or a multi-door facial recognition system for a high-security facility, we offer integrated solutions that are easy to manage and impossible to bypass.",
        "Our systems integrate seamlessly with HR payroll software, making your administration tasks faster and more accurate than ever before."
      ]}
      overviewImage="/images/gallery_3.png"
      features={[
        {
          title: "Multi-Modal Auth",
          description: "Support for Fingerprint, Face ID, Iris recognition, RFID cards, and secure mobile NFC unlocking.",
          icon: Fingerprint
        },
        {
          title: "Real-time Attendance",
          description: "Automatically log entry/exit times and sync them instantly to your cloud-based HR portal.",
          icon: Clock
        },
        {
          title: "Anti-Passback Logic",
          description: "Strict security protocols that prevent users from passing their credentials back to someone else.",
          icon: Lock
        },
        {
          title: "Large Database",
          description: "Support for up to 100,000+ users on a single network, perfect for large industrial workforces.",
          icon: Users
        },
        {
          title: "Integration Ready",
          description: "Connect your access control directly to alarms, fire systems, and CCTV for an all-in-one ecosystem.",
          icon: ShieldCheck
        },
        {
          title: "Cloud Backup",
          description: "Never lose your logs. All entry and exit data is backed up to secure servers daily.",
          icon: Database
        }
      ]}
      processSteps={[
        { step: "01", title: "Access Audit", desc: "We evaluate every entry point and define user roles and permission levels." },
        { step: "02", title: "Device Selection", desc: "Matching the right technology (e.g. Touchless Face ID for hygiene) to your environment." },
        { step: "03", title: "Database Setup", desc: "Configuration of servers, software, and initial registration of staff members." },
        { step: "04", title: "Testing & Go-Live", desc: "Stress testing the lock mechanisms and training admin staff on report generation." }
      ]}
      brands={["ZKTeco", "Essl", "Matrix", "Hikvision", "Honeywell", "HID", "Suprema"]}
      useCases={[
        { title: "Corporate HQs", desc: "Elegant turnstiles and glass door magnetic locks that match modern office aesthetics." },
        { title: "Manufacturing Units", desc: "Rugged, dust-proof biometric terminals for factory floors with 1000+ workers." },
        { title: "Gated Communities", desc: "Vehicle RFID tags and resident biometric entry for common areas like gyms/pools." },
        { title: "Server Rooms", desc: "Dual-layer authentication (Finger + PIN) for the most sensitive data areas." }
      ]}
      galleryImages={[
        "/images/gallery_3.png",
        "/images/biometric_hero.png",
        "/images/hero_slide_4.png"
      ]}
    />
  );
}
