"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experiences } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="relative bg-surface/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Experience
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Where I&apos;ve built & shipped
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            From autonomous vehicle AI at Zoox to semiconductor data engineering,
            enterprise LLM evaluation, and as a machine learning research mentee
            at Stanford University — real production work with measurable impact.
          </p>
        </motion.div>

        <div className="relative mt-14">
          <div className="absolute left-[11px] top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-accent/60 via-border to-transparent md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.article
                key={exp.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="relative md:pl-12"
              >
                <div className="absolute left-0 top-6 hidden h-[22px] w-[22px] items-center justify-center rounded-full border-2 border-accent bg-background md:flex">
                  <Briefcase size={10} className="text-accent" />
                </div>

                <div className="rounded-2xl border border-border bg-background/60 p-6 backdrop-blur transition hover:border-accent/30 hover:bg-surface/80">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {exp.role}
                      </h3>
                      <p className="mt-0.5 text-accent">{exp.company}</p>
                      <p className="mt-1 text-sm text-muted">{exp.location}</p>
                    </div>
                    <span className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="mt-5 space-y-2.5">
                    {exp.highlights.map((item) => (
                      <li
                        key={item.slice(0, 40)}
                        className="flex gap-2.5 text-sm leading-relaxed text-muted"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-surface-elevated px-2.5 py-1 font-mono text-xs text-accent/90"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
