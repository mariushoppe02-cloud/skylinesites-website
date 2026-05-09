"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ArrowDown, Sparkles } from "lucide-react";

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animationId: number;
    const particles: Array<{ x: number; y: number; vx: number; vy: number; size: number; opacity: number; hue: number }> = [];
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);
    for (let i = 0; i < 80; i++) {
      particles.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3, size: Math.random() * 2 + 0.5, opacity: Math.random() * 0.6 + 0.1, hue: Math.random() * 30 + 35 });
    }
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width; if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height; if (p.y > canvas.height) p.y = 0;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 80%, 60%, ${p.opacity})`; ctx.fill();
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dist = Math.hypot(p.x - q.x, p.y - q.y);
          if (dist < 120) {
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `hsla(40, 80%, 55%, ${0.15 * (1 - dist / 120)})`; ctx.lineWidth = 0.5; ctx.stroke();
          }
        }
      });
      animationId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animationId); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.7 }} />;
}

export default function Hero() {
  const t = useTranslations("hero");
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#09090b]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(201,150,59,0.15),transparent)]" />
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `linear-gradient(rgba(201,150,59,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,150,59,0.5) 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
      <ParticleCanvas />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C9963B]/30 bg-[#C9963B]/10 text-[#C9963B] text-xs font-semibold uppercase tracking-widest mb-8 font-[var(--font-jakarta)]">
          <Sparkles className="w-3.5 h-3.5" />{t("badge")}<Sparkles className="w-3.5 h-3.5" />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }} className="mb-6">
          <h1 className="font-[var(--font-jakarta)] font-extrabold leading-[1.05] tracking-tight">
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white">{t("headline1")}</span>
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-gradient-gold mt-1">{t("headline2")}</span>
          </h1>
        </motion.div>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed">{t("subline")}</motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.45 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#kontakt" className="group inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base bg-gradient-to-r from-[#C9963B] to-[#E8B84B] text-black hover:opacity-90 transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,150,59,0.5)] hover:scale-105 font-[var(--font-jakarta)]">
            {t("cta_primary")}<span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </a>
          <a href="#leistungen" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base border border-zinc-700 text-zinc-300 hover:border-[#C9963B]/50 hover:text-white hover:bg-[#C9963B]/5 transition-all duration-300 font-[var(--font-jakarta)]">{t("cta_secondary")}</a>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.7 }} className="mt-16 flex flex-wrap items-center justify-center gap-8 text-zinc-500 text-sm">
          {["✓ Festpreise","✓ 14 Tage Lieferzeit","✓ Persönliche Betreuung","✓ 100% Kundenzufriedenheit"].map((item) => <span key={item} className="font-medium">{item}</span>)}
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-zinc-500 uppercase tracking-widest">{t("scroll")}</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
          <ArrowDown className="w-4 h-4 text-[#C9963B]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
