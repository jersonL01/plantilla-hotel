type Amenity = {
  title: string;
  desc: string;
  icon?: string; // emoji simple (opcional)
};

export default function Service({
  title = "Servicios",
  subtitle = "Todo lo que necesitas durante tu estadía.",
  items,
}: {
  title?: string;
  subtitle?: string;
  items?: Amenity[];
}) {
  const data: Amenity[] =
    items ?? [
      {
        title: "Desayuno",
        desc: "Buffet incluido para empezar el día con energía.",
        icon: "🥐",
      },
      { title: "WiFi rápido", desc: "Ideal para trabajo remoto y streaming.", icon: "📶" },
      { title: "Recepción 24/7", desc: "Check-in flexible y soporte siempre.", icon: "🛎️" },
      { title: "Estacionamiento", desc: "Opcional según disponibilidad.", icon: "🅿️" },
      { title: "Lavandería", desc: "Servicio rápido para estadías largas.", icon: "🧺" },
      { title: "Ubicación", desc: "Cerca de metro, restaurantes y turismo.", icon: "📍" },
    ];

  return (
    <section id="amenities" className="py-16 bg-neutral-50">
      <div className="mx-auto max-w-6xl px-4">
        {/* CARD CONTENEDOR */}
        <div className="rounded-3xl border border-neutral-300  bg-white p-6 shadow-sm md:p-10">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900">
                {title}
              </h2>
              <p className="mt-2 text-sm text-neutral-600">{subtitle}</p>
            </div>

            {/* mini badge opcional */}
            <span className="inline-flex w-fit rounded-full border bg-neutral-50 px-3 py-1 text-xs font-semibold text-neutral-700">
              Incluido según disponibilidad
            </span>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {data.map((a) => (
              <div
                key={a.title}
                className="group rounded-3xl border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-neutral-300"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border bg-neutral-50 text-lg transition-colors duration-300 group-hover:bg-neutral-900 group-hover:text-white">
                    {a.icon ?? "★"}
                  </div>

                  <div className="min-w-0">
                    <h3 className="font-semibold text-neutral-900">{a.title}</h3>
                    <p className="mt-2 text-sm text-neutral-600">{a.desc}</p>
                  </div>
                </div>

                <div className="mt-5 h-[1px] w-full bg-neutral-100 transition-colors duration-300 group-hover:bg-neutral-200" />
                <p className="mt-4 text-xs text-neutral-500">
                  Incluido según disponibilidad.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}