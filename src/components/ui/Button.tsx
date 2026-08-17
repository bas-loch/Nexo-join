import type { AnchorHTMLAttributes } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "ghost";
};

export default function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-xs sm:text-[13px] tracking-widest2 uppercase font-body font-medium transition-all duration-500 ease-out";

  const styles =
    variant === "primary"
      ? "bg-gold-400 text-charcoal-950 hover:bg-gold-300 shadow-glow"
      : "border border-ivory/25 text-ivory hover:border-gold-400/70 hover:text-gold-200";

  return (
    <a className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </a>
  );
}
