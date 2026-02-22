import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import WhatsappBtn from "@/app/components/WhatsappBtn";

const HERO_IMG =
  "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2400&q=80";

const ROOMS = [
  {
    name: "Standard",
    price: "desde $49.990",
    img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
    desc: "Cama queen, baño privado, TV, WiFi.",
  },
  {
    name: "Deluxe",
    price: "desde $69.990",
    img: "https://images.unsplash.com/photo-1501117716987-c8e1ecb21012?auto=format&fit=crop&w=1400&q=80",
    desc: "Más espacio, escritorio, vista ciudad.",
  },
  {
    name: "Suite",
    price: "desde $89.990",
    img: "https://images.unsplash.com/photo-1560067174-8943bd50f6b8?auto=format&fit=crop&w=1400&q=80",
    desc: "Living, minibar, experiencia premium.",
  },
];

const GALLERY = [
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1400&q=80",
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* HERO */}
        <section className="relative">
          <div className="absolute inset-0">
            <img
              src={HERO_IMG}
              alt="Hotel"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/55" />
          </div>

          <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
            <p className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs text-white/90">
              Santiago • Desayuno incluido • WiFi
            </p>

            <h1 className="mt-5 max-w-2xl text-4xl font-extrabold leading-tight text-white md:text-6xl">
              Tu estadía cómoda y elegante, en el mejor lugar.
            </h1>

            <p className="mt-4 max-w-xl text-white/85">
              Habitaciones modernas, recepción 24/7 y ubicación ideal para turismo
              y negocios.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/home#rooms"
                className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black hover:opacity-90"
              >
                Ver habitaciones
              </Link>

              <Link
                href="/contact"
                className="rounded-xl border border-white/35 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/15"
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

        {/* ROOMS */}
        <section id="rooms" className="py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="text-3xl font-bold">Habitaciones</h2>
                <p className="mt-2 text-sm text-black/70">
                  Elige la opción perfecta para tu viaje.
                </p>
              </div>

              <Link
                href="/rooms"
                className="text-sm font-semibold hover:opacity-70"
              >
                Ver todas →
              </Link>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {ROOMS.map((r) => (
                <article
                  key={r.name}
                  className="overflow-hidden rounded-2xl border bg-white"
                >
                  <div className="relative h-44">
                    <img
                      src={r.img}
                      alt={r.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold">{r.name}</h3>
                      <span className="text-sm font-semibold">{r.price}</span>
                    </div>

                    <p className="mt-2 text-sm text-black/70">{r.desc}</p>

                    <Link
                      href="/contact"
                      className="mt-4 inline-flex rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
                    >
                      Consultar disponibilidad
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* AMENITIES */}
        <section id="amenities" className="bg-black/[0.03] py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-bold">Servicios</h2>
            <p className="mt-2 text-sm text-black/70">
              Todo lo que necesitas durante tu estadía.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                ["Desayuno", "Buffet incluido para empezar el día con energía."],
                ["WiFi rápido", "Ideal para trabajo remoto y streaming."],
                ["Recepción 24/7", "Check-in flexible y soporte siempre."],
                ["Estacionamiento", "Opcional según disponibilidad."],
                ["Lavandería", "Servicio rápido para estadías largas."],
                ["Ubicación", "Cerca de metro, restaurantes y turismo."],
              ].map(([title, desc]) => (
                <div key={title} className="rounded-2xl border bg-white p-5">
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-2 text-sm text-black/70">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" className="py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-bold">Galería</h2>
            <p className="mt-2 text-sm text-black/70">
              Un vistazo a los espacios del hotel.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-4">
              {GALLERY.map((src, idx) => (
                <div key={src} className="h-40 overflow-hidden rounded-2xl border">
                  <img
                    src={src}
                    alt={`Galería hotel ${idx + 1}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="rounded-3xl border bg-black p-8 text-white md:p-10">
              <h2 className="text-3xl font-bold">¿Listo para reservar?</h2>
              <p className="mt-2 max-w-xl text-white/80">
                Escríbenos y te enviamos disponibilidad y valores según tus
                fechas.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black hover:opacity-90"
                >
                  Contactar
                </Link>

                <Link
                  href="/rooms"
                  className="rounded-xl border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/15"
                >
                  Ver habitaciones
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* BOTÓN WHATSAPP */}
      <WhatsappBtn />
    </>
  );
}