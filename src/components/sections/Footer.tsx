"use client";
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
            <Link href={`/${locale}`} className="flex items-center gap-2.5 w-fit transition-opacity duration-200 hover:opacity-75">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="272 278 213 134" width="42" height="26" overflow="visible" aria-hidden="true" style={{ pointerEvents: "none" }}>
                <path strokeLinecap="butt" transform="matrix(0,-0.75,0.75,0,276.10874,409.977072)"   fill="none" d="M 0 4 L 60.76 4"  stroke="#E8B84B" strokeWidth="8"/>
                <path strokeLinecap="butt" transform="matrix(0.703129,-0.260977,0.260977,0.703129,276.14199,364.353137)" fill="none" d="M 0 4 L 33.86 4" stroke="#E8B84B" strokeWidth="8"/>
                <path strokeLinecap="butt" transform="matrix(0,-0.75,0.75,0,294.988903,409.97844)"    fill="none" d="M 0 4 L 68.87 4"  stroke="#E8B84B" strokeWidth="8"/>
                <path strokeLinecap="butt" transform="matrix(-0.725773,-0.189086,0.189086,-0.725773,321.917125,367.313088)" fill="none" d="M 0 4 L 32.15 4" stroke="#E8B84B" strokeWidth="8"/>
                <path strokeLinecap="butt" transform="matrix(0,-0.75,0.75,0,318.030455,409.979736)"   fill="none" d="M 0 4 L 96.82 4"  stroke="#E8B84B" strokeWidth="8"/>
                <path strokeLinecap="butt" transform="matrix(0.702181,-0.263519,0.263519,0.702181,318.38237,337.31684)"   fill="none" d="M 0 4 L 67.95 4"  stroke="#E8B84B" strokeWidth="8"/>
                <path fill="#E8B84B" transform="translate(358,318)" d="M 0.74 4.38 L 10.76 0.27 L 10.59 8.89 Z"/>
                <path strokeLinecap="butt" transform="matrix(0,-0.75,0.75,0,362.499359,409.976424)"   fill="none" d="M 0 4 L 118.62 4" stroke="#E8B84B" strokeWidth="8"/>
                <path strokeLinecap="butt" transform="matrix(0,-0.75,0.75,0,384.250237,409.977312)"   fill="none" d="M 0 4 L 162.42 4" stroke="#E8B84B" strokeWidth="8"/>
                <path strokeLinecap="butt" transform="matrix(0.75,0,0,0.75,384.986643,288.169254)"    fill="none" d="M 0 4 L 49 4"     stroke="#E8B84B" strokeWidth="8"/>
                <path strokeLinecap="butt" transform="matrix(0,-0.75,0.75,0,417.232422,336.021186)"   fill="none" d="M 0 4 L 63.81 4"  stroke="#E8B84B" strokeWidth="8"/>
                <path strokeLinecap="butt" transform="matrix(0,-0.75,0.75,0,408.982831,409.976808)"   fill="none" d="M 0 4 L 106.21 4" stroke="#E8B84B" strokeWidth="8"/>
                <path strokeLinecap="butt" transform="matrix(0.75,0,0,0.75,411.986743,330.32063)"     fill="none" d="M 0 4.5 L 46.61 4.5" stroke="#E8B84B" strokeWidth="9"/>
                <path strokeLinecap="butt" transform="matrix(0,-0.75,0.75,0,440.939981,356.680198)"   fill="none" d="M 0 4 L 33 4"     stroke="#E8B84B" strokeWidth="8"/>
                <path strokeLinecap="butt" transform="matrix(0.736191,0.143259,-0.143259,0.736191,432.447342,350.53225)" fill="none" d="M 0 4 L 63.28 4"  stroke="#E8B84B" strokeWidth="8"/>
                <path fill="#E8B84B" transform="translate(430,350)" d="M 21.125 4.285 L 0.73 8.332 L 0.73 0.238 Z"/>
                <path strokeLinecap="butt" transform="matrix(0,-0.75,0.75,0,430.73403,409.978008)"    fill="none" d="M 0 4 L 77.54 4"  stroke="#E8B84B" strokeWidth="8"/>
                <path strokeLinecap="butt" transform="matrix(0,-0.75,0.75,0,473.189692,409.978536)"   fill="none" d="M 0 4 L 67.05 4"  stroke="#E8B84B" strokeWidth="8"/>
              </svg>
              <div className="w-px h-9 bg-zinc-800" style={{ pointerEvents: "none" }} />
              <div className="flex flex-col justify-center" style={{ pointerEvents: "none" }}>
                <span className="font-[var(--font-jakarta)] font-extrabold text-[17px] leading-[1.15] tracking-tight">
                  <span className="text-white">Skyline</span><span className="bg-gradient-to-r from-[#C9963B] to-[#E8B84B] bg-clip-text text-transparent">Sites</span>
                </span>
                <span className="text-[6.5px] text-zinc-500 tracking-[0.3em] leading-none font-[var(--font-inter)] mt-[3px]">WEB DESIGN AGENTUR</span>
              </div>
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
          <p className="text-xs text-zinc-600">© {new Date().getFullYear()} SkylineSites. Alle Rechte vorbehalten.</p>
          <div className="flex items-center gap-2 text-xs text-zinc-600"><span>Made with</span><span className="text-[#C9963B]">♥</span><span>by SkylineSites</span></div>
        </div>
      </div>
    </footer>
  );
}
