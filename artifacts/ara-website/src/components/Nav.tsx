import { useLanguage } from "../context/LanguageContext";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  { id: "home", labelEn: "HOME", labelPt: "HOME" },
  { id: "services", labelEn: "SERVICES", labelPt: "SERVIÇOS" },
  { id: "about", labelEn: "ABOUT", labelPt: "SOBRE" },
  { id: "contact", labelEn: "CONTACT", labelPt: "CONTACTO" },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export function Nav() {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-primary">
      <div className="h-20 flex items-center justify-between nav-header-inner">
        <button
          onClick={() => scrollTo("home")}
          className="group flex items-center gap-3 cursor-pointer"
          data-testid="nav-logo"
        >
          <span className="font-serif text-3xl font-semibold tracking-wide text-primary-foreground">ARA</span>
          <span className="w-px h-5 bg-primary-foreground/30"></span>
          <span className="font-sans text-xs font-medium tracking-[0.2em] text-primary-foreground/80 mt-0.5 uppercase">
            Real Estate
          </span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                data-testid={`nav-link-${s.id}`}
                className={`font-sans text-xs tracking-widest uppercase transition-colors cursor-pointer ${
                  activeSection === s.id
                    ? "text-primary-foreground font-medium"
                    : "text-primary-foreground/50 hover:text-primary-foreground"
                }`}
              >
                {t(s.labelEn, s.labelPt)}
              </button>
            ))}
          </nav>

          <div className="w-px h-4 bg-primary-foreground/20"></div>

          <div className="flex items-center gap-2 font-sans text-xs tracking-widest text-primary-foreground/50">
            <button
              onClick={() => setLanguage("EN")}
              data-testid="lang-en"
              className={`hover:text-primary-foreground transition-colors ${language === "EN" ? "text-primary-foreground font-medium" : ""}`}
            >
              EN
            </button>
            <span className="text-primary-foreground/30">|</span>
            <button
              onClick={() => setLanguage("PT")}
              data-testid="lang-pt"
              className={`hover:text-primary-foreground transition-colors ${language === "PT" ? "text-primary-foreground font-medium" : ""}`}
            >
              PT
            </button>
          </div>
        </div>

        <button
          className="md:hidden p-2 text-primary-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="mobile-menu-toggle"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-primary-foreground/10 bg-primary overflow-hidden"
          >
            <div style={{ maxWidth: "52rem", margin: "0 auto", width: "100%", padding: "1.5rem 2rem" }} className="flex flex-col gap-6">
              <nav className="flex flex-col gap-5">
                {sections.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => { setMobileMenuOpen(false); setTimeout(() => scrollTo(s.id), 320); }}
                    className={`font-sans text-sm tracking-widest uppercase text-left ${
                      activeSection === s.id ? "text-primary-foreground" : "text-primary-foreground/50"
                    }`}
                  >
                    {t(s.labelEn, s.labelPt)}
                  </button>
                ))}
              </nav>
              <div className="flex items-center gap-4 font-sans text-sm tracking-widest pt-4 border-t border-primary-foreground/10">
                <button
                  onClick={() => { setLanguage("EN"); setMobileMenuOpen(false); }}
                  className={language === "EN" ? "text-primary-foreground" : "text-primary-foreground/40"}
                >
                  EN
                </button>
                <button
                  onClick={() => { setLanguage("PT"); setMobileMenuOpen(false); }}
                  className={language === "PT" ? "text-primary-foreground" : "text-primary-foreground/40"}
                >
                  PT
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
