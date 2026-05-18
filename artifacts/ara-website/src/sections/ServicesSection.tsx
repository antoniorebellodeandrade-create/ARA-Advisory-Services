import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";

const services = [
  {
    titleEn: "Advisory",
    titlePt: "Advisory",
    descEn: "Strategic and investment advisory for owners and investors. Strategy definition, opportunity analysis, investment structuring and decision support.",
    descPt: "Consultoria estratégica e de investimento para proprietários e investidores. Definição de estratégia, análise de oportunidades, estruturação de investimentos e apoio à tomada de decisão.",
  },
  {
    titleEn: "Investment & Asset Management",
    titlePt: "Investimento e Gestão de Activos",
    descEn: "Business plan definition and execution. Operational asset management. Value-creation initiatives, financial control and reporting.",
    descPt: "Definição e execução de business plans. Gestão operacional de imóveis. Iniciativas de criação de valor, controlo financeiro e reporting.",
  },
  {
    titleEn: "Development & Project Management",
    titlePt: "Promoção Imobiliária e Gestão de Projecto",
    descEn: "Development strategy and feasibility. Development of real estate projects from opportunity identification through to delivery or sales. Project management and monitoring.",
    descPt: "Estratégia e viabilidade de projectos de promoção imobiliária. Desenvolvimento de projectos imobiliários desde a identificação da oportunidade até à entrega ou comercialização. Gestão e acompanhamento de projecto.",
  },
  {
    titleEn: "Transactions",
    titlePt: "Transacções",
    descEn: "Support on acquisitions and disposals of real estate assets — from origination and due diligence through negotiation and closing.",
    descPt: "Apoio em aquisições e vendas de activos imobiliários — desde a originação e due diligence à negociação e fecho.",
  },
];

export function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section id="services" className="bg-background" style={{ padding: "6rem 2rem" }}>
      <div style={{ maxWidth: "52rem", margin: "0 auto" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "4rem" }}
        >
          <span
            className="font-sans font-medium"
            style={{
              fontSize: "0.875rem",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "var(--color-primary)",
              display: "block",
              marginBottom: "1.5rem",
            }}
          >
            {t("Services", "Serviços")}
          </span>
          <h2
            className="font-serif font-semibold"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", lineHeight: 1.2, color: "var(--color-foreground)", marginBottom: "1.25rem", maxWidth: "36rem" }}
          >
            {t(
              "Senior advisory across the full real estate investment cycle.",
              "Advisory em todas as fases do ciclo de investimento imobiliário."
            )}
          </h2>
          <p
            className="font-sans"
            style={{ fontSize: "0.9375rem", color: "var(--color-muted-foreground)", lineHeight: 1.65, maxWidth: "30rem" }}
          >
            {t(
              "Four areas of practice, addressed either independently or in an integrated manner.",
              "Quatro áreas de actuação, trabalhadas de forma autónoma ou articulada."
            )}
          </p>
        </motion.div>

        {/* Service cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 22rem), 1fr))",
            gap: "1rem",
            marginBottom: "4rem",
          }}
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
              data-testid={`service-card-${idx}`}
              style={{
                border: "2px solid #0F2D33",
                padding: "2rem 1.75rem 2.25rem",
                background: "var(--color-background)",
              }}
            >
              <h3
                className="font-sans font-medium"
                style={{
                  fontSize: "0.75rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--color-foreground)",
                  marginBottom: "1.25rem",
                  textAlign: "center",
                }}
              >
                {t(service.titleEn, service.titlePt)}
              </h3>
              <p
                className="font-sans"
                style={{ fontSize: "0.875rem", color: "var(--color-foreground)", opacity: 0.65, lineHeight: 1.75 }}
              >
                {t(service.descEn, service.descPt)}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footer note + CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            borderTop: "1px solid var(--color-border)",
            paddingTop: "2.5rem",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1.5rem",
          }}
        >
          <p
            className="font-sans"
            style={{ fontSize: "0.8125rem", color: "var(--color-muted-foreground)", lineHeight: 1.7, maxWidth: "34rem" }}
          >
            {t(
              "Asset classes worked across the career include residential, office, hospitality, logistics, retail and others.",
              "Classes de activos trabalhadas ao longo do percurso incluem residencial, escritórios, hotelaria, logística, retalho, entre outros."
            )}
          </p>
          <button
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "0.75rem 1.75rem",
              border: "1.5px solid var(--color-primary)",
              background: "transparent",
              color: "var(--color-primary)",
              fontFamily: "var(--app-font-sans)",
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              cursor: "pointer",
              whiteSpace: "nowrap",
              transition: "all 0.2s",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.background = "var(--color-primary)";
              (e.currentTarget as HTMLButtonElement).style.color = "var(--color-primary-foreground)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.background = "transparent";
              (e.currentTarget as HTMLButtonElement).style.color = "var(--color-primary)";
            }}
          >
            {t("Contact →", "Contactar →")}
          </button>
        </motion.div>

      </div>
    </section>
  );
}
