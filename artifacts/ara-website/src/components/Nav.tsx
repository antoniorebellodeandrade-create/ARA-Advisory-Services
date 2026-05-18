import { Link, useLocation } from "wouter";
import { useLanguage } from "../context/LanguageContext";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Nav() {
  const [location] = useLocation();
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { href: "/", labelEn: "HOME", labelPt: "HOME" },
    { href: "/services", labelEn: "SERVICES", labelPt: "SERVIÇOS" },
    { href: "/about", labelEn: "ABOUT", labelPt: "SOBRE" },
    { href: "/contact", labelEn: "CONTACT", labelPt: "CONTACTO" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b border-border/40">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-4">
          <div className="flex flex-col">
            <div className="flex items-center gap-3">
              <span className="font-serif text-3xl font-semibold tracking-wide text-primary">ARA</span>
              <span className="w-px h-5 bg-muted-foreground/40"></span>
              <span className="font-sans text-xs font-medium tracking-[0.2em] text-foreground mt-1 uppercase">
                Real Estate
              </span>
            </div>
            <span className="font-sans text-[0.6rem] font-medium tracking-[0.15em] text-muted-foreground mt-0.5 uppercase hidden sm:block">
              Advisory · Investment · Asset Management
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8">
            {links.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`font-sans text-xs tracking-widest uppercase transition-colors hover:text-primary ${
                  location === link.href ? "text-primary font-medium" : "text-muted-foreground"
                }`}
              >
                {t(link.labelEn, link.labelPt)}
              </Link>
            ))}
          </nav>
          
          <div className="w-px h-4 bg-border"></div>
          
          <div className="flex items-center gap-2 font-sans text-xs tracking-widest text-muted-foreground">
            <button 
              onClick={() => setLanguage("EN")}
              className={`hover:text-primary transition-colors ${language === "EN" ? "text-primary font-medium" : ""}`}
            >
              EN
            </button>
            <span>|</span>
            <button 
              onClick={() => setLanguage("PT")}
              className={`hover:text-primary transition-colors ${language === "PT" ? "text-primary font-medium" : ""}`}
            >
              PT
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-b border-border bg-background overflow-hidden"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-6">
              <nav className="flex flex-col gap-4">
                {links.map((link) => (
                  <Link 
                    key={link.href} 
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`font-sans text-sm tracking-widest uppercase ${
                      location === link.href ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {t(link.labelEn, link.labelPt)}
                  </Link>
                ))}
              </nav>
              <div className="flex items-center gap-4 font-sans text-sm tracking-widest text-muted-foreground pt-4 border-t border-border">
                <button 
                  onClick={() => { setLanguage("EN"); setMobileMenuOpen(false); }}
                  className={language === "EN" ? "text-primary" : ""}
                >
                  EN
                </button>
                <button 
                  onClick={() => { setLanguage("PT"); setMobileMenuOpen(false); }}
                  className={language === "PT" ? "text-primary" : ""}
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
