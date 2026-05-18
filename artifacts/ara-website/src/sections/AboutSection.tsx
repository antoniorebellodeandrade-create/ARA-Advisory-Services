import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="bg-background" style={{ borderTop: "1px solid var(--color-border)", padding: "6rem 2rem" }}>
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
            {t("About", "Sobre")}
          </span>
          <h2
            className="font-serif font-semibold"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", lineHeight: 1.2, color: "var(--color-foreground)", maxWidth: "32rem" }}
          >
            {t(
              "Senior thinking. Institutional discipline. Hands-on delivery.",
              "Pensamento crítico. Disciplina institucional. Execução próxima."
            )}
          </h2>
        </motion.div>

        {/* Institutional bio */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "3.5rem" }}
        >
          {[
            {
              en: "António Rebello de Andrade is a real estate professional with more than ten years of institutional experience, spanning investment, structuring, development and management of real estate projects — from origination to execution and value creation.",
              pt: "Profissional com mais de 10 anos de experiência no sector imobiliário em contexto institucional, com actuação transversal no investimento, estruturação, desenvolvimento e gestão de projectos imobiliários, desde a identificação de oportunidades até à sua execução e valorização.",
            },
            {
              en: "He combines strategic and analytical depth with operational experience coordinating multidisciplinary teams, managing stakeholders and working alongside investors, developers, public authorities, technical advisors and financial partners.",
              pt: "Combina capacidade estratégica e analítica com experiência operacional na coordenação de equipas multidisciplinares, gestão de stakeholders e articulação com investidores, promotores, entidades públicas, parceiros técnicos e financeiros.",
            },
            {
              en: "He acts in an integrated way across the full investment cycle — from origination and due diligence through execution and disposal — with a focus on maximising risk-adjusted return and sustained value creation.",
              pt: "Actua de forma integrada ao longo de todo o ciclo de investimento — desde a originação e due diligence até à execução e desinvestimento — com foco na maximização de retorno ajustado ao risco e criação sustentada de valor.",
            },
          ].map((p, i) => (
            <p
              key={i}
              className="font-sans"
              style={{ fontSize: "0.9375rem", color: "var(--color-foreground)", opacity: 0.72, lineHeight: 1.8, marginBottom: i < 2 ? "1.25rem" : 0 }}
            >
              {t(p.en, p.pt)}
            </p>
          ))}
        </motion.div>

        {/* Founder note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ borderLeft: "2px solid var(--color-primary)", paddingLeft: "1.75rem" }}
        >
          {[
            {
              en: "I founded ARA Real Estate after more than a decade in institutional real estate, working across investment, asset management and development at Quest Capital, Norfin, Fidelidade Property Europe and Altamira Asset Management.",
              pt: "Fundei a ARA Real Estate depois de mais de uma década no imobiliário institucional, com experiência em investimento, gestão de activos e promoção imobiliária na Quest Capital, Norfin, Fidelidade Property Europe e Altamira Asset Management.",
            },
            {
              en: "The decision was built around a specific need: Owners, investors and family offices increasingly look for senior judgement, transparency and direct involvement from the person they are dealing with — not layered teams or generic advice. ARA Real Estate exists to provide exactly that.",
              pt: "A ARA Real Estate nasceu de uma necessidade concreta: proprietários, investidores e family offices procuram cada vez mais critério, transparência e envolvimento directo de quem os aconselha — não pretendem consultoria genérica nem estruturas em camadas. A ARA Real Estate existe exactamente para oferecer isso.",
            },
          ].map((p, i) => (
            <p
              key={i}
              className="font-serif"
              style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)", color: "var(--color-foreground)", lineHeight: 1.7, marginBottom: i === 0 ? "1.25rem" : "2rem" }}
            >
              {t(p.en, p.pt)}
            </p>
          ))}
          <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: "1.25rem" }}>
            <span
              className="font-sans"
              style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--color-muted-foreground)" }}
            >
              António Rebello de Andrade · Founder, ARA Real Estate
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
