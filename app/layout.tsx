import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  title: "Responsabilidad Civil y Seguros | Indeminzaciones Abogados",
  description:
    "Despacho boutique experto en responsabilidad civil, seguros y derecho médico. Acompañamos casos complejos con estrategia legal y trato humano.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} bg-background text-foreground antialiased`}>
        {children}
      </body>
    </html>
  );
}
