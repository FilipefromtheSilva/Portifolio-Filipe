import { motion } from "framer-motion";

const categories = [
  {
    label: "Linguagens",
    items: ["Java", "JavaScript", "TypeScript", "C#", "Python"],
  },
  {
    label: "Frameworks & Libs",
    items: ["React", "Spring Boot", "Node.js", "Next.js"],
  },
  {
    label: "Ferramentas",
    items: ["Git", "Docker", "VS Code", "Figma", "PostgreSQL"],
  },
  {
    label: "Conceitos",
    items: ["REST APIs", "MVC", "POO", "Banco de Dados", "UI/UX"],
  },
];

const TechStack = () => {
  return (
    <section id="stack" className="py-24 px-6">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-xs tracking-widest uppercase text-primary">
            // Stack
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            Tecnologias & Ferramentas
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card rounded-xl p-5"
            >
              <h3 className="font-mono text-[11px] uppercase tracking-wider text-primary mb-4">
                {cat.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm text-secondary-foreground bg-secondary px-3 py-1.5 rounded-md font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
