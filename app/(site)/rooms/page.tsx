"use client";

import { useMemo, useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import WhatsappBtn from "@/app/components/WhatsappBtn";

type RoomCategory = {
  key: string;
  name: string;
  priceFrom: string;
  desc: string;
  cover: string;
  images: string[];
};

const CATEGORIES: RoomCategory[] = [
  {
    key: "standard",
    name: "Standard",
    priceFrom: "$49.990",
    desc: "Ideal para estadías cortas: cómoda, funcional y con todo lo necesario.",
    cover:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1800&q=80",
    images: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1549187774-b4e9b0445b41?auto=format&fit=crop&w=1400&q=80",
    ],
  },
  {
    key: "deluxe",
    name: "Deluxe",
    priceFrom: "$69.990",
    desc: "Más espacio, mejor vista y detalles superiores para viajar con comodidad.",
    cover:
      "https://images.unsplash.com/photo-1501117716987-c8e1ecb21012?auto=format&fit=crop&w=1800&q=80",
    images: [
      "https://images.unsplash.com/photo-1551887373-6da9f5b6b8f0?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1549497538-303791108f95?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1400&q=80",
    ],
  },
  {
    key: "suite",
    name: "Suite",
    priceFrom: "$89.990",
    desc: "Experiencia premium: living, minibar y una estadía pensada para disfrutar.",
    cover:
      "https://images.unsplash.com/photo-1560067174-8943bd50f6b8?auto=format&fit=crop&w=1800&q=80",
    images: [
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1551887373-6da9f5b6b8f0?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1549187774-b4e9b0445b41?auto=format&fit=crop&w=1400&q=80",
    ],
  },
];

export default function RoomsPage() {
  const [active, setActive] = useState(CATEGORIES[0]?.key ?? "");
  const [open, setOpen] = useState<{ src: string; alt: string } | null>(null);

  const activeCategory = useMemo(
    () => CATEGORIES.find((c) => c.key === active) ?? CATEGORIES[0],
    [active]
  );

  return (
    <>
      <Navbar />

      <main className="bg-neutral-50">
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4">
            {/* Header + Tabs */}
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900">
                  Habitaciones
                </h1>
                <p className="mt-2 text-sm text-neutral-600">
                  Mira la galería por categoría y elige tu opción.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((c) => {
                  const isActive = c.key === active;
                  return (
                    <button
                      key={c.key}
                      onClick={() => setActive(c.key)}
                      className={[
                        "rounded-full px-4 py-2 text-sm font-semibold border transition-all",
                        isActive
                          ? "bg-neutral-900 text-white border-neutral-900"
                          : "bg-white text-neutral-800 border-neutral-200 hover:border-neutral-300 hover:-translate-y-[1px]",
                      ].join(" ")}
                    >
                      {c.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Category block */}
            <div className="mt-8 overflow-hidden rounded-3xl border bg-white shadow-sm">
              <div className="grid md:grid-cols-2">
                {/* Cover */}
                <div className="relative h-64 md:h-full overflow-hidden">
                  <img
                    src={activeCategory.cover}
                    alt={activeCategory.name}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div>
                      <p className="text-white/90 text-xs">Desde</p>
                      <p className="text-white text-lg font-extrabold">
                        {activeCategory.priceFrom}
                      </p>
                    </div>
                    <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-neutral-900">
                      {activeCategory.name}
                    </span>
                  </div>
                </div>

                {/* Text */}
                <div className="p-7 md:p-10">
                  <h2 className="text-2xl font-extrabold text-neutral-900">
                    {activeCategory.name}
                  </h2>
                  <p className="mt-2 text-sm text-neutral-600">
                    {activeCategory.desc}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {["WiFi", "Baño privado", "TV", "Limpieza diaria"].map((t) => (
                      <span
                        key={t}
                        className="rounded-full border bg-neutral-50 px-3 py-1 text-xs text-neutral-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <p className="mt-6 text-xs text-neutral-500">
                    Haz click en una foto para verla en grande.
                  </p>
                </div>
              </div>

              {/* Gallery */}
              <div className="border-t p-5 md:p-6">
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                  {activeCategory.images.map((src, idx) => (
                    <button
                      key={src}
                      onClick={() =>
                        setOpen({
                          src,
                          alt: `${activeCategory.name} ${idx + 1}`,
                        })
                      }
                      className="group relative h-44 overflow-hidden rounded-2xl border bg-neutral-100 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                    >
                      <img
                        src={src}
                        alt={`${activeCategory.name} ${idx + 1}`}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                      />
                      <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lightbox */}
        {open && (
          <div
            className="fixed inset-0 z-[80] bg-black/70 p-4 backdrop-blur-sm"
            onClick={() => setOpen(null)}
            role="dialog"
            aria-modal="true"
          >
            <div className="mx-auto max-w-4xl">
              <div
                className="overflow-hidden rounded-2xl bg-black"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between px-4 py-3">
                  <p className="text-sm text-white/90">{open.alt}</p>
                  <button
                    onClick={() => setOpen(null)}
                    className="rounded-lg bg-white/10 px-3 py-1.5 text-sm font-semibold text-white hover:bg-white/15"
                  >
                    Cerrar
                  </button>
                </div>
                <img
                  src={open.src}
                  alt={open.alt}
                  className="max-h-[75vh] w-full object-contain"
                />
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
      <WhatsappBtn />
    </>
  );
}