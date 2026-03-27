import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import avatarPlaceholder from "@/assets/hp.png";
import resume from "@/assets/himanshu12318087.pdf";

const textContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const textChild = {
  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut" as const } },
};

const socialIcon = {
  hidden: { opacity: 0, scale: 0 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: 0.8 + i * 0.1, type: "spring" as const, stiffness: 300, damping: 15 },
  }),
};

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center section-padding pt-32">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          variants={textContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={textChild} className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">
            Hello, I'm
          </motion.p>
          <motion.h1 variants={textChild} className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-foreground mb-4">
            Himanshu <span className="gradient-text">Pr. Shahi</span>
          </motion.h1>
          <motion.p
            variants={textChild}
            className="text-base md:text-lg font-medium text-muted-foreground -mt-1 mb-5"
          >
            Cloud Engineer and Web Developer
          </motion.p>
          <motion.div variants={textChild} className="flex gap-4 mb-8">
            <motion.a
              href="https://www.linkedin.com/in/himanshuprshahi/"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              
              Get in Touch
            </motion.a>
            <motion.a
              href="https://github.com/Himanshupratapshahi"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-accent transition-colors"
            >


View Projects
        </motion.a>

        <motion.a
          href="https://drive.google.com/file/d/1xJNYV2AEui3WBfxbrk12dHm6NwsR6Cgs/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-accent transition-colors"
        >


Download CV 
            </motion.a>
          </motion.div>
          <div className="flex gap-4">
            {[
              { href: "https://github.com/Himanshupratapshahi", icon: Github },
              { href: "https://www.linkedin.com/in/himanshuprshahi/", icon: Linkedin },
              { href: "mailto:jr.shahiji2020@gmail.com", icon: Mail },
            ].map((s, i) => (
              <motion.a
                key={s.href}
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                custom={i}
                variants={socialIcon}
                initial="hidden"
                animate="visible"
                whileHover={{ y: -4, rotate: 12 }}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <s.icon size={22} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Avatar with rotate-in + floating animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="relative"
          >
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
              <img
                src={avatarPlaceholder}
                alt="Himanshu Pratap Shahi"
                width={512}
                height={512}
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -bottom-2 -right-2 w-20 h-20 rounded-full bg-primary/10 blur-xl"
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
              transition={{ repeat: Infinity, duration: 4, delay: 1 }}
              className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-primary/5 blur-lg"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <ArrowDown size={24} />
      </motion.a>
    </section>
  );
};

export default HeroSection;
