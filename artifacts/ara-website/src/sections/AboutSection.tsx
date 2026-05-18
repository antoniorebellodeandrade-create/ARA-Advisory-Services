import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-28 bg-primary/[0.03] border-t border-border">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="font-sans text-xs tracking-[0.2em] text-muted-foreground uppercase block mb-5">
            {t("ABOUT", "SOBRE")}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground font-semibold leading-tight max-w-3xl">
            {t(
              "Senior thinking. Institutional discipline. Hands-on delivery.",
              "Pensamento crítico. Disciplina institucional. Execução próxima."
            )}
          </h2>
        </motion.div>

        <div className="space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <p className="font-sans text-base text-foreground/80 leading-relaxed">
              {t(
                "António Rebello de Andrade is a real estate professional with more than ten years of institutional experience, spanning investment, structuring, development and management of real estate projects — from origination to execution and value creation.",
                "Profissional com mais de 10 anos de experiência no sector imobiliário em contexto institucional, com actuação transversal no investimento, estruturação, desenvolvimento e gestão de projectos imobiliários, desde a identificação de oportunidades até à sua execução e valorização."
              )}
            </p>
            <p className="font-sans text-base text-foreground/80 leading-relaxed">
              {t(
                "He combines strategic and analytical depth with operational experience coordinating multidisciplinary teams, managing stakeholders and working alongside investors, developers, public authorities, technical advisors and financial partners.",
                "Combina capacidade estratégica e analítica com experiência operacional na coordenação de equipas multidisciplinares, gestão de stakeholders e articulação com investidores, promotores, entidades públicas, parceiros técnicos e financeiros."
              )}
            </p>
            <p className="font-sans text-base text-foreground/80 leading-relaxed">
              {t(
                "He acts in an integrated way across the full investment cycle — from origination and due diligence through execution and disposal — with a focus on maximising risk-adjusted return and sustained value creation.",
                "Actua de forma integrada ao longo de todo o ciclo de investimento — desde a originação e due diligence até à execução e desinvestimento — com foco na maximização de retorno ajustado ao risco e criação sustentada de valor."
              )}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="border-l-2 border-primary pl-8 py-2 space-y-5"
          >
            <p className="font-serif text-xl md:text-2xl text-foreground leading-relaxed">
              {t(
                "I founded ARA Real Estate after more than a decade in institutional real estate, working across investment, asset management and development at Quest Capital, Norfin, Fidelidade Property Europe and Altamira Asset Management.",
                "Fundei a ARA Real Estate depois de mais de uma década no imobiliário institucional, com experiência em investimento, gestão de activos e promoção imobiliária na Quest Capital, Norfin, Fidelidade Property Europe e Altamira Asset Management."
              )}
            </p>
            <p className="font-serif text-xl md:text-2xl text-foreground leading-relaxed">
              {t(
                "The decision was built around a specific need: Owners, investors and family offices increasingly look for senior judgement, transparency and direct involvement from the person they are dealing with — not layered teams or generic advice. ARA Real Estate exists to provide exactly that.",
                "A ARA Real Estate nasceu de uma necessidade concreta: proprietários, investidores e family offices procuram cada vez mais critério, transparência e envolvimento directo de quem os aconselha — não pretendem consultoria genérica nem estruturas em camadas. A ARA Real Estate existe exactamente para oferecer isso."
              )}
            </p>
            <div className="pt-6 border-t border-border">
              <span className="font-sans text-xs text-muted-foreground uppercase tracking-widest">
                António Rebello de Andrade · Founder, ARA Real Estate
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
