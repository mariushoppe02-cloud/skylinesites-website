import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import CookieBanner from "@/components/ui/CookieBanner";
import JsonLd from "@/components/ui/JsonLd";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", display: "swap" });

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isDE = locale === "de";

  const title = isDE
    ? "SkylineSites – Webdesign Agentur aus Dreieich | Frankfurt & Umgebung"
    : "SkylineSites – Web Design Agency from Dreieich | Frankfurt & Region";

  const description = isDE
    ? "Professionelle Websites ab 880 € – persönlich betreut, schnell geliefert, festpreisgarantiert. Webdesign aus Dreieich für Unternehmen in Frankfurt & Rhein-Main."
    : "Professional websites from €880 – personally managed, fast delivery, fixed price guaranteed. Web design from Dreieich for businesses in Frankfurt & Rhine-Main.";

  const url = isDE ? "https://www.skylinesites.de/de" : "https://www.skylinesites.de/en";

  return {
    title,
    description,
    keywords: isDE
      ? ["Webdesign Dreieich", "Webdesign Frankfurt", "Webdesign Agentur Frankfurt", "Website erstellen lassen", "Webdesign Rhein-Main", "professionelle Website", "SkylineSites"]
      : ["web design Frankfurt", "web design agency Germany", "website development Frankfurt", "SkylineSites", "professional website Germany"],
    alternates: {
      canonical: url,
      languages: {
        de: "https://www.skylinesites.de/de",
        en: "https://www.skylinesites.de/en",
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "SkylineSites",
      locale: isDE ? "de_DE" : "en_US",
      alternateLocale: isDE ? "en_US" : "de_DE",
      type: "website",
      images: [
        {
          url: "https://www.skylinesites.de/og-image.jpg",
          width: 1200,
          height: 630,
          alt: isDE ? "SkylineSites – Webdesign Agentur Dreieich Frankfurt" : "SkylineSites – Web Design Agency Frankfurt Germany",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://www.skylinesites.de/og-image.jpg"],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} ${plusJakarta.variable}`}>
      <head>
        <JsonLd locale={locale} />
      </head>
      <body className="bg-[#09090b] text-white antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
          <WhatsAppButton />
          <CookieBanner />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
