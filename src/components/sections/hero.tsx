import Image from "next/image";
import Link from "next/link";
import { Check, MessageCircle } from "lucide-react";

const highlights = [
  "Valoración médica-legal respaldada por peritos certificados",
  "Negociación directa con aseguradoras y hospitales",
  "Estrategias de litigio enfocadas en maximizar indemnizaciones",
];

const practicePills = [
  "Responsabilidad civil y del Estado",
  "Seguros y cumplimiento",
  "Derecho médico",
  "Accidentes laborales",
];

const practiceAreas = [
  { label: "Responsabilidad civil y del Estado", href: "#servicios" },
  { label: "Derecho de seguros y cumplimiento", href: "#servicios" },
  { label: "Derecho médico y mala praxis", href: "#servicios" },
  { label: "Accidentes laborales y pensiones", href: "#servicios" },
];

const whatsappLink =
  "https://wa.me/5215512345678?text=Hola,%20necesito%20asesor%C3%ADa%20legal%20sobre%20una%20indemnizaci%C3%B3n";

export function HeroSection() {
  return (
    <section id="inicio" className="py-12 md:py-16" aria-labelledby="hero-heading">
      <div className="container">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-primary/40 bg-[#030f21] shadow-[0_40px_80px_rgba(3,15,33,0.45)]">
          <Image
            src="/hero-justice.svg"
            alt=""
            fill
            priority
            quality={90}
            sizes="(max-width: 1024px) 100vw, 80vw"
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#030f21]/95 via-[#030f21]/80 to-[#0f172a]/70" />
          <div className="relative grid gap-6 p-8 md:p-12 lg:grid-cols-[1.1fr_0.9fr]">
            <article className="rounded-[30px] bg-white/95 p-6 text-foreground shadow-[0_20px_45px_rgba(3,15,33,0.3)] md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-muted-foreground">
                Despacho en responsabilidad civil y seguros
              </p>
              <h1 id="hero-heading" className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                Somos el equipo legal que convierte incidentes críticos en resultados reales
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Enfocados en responsabilidad civil y seguros, acompañamos a familias e instituciones médicas con estrategias
                personalizadas, peritaje propio y control total del proceso para recuperar lo que les corresponde.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#25d366,#1ebe57)] px-8 py-3 text-base font-semibold text-white shadow-[0_18px_35px_rgba(30,190,87,0.35)] transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                >
                  <MessageCircle className="mr-2 h-5 w-5" aria-hidden="true" />
                  Agenda por WhatsApp
                </a>
                <Link
                  href="#contacto"
                  className="inline-flex items-center justify-center rounded-full border border-border px-8 py-3 text-base font-semibold text-foreground transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  Solicitar evaluación de caso
                </Link>
              </div>
              <div className="mt-8 rounded-2xl bg-muted/60 p-4 text-sm text-muted-foreground">
                Compartimos tableros de seguimiento, minutas y responsables por cada etapa. Respuesta inicial menor a 2 horas hábiles.
              </div>
            </article>
            <article className="flex flex-col justify-between rounded-[30px] border border-white/15 bg-white/5 p-6 text-white backdrop-blur md:p-8">
              <div>
                <div className="flex flex-wrap gap-2">
                  {practicePills.map((pill) => (
                    <span key={pill} className="rounded-full border border-white/30 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/90">
                      {pill}
                    </span>
                  ))}
                </div>
                <ul className="mt-6 space-y-4 text-sm">
                  {highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 rounded-full bg-white/10 p-1 text-accent-foreground">
                        <Check className="h-4 w-4 text-accent" aria-hidden="true" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 rounded-2xl border border-white/15 bg-black/20 p-4 text-sm text-white/80">
                Actualizamos a socios, hospitales y aseguradoras en tiempo real. Selecciona tu área prioritaria y conduce la estrategia junto con nuestro equipo.
                <div className="mt-4 grid gap-3 text-xs uppercase tracking-wide text-white/70">
                  {practiceAreas.map((area) => (
                    <Link key={area.label} href={area.href} className="rounded-lg border border-white/20 px-3 py-2 text-center hover:bg-white/10">
                      {area.label}
                    </Link>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
