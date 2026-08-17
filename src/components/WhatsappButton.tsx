import { whatsappUrl } from "@/data/site";

type Props = {
  label: string;
  message: string;
  variant?: "solid" | "outline";
  className?: string;
};

export default function WhatsappButton({
  label,
  message,
  variant = "outline",
  className = "",
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold uppercase tracking-wide transition-colors";
  const styles =
    variant === "solid"
      ? "bg-olive text-cream hover:bg-olive-dark"
      : "border border-ink text-ink hover:bg-ink hover:text-cream";

  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      {label}
    </a>
  );
}
