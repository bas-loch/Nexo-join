import { site } from "@/data/site";

type Props = {
  label: string;
  variant?: "solid" | "outline";
  className?: string;
};

export default function CallButton({
  label,
  variant = "solid",
  className = "",
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold uppercase tracking-wide transition-colors";
  const styles =
    variant === "solid"
      ? "bg-terracotta text-cream hover:bg-terracotta-dark"
      : "border border-cream text-cream hover:bg-cream hover:text-ink";

  return (
    <a href={site.phoneHref} className={`${base} ${styles} ${className}`}>
      {label}
    </a>
  );
}
