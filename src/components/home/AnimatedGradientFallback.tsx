/**
 * Repli niveau RÉDUIT (768-1024px, voir CLAUDE.md) : dégradé CSS animé à la
 * place du shader WebGL, mêmes tons que la scène complète.
 */
export function AnimatedGradientFallback() {
  return <div className="absolute inset-0 hero-gradient-animated opacity-80" aria-hidden />;
}
