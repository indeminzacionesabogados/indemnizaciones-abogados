import type { Metadata } from "next";
import { Footer } from "@/src/components/sections/footer";
import { SiteHeader } from "@/src/components/sections/header";
import { FloatingActions } from "@/src/components/ui/floating-actions";

const guarantees = [
  {
    title: "Veracidad de los datos",
    description: "Toda información que registre y anexe en la página web será verdadera, exacta, actual y completa.",
  },
  {
    title: "Capacidad legal",
    description: "Tiene capacidad legal y acepta cumplir los términos y condiciones de la página web.",
  },
  {
    title: "Uso legítimo del sitio",
    description: "No utilizará la página web para ningún fin ilegal o no autorizado.",
  },
  {
    title: "Cumplimiento normativo",
    description: "Su uso de la página web no infringe ninguna ley o normativa aplicable.",
  },
];

const prohibitedActivities = [
  "Hacer cualquier uso no autorizado de la página web, tal como utilizar nombres falsos, correos electrónicos falsos y crear cuentas falsas.",
  "Utilizar la página web para ofrecer la venta de bienes y servicios.",
  "Engañarnos por medio de la página web, con la finalidad de obtener información de la página o de la empresa.",
  "Hacer un uso indebido de nuestros servicios para realizar conductas indebidas.",
  "Suplantar a empresas o personas, con finalidad de obtener información.",
  "Utilizar nuestros servicios para acoso, extorsión o cualquier conducta ilícita.",
];

export const metadata: Metadata = {
  title: "Términos y Condiciones | Indeminzaciones Abogados",
  description:
    "Revisa los términos de uso, garantías del usuario y actividades prohibidas al interactuar con Indeminzaciones Abogados.",
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-background">
        <section className="bg-muted/40 py-16 md:py-20" aria-labelledby="terms-heading">
          <div className="container space-y-6">
            <p className="text-sm font-semibold uppercase tracking-hero text-primary">Marco legal del sitio</p>
            <div className="max-w-4xl space-y-4">
              <h1 id="terms-heading" className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Términos y Condiciones
              </h1>
              <p className="text-base text-muted-foreground md:text-lg">
                Los presentes términos y condiciones constituyen un acuerdo legal de forma vinculante celebrado entre usted y
                nuestra firma con relación al acceso a la página web y a cualquier otro medio de comunicación que utilicemos.
              </p>
              <p className="text-base text-muted-foreground md:text-lg">
                Usted acepta nuestros términos y condiciones al acceder a la página web y anexar sus datos personales para
                realizar contacto con nosotros sobre su asesoría o trámite jurídico.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16" aria-labelledby="scope-heading">
          <div className="container space-y-6">
            <div className="max-w-3xl space-y-4">
              <h2 id="scope-heading" className="text-2xl font-semibold md:text-4xl">
                Alcance, aceptación y responsabilidad del usuario
              </h2>
              <p className="text-base text-muted-foreground md:text-lg">
                La información proporcionada en la página web no está destinada a ser distribuida o utilizada por ninguna persona
                o entidad en ninguna jurisdicción donde su uso sea contrario a la normativa que nos somete.
              </p>
              <p className="text-base text-muted-foreground md:text-lg">
                En consecuencia, las personas que decidan acceder y anexar sus datos personales lo hacen por iniciativa propia y
                son las únicas responsables del cumplimiento de las leyes locales.
              </p>
              <p className="text-base text-muted-foreground">
                Si su información anexada o registrada en la página web es falsa, inexacta o incompleta, tenemos el derecho de
                suspender su atención por no existir certeza del usuario que se atenderá.
              </p>
            </div>
            <div className="rounded-3xl border border-border/70 bg-muted/30 p-6 md:p-8">
              <h3 className="text-xl font-semibold text-foreground">Manejo de medios de contacto</h3>
              <p className="mt-3 text-base text-muted-foreground">
                Toda interacción digital, telefónica o presencial quedará sujeta a estos términos. Al remitirnos documentos,
                fotografías o comunicaciones, certifica que cuenta con la autorización necesaria para compartirlos y que no
                vulnera derechos de terceros.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-muted/20 py-16" aria-labelledby="guarantees-heading">
          <div className="container space-y-8">
            <div className="max-w-3xl space-y-4">
              <h2 id="guarantees-heading" className="text-2xl font-semibold md:text-4xl">
                Garantías del usuario
              </h2>
              <p className="text-base text-muted-foreground md:text-lg">
                Para mantener un servicio íntegro y seguro, cada visitante declara lo siguiente al contactarnos por el sitio web.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {guarantees.map((item) => (
                <article key={item.title} className="rounded-3xl border border-border bg-white/90 p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-3 text-base text-muted-foreground">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16" aria-labelledby="prohibited-heading">
          <div className="container space-y-8">
            <div className="max-w-3xl space-y-4">
              <h2 id="prohibited-heading" className="text-2xl font-semibold md:text-4xl">
                Actividades prohibidas
              </h2>
              <p className="text-base text-muted-foreground md:text-lg">
                Al utilizar nuestros servicios digitales, usted se compromete a no incurrir en ninguna de las siguientes
                conductas, pues afectan la seguridad de la información y el correcto funcionamiento del despacho.
              </p>
            </div>
            <ul className="space-y-4 text-base text-muted-foreground">
              {prohibitedActivities.map((activity) => (
                <li key={activity} className="rounded-3xl border border-border/70 bg-muted/40 p-5">
                  {activity}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-muted/30 py-16" aria-labelledby="changes-heading">
          <div className="container space-y-6">
            <div className="max-w-3xl space-y-4">
              <h2 id="changes-heading" className="text-2xl font-semibold md:text-4xl">
                Actualizaciones y modificaciones
              </h2>
              <p className="text-base text-muted-foreground md:text-lg">
                Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. En caso de ajustes,
                publicaremos la nueva versión con la fecha de actualización para que puedas revisarla antes de seguir usando el
                sitio.
              </p>
              <p className="text-sm text-muted-foreground md:text-base">
                El uso continuo de la página web después de la publicación de cambios constituye la aceptación expresa de los
                nuevos términos.
              </p>
            </div>
            <div className="rounded-3xl border border-primary/30 bg-white/90 p-6 shadow-sm">
              <p className="text-sm text-muted-foreground">
                Ante cualquier inquietud relacionada con estos términos o para reportar actividades sospechosas, escribe a{" "}
                <a href="mailto:contacto@indeminzaciones.com" className="font-semibold text-primary underline">
                  contacto@indeminzaciones.com
                </a>{" "}
                o comunícate al WhatsApp oficial +57 305 256 6811.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
