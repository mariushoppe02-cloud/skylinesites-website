import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import Navigation from "@/components/Navigation";
import Footer from "@/components/sections/Footer";
import Link from "next/link";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function UeberUnsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("team");

  const members = t.raw("members") as Array<{
    name: string; role: string; focus: string; initials: string; bio: string; quote: string;
  }>;

  const values = t.raw("values") as Array<{ title: string; desc: string }>;

  return (
    <main className="bg-[#09090b] min-h-screen">
      <Navigation />

      {/* Page header */}
      <div className="bg-[#0d0d10] border-b border-zinc-800/60 pt-28 pb-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href={`/${locale}`} className="inline-flex items-center gap-1 text-[#C9963B] text-sm hover:underline mb-6 block">
            {t("back")}
          </Link>
          <p className="text-xs font-bold uppercase tracking-widest text-[#C9963B] mb-3">{t("label")}</p>
          <h1 className="text-4xl md:text-6xl font-extrabold font-[var(--font-jakarta)] text-white tracking-tight leading-tight mb-4">
            {t("headline")}
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl">{t("subline")}</p>
          <div className="h-1 w-16 bg-gradient-to-r from-[#C9963B] to-[#E8B84B] rounded mt-6" />
        </div>
      </div>

      {/* Group photo placeholder */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-14">
        <div className="w-full h-64 md:h-80 rounded-2xl border-2 border-dashed border-[#C9963B]/30 bg-[#C9963B]/3 flex flex-col items-center justify-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-[#C9963B]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20H7a2 2 0 01-2-2v-1a5 5 0 015-5h4a5 5 0 015 5v1a2 2 0 01-2 2z" />
            <circle cx="12" cy="7" r="3" strokeLinecap="round" strokeLinejoin="round" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M22 20h-1a2 2 0 01-2-2v-1a4 4 0 00-3-3.87M2 20h1a2 2 0 002-2v-1a4 4 0 013-3.87" />
          </svg>
          <p className="text-sm text-zinc-600 font-medium">{t("group_photo_label")}</p>
        </div>
      </div>

      {/* Intro + Geschichte */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-4">
          <p className="text-zinc-300 leading-relaxed text-lg">{t("intro")}</p>
        </div>
        <div className="space-y-3">
          <p className="text-xs font-bold uppercase tracking-widest text-[#C9963B]">{t("story_label")}</p>
          <p className="text-zinc-400 leading-relaxed">{t("story")}</p>
        </div>
      </div>

      {/* Team */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-10">{t("members_label")}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {members.map((m) => (
            <div key={m.name} className="rounded-2xl bg-[#18181b] border border-zinc-800 overflow-hidden">
              {/* Individual photo placeholder */}
              <div className="h-56 border-b border-zinc-800 bg-[#C9963B]/3 flex flex-col items-center justify-center gap-3 relative">
                <div className="w-20 h-20 rounded-full border-2 border-[#C9963B]/40 bg-[#09090b] flex items-center justify-center">
                  <span className="text-2xl font-extrabold text-[#C9963B] font-[var(--font-jakarta)]">{m.initials}</span>
                </div>
                <p className="text-xs text-zinc-600">{t("photo_label")}</p>
              </div>
              {/* Content */}
              <div className="p-7 space-y-4">
                <div>
                  <h3 className="text-xl font-extrabold text-white font-[var(--font-jakarta)]">{m.name}</h3>
                  <p className="text-[#C9963B] text-sm font-semibold mt-0.5">{m.role} · {m.focus}</p>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">{m.bio}</p>
                <div className="pt-2 border-t border-zinc-800">
                  <p className="text-zinc-500 text-xs italic leading-relaxed">&ldquo;{m.quote}&rdquo;</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Werte */}
      <div className="border-t border-zinc-800/60 bg-[#0d0d10]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-10">{t("values_label")}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="space-y-3 p-6 rounded-xl bg-[#18181b] border border-zinc-800">
                <div className="w-8 h-1 bg-gradient-to-r from-[#C9963B] to-[#E8B84B] rounded" />
                <h3 className="font-extrabold text-white font-[var(--font-jakarta)] text-lg">{v.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
