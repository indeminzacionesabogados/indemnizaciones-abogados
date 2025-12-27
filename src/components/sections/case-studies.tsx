'use client';

import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Link from "next/link";
import { cn } from "@/src/lib/utils";

type Testimonial = {
  name: string;
  case: string;
  quote: string;
  href: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Yerson Orejuela",
    case: "Demanda en contra del Ministerio de Defensa - Ejército Nacional",
    quote:
      "“Recibí mi indemnización gracias al acompañamiento de Organización Jurídica Indemnizaciones Abogados. Estuvieron presentes en todo el proceso.”",
    href: "https://www.instagram.com/indemnizaciones.abogados/",
  },
  {
    name: "Juan José",
    case: "Reclamación ante Seguros Generales Suramericana S.A.",
    quote:
      "“La firma me acompañó durante todo el proceso tras mi accidente de tránsito. Logré cubrir todos los perjuicios económicos y físicos. Los recomiendo.”",
    href: "https://www.instagram.com/indemnizaciones.abogados/",
  },
  {
    name: "Gilberto Ocampo",
    case: "Reclamación contra Axa Colpatria Seguros S.A.",
    quote:
      "“Aunque estuve incapacitado casi cuatro meses, recibí acompañamiento de principio a fin. Gracias al equipo obtuve mi indemnización y confío plenamente en ellos.”",
    href: "https://www.instagram.com/indemnizaciones.abogados/",
  },
];

const AUTO_PLAY_INTERVAL = 5000;

export function CaseStudiesSection() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const memoTestimonials = useMemo(() => testimonials, []);
  const isAutoPlayStopped = useRef(false);

  const moveTo = (direction: "next" | "prev") => {
    setIndex((prev) => {
      if (direction === "next") {
        return prev === memoTestimonials.length - 1 ? 0 : prev + 1;
      }
      return prev === 0 ? memoTestimonials.length - 1 : prev - 1;
    });
  };

  useEffect(() => {
    if (isAutoPlayStopped.current) {
      return;
    }

    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => (prev === memoTestimonials.length - 1 ? 0 : prev + 1));
    }, AUTO_PLAY_INTERVAL);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [index, memoTestimonials.length]);

  const handleManualNav = (direction: "next" | "prev") => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    isAutoPlayStopped.current = true;
    moveTo(direction);
  };

  return (
    <section id="historias" className="py-16" aria-labelledby="case-heading">
      <div className="container space-y-10">
        <div className="max-w-2xl space-y-2">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Casos de éxito</p>
          <h2 id="case-heading" className="text-3xl font-semibold md:text-4xl">
            Testimonios que respaldan indemnizaciones reales
          </h2>
          <p className="text-lg text-muted-foreground">
            Cada historia es pública en Instagram. Haz clic para conocer el contexto completo y validar cómo operamos cada
            reclamación.
          </p>
        </div>
        <div className="relative overflow-hidden">
          <button
            type="button"
            onClick={() => handleManualNav("prev")}
            className="absolute left-0 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-border bg-white/80 p-3 text-foreground shadow-md transition hover:border-primary md:flex"
            aria-label="Ver testimonio anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => handleManualNav("next")}
            className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-border bg-white/80 p-3 text-foreground shadow-md transition hover:border-primary md:flex"
            aria-label="Ver siguiente testimonio"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <div className="overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-500"
              style={{ transform: `translateX(-${index * (100 / 3)}%)` }}
            >
              {memoTestimonials.map((testimonial) => (
                <Link
                  key={testimonial.name}
                  href={testimonial.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full flex-shrink-0 items-stretch md:w-1/2 lg:w-1/3"
                >
                  <article className="card-surface flex w-full flex-col justify-between rounded-3xl border border-border p-6 text-left shadow-lg transition hover:-translate-y-1">
                    <div>
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Quote className="h-6 w-6" />
                      </span>
                      <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                        {testimonial.case}
                      </p>
                      <p className="mt-4 text-lg text-foreground">{testimonial.quote}</p>
                    </div>
                    <div className="mt-6">
                      <p className="text-base font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">Consulta verificada en Instagram</p>
                    </div>
                  </article>
                </Link>
              ))}
              {memoTestimonials.map((testimonial) => (
                <Link
                  key={`${testimonial.name}-clone`}
                  href={testimonial.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden w-full flex-shrink-0 items-stretch md:flex md:w-1/2 lg:w-1/3"
                >
                  <article className="card-surface flex w-full flex-col justify-between rounded-3xl border border-border p-6 text-left shadow-lg">
                    <div>
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Quote className="h-6 w-6" />
                      </span>
                      <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                        {testimonial.case}
                      </p>
                      <p className="mt-4 text-lg text-foreground">{testimonial.quote}</p>
                    </div>
                    <div className="mt-6">
                      <p className="text-base font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">Consulta verificada en Instagram</p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-6 flex justify-center gap-2">
            {memoTestimonials.map((_, indicatorIndex) => (
              <button
                key={`indicator-${indicatorIndex}`}
                type="button"
                onClick={() => setIndex(indicatorIndex)}
                aria-label={`Ir al caso ${indicatorIndex + 1}`}
                className={cn(
                  "h-2 w-8 rounded-full transition",
                  index === indicatorIndex ? "bg-primary" : "bg-border"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
