export default function JsonLd({ locale }: { locale: string }) {
  const isDE = locale === "de";

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://www.skylinesites.de/#business",
        name: "SkylineSites",
        description: isDE
          ? "SkylineSites – Webdesign Agentur für Frankfurt & Rhein-Main. Professionelle Websites ab 880 €, persönlich betreut, festpreisgarantiert. Unser Büro sitzt in Dreieich, unsere Kunden sind in Frankfurt, Offenbach, Wiesbaden, Darmstadt und ganz Deutschland."
          : "SkylineSites – Web design agency for Frankfurt & Rhine-Main. Professional websites from €880, personally managed, fixed price guaranteed. Based in Dreieich, serving clients in Frankfurt and across Germany.",
        url: "https://www.skylinesites.de",
        logo: "https://www.skylinesites.de/og-image.jpg",
        image: "https://www.skylinesites.de/og-image.jpg",
        telephone: "+491728191583",
        email: "info@skylinesites.de",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Offenbacherstraße 14",
          addressLocality: "Dreieich",
          postalCode: "63303",
          addressCountry: "DE",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 50.0124,
          longitude: 8.6976,
        },
        areaServed: [
          { "@type": "City", name: "Frankfurt am Main" },
          { "@type": "City", name: "Dreieich" },
          { "@type": "City", name: "Offenbach am Main" },
          { "@type": "City", name: "Wiesbaden" },
          { "@type": "City", name: "Darmstadt" },
          { "@type": "City", name: "Eschborn" },
          { "@type": "City", name: "Neu-Isenburg" },
          { "@type": "State", name: "Hessen" },
        ],
        priceRange: "€€",
        currenciesAccepted: "EUR",
        paymentAccepted: "Bank transfer",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: isDE ? "Webdesign Pakete" : "Web Design Packages",
          itemListElement: [
            {
              "@type": "Offer",
              name: "Onepager",
              description: isDE ? "Einseitige Website – ideal für Einsteiger" : "Single-page website – ideal for starters",
              price: "880",
              priceCurrency: "EUR",
            },
            {
              "@type": "Offer",
              name: "Business Website",
              description: isDE ? "Mehrseitige professionelle Website" : "Multi-page professional website",
              price: "1800",
              priceCurrency: "EUR",
            },
          ],
        },
        sameAs: [
          "https://instagram.com/skylinesites",
          "https://linkedin.com/company/skylinesites",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://www.skylinesites.de/#website",
        url: "https://www.skylinesites.de",
        name: "SkylineSites",
        publisher: { "@id": "https://www.skylinesites.de/#business" },
        inLanguage: ["de-DE", "en-US"],
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://www.skylinesites.de/#service",
        name: isDE ? "Webdesign & Webentwicklung" : "Web Design & Development",
        provider: { "@id": "https://www.skylinesites.de/#business" },
        areaServed: "Frankfurt am Main, Rhein-Main, Dreieich, Hessen, Deutschland",
        serviceType: isDE ? "Webdesign Frankfurt" : "Web Design Frankfurt",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
