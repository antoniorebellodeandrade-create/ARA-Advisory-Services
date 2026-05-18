import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative bg-primary text-primary-foreground flex flex-col"
      style={{ minHeight: "calc(100vh - 80px)" }}
    >
      {/* ARA watermark */}
      <div
        className="absolute bottom-0 right-0 font-serif font-semibold select-none pointer-events-none leading-none text-primary-foreground"
        style={{ fontSize: "18vw", opacity: 0.04, transform: "translate(2%, 4%)" }}
      >
        ARA
      </div>

      {/* Main content — vertically centered, takes remaining space */}
      <div className="flex-1 flex items-center px-6 py-16">
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] mb-8 text-primary-foreground">
              {t("Your real estate partner.", "Your real estate partner.")}
            </h1>
            <p className="font-sans text-base md:text-lg text-primary-foreground/70 max-w-xl leading-relaxed mb-10">
              {t(
                "Investment, asset management, development and transactions. Independent advisory at senior level in Portugal.",
                "Investimento, gestão de activos, promoção imobiliária e transacções. Advisory experiente e independente em Portugal."
              )}
            </p>
            <button
              onClick={() => scrollTo("contact")}
              data-testid="hero-cta"
              className="inline-flex items-center justify-center px-8 py-4 border border-primary-foreground/40 text-primary-foreground font-sans text-xs tracking-[0.2em] uppercase transition-all hover:border-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              {t("GET IN TOUCH", "CONTACTAR")}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Bottom strip — anchored at bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="border-t border-primary-foreground/10 px-6 py-6 relative z-10"
      >
        <div className="container mx-auto max-w-4xl">
          <p className="font-sans text-sm text-primary-foreground/50 mb-4 leading-relaxed max-w-2xl">
            {t(
              "ARA Real Estate advises investors, owners and selected market players across the full real estate investment cycle.",
              "ARA Real Estate aconselha investidores, proprietários e players do mercado em todas as fases do ciclo de investimento imobiliário."
            )}
          </p>
          <div className="flex flex-wrap items-center gap-y-1" style={{ columnGap: "1.5rem" }}>
            {[
              { en: "Advisory", pt: "Advisory" },
              { en: "Investment & Asset Management", pt: "Investimento e Gestão de Activos" },
              { en: "Development & Project Management", pt: "Promoção Imobiliária e Gestão de Projecto" },
              { en: "Transactions", pt: "Transacções" },
            ].map((s, i, arr) => (
              <span key={i} className="flex items-center" style={{ gap: "1.5rem" }}>
                <button
                  onClick={() => scrollTo("services")}
                  className="font-sans text-[10px] tracking-widest uppercase text-primary-foreground/30 hover:text-primary-foreground/60 transition-colors"
                >
                  {t(s.en, s.pt)}
                </button>
                {i < arr.length - 1 && (
                  <span className="text-primary-foreground/15 text-xs">·</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
