"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import SectionLabel from "@/components/ui/SectionLabel";
export default function Process() {
  const t = useTranslations("process");
  const steps = t.raw("steps") as Array<{ title: string; desc: string }>;
  return (
    <section id="ablauf" className="section-padding bg-[#0d0d10] relative overflow-hidden">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionLabel>{t("label")}</SectionLabel>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold font-[var(--font-jakarta)] text-white tracking-tight">{t("headline")}</h2>
          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">{t("subline")}</p>
        </div>
        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#C9963B]/60 via-[#C9963B]/20 to-transparent md:-translate-x-px" />
          <div className="space-y-10">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 z-10">
                    <div className="w-12 h-12 rounded-full bg-[#09090b] border-2 border-[#C9963B] flex items-center justify-center text-[#C9963B] font-extrabold text-lg font-[var(--font-jakarta)] glow-gold-sm">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                  </div>
                  <div className={`ml-20 md:ml-0 flex-1 p-6 rounded-2xl bg-[#18181b] border border-zinc-800 hover:border-[#C9963B]/30 transition-colors duration-300 ${isLeft ? "md:mr-[calc(50%+3rem)]" : "md:ml-[calc(50%+3rem)]"}`}>
                    <span className="text-xs text-[#C9963B] font-semibold uppercase tracking-widest font-[var(--font-jakarta)]">{t("step")} {i + 1}</span>
                    <h3 className="text-lg font-bold text-white font-[var(--font-jakarta)] mb-2 mt-1">{step.title}</h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
