import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";
import { useState, useRef } from "react";

export function ContactSection() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (res.ok && json.success) {
        setSubmitted(true);
        formRef.current?.reset();
      } else {
        setError(t(
          "Something went wrong. Please try again or email directly.",
          "Ocorreu um erro. Por favor tente de novo ou envie email directamente."
        ));
      }
    } catch {
      setError(t(
        "Could not send your message. Please check your connection and try again.",
        "Não foi possível enviar a mensagem. Verifique a sua ligação e tente de novo."
      ));
    } finally {
      setSubmitting(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "transparent",
    border: "none",
    borderBottom: "1px solid var(--color-border)",
    padding: "0.75rem 0",
    fontFamily: "var(--app-font-sans)",
    fontSize: "0.9375rem",
    color: "var(--color-foreground)",
    outline: "none",
    borderRadius: 0,
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "var(--app-font-sans)",
    fontSize: "0.625rem",
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "var(--color-muted-foreground)",
    display: "block",
    marginBottom: "0.5rem",
  };

  return (
    <section id="contact" className="bg-background" style={{ borderTop: "1px solid var(--color-border)", padding: "6rem 2rem" }}>
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
            {t("Contact", "Contacto")}
          </span>
          <h2
            className="font-serif font-semibold"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", lineHeight: 1.2, color: "var(--color-foreground)", marginBottom: "1rem" }}
          >
            {t("Get in touch", "Entre em contacto")}
          </h2>
          <p
            className="font-sans"
            style={{ fontSize: "0.9375rem", color: "var(--color-muted-foreground)", lineHeight: 1.65 }}
          >
            {t(
              "For an introductory conversation, please reach out directly.",
              "Para uma conversa inicial, pode escrever directamente."
            )}
          </p>
        </motion.div>

        {/* Two-column: contacts + form */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 20rem), 1fr))", gap: "4rem" }}>

          {/* Direct contacts */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            {[
              { label: "Email", value: "antonio@ararealestate.pt", href: "mailto:antonio@ararealestate.pt", testId: "contact-email" },
              { label: t("Mobile", "Telemóvel"), value: "+351 916 737 791", href: "tel:+351916737791", testId: "contact-phone" },
            ].map(({ label, value, href, testId }) => (
              <div key={label} style={{ marginBottom: "2.25rem" }}>
                <span style={labelStyle}>{label}</span>
                <a
                  href={href}
                  data-testid={testId}
                  className="font-sans"
                  style={{ fontSize: "0.9375rem", color: "var(--color-foreground)", textDecoration: "none", display: "block" }}
                >
                  {value}
                </a>
              </div>
            ))}
            <div>
              <span style={labelStyle}>LinkedIn</span>
              <a
                href="https://www.linkedin.com/in/ant%C3%B3nio-rebello-de-andrade-05a00741/"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="contact-linkedin"
                className="font-sans"
                style={{ fontSize: "0.9375rem", color: "var(--color-foreground)", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                António Rebello de Andrade
                <span style={{ color: "var(--color-primary)" }}>→</span>
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.12 }}
            style={{ border: "2px solid #0F2D33", padding: "clamp(1.25rem, 4vw, 2.5rem)" }}
          >
            {submitted ? (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "4rem 0" }}>
                <h3
                  className="font-serif"
                  style={{ fontSize: "1.75rem", color: "var(--color-primary)", marginBottom: "1rem" }}
                >
                  {t("Thank you.", "Obrigado.")}
                </h3>
                <p
                  className="font-sans"
                  style={{ fontSize: "0.875rem", color: "var(--color-muted-foreground)", lineHeight: 1.65 }}
                >
                  {t(
                    "Your message has been received. I will be in touch shortly.",
                    "A sua mensagem foi recebida. Entrarei em contacto brevemente."
                  )}
                </p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>

                {/* Web3Forms hidden fields */}
                <input type="hidden" name="access_key" value="958999fa-5fa3-4bf9-aad4-593e98896f4c" />
                <input type="hidden" name="subject" value="New contact from ARA Real Estate website" />
                <input type="hidden" name="from_name" value="ARA Real Estate Website" />

                {/* Honeypot — hidden from real users, traps bots */}
                <input
                  type="checkbox"
                  name="botcheck"
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div>
                  <label style={labelStyle}>{t("Name", "Nome")} *</label>
                  <input type="text" name="name" required data-testid="input-name" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Email *</label>
                  <input type="email" name="email" required data-testid="input-email" style={inputStyle} />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(9rem, 1fr))", gap: "1.5rem" }}>
                  <div>
                    <label style={labelStyle}>{t("Phone", "Telefone")} *</label>
                    <input type="tel" name="phone" required data-testid="input-phone" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>{t("Company (optional)", "Empresa (opcional)")}</label>
                    <input type="text" name="company" data-testid="input-company" style={inputStyle} />
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>{t("How can I help?", "Como posso ajudar?")} *</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    data-testid="input-message"
                    style={{ ...inputStyle, resize: "none" }}
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={submitting}
                    data-testid="button-submit"
                    style={{
                      width: "100%",
                      background: submitting ? "var(--color-primary)/80" : "var(--color-primary)",
                      color: "var(--color-primary-foreground)",
                      border: "none",
                      padding: "1rem",
                      fontFamily: "var(--app-font-sans)",
                      fontSize: "0.65rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      cursor: submitting ? "not-allowed" : "pointer",
                      opacity: submitting ? 0.7 : 1,
                      transition: "opacity 0.2s",
                    }}
                  >
                    {submitting
                      ? t("SENDING…", "A ENVIAR…")
                      : t("SEND MESSAGE", "ENVIAR MENSAGEM")}
                  </button>

                  {error && (
                    <p
                      className="font-sans"
                      style={{ fontSize: "0.75rem", color: "#b91c1c", marginTop: "0.75rem", textAlign: "center", lineHeight: 1.5 }}
                    >
                      {error}
                    </p>
                  )}

                  <p
                    className="font-sans"
                    style={{ textAlign: "center", fontSize: "0.7rem", color: "var(--color-muted-foreground)", marginTop: "1rem" }}
                  >
                    {t("All enquiries treated as confidential.", "Todos os contactos tratados de forma confidencial.")}
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>

        {/* Closing line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-serif"
          style={{ borderTop: "1px solid var(--color-border)", marginTop: "5rem", paddingTop: "2.5rem", textAlign: "center", fontSize: "1.125rem", fontStyle: "italic", color: "var(--color-muted-foreground)" }}
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
