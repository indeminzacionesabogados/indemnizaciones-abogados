import { Instagram, MessageCircle } from "lucide-react";

const whatsappLink =
  "https://wa.me/573052566811?text=Hola,%20necesito%20asesor%C3%ADa%20legal%20sobre%20responsabilidad%20civil";
const instagramLink = "https://www.instagram.com/indemnizaciones.abogados/";

export function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-4 z-40 flex flex-col items-end gap-3 md:bottom-8 md:right-8">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-[linear-gradient(135deg,#25d366,#1ebe57)] text-white shadow-[0_20px_40px_rgba(30,190,87,0.35)] transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2"
        aria-label="Chatear por WhatsApp"
      >
        <MessageCircle className="h-6 w-6" aria-hidden="true" />
      </a>
      <a
        href={instagramLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,#fcb045,#fd1d1d,#833ab4,#fcb045)] text-white shadow-[0_20px_40px_rgba(131,58,180,0.35)] transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2"
        aria-label="Visitar Instagram"
      >
        <Instagram className="h-6 w-6" aria-hidden="true" />
      </a>
    </div>
  );
}
