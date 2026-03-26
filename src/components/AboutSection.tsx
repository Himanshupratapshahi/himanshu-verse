import { motion } from "framer-motion";
import { Code2, GitCommit, Trophy, Zap } from "lucide-react";

const stats = [
  { icon: Trophy, label: "LeetCode Problems", value: "190+", sub: "Top 30% globally" },
  { icon: GitCommit, label: "GitHub Contributions", value: "120+", sub: "Last 12 months" },
  { icon: Code2, label: "Projects Shipped", value: "5+", sub: "Personal & professional" },
  { icon: Zap, label: "Technologies", value: "15+", sub: "Languages & frameworks" },
];

const skillLogos: Record<string, string> = {
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  TypeScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  "HTML/CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  Express: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  PostgreSQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  Docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  AWS: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
  Linux: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  "CI/CD": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg",
};

const skills = [
  { category: "Languages", items: ["JavaScript", "TypeScript", "Python", "Java", "C++"] },
  { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "HTML/CSS"] },
  { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "MongoDB"] },
  { category: "Tools", items: ["Git", "Docker", "AWS", "Linux", "CI/CD"] },
];

const statCard = {
  hidden: { opacity: 0, scale: 0.6, rotateY: 90 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: { delay: i * 0.12, duration: 0.6, type: "spring" as const, stiffness: 120 },
  }),
};

const skillCard = {
  hidden: { opacity: 0, x: -40 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-2">Overview</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Skills & Performance</h2>
        </motion.div>

        {/* Stats Grid — flip-in effect */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16" style={{ perspective: "1000px" }}>
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={statCard}
              whileHover={{ scale: 1.08, rotateY: 8 }}
              className="glass-card p-6 text-center"
            >
              <stat.icon className="mx-auto mb-3 text-primary" size={28} />
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-sm font-medium text-foreground mt-1">{stat.label}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{stat.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Skills — slide-in from left */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={skillCard}
              whileHover={{ y: -6 }}
              className="glass-card p-6"
            >
              <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item, j) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + j * 0.05, type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.15 }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full bg-accent text-accent-foreground cursor-default"
                  >
                    {skillLogos[item] && (
                      <img src={skillLogos[item]} alt={item} className="w-4 h-4" />
                    )}
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Activity — counter-style reveal */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-16 glass-card p-8 text-center"
        >
          <h3 className="text-lg font-bold text-foreground mb-4">GitHub Activity</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { value: "5+", label: "Repositories" },
              { value: "15+", label: "Stars Earned" },
              { value: "10+", label: "Pull Requests" },
              { value: "3+", label: "Forks" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.4 }}
                whileHover={{ scale: 1.1 }}
              >
                <p className="text-3xl font-bold gradient-text">{item.value}</p>
                <p className="text-sm text-muted-foreground">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
