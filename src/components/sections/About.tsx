"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Heart } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
export default function About() {
  const t = useTranslations("about");
  return (
    <section id="ueber-uns" className="section-padding bg-[#09090b] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_30%_50%,rgba(201,150,59,0.06),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto lg:mx-0">
              <div className="absolute inset-0 rounded-3xl border border-[#C9963B]/20 animate-pulse-glow" />
              <div className="absolute inset-8 rounded-2xl bg-gradient-to-br from-[#18181b] to-[#1c1c1f] border border-zinc-800 flex flex-col items-center justify-center gap-6 p-8">
                <div className="relative w-32 h-32">
                  <Image src="/logo-transparent.png" alt="SkylineSites" fill className="object-contain animate-float" />
                </div>
                <div className="text-center">
                  <p className="font-[var(--font-jakarta)] font-bold text-2xl text-white">Skyline<span className="text-gradient-gold">Sites</span></p>
                  <p className="text-xs text-zinc-500 mt-1">Web Design Agentur</p>
                </div>
                <div className="grid grid-cols-3 gap-3 w-full mt-2">
                  {["Qualität","Vertrauen","Ergebnis"].map((v) => (
                    <div key={v} className="text-center py-2 px-1 rounded-lg bg-[#C9963B]/5 border border-[#C9963B]/10">
                      <p className="text-[10px] text-[#C9963B] font-semibold">{v}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#C9963B] rounded-tr-3xl" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[#C9963B] rounded-bl-3xl" />
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="space-y-6">
            <SectionLabel>{t("label")}</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-extrabold font-[var(--font-jakarta)] text-white tracking-tight leading-tight">{t("headline")}</h2>
            <p className="text-zinc-400 leading-relaxed text-lg">{t("text1")}</p>
            <p className="text-zinc-400 leading-relaxed">{t("text2")}</p>
            <div className="flex items-center gap-3 pt-4">
              <Heart className="w-5 h-5 text-[#C9963B]" />
              <p className="text-[#C9963B] font-semibold font-[var(--font-jakarta)] italic">{t("signature")}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
