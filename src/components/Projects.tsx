"use client";

import { motion } from "framer-motion";
import { ExternalLink, FolderGit2, Github } from "lucide-react";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Projects
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Selected work
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface/50 backdrop-blur transition hover:border-accent/30"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 transition group-hover:opacity-100`}
              />

              <div className="relative p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg border border-border bg-background/80 p-2.5">
                    <FolderGit2 size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted">
                      {project.category}
                    </p>
                    <h3 className="text-lg font-semibold text-foreground">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-muted">
                  {project.description}
                </p>

                <ul className="mt-4 space-y-2">
                  {project.highlights.map((item) => (
                    <li
                      key={item.slice(0, 40)}
                      className="flex gap-2 text-xs leading-relaxed text-muted/90"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-secondary" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border/80 bg-background/60 px-2 py-0.5 font-mono text-[11px] text-foreground/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {"githubUrl" in project && project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition hover:underline"
                  >
                    <Github size={14} />
                    View on GitHub
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
