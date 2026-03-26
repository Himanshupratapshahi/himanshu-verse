import { motion } from "framer-motion";

const AboutMeSection = () => {
  return (
    <section id="about-me" className="section-padding bg-muted/30">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-2">
            Introduction
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            About Me
          </h2>

          {/* Structured Content */}
          <div className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto space-y-4">

            <p>
              I am a <span className="text-foreground font-medium">pre-final year B.Tech student</span>
              with strong interest in <span className="text-foreground font-medium">Cloud Computing,
              Software Development, and Data Structures & Algorithms</span>.
            </p>

            <p>
              I enjoy building practical applications using modern technologies and continuously
              improving my technical skills through <span className="text-foreground font-medium">
              hands-on projects</span> and consistent learning.
            </p>

            <p>
              I have experience working with <span className="text-foreground font-medium">
              AWS, Docker, and basic Azure services</span>, and I am developing a strong foundation
              in programming, problem-solving, and backend concepts.
            </p>

            <p>
              Currently, I am focused on strengthening my knowledge in
              <span className="text-foreground font-medium">
              {" "}DSA, Cloud, and DevOps concepts
              </span> to prepare for software engineering and cloud-based roles.
            </p>

          </div>

        </motion.div>


        {/* Premium Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="relative rounded-2xl p-[1px] bg-gradient-to-br from-primary/40 via-primary/10 to-transparent"
          >

            <div className="rounded-2xl p-6 bg-background/80 backdrop-blur-xl border shadow-lg hover:shadow-xl transition">

              <h3 className="text-xl font-semibold mb-4 text-primary">
                Education 🎓
              </h3>

              <ul className="space-y-3 text-muted-foreground">

                <li>
                  <span className="font-medium text-foreground">
                    Bachelor of Technology (CSE)
                  </span>
                  <br />
                  Lovely Professional University
                </li>

                <li>
                  <span className="font-medium text-foreground">
                    Core Subjects:
                  </span>
                  <br />
                  Data Structures, Algorithms, DBMS,
                  Operating Systems, Computer Networks
                </li>

                <li>
                  <span className="font-medium text-foreground">
                    Special Interest:
                  </span>
                  <br />
                  Cloud Computing, DevOps, Backend Development
                </li>

              </ul>

            </div>

          </motion.div>



          {/* Tech Interest Card */}
<motion.div
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  whileHover={{ y: -6 }}
  transition={{ duration: 0.4 }}
  viewport={{ once: true }}
  className="group relative rounded-2xl border bg-background/70 backdrop-blur-xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
>

  {/* subtle gradient glow */}
  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-primary/10 via-transparent to-primary/10 pointer-events-none" />

  <h3 className="text-xl font-semibold mb-4 text-primary">
    Tech Interests 💻
  </h3>

  <ul className="space-y-3 text-muted-foreground relative">

    <li className="flex items-center gap-2">
      ☁️ Exploring Cloud platforms (AWS & Azure)
    </li>

    <li className="flex items-center gap-2">
      💡 Practicing coding & DSA problems
    </li>

    <li className="flex items-center gap-2">
      🐳 Learning Docker & containerization
    </li>

    <li className="flex items-center gap-2">
      🛠 Building real-world projects
    </li>

    <li className="flex items-center gap-2">
      📚 Reading about new technologies
    </li>

  </ul>

</motion.div>

        </div>

      </div>
    </section>
  );
};

export default AboutMeSection;