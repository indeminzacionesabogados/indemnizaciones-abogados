import type { Metadata } from "next";
import { AboutSection } from "@/src/components/sections/about";
import { CaseStudiesSection } from "@/src/components/sections/case-studies";
import { ContactSection } from "@/src/components/sections/contact";
import { Footer } from "@/src/components/sections/footer";
import { HeroSection } from "@/src/components/sections/hero";
import { MethodSection } from "@/src/components/sections/method";
import { PracticeAreasSection } from "@/src/components/sections/practice-areas";
import { SiteHeader } from "@/src/components/sections/header";
import { FloatingActions } from "@/src/components/ui/floating-actions";

export const metadata: Metadata = {
  title: "Abogados de Responsabilidad Civil y Seguros | Indeminzaciones",
  description:
    "Indeminzaciones Abogados protege a familias, médicos y empresas en casos complejos de responsabilidad civil, seguros y derecho médico en Colombia.",
  keywords: [
    "abogados responsabilidad civil",
    "abogados de seguros",
    "derecho médico",
    "indemnizaciones en Colombia",
    "accidentes laborales",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Firma experta en indemnizaciones y responsabilidad civil",
    description:
      "Especialistas boutique en responsabilidad civil, derecho médico y seguros con cobertura nacional en Colombia.",
    url: "/",
    type: "website",
    siteName: "Indeminzaciones Abogados",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Equipo legal de Indeminzaciones Abogados preparado para casos de responsabilidad civil",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abogados de responsabilidad civil y seguros",
    description: "Litigio estratégico en responsabilidad civil, derecho médico y seguros.",
    images: ["/twitter-image"],
  },
};

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <PracticeAreasSection />
        <CaseStudiesSection />
        <MethodSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
