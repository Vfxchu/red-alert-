import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/9173567564337"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 group flex items-center justify-center"
      aria-label="Chat with us on WhatsApp"
    >
      <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-30 group-hover:opacity-50 transition-opacity"></div>
      <div className="relative bg-[#25D366] text-white p-3 md:p-4 rounded-full shadow-xl hover:scale-110 transition-transform duration-300">
        <MessageCircle className="w-6 h-6 md:w-8 md:h-8" />
      </div>
    </a>
  );
}
