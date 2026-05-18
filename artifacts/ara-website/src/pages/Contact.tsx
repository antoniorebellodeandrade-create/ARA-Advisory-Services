import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";
import { useState } from "react";

export function Contact() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app this would post data, but here it's static/mailto driven as requested
  };

  return (
    <div className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-sans text-xs tracking-[0.2em] text-muted-foreground uppercase block mb-6">
              {t("CONTACT", "CONTACTO")}
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary font-semibold leading-tight mb-8">
              {t("Get in touch", "Entre em contacto")}
            </h1>
            <p className="font-sans text-lg text-foreground/80 mb-16 max-w-md">
              {t(
                "For an introductory conversation, please reach out directly.",
                "Para uma conversa inicial, pode escrever directamente."
              )}
            </p>

            <div className="space-y-8 font-sans text-sm">
              <div>
                <span className="text-muted-foreground uppercase tracking-widest block mb-1 text-xs">Email</span>
                <a href="mailto:antonio@ararealestate.pt" className="text-foreground hover:text-primary transition-colors text-lg">
                  antonio@ararealestate.pt
                </a>
              </div>
              <div>
                <span className="text-muted-foreground uppercase tracking-widest block mb-1 text-xs">
                  {t("Mobile", "Telemóvel")}
                </span>
                <a href="tel:+351916737791" className="text-foreground hover:text-primary transition-colors text-lg">
                  +351 916 737 791
                </a>
              </div>
              <div>
                <span className="text-muted-foreground uppercase tracking-widest block mb-1 text-xs">LinkedIn</span>
                <a 
                  href="https://www.linkedin.com/in/ant%C3%B3nio-rebello-de-andrade-05a00741/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors text-lg flex items-center gap-2"
                >
                  António Rebello de Andrade <span className="text-primary">→</span>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 md:p-12 border border-border"
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <h3 className="font-serif text-3xl text-primary mb-4">
                  {t("Thank you.", "Obrigado.")}
                </h3>
                <p className="font-sans text-muted-foreground">
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
                    className="w-full bg-transparent border-b border-border py-3 px-0 font-sans text-foreground focus:outline-none focus:border-primary transition-colors rounded-none" 
                  />
                </div>
                <div>
                  <label className="font-sans text-xs tracking-widest text-muted-foreground uppercase block mb-2">
                    Email *
                  </label>
                  <input 
                    type="email" 
                    required 
                    className="w-full bg-transparent border-b border-border py-3 px-0 font-sans text-foreground focus:outline-none focus:border-primary transition-colors rounded-none" 
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
                      className="w-full bg-transparent border-b border-border py-3 px-0 font-sans text-foreground focus:outline-none focus:border-primary transition-colors rounded-none" 
                    />
                  </div>
                  <div>
                    <label className="font-sans text-xs tracking-widest text-muted-foreground uppercase block mb-2">
                      {t("Company (optional)", "Empresa (opcional)")}
                    </label>
                    <input 
                      type="text" 
                      className="w-full bg-transparent border-b border-border py-3 px-0 font-sans text-foreground focus:outline-none focus:border-primary transition-colors rounded-none" 
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
                    className="w-full bg-transparent border-b border-border py-3 px-0 font-sans text-foreground focus:outline-none focus:border-primary transition-colors resize-none rounded-none" 
                  />
                </div>
                <div className="pt-4">
                  <button 
                    type="submit"
                    className="w-full bg-primary text-primary-foreground py-4 font-sans text-xs tracking-[0.2em] uppercase hover:bg-primary/90 transition-colors"
                  >
                    {t("SEND MESSAGE", "ENVIAR MENSAGEM")}
                  </button>
                </div>
                <p className="text-center font-sans text-xs text-muted-foreground pt-4">
                  {t("All enquiries treated as confidential.", "Todos os contactos tratados de forma confidencial.")}
                </p>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </div>
  );
}
