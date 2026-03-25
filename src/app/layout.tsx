import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

/* ============================================================
   FONT CONFIGURATION
   Sora  → Headings (H1, H2, H3, brand name)
   Inter → Body text, labels, buttons, nav links
   ============================================================ */
const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Red Alert Security Systems | Premium CCTV, Networking & Biometrics in Kerala",
  description:
    "Kerala's most trusted end-to-end security solutions partner. We provide expert CCTV surveillance, networking cabling, biometric access control, and IT support across Ernakulam and beyond.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} h-full antialiased`}
    >
      {/*
        Body rules — CONTRAST ENFORCED:
        - bg-[#050816]  : deep midnight background (darkest layer)
        - text-white    : primary text is always white on this dark background
        - font-inter    : Inter is the default body font
      */}
      <body className="min-h-full flex flex-col font-inter bg-[#050816] text-white scroll-smooth">
        <Navbar />
        <main className="flex-grow flex flex-col">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
