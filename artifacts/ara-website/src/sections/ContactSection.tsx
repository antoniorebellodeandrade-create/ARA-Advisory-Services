import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";
import { useState } from "react";

export function ContactSection() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 bg-background border-t border-border">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-sans text-xs tracking-[0.2em] text-muted-foreground uppercase block mb-5">
              {t("CONTACT", "CONTACTO")}
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground font-semibold leading-tight mb-6">
              {t("Get in touch", "Entre em contacto")}
            </h2>
            <p className="font-sans text-base text-foreground/70 mb-14 max-w-sm">
              {t(
                "For an introductory conversation, please reach out directly.",
                "Para uma conversa inicial, pode escrever directamente."
              )}
            </p>

            <div className="space-y-8 font-sans text-sm">
              <div>
                <span className="text-muted-foreground uppercase tracking-widest block mb-1.5 text-xs">Email</span>
                <a
                  href="mailto:antonio@ararealestate.pt"
                  data-testid="contact-email"
                  className="text-foreground hover:text-primary transition-colors text-base"
                >
                  antonio@ararealestate.pt
                </a>
              </div>
              <div>
                <span className="text-muted-foreground uppercase tracking-widest block mb-1.5 text-xs">
                  {t("Mobile", "Telemóvel")}
                </span>
                <a
                  href="tel:+351916737791"
                  data-testid="contact-phone"
                  className="text-foreground hover:text-primary transition-colors text-base"
                >
                  +351 916 737 791
                </a>
              </div>
              <div>
                <span className="text-muted-foreground uppercase tracking-widest block mb-1.5 text-xs">LinkedIn</span>
                <a
                  href="https://www.linkedin.com/in/ant%C3%B3nio-rebello-de-andrade-05a00741/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="contact-linkedin"
                  className="text-foreground hover:text-primary transition-colors text-base flex items-center gap-2"
                >
                  António Rebello de Andrade <span className="text-primary">→</span>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="border border-border bg-background p-8 md:p-12"
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <h3 className="font-serif text-3xl text-primary mb-4">
                  {t("Thank you.", "Obrigado.")}
                </h3>
                <p className="font-sans text-sm text-muted-foreground">
                  {t(
                    "Your message has been received. I will be in touch shortly.",
                    "A sua mensagem foi recebida. Entrarei em contacto brevemente."
                  )}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="font-sans text-xs tracking-widest text-muted-foreground uppercase block mb-2">
                    {t("Name", "Nome")} *
                  </label>
                  <input
                    type="text"
                    required
                    data-testid="input-name"
                    className="w-full bg-transparent border-b border-border py-3 px-0 font-sans text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="font-sans text-xs tracking-widest text-muted-foreground uppercase block mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    data-testid="input-email"
                    className="w-full bg-transparent border-b border-border py-3 px-0 font-sans text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-sans text-xs tracking-widest text-muted-foreground uppercase block mb-2">
                      {t("Phone", "Telefone")} *
                    </label>
                    <input
                      type="tel"
                      required
                      data-testid="input-phone"
                      className="w-full bg-transparent border-b border-border py-3 px-0 font-sans text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-sans text-xs tracking-widest text-muted-foreground uppercase block mb-2">
                      {t("Company (optional)", "Empresa (opcional)")}
                    </label>
                    <input
                      type="text"
                      data-testid="input-company"
                      className="w-full bg-transparent border-b border-border py-3 px-0 font-sans text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-sans text-xs tracking-widest text-muted-foreground uppercase block mb-2">
                    {t("How can I help?", "Como posso ajudar?")} *
                  </label>
                  <textarea
                    required
                    rows={4}
                    data-testid="input-message"
                    className="w-full bg-transparent border-b border-border py-3 px-0 font-sans text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>
                <div className="pt-4">
                  <button
                    type="submit"
                    data-testid="button-submit"
                    className="w-full bg-primary text-primary-foreground py-4 font-sans text-xs tracking-[0.2em] uppercase hover:bg-primary/90 transition-colors"
                  >
                    {t("SEND MESSAGE", "ENVIAR MENSAGEM")}
                  </button>
                </div>
                <p className="text-center font-sans text-xs text-muted-foreground">
                  {t("All enquiries treated as confidential.", "Todos os contactos tratados de forma confidencial.")}
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-20">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-serif italic text-xl text-muted-foreground text-center py-8 border-t border-border"
        >
          {t(
            "More than a decade of institutional real estate.",
            "Mais de uma década em imobiliário institucional."
          )}
        </motion.p>
      </div>
    </section>
  );
}
