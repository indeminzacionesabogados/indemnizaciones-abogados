'use client';

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/src/lib/utils";

type PracticeArea = {
  id: string;
  title: string;
  description: string;
  detail?: string;
  supportTitle: string;
  supportItems: string[];
  casesTitle?: string;
  cases?: string[];
  image: string;
};

const areas: PracticeArea[] = [
  {
    id: "accidentes",
    title: "Accidentes de tránsito",
    description:
      "Brindamos acompañamiento personalizado desde el día del siniestro hasta la efectiva reparación integral por los diferentes perjuicios causados.",
    detail:
      "Coordinamos abogados, investigadores, matemáticos, físicos, médicos y psicólogos para reconstruir los hechos y cuantificar los daños con precisión.",
    supportTitle: "¿En qué te acompañamos?",
    supportItems: [
      "Proceso penal por lesiones personales u homicidio culposo",
      "Trámite contravencional (según la jurisdicción) y audiencias prejudiciales",
      "Reclamaciones ante compañías aseguradoras",
      "Demanda de responsabilidad civil contractual y/o extracontractual",
      "Asistencia integral mientras dura la recuperación del afectado",
    ],
    casesTitle: "Equipo interdisciplinario",
    cases: [
      "Abogados litigantes especializados en tránsito",
      "Investigadores, matemáticos y físicos que reconstruyen el accidente",
      "Médicos y psicólogos forenses que acreditan secuelas y daño moral",
    ],
    image: "/practice/accidentes-transito.svg",
  },
  {
    id: "estado",
    title: "Responsabilidad civil y del Estado",
    description:
      "Determinamos las acciones u omisiones del Estado para reclamar daños en vías, salud, orden público o actuaciones militares.",
    detail:
      "Ejecutamos investigaciones exhaustivas con equipos técnicos antes de presentar reclamaciones prejudiciales o demandas de reparación.",
    supportTitle: "Casos frecuentes",
    supportItems: [
      "Mal estado de vías y señalización deficiente",
      "Falla en la prestación del servicio de salud",
      "Privación injusta de la libertad y falsos positivos",
      "Muerte o accidentes de servidores públicos",
      "Deslizamientos o eventos por mala gestión del riesgo",
      "Accidentes laborales causados por omisiones del Estado",
    ],
    casesTitle: "¿Qué hacemos?",
    cases: [
      "Estudios probatorios multidisciplinares",
      "Acompañamiento en reclamaciones y demandas",
      "Negociación directa con entidades estatales",
    ],
    image: "/practice/responsabilidad-estado.svg",
  },
  {
    id: "seguros",
    title: "Derecho de seguros",
    description:
      "Acompañamiento integral en seguros de responsabilidad civil, cumplimiento, IRF, D&O, todo riesgo, vida y más.",
    detail:
      "Revisamos condiciones generales y particulares para respaldar reclamaciones o defensas, asegurando el cumplimiento del contrato.",
    supportTitle: "¿Qué hacemos?",
    supportItems: [
      "Auditoría de pólizas y exclusiones",
      "Defensa y reclamación ante compañías aseguradoras",
      "Estrategia frente a prescripción y cláusulas claims made",
    ],
    casesTitle: "Casos frecuentes",
    cases: [
      "Desconocimiento de coberturas contratadas",
      "Interpretaciones erróneas en exclusiones",
      "Negativa de pago por incumplimiento contractual",
    ],
    image: "/practice/seguros.svg",
  },
  {
    id: "derecho-medico",
    title: "Derecho médico",
    description:
      "Acompañamiento minucioso tanto en la defensa como en el accionar por fallas en la prestación del servicio médico.",
    detail:
      "Analizamos historias clínicas, tratamientos, autorizaciones y protocolos para consolidar estrategias de responsabilidad civil médica.",
    supportTitle: "¿Cómo intervenimos?",
    supportItems: [
      "Análisis técnico de expedientes y comités de bioética",
      "Revisión de tratamientos, medicamentos autorizados y procedimientos",
      "Peritajes multidisciplinarios para probar fallas o defender actos médicos",
    ],
    image: "/practice/derecho-medico.svg",
  },
  {
    id: "laborales",
    title: "Accidentes laborales",
    description:
      "Eventos repentinos o violentos causados por el trabajo que generan lesiones físicas o psíquicas, invalidez o incluso la muerte del trabajador.",
    detail:
      "Gestionamos indemnizaciones frente a culpa patronal, falencias en sistemas de gestión y reclamaciones ante la ARL, así como procesos por enfermedad laboral.",
    supportTitle: "Te acompañamos en",
    supportItems: [
      "Culpa patronal y fallas en el sistema de gestión de seguridad",
      "Despidos teniendo fuero de discapacidad o enfermedad laboral",
      "Reclamaciones de indemnización y seguimiento frente a la ARL",
      "Procesos por enfermedad laboral y rehabilitación supervisada",
    ],
    casesTitle: "Resultados clave",
    cases: [
      "Recuperación de ingresos por invalidez",
      "Restitución de derechos laborales vulnerados",
      "Planes de rehabilitación supervisados por especialistas",
    ],
    image: "/practice/accidentes-laborales.svg",
  },
];

export function PracticeAreasSection() {
  const [activeArea, setActiveArea] = useState<PracticeArea>(areas[0]);

  return (
    <section id="servicios" className="bg-muted/40 py-16" aria-labelledby="areas-heading">
      <div className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Áreas de práctica</p>
          <h2 id="areas-heading" className="text-3xl font-semibold md:text-4xl">
            Experiencias inmersivas para entender cada caso antes de litigar
          </h2>
          <p className="text-lg text-muted-foreground">
            Selecciona el escenario que más se acerca a tu situación. Cada imagen representa un frente en el que contamos con
            especialistas listos para activar estrategias legales, médicas y financieras.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-[0.6fr_0.4fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {areas.map((area) => (
              <button
                key={area.id}
                type="button"
                onClick={() => setActiveArea(area)}
                aria-pressed={activeArea.id === area.id}
                className={cn(
                  "group relative overflow-hidden rounded-3xl border border-border/60 text-left shadow-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2",
                  activeArea.id === area.id ? "ring-2 ring-offset-2 ring-primary/50" : "hover:-translate-y-1"
                )}
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={area.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/50 to-black/60 opacity-80" />
                  <div className="absolute inset-0 flex flex-col justify-between p-5 text-white">
                    <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">Explorar</p>
                    <p className="text-xl font-semibold leading-tight">{area.title}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
          <article className="card-surface flex h-full flex-col rounded-3xl border border-border p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">Área seleccionada</p>
            <h3 className="mt-2 text-2xl font-semibold text-foreground">{activeArea.title}</h3>
            <p className="mt-3 text-base text-muted-foreground">{activeArea.description}</p>
            {activeArea.detail && <p className="mt-3 text-sm text-muted-foreground">{activeArea.detail}</p>}
            <div className="mt-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                {activeArea.supportTitle}
              </p>
              <ul className="mt-3 space-y-2 text-sm text-foreground/90">
                {activeArea.supportItems.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {activeArea.cases && activeArea.cases.length > 0 && (
              <div className="mt-6 rounded-2xl bg-muted/70 p-4">
                <p className="text-sm font-semibold text-muted-foreground">{activeArea.casesTitle}</p>
                <ul className="mt-2 space-y-1 text-sm text-foreground/80">
                  {activeArea.cases.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        </div>
      </div>
    </section>
  );
}
