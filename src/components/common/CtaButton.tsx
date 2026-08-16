"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { motion } from "motion/react";
import { useRenderTier } from "@/lib/useRenderTier";
import { cn } from "@/lib/cn";

const MotionLink = motion.create(Link);

const variantClass = {
  solid: "bg-gold-500 text-navy-950 hover:bg-gold-400",
  dark: "bg-navy-950 text-offwhite hover:bg-navy-900",
  outline: "border border-offwhite/30 text-offwhite hover:bg-offwhite/10",
} as const;

/**
 * Micro-interaction pilotée par `motion` (voir CLAUDE.md : jamais de
 * transition CSS ad hoc en dehors du niveau MINIMAL, où le repli CSS simple
 * reste actif).
 */
export function CtaButton({
  href,
  children,
  variant = "solid",
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variantClass;
  className?: string;
}) {
  const tier = useRenderTier();
  const base = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold",
    variantClass[variant],
    className
  );

  if (tier === "minimal") {
    return (
      <Link href={href} className={cn(base, "transition-colors duration-200")}>
        {children}
      </Link>
    );
  }

  return (
    <MotionLink
      href={href}
      className={base}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionLink>
  );
}
