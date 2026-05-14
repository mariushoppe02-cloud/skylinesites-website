"use client";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";

export default function About() {
  const t = useTranslations("about");
  const tTeam = useTranslations("team");
  const tRoot = useTranslations();
  const locale = useLocale();

  const members = tTeam.raw("members") as Array<{
    name: string; role: string; focus: string; initials: string; quote: string;
  }>;

  return (
    <section id="ueber-uns" className="section-padding bg-[#09090b] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_30%_50%,rgba(201,150,59,0.06),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT – logo visual */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto lg:mx-0">
              <div className="absolute inset-0 rounded-3xl border border-[#C9963B]/20 animate-pulse-glow" />
              <div className="absolute inset-8 rounded-2xl bg-gradient-to-br from-[#18181b] to-[#1c1c1f] border border-zinc-800 flex flex-col items-center justify-center gap-6 p-8">
                <div className="animate-float">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="272 278 213 134" width="120" height="76" overflow="visible" aria-hidden="true">
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
                </div>
                <div className="grid grid-cols-3 gap-3 w-full mt-2">
                  {(t.raw("values") as string[]).map((v) => (
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

          {/* RIGHT – teaser + team cards */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="space-y-8">
            <div className="space-y-4">
              <SectionLabel>{t("label")}</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-extrabold font-[var(--font-jakarta)] text-white tracking-tight leading-tight">{t("headline")}</h2>
              <p className="text-zinc-400 leading-relaxed text-lg">{t("text1")}</p>
            </div>

            {/* Mini team cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {members.map((m) => (
                <div key={m.name} className="rounded-xl bg-[#18181b] border border-zinc-800 hover:border-[#C9963B]/40 transition-colors duration-300 p-5 space-y-3">
                  <div className="flex items-center gap-3">
                    {/* Photo placeholder */}
                    <div className="w-12 h-12 rounded-full border-2 border-[#C9963B]/40 bg-[#C9963B]/5 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-[#C9963B] font-[var(--font-jakarta)]">{m.initials}</span>
                    </div>
                    <div>
                      <p className="font-bold text-white text-sm font-[var(--font-jakarta)]">{m.name}</p>
                      <p className="text-[11px] text-[#C9963B]">{m.focus}</p>
                    </div>
                  </div>
                  <p className="text-zinc-500 text-xs leading-relaxed italic">&ldquo;{m.quote}&rdquo;</p>
                </div>
              ))}
            </div>

            <Link
              href={`/${locale}/ueber-uns`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#C9963B] hover:text-[#E8B84B] transition-colors duration-200 group"
            >
              {tRoot("about_more")}
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
