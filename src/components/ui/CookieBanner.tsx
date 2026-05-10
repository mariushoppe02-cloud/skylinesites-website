"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Cookie } from "lucide-react";

const STORAGE_KEY = "cookie_consent";

export default function CookieBanner() {
  const t = useTranslations("cookie");
  const params = useParams();
  const locale = (params?.locale as string) ?? "de";
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  const handleChoice = (value: "accepted" | "declined") => {
    localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 28 }}
          className="fixed bottom-0 inset-x-0 z-[60] px-4 pb-4 sm:pb-6 pointer-events-none"
        >
          <div className="max-w-4xl mx-auto pointer-events-auto">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 px-5 py-4 rounded-2xl bg-[#0d0d10]/95 backdrop-blur-xl border border-zinc-800 shadow-[0_-4px_40px_rgba(0,0,0,0.6)]">

              {/* Icon + Text */}
              <div className="flex items-start gap-3 flex-1 min-w-0">
                <div className="shrink-0 mt-0.5 w-8 h-8 rounded-full bg-[#C9963B]/15 flex items-center justify-center">
                  <Cookie className="w-4 h-4 text-[#C9963B]" />
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {t("text")}{" "}
                  <Link
                    href={`/${locale}/datenschutz`}
                    className="text-[#C9963B] hover:underline whitespace-nowrap"
                  >
                    {t("link")}
                  </Link>
                </p>
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
                <button
                  onClick={() => handleChoice("declined")}
                  className="flex-1 sm:flex-none px-4 py-2 rounded-full text-sm font-semibold border border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-white transition-colors duration-200 font-[var(--font-jakarta)] whitespace-nowrap"
                >
                  {t("decline")}
                </button>
                <button
                  onClick={() => handleChoice("accepted")}
                  className="flex-1 sm:flex-none px-5 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-[#C9963B] to-[#E8B84B] text-black hover:opacity-90 transition-opacity duration-200 font-[var(--font-jakarta)] whitespace-nowrap"
                >
                  {t("accept")}
                </button>
              </div>

            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
