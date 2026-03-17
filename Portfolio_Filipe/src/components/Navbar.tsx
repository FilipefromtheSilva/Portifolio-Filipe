import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navItems = [
  { label: "Trabalho", href: "#projetos" },
  { label: "Stack", href: "#stack" },
  { label: "Experiência", href: "#formacao" },
  { label: "Conexão", href: "#contato" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
        scrolled ? "glass-card" : ""
      }`}
    >
      <nav className="container max-w-5xl flex items-center justify-between">
        <a href="#" className="font-semibold text-sm tracking-tight text-foreground">
          filipe<span className="text-primary">.dev</span>
        </a>
        <div className="hidden sm:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </motion.header>
  );
};

export default Navbar;
