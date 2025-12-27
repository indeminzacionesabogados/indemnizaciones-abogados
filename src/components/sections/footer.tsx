import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background py-10 text-sm text-muted-foreground" aria-label="Pie de página">
      <div className="container flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <p className="text-lg font-semibold uppercase tracking-section text-foreground">Indeminzaciones abogados</p>
          <p className="text-base text-foreground">© {currentYear} Todos los derechos reservados.</p>
        </div>
        <div className="flex flex-col items-start gap-2 text-right md:items-end">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-8">
            <Link href="/politica-tratamiento-datos-personales" className="hover:text-foreground">
              Política de tratamiento de datos personales
            </Link>
            <Link href="/terminos-y-condiciones" className="hover:text-foreground">
              Términos y condiciones
            </Link>
          </div>
          <p className="text-sm">
            Desarrollado por{" "}
            <Link href="https://www.jalmtech.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:underline">
              JALM TECH
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
