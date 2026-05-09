"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { CheckCircle2 } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
export default function WhyUs() {
  const t = useTranslations("whyus");
  const stats = t.raw("stats") as Array<{ value: string; suffix: string; label: string }>;
  const points = t.raw("points") as string[];
  return (
    <section className="section-padding bg-[#09090b] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(201,150,59,0.06),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionLabel>{t("label")}</SectionLabel>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold font-[var(--font-jakarta)] text-white tracking-tight">{t("headline")}</h2>
          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">{t("subline")}</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="p-6 rounded-2xl bg-[#18181b] border border-zinc-800 text-center">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} label={stat.label} />
            </motion.div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {points.map((point, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="flex items-start gap-3 p-4 rounded-xl bg-[#18181b]/60 border border-zinc-800/60">
              <CheckCircle2 className="w-5 h-5 text-[#C9963B] shrink-0 mt-0.5" />
              <span className="text-zinc-300 text-sm font-medium">{point}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
