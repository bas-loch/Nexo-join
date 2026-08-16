import { Sparkles } from "lucide-react";
import type { Cure } from "@/i18n/dictionaries/types";

export function CureCard({ cure }: { cure: Cure }) {
  return (
    <div className="rounded-3xl border border-navy-900/10 bg-offwhite p-6">
      <Sparkles className="h-5 w-5 text-gold-500" aria-hidden />
      <h3 className="mt-3 font-serif-display text-lg text-navy-950">{cure.name}</h3>
      <p className="mt-2 text-sm text-navy-900/70">{cure.description}</p>
    </div>
  );
}
