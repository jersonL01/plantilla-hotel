"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type Slide = {
  image: string;
  badge?: string;
  title: string;
  subtitle: string;
};

type Props = {
  slides?: Slide[];
  intervalMs?: number;
};

export default function HeroSlider({
  slides,
  intervalMs = 5000,
}: Props) {
  const data = useMemo<Slide[]>(
    () =>
      slides ?? [
        {
          image:
            "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2400&q=80",
          badge: "Santiago • Desayuno incluido • WiFi",
          title: "Tu estadía cómoda y elegante, en el mejor lugar.",
          subtitle:
            "Habitaciones modernas, recepción 24/7 y ubicación ideal para turismo y negocios.",
        },
        {
          image:
            "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=2400&q=80",
          badge: "Piscina • Relax • Experiencia premium",
          title: "Descansa como te lo mereces.",
          subtitle:
            "Espacios pensados para desconectar: confort, estilo y tranquilidad.",
        },
        {
          image:
            "https://images.unsplash.com/photo-1501117716987-c8e1ecb21012?auto=format&fit=crop&w=2400&q=80",
          badge: "Suite • Vista ciudad • Minibar",
          title: "Habitaciones que se sienten como hogar.",
          subtitle:
            "Elige Standard, Deluxe o Suite y vive una experiencia superior.",
        },
      ],
    [slides]
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % data.length);
    }, intervalMs);

    return () => window.clearInterval(id);
  }, [data.length, intervalMs]);

  const goPrev = () => setIndex((i) => (i - 1 + data.length) % data.length);
  const goNext = () => setIndex((i) => (i + 1) % data.length);

  return (
    <section className="relative overflow-hidden">
      {/* Slides (fade) */}
      <div className="absolute inset-0">
        {data.map((s, i) => (
          <div
            key={s.image}
            className={[
              "absolute inset-0 transition-opacity duration-700",
              i === index ? "opacity-100" : "opacity-0",
            ].join(" ")}
          >
            <img
              src={s.image}
              alt="Hotel"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/55" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
        <p className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs text-white/90">
          {data[index].badge ?? "Hotel • Reservas • WiFi"}
        </p>

        <h1 className="mt-5 max-w-2xl text-4xl font-extrabold leading-tight text-white md:text-6xl">
          {data[index].title}
        </h1>

        <p className="mt-4 max-w-xl text-white/85">{data[index].subtitle}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/home#rooms"
            className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:opacity-90"
          >
            Ver habitaciones
          </Link>

          <Link
            href="/contact"
            className="rounded-xl border border-white/35 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/15"
          >
            Cotizar / Reservar
          </Link>
        </div>

        <div className="mt-10 grid max-w-2xl grid-cols-2 gap-3 md:grid-cols-4">
          {[
            ["4.8/5", "Reseñas"],
            ["24/7", "Recepción"],
            ["Céntrico", "Ubicación"],
            ["Gratis", "WiFi"],
          ].map(([a, b]) => (
            <div key={b} className="rounded-2xl bg-white/10 p-4 text-white">
              <div className="text-xl font-bold">{a}</div>
              <div className="text-xs text-white/80">{b}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}