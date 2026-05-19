import { useLanguage } from "../context/LanguageContext";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4" style={{ maxWidth: "52rem", margin: "0 auto", width: "100%", padding: "0 2rem" }}>
        <div className="flex items-center gap-3">
          <span className="font-serif text-xl font-semibold text-primary">ARA</span>
          <span className="w-px h-4 bg-muted-foreground/40"></span>
          <span className="font-sans text-[10px] font-medium tracking-[0.2em] text-foreground uppercase">
            Real Estate
          </span>
        </div>

        <div className="flex flex-col items-center md:items-end gap-1.5 font-sans text-xs text-muted-foreground text-center md:text-right">
          <div className="flex items-center gap-4">
            <a href="mailto:antonio@ararealestate.pt" className="hover:text-primary transition-colors">
              antonio@ararealestate.pt
            </a>
            <span className="text-border">|</span>
            <a href="tel:+351916737791" className="hover:text-primary transition-colors">
              +351 916 737 791
            </a>
          </div>
          <div className="text-[10px] tracking-wide text-muted-foreground/70">
            © {new Date().getFullYear()} ARA Real Estate. Lisbon, Portugal.
          </div>
        </div>
      </div>
    </footer>
  );
}
