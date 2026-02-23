import Link from "next/link";

type Props = {
  title?: string;
  subtitle?: string;
  addressLabel?: string;
  phone?: string; // formato: +56912345678
  email?: string;
  // Ej: "Hotel Aurora, Santiago, Chile" o "Av. Libertador 123, Santiago"
  mapsQuery?: string;
};

export default function Location({
  title = "Ubicación",
  subtitle = "Encuéntranos fácil y llega sin complicaciones.",
  addressLabel = "Av. Ejemplo 123, Santiago Centro",
  phone = "+56912345678",
  email = "reservas@hotelaurora.cl",
  mapsQuery = "Santiago Chile",
}: Props) {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    mapsQuery
  )}`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    mapsQuery
  )}`;
  const embedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    mapsQuery
  )}&output=embed`;

  return (
    <section id="location" className="py-16 bg-neutral-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900">
              {title}
            </h2>
            <p className="mt-2 text-sm text-neutral-600">{subtitle}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-neutral-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800 hover:-translate-y-[1px] active:translate-y-0"
            >
              Cómo llegar
            </a>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border bg-white px-4 py-2 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-50"
            >
              Abrir en Google Maps
            </a>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {/* Info */}
          <div className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
            <p className="text-sm font-semibold text-neutral-900">Dirección</p>
            <p className="mt-2 text-sm text-neutral-700">{addressLabel}</p>

            <div className="mt-6 grid gap-3">
              <div className="rounded-2xl border bg-neutral-50 p-4">
                <p className="text-xs font-semibold text-neutral-900">
                  Horarios
                </p>
                <p className="mt-1 text-sm text-neutral-700">
                  Recepción 24/7 • Check-in 15:00 • Check-out 12:00
                </p>
              </div>

              <div className="rounded-2xl border bg-neutral-50 p-4">
                <p className="text-xs font-semibold text-neutral-900">Contacto</p>
                <p className="mt-1 text-sm text-neutral-700">
                  Tel:{" "}
                  <a className="font-semibold hover:underline" href={`tel:${phone}`}>
                    {phone}
                  </a>
                </p>
                <p className="mt-1 text-sm text-neutral-700">
                  Email:{" "}
                  <a
                    className="font-semibold hover:underline"
                    href={`mailto:${email}`}
                  >
                    {email}
                  </a>
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`tel:${phone}`}
                className="rounded-2xl border bg-white px-4 py-2 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-50"
              >
                Llamar
              </a>
              <a
                href={`mailto:${email}`}
                className="rounded-2xl border bg-white px-4 py-2 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-50"
              >
                Enviar email
              </a>
              <Link
                href="/contact"
                className="rounded-2xl bg-neutral-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800"
              >
                Formulario
              </Link>
            </div>

            <p className="mt-5 text-xs text-neutral-500">
              Tip: Puedes cambiar <span className="font-semibold">mapsQuery</span>{" "}
              por tu dirección real.
            </p>
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-3xl border bg-white shadow-sm">
            <div className="px-6 py-4">
              <p className="text-sm font-semibold text-neutral-900">
                Mapa
              </p>
              <p className="mt-1 text-sm text-neutral-600">
                Vista interactiva de Google Maps.
              </p>
            </div>

            <iframe
              title="Google Maps"
              className="h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={embedUrl}
            />
          </div>
        </div>
      </div>
    </section>
  );
}