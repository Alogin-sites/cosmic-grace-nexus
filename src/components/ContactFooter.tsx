import { motion } from "framer-motion";

const footerLinks = [
  "Início",
  "Sobre",
  "Consultas",
  "Rituais",
  "Ebooks",
  "Loja",
  "Oráculo",
  "Contato",
];

const ContactFooter = () => {
  return (
    <>
      <section id="contato" className="bg-background">
        {/* Moon bg */}

        {/* Footer */}

        <div className="relative z-[1] text-center py-6 border-t border-foreground/[0.04] text-[0.62rem] tracking-[0.15em] uppercase text-foreground/20">
          © 2026 Espírito da Lua · Todos os direitos reservados
        </div>
      </section>
    </>
  );
};

export default ContactFooter;
