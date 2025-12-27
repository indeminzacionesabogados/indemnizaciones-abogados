export const legalServiceJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LegalService",
      "@id": "https://indemnizacionesabogados.com/#organization",
      name: "Indeminzaciones Abogados",
      url: "https://indemnizacionesabogados.com",
      description:
        "Firma boutique especializada en responsabilidad civil, seguros, derecho médico y accidentes laborales con cobertura nacional en Colombia.",
      logo: "https://indemnizacionesabogados.com/logos/Indeminzaciones-abogados_logo_arbol_ocre_texto.png",
      image: "https://indemnizacionesabogados.com/tree-gold.png",
      email: "contacto@indeminzaciones.com",
      telephone: "+57 305 256 6811",
      priceRange: "$$$",
      areaServed: {
        "@type": "Country",
        name: "Colombia",
      },
      address: {
        "@type": "PostalAddress",
        addressCountry: "CO",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "07:00",
          closes: "20:00",
        },
      ],
      sameAs: ["https://www.instagram.com/indemnizaciones.abogados/"],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "Servicio al cliente",
          telephone: "+57 305 256 6811",
          email: "contacto@indeminzaciones.com",
          areaServed: "CO",
          availableLanguage: ["es"],
        },
      ],
      hasOfferCatalog: {
        "@id": "https://indemnizacionesabogados.com/#services",
      },
    },
    {
      "@type": "OfferCatalog",
      "@id": "https://indemnizacionesabogados.com/#services",
      name: "Áreas de práctica de Indeminzaciones Abogados",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Accidentes de tránsito",
            serviceType: "Representación legal en responsabilidad civil por siniestros viales",
            description:
              "Coordinación de litigios, peritajes y reclamaciones ante aseguradoras tras accidentes de tránsito.",
            areaServed: "CO",
            provider: {
              "@id": "https://indemnizacionesabogados.com/#organization",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Responsabilidad del Estado",
            serviceType: "Demandas y reclamaciones ante entidades estatales",
            description:
              "Investigación probatoria y litigio por fallas en el servicio público, negligencia estatal y eventos críticos.",
            areaServed: "CO",
            provider: {
              "@id": "https://indemnizacionesabogados.com/#organization",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Derecho de seguros",
            serviceType: "Defensa y reclamación de pólizas",
            description:
              "Auditoría de pólizas, reclamaciones y negociación con compañías de seguros para activar coberturas.",
            areaServed: "CO",
            provider: {
              "@id": "https://indemnizacionesabogados.com/#organization",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Derecho médico",
            serviceType: "Litigio y defensa por responsabilidad médica",
            description:
              "Peritajes, análisis de historias clínicas y acompañamiento jurídico en casos de mala praxis o comités de bioética.",
            areaServed: "CO",
            provider: {
              "@id": "https://indemnizacionesabogados.com/#organization",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Accidentes laborales",
            serviceType: "Reclamaciones por culpa patronal y enfermedades laborales",
            description:
              "Gestión de indemnizaciones y defensa integral ante ARL y empleadores por accidentes o enfermedades laborales.",
            areaServed: "CO",
            provider: {
              "@id": "https://indemnizacionesabogados.com/#organization",
            },
          },
        },
      ],
    },
  ],
} as const;
