import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

const infoItem = {
  hidden: { opacity: 0, x: -30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.2 + i * 0.15, duration: 0.5, ease: "easeOut" as const },
  }),
};

const formField = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: 0.1 + i * 0.1, duration: 0.4 },
  }),
};

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for reaching out! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    { icon: Mail, text: "jr.shahiji2020@gmail.com" },
    { icon: Phone, text: "+91 9555320615" },
    { icon: MapPin, text: "Phagwara, Punjab" },
  ];

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-2">Reach Out</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Get in Touch</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground leading-relaxed"
            >
              I'm always open to new opportunities, collaborations, or just a friendly chat about tech.
              Feel free to reach out!
            </motion.p>
            <div className="space-y-4">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.text}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={infoItem}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-3"
                >
                  <motion.div
                    whileHover={{ rotate: 20, scale: 1.1 }}
                    className="p-2 rounded-lg bg-accent"
                  >
                    <item.icon className="text-primary" size={18} />
                  </motion.div>
                  <span className="text-sm text-foreground">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, rotateY: 10 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
            style={{ perspective: "800px" }}
          >
            {[
              { type: "text", placeholder: "Your Name", key: "name" as const },
              { type: "email", placeholder: "Your Email", key: "email" as const },
            ].map((field, i) => (
              <motion.input
                key={field.key}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={formField}
                whileFocus={{ scale: 1.02, borderColor: "hsl(215 80% 50%)" }}
                type={field.type}
                placeholder={field.placeholder}
                required
                value={form[field.key]}
                onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
              />
            ))}
            <motion.textarea
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={formField}
              placeholder="Your Message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition resize-none"
            />
            <motion.button
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={formField}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              <Send size={16} /> Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
