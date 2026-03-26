import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <motion.footer
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="py-8 px-6 border-t border-border text-center"
  >
    <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Himanshu Pratap Shahi. All rights reserved.
      </p>
      <div className="flex gap-4">
        {[
          { href: "https://github.com/Himanshupratapshahi", icon: Github },
          { href: "https://linkedin.com/in/himanshupratapshahi", icon: Linkedin },
          { href: "mailto:himanshupratapshahi@gmail.com", icon: Mail },
        ].map((s, i) => (
          <motion.a
            key={s.href}
            href={s.href}
            target={s.href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            whileHover={{ y: -3, scale: 1.2 }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <s.icon size={18} />
          </motion.a>
        ))}
      </div>
    </div>
  </motion.footer>
);

export default Footer;
