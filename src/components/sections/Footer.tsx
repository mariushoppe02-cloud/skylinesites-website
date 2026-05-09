"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Instagram, Linkedin, Twitter } from "lucide-react";
const NAV_LINKS = [
  { key:"benefits", href:"#vorteile" }, { key:"services", href:"#leistungen" }, { key:"pricing", href:"#pakete" },
  { key:"process", href:"#ablauf" }, { key:"about", href:"#ueber-uns" }, { key:"faq", href:"#faq" }, { key:"contact", href:"#kontakt" },
];
export default function Footer() {
  const t = useTranslations();
  const locale = useLocale();
  return (
    <footer className="bg-[#09090b] border-t border-zinc-800/60">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#C9963B]/10 via-[#E8B84B]/5 to-[#C9963B]/10" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h3 className="text-3xl md:text-4xl font-extrabold font-[var(--font-jakarta)] text-white mb-4">{t("footer.cta_headline")}</h3>
          <p className="text-zinc-400 mb-8 text-lg">{t("footer.cta_subline")}</p>
          <a href="#kontakt" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm bg-gradient-to-r from-[#C9963B] to-[#E8B84B] text-black hover:opacity-90 hover:shadow-[0_0_40px_rgba(201,150,59,0.4)] transition-all duration-300 font-[var(--font-jakarta)]">{t("footer.cta_button")}</a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <Link href={`/${locale}`} className="flex items-center gap-3 group w-fit">
              <div className="relative w-8 h-8"><Image src="/logo-transparent.png" alt="SkylineSites" fill className="object-contain" /></div>
              <span className="font-[var(--font-jakarta)] font-bold text-lg text-white">Skyline<span className="text-gradient-gold">Sites</span></span>
            </Link>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-xs">{t("footer.tagline")}</p>
            <div className="flex items-center gap-3 pt-2">
              {[{ icon: Instagram, href:"https://instagram.com/skylinesites", label:"Instagram" }, { icon: Linkedin, href:"https://linkedin.com/company/skylinesites", label:"LinkedIn" }, { icon: Twitter, href:"https://twitter.com/skylinesites", label:"Twitter" }].map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="w-9 h-9 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-[#C9963B] hover:bg-[#C9963B]/10 border border-transparent hover:border-[#C9963B]/30 transition-all duration-200">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4">{t("footer.nav_label")}</p>
            <ul className="space-y-2">{NAV_LINKS.map((link) => <li key={link.key}><a href={link.href} className="text-sm text-zinc-400 hover:text-white transition-colors duration-200">{t(`nav.${link.key}`)}</a></li>)}</ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4">{t("footer.legal_label")}</p>
            <ul className="space-y-2">
              <li><Link href={`/${locale}/impressum`} className="text-sm text-zinc-400 hover:text-white transition-colors">{t("footer.imprint")}</Link></li>
              <li><Link href={`/${locale}/datenschutz`} className="text-sm text-zinc-400 hover:text-white transition-colors">{t("footer.privacy")}</Link></li>
              <li><Link href={`/${locale}/agb`} className="text-sm text-zinc-400 hover:text-white transition-colors">{t("footer.agb")}</Link></li>
            </ul>
            <div className="mt-8 p-4 rounded-xl bg-[#18181b] border border-zinc-800"><p className="text-xs text-zinc-500 leading-relaxed">{t("footer.vat_note")}</p></div>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-600">{t("footer.copyright")}</p>
          <div className="flex items-center gap-2 text-xs text-zinc-600"><span>Made with</span><span className="text-[#C9963B]">♥</span><span>by SkylineSites</span></div>
        </div>
      </div>
    </footer>
  );
}
