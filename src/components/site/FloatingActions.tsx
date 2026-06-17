import { Phone, MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER, waLink } from "@/lib/plants";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3 sm:bottom-7 sm:right-7">
      <a
        href={`tel:+${WHATSAPP_NUMBER}`}
        aria-label="Call Now"
        className="grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-soft transition-transform hover:scale-110 sm:h-14 sm:w-14"
      >
        <Phone className="h-5 w-5" />
      </a>
      <a
        href={waLink()}
        target="_blank"
        rel="noreferrer"
        aria-label="Order on WhatsApp"
        className="relative grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-white shadow-soft transition-transform hover:scale-110 sm:h-16 sm:w-16 animate-pulse-ring"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}
