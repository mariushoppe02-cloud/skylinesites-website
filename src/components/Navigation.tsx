"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
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
          <Link href={`/${locale}`} className="flex items-center gap-3 group">
            <div className="relative w-8 h-8 transition-transform duration-300 group-hover:scale-110">
              <Image src="/logo-transparent.png" alt="SkylineSites Logo" fill className="object-contain" priority />
            </div>
            <span className="font-[var(--font-jakarta)] font-bold text-lg text-white tracking-tight">
              Skyline<span className="text-gradient-gold">Sites</span>
            </span>
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
