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
      {/* Watermark */}
      <div
        className="absolute bottom-0 right-0 font-serif font-semibold select-none pointer-events-none leading-none"
        style={{ fontSize: "22vw", opacity: 0.045, color: "currentColor", transform: "translate(4%, 8%)" }}
      />

      {/* Hero body */}
      <div
        className="flex-1 flex flex-col justify-center relative z-10"
        style={{ padding: "3rem 2rem" }}
      >
        <div style={{ maxWidth: "52rem" }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <h1
              className="font-serif font-semibold text-primary-foreground"
              style={{ fontSize: "clamp(3rem, 7vw, 6rem)", lineHeight: 1.05, marginBottom: "2rem" }}
            >
              {t("Your real estate partner.", "Your real estate partner.")}
            </h1>

            <p
              className="font-sans text-primary-foreground"
              style={{ fontSize: "1.0625rem", lineHeight: 1.7, opacity: 0.65, maxWidth: "34rem", marginBottom: "2.5rem" }}
            >
              {t(
                "Investment, asset management, development and transactions. Independent advisory at senior level in Portugal.",
                "Investimento, gestão de activos, promoção imobiliária e transacções. Advisory experiente e independente em Portugal."
              )}
            </p>

            <button
              onClick={() => scrollTo("contact")}
              data-testid="hero-cta"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "1rem 2.25rem",
                border: "1px solid rgba(246,244,239,0.4)",
                color: "inherit",
                fontFamily: "var(--app-font-sans)",
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                background: "transparent",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.background = "rgba(246,244,239,1)";
                (e.currentTarget as HTMLButtonElement).style.color = "#0F2D33";
                (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(246,244,239,1)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                (e.currentTarget as HTMLButtonElement).style.color = "inherit";
                (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(246,244,239,0.4)";
              }}
            >
              {t("GET IN TOUCH", "CONTACTAR")}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
