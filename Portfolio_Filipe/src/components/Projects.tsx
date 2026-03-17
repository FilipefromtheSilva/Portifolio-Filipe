import { motion } from "framer-motion";

const projects = [
  {
    title: "Sistema de Folha de Pagamento",
    description:
      "Programa desenvolvido durante o curso de Desenvolvimento de Sistemas no SENAI, capaz de calcular a folha de pagamento de qualquer funcionário com precisão e automação.",
    tags: ["Java", "Algoritmos", "SENAI"],
    featured: true,
  },
  {
    title: "Plataforma de Customização de Calçados",
    description:
      "Solução inovadora: site para loja onde clientes podem customizar cores e partes de tênis, gerando produtos únicos por cliente.",
    tags: ["Web", "E-commerce", "Inovação"],
    featured: false,
  },
  {
    title: "Sistema de Manutenção Industrial",
    description:
      "Sistema de notificação e registro para manutenção programada de máquinas industriais, com banco de dados e alertas automáticos.",
    tags: ["Backend", "Database", "Automação"],
    featured: false,
  },
  {
    title: "Bot de Trade de Criptomoedas",
    description:
      "Projeto pessoal para auxiliar no trade de criptomoedas, calculando gráficos automaticamente e notificando oportunidades de compra.",
    tags: ["Python", "Finanças", "API"],
    featured: false,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

const Projects = () => {
  return (
    <section id="projetos" className="py-24 px-6">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-mono text-xs tracking-widest uppercase text-primary">
            // Trabalho
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            Projetos em Destaque
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg" style={{ textWrap: "pretty" } as React.CSSProperties}>
            Cada projeto representa um desafio técnico resolvido com lógica, pesquisa e execução.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className={`group relative rounded-xl glass-card-hover p-6 ${
                project.featured ? "md:col-span-2" : ""
              }`}
            >
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] uppercase tracking-wider text-primary/80 bg-primary/10 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-6 flex items-center gap-2 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Ver detalhes <span>→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
