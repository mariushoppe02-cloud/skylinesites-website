import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import Navigation from "@/components/Navigation";
import Footer from "@/components/sections/Footer";
import Link from "next/link";
import Image from "next/image";

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

      {/* Group photo */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-14">
        <div className="relative w-full rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[3/2]">
          <Image
            src="/team-foto.png"
            alt="Marius Hoppe & Hamsa Sarwari – SkylineSites Gründer"
            fill
            className="object-cover object-center"
            style={{ filter: "brightness(0.88) contrast(1.05) saturate(0.80)" }}
            unoptimized
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#09090b]/55 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#09090b]/25 via-transparent to-[#09090b]/25 pointer-events-none" />
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
            <div key={m.name} className="group rounded-2xl bg-[#18181b] border border-zinc-800 overflow-hidden transition-all duration-300 hover:border-[#C9963B]/50 hover:shadow-[0_0_30px_rgba(201,150,59,0.15)]">
              {/* Individual photo */}
              <div className="h-64 sm:h-80 border-b border-zinc-800 relative overflow-hidden">
                <Image
                  src={`/team-${m.name.split(" ")[0].toLowerCase()}.png`}
                  alt={m.name}
                  fill
                  className="object-cover object-[center_30%] transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  style={{ filter: "brightness(0.88) contrast(1.05) saturate(0.80)" }}
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#18181b]/80 pointer-events-none" />
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
