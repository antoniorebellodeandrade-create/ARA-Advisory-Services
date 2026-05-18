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
    <section id="services" className="py-28 bg-background">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="font-sans text-xs tracking-[0.2em] text-muted-foreground uppercase block mb-5">
            {t("SERVICES", "SERVIÇOS")}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground font-semibold leading-tight mb-6 max-w-3xl">
            {t(
              "Senior advisory across the full real estate investment cycle.",
              "Advisory em todas as fases do ciclo de investimento imobiliário."
            )}
          </h2>
          <p className="font-sans text-base text-muted-foreground max-w-xl">
            {t(
              "Four areas of practice, addressed either independently or in an integrated manner.",
              "Quatro áreas de actuação, trabalhadas de forma autónoma ou articulada."
            )}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="border border-border bg-background p-8 hover:border-primary/30 transition-colors"
              data-testid={`service-card-${idx}`}
            >
              <h3 className="font-sans text-sm font-medium tracking-wide text-foreground uppercase mb-4">
                {t(service.titleEn, service.titlePt)}
              </h3>
              <p className="font-sans text-sm text-foreground/70 leading-relaxed">
                {t(service.descEn, service.descPt)}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border-t border-border pt-10 flex flex-col md:flex-row md:items-center justify-between gap-6"
        >
          <p className="font-sans text-sm text-muted-foreground max-w-2xl leading-relaxed">
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
            className="font-sans text-xs tracking-widest text-primary uppercase hover:opacity-60 transition-opacity whitespace-nowrap"
          >
            {t("Contact →", "Contactar →")}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
