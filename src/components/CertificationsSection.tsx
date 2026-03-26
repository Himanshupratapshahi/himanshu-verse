import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import peerToPeerCert from "../../peertopeer.png";
import hardwareCert from "../../hardware.png";
import bitsAndBytesCert from "../../bitsandbytes.png";

const certifications = [
  { title: "Build Generative AI Apps and Solutions with No-Code Tools", issuer: "Infosys Springboard", date: "2024", link: "#" },
  { title: "The Bits and Bytes of Computer Networking", issuer: "Google / Coursera", date: "2024", link: bitsAndBytesCert },
  { title: "TCP/IP and Advanced Topics", issuer: "Google / Coursera", date: "2023", link: "#" },
  { title: "ChatGPT Made Easy:AI Essentials for Beginners", issuer: "Google / Coursera", date: "2023", link: "#" },
  { title: "Introduction to Hardware and Operating systems", issuer: "IBM / Coursera", date: "2024", link: hardwareCert },
  { title: "Peer-to-Peer Protocols and Local Area Networks", issuer: "Coursera", date: "2024", link: peerToPeerCert },
];

const cardVariant = {
  hidden: { opacity: 0, x: -40 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const CertificationsSection = () => {
  const [selectedCert, setSelectedCert] = useState<(typeof certifications)[number] | null>(null);
  const isImagePreview = Boolean(selectedCert?.link && /\.(png|jpe?g|webp|gif)$/i.test(selectedCert.link));

  return (
    <section id="certifications" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, rotateX: 20 }}
          whileInView={{ opacity: 1, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-2">Achievements</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Certifications</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariant}
              whileHover={{ y: -6 }}
              className="group glass-card p-6 flex gap-4 items-start"
            >
              <motion.div
                whileHover={{ rotate: 10, scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="p-3 rounded-lg bg-accent shrink-0 transition-colors duration-300 group-hover:bg-accent/80"
              >
                <Award className="text-primary" size={24} />
              </motion.div>
              <div className="flex-1">
                <h3 className="text-base font-bold text-foreground">{cert.title}</h3>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                <p className="text-xs text-muted-foreground mt-1">{cert.date}</p>
                <button
                  type="button"
                  onClick={() => setSelectedCert(cert)}
                  disabled={cert.link === "#"}
                  className="mt-3 inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <ExternalLink size={14} /> View Cert
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={Boolean(selectedCert)} onOpenChange={(open) => !open && setSelectedCert(null)}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>{selectedCert?.title ?? "Certificate Preview"}</DialogTitle>
          </DialogHeader>
          {selectedCert?.link && selectedCert.link !== "#" ? (
            <div className="space-y-3">
              {isImagePreview ? (
                <img
                  src={selectedCert.link}
                  alt={`${selectedCert.title} certificate`}
                  className="max-h-[70vh] w-full rounded-md border border-border object-contain"
                />
              ) : (
                <iframe
                  src={selectedCert.link}
                  title={`${selectedCert.title} preview`}
                  className="h-[70vh] w-full rounded-md border border-border"
                />
              )}
              <a
                href={selectedCert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
              >
                <ExternalLink size={14} /> Open certificate in new tab
              </a>
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">Certificate preview is not available for this item yet.</p>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CertificationsSection;
