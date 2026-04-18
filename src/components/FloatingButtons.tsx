import { Phone, MessageCircle } from "lucide-react";
import { PHONE_TEL, WHATSAPP } from "@/data/packages";

export function FloatingButtons() {
  return (
    <div className="fixed right-4 bottom-24 md:bottom-6 z-40 flex flex-col gap-3">
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="size-14 rounded-full gradient-saffron text-white shadow-saffron flex items-center justify-center hover:scale-110 transition-transform animate-pulse"
      >
        <MessageCircle className="size-7" fill="currentColor" />
      </a>
      <a
        href={`tel:${PHONE_TEL}`}
        aria-label="Call us"
        className="size-14 rounded-full bg-deep-green text-white shadow-elevated flex items-center justify-center hover:scale-110 transition-transform"
      >
        <Phone className="size-6" />
      </a>
    </div>
  );
}
