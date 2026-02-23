"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkBase =
    "relative text-sm font-medium text-neutral-800/90 transition-colors duration-200 hover:text-neutral-900";

  const linkUnderline =
    "after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-neutral-900 after:transition-transform after:duration-300 hover:after:scale-x-100";

  return (
    <header
      className={[
        "sticky top-0 z-50 backdrop-blur bg-white/90 transition-shadow duration-300",
        scrolled ? "shadow-sm border-b" : "border-b border-transparent",
      ].join(" ")}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link
          href="/home"
          className="text-lg font-extrabold tracking-tight text-neutral-900 transition-opacity hover:opacity-80"
        >
          Hotel Aurora
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/rooms" className={`${linkBase} ${linkUnderline}`}>
            Habitaciones
          </Link>
          <Link href="/home#amenities" className={`${linkBase} ${linkUnderline}`}>
            Servicios
          </Link>
          <Link href="/home#location" className={`${linkBase} ${linkUnderline}`}>
            Ubicación
          </Link>
          <Link href="/contact" className={`${linkBase} ${linkUnderline}`}>
            Contacto
          </Link>
        </nav>

        <Link
          href="/contact"
          className={[
            "rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200",
            "bg-neutral-900 text-white hover:bg-neutral-800",
            "hover:-translate-y-[1px] active:translate-y-0",
          ].join(" ")}
        >
          Reservar
        </Link>
      </div>
    </header>
  );
}