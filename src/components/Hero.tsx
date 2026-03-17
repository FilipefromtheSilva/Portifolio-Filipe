import { motion } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />
      
      {/* Accent glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-primary/5 blur-[120px]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-3xl text-center"
      >
        <motion.div variants={item} className="mb-6">
          <span className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
            Desenvolvedor de Software
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight"
        >
          Filipe Oliveira.{" "}
          <span className="text-gradient">
            Construindo sistemas escaláveis com precisão técnica.
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 text-base sm:text-lg leading-relaxed text-muted-foreground max-w-xl mx-auto"
          style={{ textWrap: "pretty" } as React.CSSProperties}
        >
          23 anos. Formado pelo SENAI em Desenvolvimento de Sistemas e graduando em Ciências da Computação (5º período). 
          Afinidade com Front-End (React, Laravel) e atualmente desenvolvedor PHP — CodeIgniter na Top Andaimes.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projetos"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 glow-accent"
          >
            Ver Projetos
            <ArrowDown className="w-4 h-4" />
          </a>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 rounded-lg glass-card px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-secondary"
          >
            <FileText className="w-4 h-4" />
            Entrar em Contato
          </a>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-16 flex items-center justify-center gap-8 text-muted-foreground"
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">3+</div>
            <div className="text-xs font-mono uppercase tracking-wider mt-1">Projetos</div>
          </div>
          <div className="w-px h-8 bg-border" />
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">SENAI</div>
            <div className="text-xs font-mono uppercase tracking-wider mt-1">Formação</div>
          </div>
          <div className="w-px h-8 bg-border" />
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">Full Stack</div>
            <div className="text-xs font-mono uppercase tracking-wider mt-1">Foco</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
