import type { Metadata } from "next";
import { Footer } from "@/src/components/sections/footer";
import { SiteHeader } from "@/src/components/sections/header";
import { FloatingActions } from "@/src/components/ui/floating-actions";

const dataPurposes = [
  {
    title: "Atención de solicitudes jurídicas",
    description:
      "Utilizamos los datos personales para comprender el caso, responder inquietudes y presentar propuestas de representación en responsabilidad civil, seguros y derecho médico.",
  },
  {
    title: "Gestión de relaciones con clientes",
    description:
      "La información de contacto permite agendar reuniones, compartir documentos, emitir cuentas de cobro y mantener informados a los titulares sobre el estado del trámite.",
  },
  {
    title: "Cumplimiento de obligaciones legales",
    description:
      "Resguardamos la información exigida por la ley 1581 de 2012, la normatividad de habeas data y los deberes profesionales de los abogados frente a entes de control.",
  },
  {
    title: "Prevención del fraude y seguridad",
    description:
      "Contrastamos los datos suministrados con la documentación de soporte para garantizar que cada representación sea legítima y segura para el titular.",
  },
];

const holderRights = [
  {
    title: "Conocer y acceder",
    description: "Puedes solicitar en cualquier momento qué datos conservamos y cómo los estamos utilizando.",
  },
  {
    title: "Actualizar o rectificar",
    description:
      "Si tu información cambió o detectas un error, la corregimos en los registros, bases de datos y expedientes activos.",
  },
  {
    title: "Revocar la autorización",
    description:
      "Puedes revocar o solicitar la supresión de tus datos cuando la ley lo permita y no existan obligaciones contractuales pendientes.",
  },
  {
    title: "Presentar consultas y reclamos",
    description:
      "Resolvemos inquietudes en un plazo máximo de 10 días hábiles y gestionamos reclamos formales en los tiempos fijados por la Superintendencia de Industria y Comercio.",
  },
];

const securityPractices = [
  "Clasificamos cada expediente según su sensibilidad y limitamos el acceso únicamente al equipo legal encargado.",
  "Aplicamos controles de autenticación en los sistemas digitales y realizamos respaldos cifrados para evitar pérdida de información.",
  "Celebramos acuerdos de confidencialidad con aliados y proveedores que tengan acceso a los datos personales.",
];

const claimSteps = [
  {
    title: "Presenta tu solicitud",
    detail:
      "Escríbenos a contacto@indeminzaciones.com o a la línea WhatsApp oficial indicando nombre, documento de identidad y el detalle del requerimiento (consulta, actualización, revocatoria o reclamo).",
  },
  {
    title: "Recibe la respuesta",
    detail:
      "Contestaremos consultas en máximo 10 días hábiles. Cuando se trate de reclamos, te informaremos la recepción y daremos respuesta definitiva en un plazo de 15 días hábiles adicionales.",
  },
  {
    title: "Escalamiento ante la SIC",
    detail:
      "Si consideras que no atendimos tu solicitud conforme a la ley 1581 de 2012, puedes acudir a la Superintendencia de Industria y Comercio con el expediente y la respuesta emitida por la firma.",
  },
];

export const metadata: Metadata = {
  title: "Política de Tratamiento de Datos Personales | Indeminzaciones Abogados",
  description:
    "Conoce cómo Indeminzaciones Abogados recoge, protege y usa tus datos personales conforme a la Ley 1581 de 2012.",
};

export default function DataPolicyPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-background">
        <section
          id="politica-datos"
          className="bg-muted/40 py-16 md:py-20"
          aria-labelledby="data-policy-heading"
        >
          <div className="container space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary">
              Protección de información personal
            </p>
            <div className="max-w-4xl space-y-4">
              <h1
                id="data-policy-heading"
                className="text-4xl font-bold tracking-tight md:text-5xl"
              >
                Política de Tratamiento de Datos Personales
              </h1>
              <p className="text-lg text-muted-foreground">
                La Ley de Protección de Datos Personales (Ley 1581 de 2012) reconoce y protege el derecho que tienen todas las
                personas a conocer, actualizar y rectificar la información que se haya recogido sobre ellas en bases de datos o
                archivos susceptibles de tratamiento por entidades públicas o privadas.
              </p>
              <p className="text-lg text-muted-foreground">
                Organización Jurídica Indeminzaciones Abogados se compromete a tratar los datos de los titulares de forma
                absolutamente confidencial y a usarlos exclusivamente para las finalidades indicadas en esta política,
                respetando lo definido en el literal G del artículo 3 de la ley 1581 de 2012.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16" aria-labelledby="purposes-heading">
          <div className="container space-y-8">
            <div className="max-w-3xl space-y-4">
              <h2 id="purposes-heading" className="text-3xl font-semibold md:text-4xl">
                Finalidades autorizadas para el tratamiento
              </h2>
              <p className="text-lg text-muted-foreground">
                Los datos personales solo serán utilizados para propósitos legítimos relacionados con los servicios jurídicos
                que prestamos. Cada actividad cuenta con controles de confidencialidad, trazabilidad y acceso restringido.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {dataPurposes.map((item) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-border/70 bg-white/70 p-6 shadow-sm"
                >
                  <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-3 text-base text-muted-foreground">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-muted/30 py-16" aria-labelledby="rights-heading">
          <div className="container space-y-8">
            <div className="max-w-3xl space-y-4">
              <h2 id="rights-heading" className="text-3xl font-semibold md:text-4xl">
                Derechos de los titulares y canales de atención
              </h2>
              <p className="text-lg text-muted-foreground">
                En cumplimiento de la ley 1581 de 2012, garantizamos que cada persona pueda ejercer sus derechos sobre los datos
                almacenados. Ofrecemos canales digitales y presenciales para registrar consultas o reclamos.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {holderRights.map((right) => (
                <article key={right.title} className="rounded-3xl border border-border bg-white/90 p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-foreground">{right.title}</h3>
                  <p className="mt-3 text-base text-muted-foreground">{right.description}</p>
                </article>
              ))}
            </div>
            <div className="rounded-3xl border border-dashed border-border/70 bg-white/80 p-6 md:p-8">
              <h3 className="text-lg font-semibold text-foreground">Canales habilitados</h3>
              <p className="mt-2 text-base text-muted-foreground">
                Correo:{" "}
                <a href="mailto:contacto@indeminzaciones.com" className="font-semibold text-primary underline">
                  contacto@indeminzaciones.com
                </a>{" "}
                · WhatsApp:{" "}
                <a
                  href="https://wa.me/573052566811"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-primary underline"
                >
                  +57 305 256 6811
                </a>{" "}
                · Atención presencial: con cita previa en nuestra sede administrativa.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16" aria-labelledby="security-heading">
          <div className="container space-y-8">
            <div className="max-w-3xl space-y-4">
              <h2 id="security-heading" className="text-3xl font-semibold md:text-4xl">
                Medidas de seguridad y confidencialidad
              </h2>
              <p className="text-lg text-muted-foreground">
                Custodiamos la información con criterios técnicos, administrativos y humanos alineados con los estándares del
                sector legal. Todo el equipo conoce la obligación de confidencialidad profesional.
              </p>
            </div>
            <ul className="space-y-4 text-base text-muted-foreground">
              {securityPractices.map((practice) => (
                <li
                  key={practice}
                  className="rounded-3xl border border-border/70 bg-muted/50 p-5"
                >
                  {practice}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-muted/20 py-16" aria-labelledby="claims-heading">
          <div className="container space-y-8">
            <div className="max-w-3xl space-y-4">
              <h2 id="claims-heading" className="text-3xl font-semibold md:text-4xl">
                Procedimiento para consultas y reclamos
              </h2>
              <p className="text-lg text-muted-foreground">
                Estos son los pasos para ejercer tus derechos de habeas data frente a Organización Jurídica Indeminzaciones
                Abogados.
              </p>
            </div>
            <ol className="space-y-6">
              {claimSteps.map((step, index) => (
                <li
                  key={step.title}
                  className="flex gap-4 rounded-3xl border border-border bg-white/90 p-6 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-lg font-semibold text-primary">
                    {index + 1}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                    <p className="text-base text-muted-foreground">{step.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="text-sm text-muted-foreground">
              El responsable del tratamiento es Organización Jurídica Indeminzaciones Abogados, NIT 901.463.443-3, con domicilio
              en Medellín, Colombia.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
