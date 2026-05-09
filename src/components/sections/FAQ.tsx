"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { Plus, Minus } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
interface FaqItem { q: string; a: string; }
function FaqEntry({ item, index }: { item: FaqItem; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.06 }} className={`rounded-xl border transition-all duration-300 overflow-hidden ${open ? "border-[#C9963B]/50 bg-[#1e1a10]" : "border-zinc-800 bg-[#18181b] hover:border-zinc-700"}`}>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between gap-4 p-5 text-left">
        <span className="text-sm font-semibold text-white font-[var(--font-jakarta)] leading-snug">{item.q}</span>
        <div className={`shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300 ${open ? "bg-[#C9963B] text-black" : "bg-zinc-800 text-zinc-400"}`}>
          {open ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
        </div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }}>
            <div className="px-5 pb-5"><div className="h-px bg-[#C9963B]/20 mb-4" /><p className="text-sm text-zinc-400 leading-relaxed">{item.a}</p></div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
export default function FAQ() {
  const t = useTranslations("faq");
  const items = t.raw("items") as FaqItem[];
  return (
    <section id="faq" className="section-padding bg-[#09090b] relative overflow-hidden">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionLabel>{t("label")}</SectionLabel>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold font-[var(--font-jakarta)] text-white tracking-tight">{t("headline")}</h2>
          <p className="mt-4 text-zinc-400 max-w-xl mx-auto text-lg leading-relaxed">{t("subline")}</p>
        </div>
        <div className="space-y-3">{items.map((item, i) => <FaqEntry key={i} item={item} index={i} />)}</div>
      </div>
    </section>
  );
}
