import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-24 px-6">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-2xl p-10 sm:p-16 text-center"
        >
          <span className="font-mono text-xs tracking-widest uppercase text-primary">
            // Conexão
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">
            Vamos construir algo juntos?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-md mx-auto leading-relaxed">
            Estou aberto a oportunidades, freelances e colaborações. 
            Entre em contato e vamos conversar.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <a
              href="mailto:filipedasilvaoliveira2@gmail.com"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 glow-accent"
            >
              <Mail className="w-4 h-4" />
              Email
            </a>
            <a
              href="https://github.com/FilipefromtheSilva"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg glass-card px-5 py-3 text-sm font-medium text-foreground transition-all hover:bg-secondary"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/filipe-da-silva-oliveira-85958a20a/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg glass-card px-5 py-3 text-sm font-medium text-foreground transition-all hover:bg-secondary"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        <div className="mt-16 text-center">
          <p className="text-xs text-muted-foreground font-mono">
            © {new Date().getFullYear()} Filipe Oliveira. Feito com React + Tailwind.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
