"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { key: "benefits", href: "#vorteile" },
  { key: "services", href: "#leistungen" },
  { key: "pricing", href: "#pakete" },
  { key: "process", href: "#ablauf" },
  { key: "about", href: "#ueber-uns" },
  { key: "faq", href: "#faq" },
  { key: "contact", href: "#kontakt" },
];

export default function Navigation() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const otherLocale = locale === "de" ? "en" : "de";
  const otherPath = pathname.replace(`/${locale}`, `/${otherLocale}`);

  return (
    <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-500", scrolled ? "glass-nav shadow-lg" : "bg-transparent")}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href={`/${locale}`} className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 90" width="220" height="37" aria-label="SkylineSites Logo" style={{ transition: "opacity 0.2s", opacity: 1 }} onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")} onMouseLeave={e => (e.currentTarget.style.opacity = "1")}>
              <defs>
                <linearGradient id="navLogoGold" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#C9963B"/>
                  <stop offset="100%" stopColor="#E8B84B"/>
                </linearGradient>
              </defs>
              <svg x="0" y="4" width="128" height="82" viewBox="272 278 213 134" overflow="visible">
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
              <line x1="142" y1="10" x2="142" y2="86" stroke="#2a2a2e" strokeWidth="1"/>
              <text y="57" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="42" fontWeight="800" letterSpacing="-0.5">
                <tspan x="158" fill="#ffffff">Skyline</tspan><tspan fill="url(#navLogoGold)">Sites</tspan>
              </text>
              <text x="159" y="77" fontFamily="Inter, sans-serif" fontSize="8.5" fill="#4a4a52" letterSpacing="3.5">WEB DESIGN AGENTUR</text>
            </svg>
          </Link>
          <div className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a key={link.key} href={link.href} className="text-sm text-zinc-400 hover:text-white transition-colors duration-200">{t(link.key)}</a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <Link href={otherPath} className="hidden sm:flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors px-2 py-1 rounded-md hover:bg-white/5">
              <Globe className="w-3.5 h-3.5" /><span className="uppercase font-medium">{otherLocale}</span>
            </Link>
            <a href="#kontakt" className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-[#C9963B] to-[#E8B84B] text-black hover:opacity-90 transition-all duration-200 hover:shadow-[0_0_20px_rgba(201,150,59,0.4)] font-[var(--font-jakarta)]">{t("cta")}</a>
            <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2 text-zinc-400 hover:text-white transition-colors" aria-label="Menu">
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="lg:hidden glass-nav border-t border-zinc-800/60">
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.a key={link.key} href={link.href} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} onClick={() => setMenuOpen(false)} className="px-4 py-3 text-zinc-300 hover:text-white hover:bg-white/5 rounded-lg transition-all text-sm font-medium">{t(link.key)}</motion.a>
              ))}
              <div className="flex items-center gap-3 pt-3 mt-2 border-t border-zinc-800/60">
                <Link href={otherPath} className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/5">
                  <Globe className="w-3.5 h-3.5" /><span className="uppercase font-medium">{otherLocale}</span>
                </Link>
                <a href="#kontakt" onClick={() => setMenuOpen(false)} className="flex-1 text-center py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r from-[#C9963B] to-[#E8B84B] text-black font-[var(--font-jakarta)]">{t("cta")}</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
