import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link 
        href="https://wa.me/6281373645393?text=Halo%20Admin%20Hiace%20Aceh,%20saya%20mau%20pesan%20tiket..."
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-transform hover:scale-110 group"
        aria-label="Chat WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
        
        {/* Pulse animation ring */}
        <div className="absolute inset-0 rounded-full border-2 border-green-500 animate-ping opacity-75"></div>
      </Link>
    </div>
  );
}
