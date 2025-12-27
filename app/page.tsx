import { AboutSection } from "@/src/components/sections/about";
import { CaseStudiesSection } from "@/src/components/sections/case-studies";
import { ContactSection } from "@/src/components/sections/contact";
import { Footer } from "@/src/components/sections/footer";
import { HeroSection } from "@/src/components/sections/hero";
import { MethodSection } from "@/src/components/sections/method";
import { PracticeAreasSection } from "@/src/components/sections/practice-areas";
import { SiteHeader } from "@/src/components/sections/header";
import { FloatingActions } from "@/src/components/ui/floating-actions";

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
