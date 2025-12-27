const steps = [
  {
    title: "Diagnóstico acelerado",
    description:
      "Entrevista inicial, recopilación de expedientes y revisión médica preliminar en menos de 48 horas.",
    deliverable: "Informe de riesgos y estimación preliminar de indemnización",
  },
  {
    title: "Estrategia y evidencia",
    description:
      "Coordinamos peritajes, línea probatoria y cronograma procesal para negociar o presentar demanda.",
    deliverable: "Carpeta probatoria digital y plan de acción por actores clave",
  },
  {
    title: "Negociación directa",
    description:
      "Participamos en mesas con aseguradoras, hospitales y contrapartes. Documentamos cada ofrecimiento.",
    deliverable: "Bitácora de avances compartida y escenarios de cierre",
  },
  {
    title: "Litigio especializado",
    description:
      "Representación en juzgados civiles y administrativos, seguimiento de audiencias y cumplimiento de sentencias.",
    deliverable: "Reportes quincenales y modelo financiero para ejecución",
  },
];

export function MethodSection() {
  return (
    <section id="metodo" className="py-16" aria-labelledby="method-heading">
      <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Nuestro método</p>
          <h2 id="method-heading" className="text-3xl font-semibold md:text-4xl">
            Protocolos claros, comunicación permanente y responsables designados por caso
          </h2>
          <p className="text-lg text-muted-foreground">
            Cada cliente cuenta con un abogado líder y un médico consultor disponible por WhatsApp y correo para
            resolver dudas en cualquier momento.
          </p>
          <div className="rounded-2xl border border-primary/40 bg-primary/5 p-6 text-sm text-primary">
            <p className="font-semibold">Supervisión directa de socios</p>
            <p className="mt-2 text-primary/90">
              Compartimos minutas posteriores a cada audiencia o reunión, además de dashboards privados con fechas
              clave, responsables y próximos entregables.
            </p>
          </div>
        </div>
        <ol className="space-y-6">
          {steps.map((step, index) => (
            <li key={step.title} className="card-surface relative rounded-2xl border border-border p-6">
              <span className="absolute -left-4 top-6 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                {index + 1}
              </span>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{step.description}</p>
              <p className="mt-4 text-sm font-semibold text-primary">{step.deliverable}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
