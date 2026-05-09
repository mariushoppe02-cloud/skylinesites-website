"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Plus } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
interface AddonItem { title: string; price: string; desc: string; }
export default function Addons() {
  const t = useTranslations("addons");
  const items = t.raw("items") as AddonItem[];
  return (
    <section className="section-padding bg-[#09090b] relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionLabel>{t("label")}</SectionLabel>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold font-[var(--font-jakarta)] text-white tracking-tight">{t("headline")}</h2>
          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">{t("subline")}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="group flex items-start gap-4 p-5 rounded-xl bg-[#18181b] border border-zinc-800 hover:border-[#C9963B]/40 transition-all duration-300">
              <div className="shrink-0 w-9 h-9 rounded-lg bg-[#C9963B]/10 border border-[#C9963B]/20 flex items-center justify-center group-hover:bg-[#C9963B]/20 transition-colors duration-300">
                <Plus className="w-4 h-4 text-[#C9963B]" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="text-sm font-bold text-white font-[var(--font-jakarta)]">{item.title}</h3>
                  <span className="text-xs font-semibold text-[#C9963B] shrink-0 font-[var(--font-jakarta)]">{item.price}</span>
                </div>
                <p className="text-xs text-zinc-500 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
