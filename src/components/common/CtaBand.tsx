import type { Locale } from "@/i18n/locales";
import { CtaButton } from "@/components/common/CtaButton";

export function CtaBand({
  locale,
  title,
  text,
  cta,
}: {
  locale: Locale;
  title: string;
  text: string;
  cta: string;
}) {
  return (
    <section className="bg-navy-950 text-offwhite">
      <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20 text-center">
        <h2 className="font-serif-display text-2xl sm:text-3xl">{title}</h2>
        <p className="mt-3 text-offwhite/75 max-w-xl mx-auto">{text}</p>
        <CtaButton
          href={`/${locale}/contact#reservation`}
          variant="solid"
          className="mt-8 px-7 py-3.5"
        >
          {cta}
        </CtaButton>
      </div>
    </section>
  );
}
