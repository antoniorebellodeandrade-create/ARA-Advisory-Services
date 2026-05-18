import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative flex flex-col justify-center bg-primary text-primary-foreground overflow-hidden py-32 min-h-[88vh]">
      <div className="absolute bottom-0 right-0 text-[22vw] font-serif font-semibold text-primary-foreground/[0.04] select-none pointer-events-none leading-none translate-y-4 translate-x-4">
        ARA
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-semibold leading-tight mb-8 text-primary-foreground">
            {t("Your real estate partner.", "Your real estate partner.")}
          </h1>
          <p className="font-sans text-lg md:text-xl text-primary-foreground/70 max-w-2xl leading-relaxed mb-14">
            {t(
              "Investment, asset management, development and transactions. Independent advisory at senior level in Portugal.",
              "Investimento, gestão de activos, promoção imobiliária e transacções. Advisory experiente e independente em Portugal."
            )}
          </p>
          <button
            onClick={() => scrollTo("contact")}
            data-testid="hero-cta"
            className="inline-flex items-center justify-center px-8 py-4 border border-primary-foreground/50 text-primary-foreground font-sans text-xs tracking-[0.2em] uppercase transition-all hover:border-primary-foreground hover:bg-primary-foreground hover:text-primary"
          >
            {t("GET IN TOUCH", "CONTACTAR")}
          </button>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 mt-20 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="border-t border-primary-foreground/10 pt-12"
        >
          <p className="font-sans text-sm text-primary-foreground/60 mb-8 max-w-2xl leading-relaxed">
            {t(
              "ARA Real Estate advises investors, owners and selected market players across the full real estate investment cycle.",
              "ARA Real Estate aconselha investidores, proprietários e players do mercado em todas as fases do ciclo de investimento imobiliário."
            )}
          </p>
          <p className="font-sans text-xs tracking-widest uppercase text-primary-foreground/35">
            {[
              { en: "Advisory", pt: "Advisory" },
              { en: "Investment & Asset Management", pt: "Investimento e Gestão de Activos" },
              { en: "Development & Project Management", pt: "Promoção Imobiliária e Gestão de Projecto" },
              { en: "Transactions", pt: "Transacções" },
            ].map((s, i, arr) => (
              <span key={i}>
                {t(s.en, s.pt)}
                {i < arr.length - 1 && <span className="mx-4 text-primary-foreground/20">·</span>}
              </span>
            ))}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
