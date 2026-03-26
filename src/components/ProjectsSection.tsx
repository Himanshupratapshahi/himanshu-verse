import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const techIcons: Record<string, string> = {
  React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  PostgreSQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  Stripe: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stripe/stripe-original.svg",
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  TypeScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  FastAPI: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
  OpenAI: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/openai/openai-original.svg",
};

const projects = [
  {
    title: "FarmGaze",
    description: "A full-stack Farm application with image processing, user auth, and admin dashboard.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    github: "#",
    live: "#",
  },
  {
    title: "Himanshu's-Verse",
    description: "My Portfolio that shows my skills and projects.",
    tech: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
    github: "#",
    live: "#",
  },
  {
    title: "AI Chat Assistant",
    description: "An intelligent chatbot powered by GPT with context-aware conversations and memory.",
    tech: ["Python", "FastAPI", "OpenAI", "React"],
    github: "#",
    live: "#",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 60, rotateX: 15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-2">Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Featured Projects</h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{ perspective: "1200px" }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariant}
              whileHover={{ y: -8, scale: 1.02, boxShadow: "0 20px 40px -12px hsl(215 80% 50% / 0.15)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="glass-card p-6 flex flex-col"
            >
              <h3 className="text-lg font-bold text-foreground mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <motion.span
                    key={t}
                    whileHover={{ scale: 1.15 }}
                    className="inline-flex items-center gap-1.5 px-2 py-0.5 text-xs font-medium rounded bg-accent text-accent-foreground"
                  >
                    {techIcons[t] && (
                      <img src={techIcons[t]} alt={t} className="w-3.5 h-3.5" />
                    )}
                    {t}
                  </motion.span>
                ))}
              </div>
              <div className="mt-1 flex items-center justify-center gap-3">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                >
                  <Github size={16} /> Code
                </motion.a>
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  <ExternalLink size={16} /> Live
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
