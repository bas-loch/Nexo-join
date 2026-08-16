import { cn } from "@/lib/cn";

export function SectionHeading({
  kicker,
  title,
  align = "left",
  light = false,
}: {
  kicker?: string;
  title: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      {kicker && (
        <span
          className={cn(
            "text-xs sm:text-sm tracking-[0.3em] uppercase",
            light ? "text-gold-400" : "text-gold-600"
          )}
        >
          {kicker}
        </span>
      )}
      <h2
        className={cn(
          "mt-3 font-serif-display text-2xl sm:text-3xl tracking-tight",
          light ? "text-offwhite" : "text-navy-950"
        )}
      >
        {title}
      </h2>
    </div>
  );
}
