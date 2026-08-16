import { BadgeCheck } from "lucide-react";

export function BestRateBanner({ text }: { text: string }) {
  return (
    <div className="bg-navy-950 text-offwhite text-center text-xs sm:text-sm py-2 px-4">
      <p className="flex items-center justify-center gap-2">
        <BadgeCheck className="h-4 w-4 text-gold-400 shrink-0" aria-hidden />
        <span>{text}</span>
      </p>
    </div>
  );
}
