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
          ? "Professionelle Webdesign Agentur aus Dreieich – Websites ab 880 € für Unternehmen in Frankfurt & Rhein-Main."
          : "Professional web design agency from Dreieich – websites from €880 for businesses in Frankfurt & Rhine-Main.",
        url: "https://www.skylinesites.de",
        logo: "https://www.skylinesites.de/og-image.jpg",
        image: "https://www.skylinesites.de/og-image.jpg",
        telephone: "+4917281915 83",
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
          { "@type": "City", name: "Dreieich" },
          { "@type": "City", name: "Frankfurt am Main" },
          { "@type": "City", name: "Offenbach" },
          { "@type": "City", name: "Darmstadt" },
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
        areaServed: "Frankfurt Rhein-Main",
        serviceType: isDE ? "Webdesign" : "Web Design",
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
