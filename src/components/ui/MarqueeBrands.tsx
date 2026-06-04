"use client";
const BRANDS = ["Handwerker", "Dienstleister", "Coaches", "Restaurants", "Ärzte & Therapeuten", "Startups", "Einzelunternehmer", "Agenturen", "Freiberufler", "Berater", "Fotografen", "Fitnessstudios"];

export default function MarqueeBrands() {
  const items = [...BRANDS, ...BRANDS];
  return (
    <div className="relative w-full overflow-hidden border-y border-zinc-800/60 bg-[#0d0d10] py-3.5">
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-[#0d0d10] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-[#0d0d10] to-transparent" />
      <style>{`
        @keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        .marquee-track { display: flex; width: max-content; animation: marquee 28s linear infinite; }
        .marquee-track:hover { animation-play-state: paused; }
      `}</style>
      <div className="marquee-track">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-3 px-5 text-xs font-semibold tracking-widest uppercase text-zinc-500 whitespace-nowrap">
            {item}
            <span className="text-[#C9963B] opacity-50">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
