"use client";
import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Send, CheckCircle, AlertCircle, Mail, Phone } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
export default function Contact() {
  const t = useTranslations("contact");
  const serviceOptions = t.raw("service_options") as string[];
  const [status, setStatus] = useState<"idle"|"sending"|"success"|"error">("idle");
  const [form, setForm] = useState({ name:"", email:"", phone:"", service:"", message:"" });
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault(); setStatus("sending");
    try {
      const res = await fetch("/mail.php", { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(form) });
      const data = await res.json();
      if (data.success) { setStatus("success"); setForm({ name:"", email:"", phone:"", service:"", message:"" }); }
      else setStatus("error");
    } catch { setStatus("error"); }
  };
  return (
    <section id="kontakt" className="section-padding bg-[#0d0d10] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(201,150,59,0.07),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <SectionLabel>{t("label")}</SectionLabel>
            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold font-[var(--font-jakarta)] text-white tracking-tight leading-tight">{t("headline")}</h2>
            <p className="mt-4 text-zinc-400 text-lg leading-relaxed">{t("subline")}</p>
            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#18181b] border border-zinc-800">
                <div className="w-10 h-10 rounded-lg bg-[#C9963B]/10 flex items-center justify-center"><Mail className="w-5 h-5 text-[#C9963B]" /></div>
                <div><p className="text-xs text-zinc-500 font-medium">E-Mail</p><a href="mailto:info@skylinesites.de" className="text-sm text-white hover:text-[#C9963B] transition-colors font-semibold">info@skylinesites.de</a></div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#18181b] border border-zinc-800">
                <div className="w-10 h-10 rounded-lg bg-[#C9963B]/10 flex items-center justify-center"><Phone className="w-5 h-5 text-[#C9963B]" /></div>
                <div><p className="text-xs text-zinc-500 font-medium">Telefon</p><span className="text-sm text-white font-semibold">Auf Anfrage</span></div>
              </div>
            </div>
            <div className="mt-8 p-5 rounded-xl border border-[#C9963B]/20 bg-[#C9963B]/5">
              <div className="flex items-center gap-2 mb-1"><div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /><span className="text-xs text-emerald-400 font-semibold uppercase tracking-wide">Schnelle Antwortzeit</span></div>
              <p className="text-sm text-zinc-400">Wir antworten in der Regel innerhalb von <span className="text-white font-semibold">24 Stunden</span>.</p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}>
            <form onSubmit={handleSubmit} className="p-8 rounded-3xl bg-[#18181b] border border-zinc-800 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div><label className="block text-xs font-semibold text-zinc-400 mb-2 uppercase tracking-wide">{t("name")} *</label><input required type="text" value={form.name} onChange={(e) => setForm({...form, name:e.target.value})} placeholder="Max Mustermann" className="w-full px-4 py-3 rounded-xl bg-[#09090b] border border-zinc-700 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-[#C9963B]/60 focus:ring-1 focus:ring-[#C9963B]/30 transition-all" /></div>
                <div><label className="block text-xs font-semibold text-zinc-400 mb-2 uppercase tracking-wide">{t("email")} *</label><input required type="email" value={form.email} onChange={(e) => setForm({...form, email:e.target.value})} placeholder="max@beispiel.de" className="w-full px-4 py-3 rounded-xl bg-[#09090b] border border-zinc-700 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-[#C9963B]/60 focus:ring-1 focus:ring-[#C9963B]/30 transition-all" /></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div><label className="block text-xs font-semibold text-zinc-400 mb-2 uppercase tracking-wide">{t("phone")}</label><input type="tel" value={form.phone} onChange={(e) => setForm({...form, phone:e.target.value})} placeholder="+49 123 456789" className="w-full px-4 py-3 rounded-xl bg-[#09090b] border border-zinc-700 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-[#C9963B]/60 focus:ring-1 focus:ring-[#C9963B]/30 transition-all" /></div>
                <div><label className="block text-xs font-semibold text-zinc-400 mb-2 uppercase tracking-wide">{t("service")}</label><select value={form.service} onChange={(e) => setForm({...form, service:e.target.value})} className="w-full px-4 py-3 rounded-xl bg-[#09090b] border border-zinc-700 text-sm text-white focus:outline-none focus:border-[#C9963B]/60 focus:ring-1 focus:ring-[#C9963B]/30 transition-all"><option value="">Bitte wählen...</option>{serviceOptions.map((opt) => <option key={opt} value={opt} className="bg-[#09090b]">{opt}</option>)}</select></div>
              </div>
              <div><label className="block text-xs font-semibold text-zinc-400 mb-2 uppercase tracking-wide">{t("message")} *</label><textarea required rows={5} value={form.message} onChange={(e) => setForm({...form, message:e.target.value})} placeholder="Beschreiben Sie Ihr Projekt..." className="w-full px-4 py-3 rounded-xl bg-[#09090b] border border-zinc-700 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-[#C9963B]/60 focus:ring-1 focus:ring-[#C9963B]/30 transition-all resize-none" /></div>
              {status === "success" && <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm"><CheckCircle className="w-5 h-5 shrink-0" />{t("success")}</motion.div>}
              {status === "error" && <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm"><AlertCircle className="w-5 h-5 shrink-0" />{t("error")}</motion.div>}
              <button type="submit" disabled={status==="sending"} className="w-full flex items-center justify-center gap-2 py-4 rounded-full font-bold text-sm bg-gradient-to-r from-[#C9963B] to-[#E8B84B] text-black hover:opacity-90 hover:shadow-[0_0_30px_rgba(201,150,59,0.4)] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed font-[var(--font-jakarta)]">
                {status==="sending" ? <><svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>{t("sending")}</> : <><Send className="w-4 h-4" />{t("submit")}</>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
