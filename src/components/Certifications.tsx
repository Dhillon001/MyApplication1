"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { certifications } from "@/lib/data";

export function Certifications() {
  return (
    <section id="certifications" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Certifications
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Credentials & training
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            Professional certifications from Cornell Tech, CodePath, Cisco, and
            Kaggle — aligned with my LinkedIn profile.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <motion.article
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="group rounded-2xl border border-border bg-surface/50 p-5 backdrop-blur transition hover:border-accent/30 hover:bg-surface/80"
            >
              <div className="flex items-start gap-3">
                <div className="rounded-lg border border-border bg-background/80 p-2.5 transition group-hover:border-accent/40">
                  <Award size={18} className="text-accent" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold leading-snug text-foreground">
                    {cert.title}
                  </h3>
                  <p className="mt-1 text-sm text-accent">{cert.issuer}</p>
                  <p className="mt-0.5 text-xs text-muted">{cert.period}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {cert.description}
              </p>
            </motion.article>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center text-sm text-muted"
        >
          View full profile on{" "}
          <a
            href="https://www.linkedin.com/in/harsharandeep-dhillon-26b291267/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-medium text-accent hover:underline"
          >
            LinkedIn
            <ExternalLink size={13} />
          </a>
        </motion.p>
      </div>
    </section>
  );
}
