import { useLanguage } from "../context/LanguageContext";
import { Link } from "wouter";
import { motion } from "framer-motion";

export function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-[calc(100vh-5rem)] flex flex-col">
      <section className="relative flex-1 flex flex-col justify-center bg-primary text-primary-foreground overflow-hidden py-24 min-h-[80vh]">
        {/* Large Watermark */}
        <div className="absolute -bottom-10 -right-10 text-[20vw] font-serif font-semibold text-background opacity-5 select-none pointer-events-none leading-none">
          ARA
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-semibold leading-tight mb-8">
              {t("Your real estate partner.", "Your real estate partner.")}
            </h1>
            <p className="font-sans text-lg md:text-xl text-background/80 max-w-2xl leading-relaxed mb-12 font-light">
              {t(
                "Investment, asset management, development and transactions. Independent advisory at senior level in Portugal.",
                "Investimento, gestão de activos, promoção imobiliária e transacções. Advisory experiente e independente em Portugal."
              )}
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 border border-background text-background font-sans text-xs tracking-[0.2em] uppercase transition-all hover:bg-background hover:text-primary"
            >
              {t("GET IN TOUCH", "CONTACTAR")}
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="font-serif text-2xl md:text-3xl text-foreground leading-snug mb-20">
              {t(
                "ARA Real Estate advises investors, owners and selected market players across the full real estate investment cycle.",
                "A ARA Real Estate aconselha investidores, proprietários e players do mercado em todas as fases do ciclo de investimento imobiliário."
              )}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 text-center">
              {[
                { en: "Advisory", pt: "Advisory" },
                { en: "Investment & Asset Management", pt: "Investimento e Gestão de Activos" },
                { en: "Development & Project Management", pt: "Promoção Imobiliária e Gestão de Projecto" },
                { en: "Transactions", pt: "Transacções" }
              ].map((service, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-px h-12 bg-border mb-6 hidden md:block"></div>
                  <h3 className="font-sans text-sm tracking-widest uppercase text-muted-foreground max-w-[200px]">
                    {t(service.en, service.pt)}
                  </h3>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background border-t border-border mt-auto">
        <div className="container mx-auto px-6 text-center">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-serif italic text-2xl text-muted-foreground"
          >
            {t(
              "More than a decade of institutional real estate.",
              "Mais de uma década em imobiliário institucional."
            )}
          </motion.p>
        </div>
      </section>
    </div>
  );
}
