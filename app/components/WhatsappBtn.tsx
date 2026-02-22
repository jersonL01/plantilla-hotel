"use client";

import Image from "next/image";

const PHONE = "56912345678"; // <-- cambia a tu número (sin +, sin espacios)
const MESSAGE = "Hola, quiero cotizar una reserva 👋";
const WA_LINK = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;

const ICON_SRC = "/whatsapp.png"; // <-- tu logo en /public (ej: /img/wa.png)

export default function WhatsappBtn() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hablar por WhatsApp"
      className="fixed bottom-5 right-5 z-[60] flex items-center gap-2 rounded-full bg-white/90 backdrop-blur border shadow-lg px-3 py-2 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl active:translate-y-0"
    >
      <span className="relative h-10 w-10 overflow-hidden rounded-full">
        <Image
          src="/logo-whatsapp.webp"
          alt="WhatsApp"
          fill
          className="object-cover"
          priority
        />
      </span>

      <span className="hidden sm:block text-sm font-semibold text-neutral-900">
        WhatsApp
      </span>
    </a>
  );
}