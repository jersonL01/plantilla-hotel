import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import WhatsappBtn from "@/app/components/WhatsappBtn";

export default function Contact() {
  return (
    <>
      <Navbar />

      <main className="bg-neutral-50">
        {/* Header */}
        <section className="py-14">
          <div className="mx-auto max-w-6xl px-4">
            <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900">
              Contacto
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-neutral-600">
              Escríbenos para cotizar tu estadía. Te respondemos lo antes posible.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="pb-16">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-2">
            {/* Form (solo UI) */}
            <div className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-lg font-bold text-neutral-900">
                Enviar mensaje
              </h2>
              <p className="mt-2 text-sm text-neutral-600">
                Completa el formulario y te contactamos.
              </p>

              <form className="mt-6 space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-sm font-semibold text-neutral-900">
                      Nombre
                    </label>
                    <input
                      placeholder="Tu nombre"
                      className="mt-2 w-full rounded-2xl border bg-white px-4 py-3 text-sm outline-none transition focus:border-neutral-300 focus:ring-2 focus:ring-neutral-200"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-neutral-900">
                      Teléfono
                    </label>
                    <input
                      placeholder="+56 9 1234 5678"
                      className="mt-2 w-full rounded-2xl border bg-white px-4 py-3 text-sm outline-none transition focus:border-neutral-300 focus:ring-2 focus:ring-neutral-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-neutral-900">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="tuemail@correo.com"
                    className="mt-2 w-full rounded-2xl border bg-white px-4 py-3 text-sm outline-none transition focus:border-neutral-300 focus:ring-2 focus:ring-neutral-200"
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-sm font-semibold text-neutral-900">
                      Fecha check-in
                    </label>
                    <input
                      type="date"
                      className="mt-2 w-full rounded-2xl border bg-white px-4 py-3 text-sm outline-none transition focus:border-neutral-300 focus:ring-2 focus:ring-neutral-200"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-neutral-900">
                      Fecha check-out
                    </label>
                    <input
                      type="date"
                      className="mt-2 w-full rounded-2xl border bg-white px-4 py-3 text-sm outline-none transition focus:border-neutral-300 focus:ring-2 focus:ring-neutral-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-neutral-900">
                    Habitación
                  </label>
                  <select className="mt-2 w-full rounded-2xl border bg-white px-4 py-3 text-sm outline-none transition focus:border-neutral-300 focus:ring-2 focus:ring-neutral-200">
                    <option>Standard</option>
                    <option>Deluxe</option>
                    <option>Suite</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-semibold text-neutral-900">
                    Mensaje
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Cuéntanos cuántas personas viajan y lo que necesitas..."
                    className="mt-2 w-full resize-none rounded-2xl border bg-white px-4 py-3 text-sm outline-none transition focus:border-neutral-300 focus:ring-2 focus:ring-neutral-200"
                  />
                </div>

                {/* Botón solo visual (no envía) */}
                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center rounded-2xl bg-neutral-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800 hover:-translate-y-[1px] active:translate-y-0"
                >
                  Enviar mensaje
                </button>

                <p className="text-xs text-neutral-500">
                  * Formulario solo visual (front-end). No envía información.
                </p>
              </form>
            </div>

            {/* Info + Map */}
            <div className="space-y-8">
              {/* Info */}
              <div className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-lg font-bold text-neutral-900">Datos</h2>

                <div className="mt-4 space-y-3 text-sm text-neutral-700">
                  <p>
                    <span className="font-semibold text-neutral-900">Tel:</span>{" "}
                    +56 9 1234 5678
                  </p>
                  <p>
                    <span className="font-semibold text-neutral-900">Email:</span>{" "}
                    reservas@hotelaurora.cl
                  </p>
                  <p>
                    <span className="font-semibold text-neutral-900">Dirección:</span>{" "}
                    Av. Ejemplo 123, Santiago Centro
                  </p>
                  <p>
                    <span className="font-semibold text-neutral-900">Horario:</span>{" "}
                    Recepción 24/7 • Check-in 15:00 • Check-out 12:00
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="tel:+56912345678"
                    className="rounded-2xl border bg-white px-4 py-2 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-50"
                  >
                    Llamar
                  </a>
                  <a
                    href="mailto:reservas@hotelaurora.cl"
                    className="rounded-2xl border bg-white px-4 py-2 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-50"
                  >
                    Enviar email
                  </a>
                  <a
                    href="https://www.google.com/maps?q=Santiago%20Chile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl bg-neutral-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800"
                  >
                    Ver en Maps
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="overflow-hidden rounded-3xl border bg-white shadow-sm">
                <div className="px-6 py-4">
                  <h3 className="text-sm font-semibold text-neutral-900">
                    Ubicación
                  </h3>
                  <p className="mt-1 text-sm text-neutral-600">
                    Reemplaza el mapa por tu dirección real.
                  </p>
                </div>

                <iframe
                  title="Mapa"
                  className="h-80 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=Santiago%20Chile&output=embed"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsappBtn />
    </>
  );
}