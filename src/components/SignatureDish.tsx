import Reveal from "./ui/Reveal";

export default function SignatureDish() {
  return (
    <section className="relative" aria-label="Plat signature">
      <div className="hairline absolute top-0 inset-x-0" aria-hidden="true" />

      <div className="relative h-[70svh] sm:h-[85svh] w-full overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/gallery/plat-signature.jpg"
          alt="Plateau de fruits de mer signature de Caicco Romano"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/10 to-charcoal-950/40"
        />

        <div className="absolute inset-x-0 bottom-12 sm:bottom-16 flex justify-center px-6">
          <Reveal>
            <p className="font-display text-2xl sm:text-3xl md:text-4xl italic text-ivory/90 text-center text-balance">
              De la mer à l&apos;assiette, sans détour.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="hairline absolute bottom-0 inset-x-0" aria-hidden="true" />
    </section>
  );
}
