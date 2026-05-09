"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Check, Sparkles } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
interface Plan { name: string; price: string | null; desc: string; features: string[]; }
export default function Pricing() {
  const t = useTranslations("pricing");
  const plans = t.raw("plans") as Plan[];
  return (
    <section id="pakete" className="section-padding bg-[#0d0d10] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(201,150,59,0.07),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionLabel>{t("label")}</SectionLabel>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold font-[var(--font-jakarta)] text-white tracking-tight">{t("headline")}</h2>
          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">{t("subline")}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => {
            const isFeatured = i === 1;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className={`relative flex flex-col rounded-3xl p-8 ${isFeatured ? "bg-gradient-to-b from-[#1e1a10] to-[#18181b] border-2 border-[#C9963B]/60 shadow-[0_0_60px_rgba(201,150,59,0.2)]" : "bg-[#18181b] border border-zinc-800"}`}>
                {isFeatured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#C9963B] to-[#E8B84B] text-black text-xs font-bold font-[var(--font-jakarta)]">
                      <Sparkles className="w-3 h-3" />{t("popular")}<Sparkles className="w-3 h-3" />
                    </span>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className={`text-xl font-bold font-[var(--font-jakarta)] mb-2 ${isFeatured ? "text-gradient-gold" : "text-white"}`}>{plan.name}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{plan.desc}</p>
                </div>
                <div className="mb-8">
                  {plan.price ? (
                    <div className="flex items-end gap-1">
                      <span className="text-sm text-zinc-500 mb-1">{t("from")}</span>
                      <span className="text-5xl font-extrabold font-[var(--font-jakarta)] text-white">€{plan.price}</span>
                    </div>
                  ) : (
                    <div className="text-3xl font-extrabold font-[var(--font-jakarta)] text-gradient-gold">{t("request")}</div>
                  )}
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className={`mt-0.5 shrink-0 w-4 h-4 rounded-full flex items-center justify-center ${isFeatured ? "bg-[#C9963B]" : "bg-zinc-700"}`}>
                        <Check className="w-2.5 h-2.5 text-black" strokeWidth={3} />
                      </div>
                      <span className="text-sm text-zinc-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="#kontakt" className={`w-full text-center py-3.5 rounded-full font-bold text-sm transition-all duration-300 font-[var(--font-jakarta)] ${isFeatured ? "bg-gradient-to-r from-[#C9963B] to-[#E8B84B] text-black hover:opacity-90 hover:shadow-[0_0_30px_rgba(201,150,59,0.4)]" : "bg-zinc-800 text-white hover:bg-zinc-700 border border-zinc-700"}`}>{t("cta")}</a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
