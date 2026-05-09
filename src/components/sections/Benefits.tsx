"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { UserCheck, BadgeDollarSign, Zap, Puzzle } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
const ICONS = [UserCheck, BadgeDollarSign, Zap, Puzzle];
export default function Benefits() {
  const t = useTranslations("benefits");
  const items = t.raw("items") as Array<{ title: string; desc: string }>;
  return (
    <section id="vorteile" className="section-padding bg-[#09090b] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(201,150,59,0.06),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionLabel>{t("label")}</SectionLabel>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold font-[var(--font-jakarta)] text-white tracking-tight">{t("headline")}</h2>
          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">{t("subline")}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="group p-6 rounded-2xl bg-[#18181b] border border-zinc-800 hover:border-[#C9963B]/40 transition-all duration-400">
                <div className="w-12 h-12 rounded-xl bg-[#C9963B]/10 border border-[#C9963B]/20 flex items-center justify-center mb-4 group-hover:bg-[#C9963B]/20 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-[#C9963B]" />
                </div>
                <h3 className="text-lg font-bold text-white font-[var(--font-jakarta)] mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
