"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const closeMenu = () => setMenuOpen(false);

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
          onClick={closeMenu}
        >
          Hotel Aurora
        </Link>

        {/* Menú desktop */}
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

        {/* Botón reservar desktop */}
        <Link
          href="/contact"
          className={[
            "hidden md:inline-flex rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200",
            "bg-neutral-900 text-white hover:bg-neutral-800",
            "hover:-translate-y-[1px] active:translate-y-0",
          ].join(" ")}
        >
          Reservar
        </Link>

        {/* Botón hamburguesa móvil */}
        <button
          type="button"
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="inline-flex items-center justify-center rounded-xl p-2 text-neutral-900 transition hover:bg-neutral-100 md:hidden"
        >
          <span className="sr-only">Menú</span>
          <div className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-6 bg-neutral-900 transition-transform duration-300 ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-neutral-900 transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-neutral-900 transition-transform duration-300 ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Menú móvil desplegable */}
      <div
        className={[
          "overflow-hidden transition-all duration-300 md:hidden",
          menuOpen ? "max-h-96 border-t border-neutral-200" : "max-h-0",
        ].join(" ")}
      >
        <nav className="flex flex-col gap-4 px-4 py-4 bg-white">
          <Link
            href="/rooms"
            onClick={closeMenu}
            className="text-sm font-medium text-neutral-800 transition hover:text-neutral-900"
          >
            Habitaciones
          </Link>
          <Link
            href="/home#amenities"
            onClick={closeMenu}
            className="text-sm font-medium text-neutral-800 transition hover:text-neutral-900"
          >
            Servicios
          </Link>
          <Link
            href="/home#location"
            onClick={closeMenu}
            className="text-sm font-medium text-neutral-800 transition hover:text-neutral-900"
          >
            Ubicación
          </Link>
          <Link
            href="/contact"
            onClick={closeMenu}
            className="text-sm font-medium text-neutral-800 transition hover:text-neutral-900"
          >
            Contacto
          </Link>

          <Link
            href="/contact"
            onClick={closeMenu}
            className="mt-2 inline-flex w-full items-center justify-center rounded-xl bg-neutral-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800"
          >
            Reservar
          </Link>
        </nav>
      </div>
    </header>
  );
}