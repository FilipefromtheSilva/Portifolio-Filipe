import { motion } from "framer-motion";

const timeline = [
  {
    period: "2024 — 2028",
    title: "Ciências da Computação",
    institution: "Graduação — 5º Período",
    description: "Bacharelado em Ciências da Computação, atualmente cursando o quinto período. Anhanguera",
  },
  {
    period: "2022 — 2024",
    title: "Desenvolvimento de Sistemas",
    institution: "SENAI",
    description: "Curso técnico focado em programação, banco de dados, e desenvolvimento web/mobile.",
  },
  {
    period: "2022 — 2023",
    title: "Aprendizagem em Processos Administrativos",
    institution: "SENAI",
    description: "Formação em processos administrativos industriais.",
  },
  {
    period: "2021",
    title: "Ensino Médio",
    institution: "E.E. Anita Brina Brandão",
    description: "Conclusão do ensino médio regular.",
  },
];

const Education = () => {
  return (
    <section id="formacao" className="py-24 px-6">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-xs tracking-widest uppercase text-primary">
            // Experiência
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            Formação & Trajetória
          </h2>
        </motion.div>

        <div className="mt-12 space-y-1">
          {timeline.map((entry, i) => (
            <motion.div
              key={entry.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group glass-card-hover rounded-xl p-6 flex flex-col sm:flex-row sm:items-start gap-4"
            >
              <div className="shrink-0 w-28">
                <span className="font-mono text-xs text-muted-foreground">{entry.period}</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{entry.title}</h3>
                <p className="text-sm text-primary mt-0.5">{entry.institution}</p>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  {entry.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
