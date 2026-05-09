import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import Benefits from "@/components/sections/Benefits";
import Services from "@/components/sections/Services";
import WhyUs from "@/components/sections/WhyUs";
import Process from "@/components/sections/Process";
import About from "@/components/sections/About";
import Pricing from "@/components/sections/Pricing";
import Addons from "@/components/sections/Addons";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <main>
      <Navigation />
      <Hero />
      <Benefits />
      <Services />
      <WhyUs />
      <Process />
      <About />
      <Pricing />
      <Addons />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
