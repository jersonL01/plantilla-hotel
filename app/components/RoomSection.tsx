import Link from "next/link";

type Room = {
  name: string;
  price: string;
  img: string;
  desc: string;
};

export default function RoomsSection({
  rooms,
  title = "Habitaciones",
  subtitle = "Elige la opción perfecta para tu viaje.",
}: {
  rooms: Room[];
  title?: string;
  subtitle?: string;
}) {
  return (
    <section id="rooms" className="py-16 bg-neutral-50">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900">
              {title}
            </h2>
            <p className="mt-2 text-sm text-neutral-600">{subtitle}</p>
          </div>

          <Link
            href="/rooms"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 transition hover:opacity-80"
          >
            Ver todas{" "}
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </div>

        {/* Cards */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {rooms.map((r) => (
            <article
              key={r.name}
              className="group overflow-hidden rounded-3xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-neutral-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={r.img}
                  alt={r.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                />

                {/* Overlay suave solo para texto sobre imagen */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white drop-shadow">
                    {r.name}
                  </h3>
                  <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-neutral-900 shadow-sm">
                    {r.price}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm text-neutral-600">{r.desc}</p>

                <Link
                  href="/contact"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-2xl bg-neutral-900 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-neutral-800 hover:-translate-y-[1px] active:translate-y-0"
                >
                  Consultar disponibilidad
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Extra line */}
        <p className="mt-8 text-xs text-neutral-500">
          * Precios referenciales. Sujeto a disponibilidad y fechas.
        </p>
      </div>
    </section>
  );
}