import { cn } from "@/lib/utils";
export default function SectionLabel({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C9963B]/30 bg-[#C9963B]/10 text-[#C9963B] text-xs font-semibold uppercase tracking-widest font-[var(--font-jakarta)]", className)}>
      <span className="w-1.5 h-1.5 rounded-full bg-[#C9963B] animate-pulse" />
      {children}
    </div>
  );
}
