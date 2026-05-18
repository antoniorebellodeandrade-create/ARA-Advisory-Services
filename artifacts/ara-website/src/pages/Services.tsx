import { useLanguage } from "../context/LanguageContext";
import { Link } from "wouter";
import { motion } from "framer-motion";

export function Services() {
  const { t } = useLanguage();

  const services = [
    {
      titleEn: "Advisory",
      titlePt: "Advisory",
      descEn: "Strategic and investment advisory for owners and investors. Strategy definition, opportunity analysis, investment structuring and decision support.",
      descPt: "Consultoria estratégica e de investimento para proprietários e investidores. Definição de estratégia, análise de oportunidades, estruturação de investimentos e apoio à tomada de decisão."
    },
    {
      titleEn: "Investment & Asset Management",
      titlePt: "Investment & Asset Management",
      descEn: "Business plan definition and execution. Operational asset management. Value-creation initiatives, financial control and reporting.",
      descPt: "Definição e execução de business plans. Gestão operacional de imóveis. Iniciativas de criação de valor, controlo financeiro e reporting."
    },
    {
      titleEn: "Development & Project Management",
      titlePt: "Development & Project Management",
      descEn: "Development strategy and feasibility. Development of real estate projects from opportunity identification through to delivery or sales. Project management and monitoring.",
      descPt: "Estratégia e viabilidade de projectos de promoção imobiliária. Desenvolvimento de projectos imobiliários desde a identificação da oportunidade até à entrega ou comercialização. Gestão e acompanhamento de projecto."
    },
    {
      titleEn: "Transactions",
      titlePt: "Transactions",
      descEn: "Support on acquisitions and disposals of real estate assets — from origination and due diligence through negotiation and closing.",
      descPt: "Apoio em aquisições e vendas de activos imobiliários — desde a originação e due diligence à negociação e fecho."
    }
  ];

  return (
    <div className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <span className="font-sans text-xs tracking-[0.2em] text-muted-foreground uppercase block mb-6">
            {t("SERVICES", "SERVIÇOS")}
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary font-semibold leading-tight mb-8">
            {t(
              "Senior advisory across the full real estate investment cycle.",
              "Advisory em todas as fases do ciclo de investimento imobiliário."
            )}
          </h1>
          <p className="font-sans text-lg text-foreground/80 max-w-3xl">
            {t(
              "Four areas of practice, addressed either independently or in an integrated manner.",
              "Quatro áreas de actuação, trabalhadas de forma autónoma ou articulada."
            )}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-x-20 md:gap-y-24 mb-24">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative"
            >
              <div className="w-8 h-px bg-primary mb-6"></div>
              <h3 className="font-serif text-2xl font-semibold text-primary mb-4">
                {t(service.titleEn, service.titlePt)}
              </h3>
              <p className="font-sans text-muted-foreground leading-relaxed">
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
          className="border-t border-border pt-16 flex flex-col md:flex-row md:items-center justify-between gap-8"
        >
          <p className="font-sans text-sm text-muted-foreground max-w-2xl leading-relaxed">
            {t(
              "Asset classes worked across the career include residential, office, hospitality, logistics, retail and others.",
              "Classes de activos trabalhadas ao longo do percurso incluem residencial, escritórios, hotelaria, logística, retalho, entre outros."
            )}
          </p>
          <Link 
            href="/contact"
            className="font-sans text-xs tracking-widest text-primary uppercase hover:opacity-70 transition-opacity whitespace-nowrap inline-flex items-center"
          >
            {t("Contact →", "Contactar →")}
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
