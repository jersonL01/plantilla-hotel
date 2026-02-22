import Link from "next/link";

export default function Footer() {
  const linkBase =
    "group inline-flex items-center gap-2 text-sm text-neutral-700 transition-all duration-200 hover:text-neutral-950 hover:translate-x-0.5";
  const underline =
    "relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-neutral-900 after:transition-transform after:duration-300 group-hover:after:scale-x-100";

  const sectionTitle = "text-sm font-semibold text-neutral-900";
  const muted = "text-sm text-neutral-600";

  return (
    <footer className="border-t bg-gradient-to-b from-white to-neutral-50">
      <div className="mx-auto max-w-6xl px-4 py-14">
        {/* Top */}
        <div className="grid gap-10 md:grid-cols-3">
          {/* Col 1 */}
          <div>
            <p className="text-lg font-extrabold tracking-tight text-neutral-900">
              Hotel Aurora
            </p>

            <p className="mt-2 text-sm text-neutral-700">
              Santiago, Chile • +56 9 1234 5678
            </p>
            <p className="mt-2 text-sm text-neutral-600">
              Av. Ejemplo 123, Santiago Centro
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {["Desayuno", "WiFi", "Recepción 24/7", "Céntrico"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border bg-white px-3 py-1 text-xs text-neutral-700 transition-colors hover:bg-neutral-50"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <p className={sectionTitle}>Contacto</p>
            <p className={`mt-2 ${muted}`}>
              Escríbenos y te ayudamos con tu reserva.
            </p>

            <ul className="mt-4 space-y-3">
              <li>
                <a
                  className={`${linkBase} ${underline}`}
                  href="mailto:reservas@hotelaurora.cl"
                >
                  reservas@hotelaurora.cl
                </a>
              </li>
              <li>
                <a
                  className={`${linkBase} ${underline}`}
                  href="tel:+56912345678"
                >
                  +56 9 1234 5678
                </a>
              </li>
              <li>
                <Link className={`${linkBase} ${underline}`} href="/contact">
                  Formulario de contacto
                </Link>
              </li>
            </ul>

            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-neutral-800 hover:-translate-y-[1px] active:translate-y-0"
              >
                Contactar ahora
              </Link>
            </div>
          </div>

          {/* Col 3 */}
          <div>
            <p className={sectionTitle}>Información</p>
            <p className={`mt-2 ${muted}`}>
              Redes sociales, reclamos y políticas.
            </p>

            <div className="mt-5 grid grid-cols-2 gap-8">
              <div>
                <p className="text-xs font-semibold text-neutral-900">Redes</p>
                <ul className="mt-3 space-y-3">
                  <li>
                    <a
                      className={`${linkBase} ${underline}`}
                      href="https://instagram.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      className={`${linkBase} ${underline}`}
                      href="https://facebook.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      className={`${linkBase} ${underline}`}
                      href="https://tiktok.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      TikTok
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-xs font-semibold text-neutral-900">Legal</p>
                <ul className="mt-3 space-y-3">
                  <li>
                    <Link className={`${linkBase} ${underline}`} href="/reclamos">
                      Reclamos
                    </Link>
                  </li>
                  <li>
                    <Link className={`${linkBase} ${underline}`} href="/privacidad">
                      Privacidad
                    </Link>
                  </li>
                  <li>
                    <Link className={`${linkBase} ${underline}`} href="/politicas">
                      Políticas
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-3 border-t pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-neutral-600">
            © {new Date().getFullYear()} Hotel Aurora. Todos los derechos reservados.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs text-neutral-500">Hecho con Next.js</span>
            <span className="hidden md:inline-block h-1 w-1 rounded-full bg-neutral-300" />
            <Link
              href="/privacidad"
              className="text-xs text-neutral-600 transition-colors hover:text-neutral-950"
            >
              Privacidad
            </Link>
            <Link
              href="/politicas"
              className="text-xs text-neutral-600 transition-colors hover:text-neutral-950"
            >
              Políticas
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}