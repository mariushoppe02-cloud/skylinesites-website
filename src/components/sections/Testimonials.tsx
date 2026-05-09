"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Star, Quote } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
interface TestimonialItem { name: string; role: string; text: string; rating: number; }
function TestimonialCard({ item, index }: { item: TestimonialItem; index: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="group p-6 rounded-2xl bg-[#18181b] border border-zinc-800 hover:border-[#C9963B]/30 transition-all duration-300 flex flex-col">
      <Quote className="w-8 h-8 text-[#C9963B]/30 mb-4" />
      <div className="flex gap-1 mb-4">{Array.from({ length: item.rating }).map((_, i) => <Star key={i} className="w-4 h-4 fill-[#C9963B] text-[#C9963B]" />)}</div>
      <p className="text-zinc-300 text-sm leading-relaxed flex-1 mb-6 italic">&ldquo;{item.text}&rdquo;</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C9963B] to-[#9A7028] flex items-center justify-center text-black font-bold text-sm font-[var(--font-jakarta)]">{item.name.charAt(0)}</div>
        <div><p className="text-sm font-bold text-white font-[var(--font-jakarta)]">{item.name}</p><p className="text-xs text-zinc-500">{item.role}</p></div>
      </div>
    </motion.div>
  );
}
export default function Testimonials() {
  const t = useTranslations("testimonials");
  const items = t.raw("items") as TestimonialItem[];
  return (
    <section className="section-padding bg-[#0d0d10] relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionLabel>{t("label")}</SectionLabel>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold font-[var(--font-jakarta)] text-white tracking-tight">{t("headline")}</h2>
          <p className="mt-4 text-zinc-400 max-w-xl mx-auto text-lg leading-relaxed">{t("subline")}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.slice(0, 3).map((item, i) => <TestimonialCard key={i} item={item} index={i} />)}
        </div>
        {items.length > 3 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
            {items.slice(3).map((item, i) => <TestimonialCard key={i + 3} item={item} index={i + 3} />)}
          </div>
        )}
      </div>
    </section>
  );
}
