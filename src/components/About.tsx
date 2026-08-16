"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";
import { education, siteConfig } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            About
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Engineering at the intersection of AI & data
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[320px_1fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center lg:items-start"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-accent to-accent-secondary opacity-40 blur" />
              <Image
                src="/profile.jpg"
                alt="Harsharandeep Dhillon"
                width={280}
                height={280}
                className="relative rounded-2xl border border-border object-cover shadow-2xl"
                priority
              />
            </div>
            <div className="mt-6 w-full space-y-3">
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-xl border border-border bg-surface px-4 py-3 text-center text-sm font-medium transition hover:border-accent/50 hover:text-accent"
              >
                Connect on LinkedIn →
              </a>
              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-xl bg-accent px-4 py-3 text-center text-sm font-semibold text-background transition hover:brightness-110"
              >
                Download Resume (PDF)
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                I&apos;m a first-generation college student at{" "}
                <strong className="text-foreground">UC Berkeley</strong> pursuing
                a B.S. in Applied Mathematics with a Data Science concentration.
                I build production AI systems — from MCP server integrations and
                RAG pipelines at{" "}
                <strong className="text-foreground">Zoox</strong> to ML automation
                for semiconductor imaging at{" "}
                <strong className="text-foreground">Multibeam</strong>. As a{" "}
                <strong className="text-foreground">
                  Machine Learning Research Mentee
                </strong>{" "}
                at Stanford University&apos;s Science Small Groups program, I
                studied battery degradation under fast-charging conditions.
              </p>
              <p>
                My work spans the full stack: designing data pipelines with Spark
                and Databricks, deploying containerized services on AWS and
                Kubernetes, and shipping internal tools that engineers actually
                use. I&apos;m passionate about turning messy, real-world data into
                systems that drive measurable impact.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface/60 p-6 backdrop-blur">
              <div className="flex items-start gap-3">
                <GraduationCap className="mt-0.5 shrink-0 text-accent" size={22} />
                <div>
                  <h3 className="font-semibold text-foreground">
                    {education.school}
                  </h3>
                  <p className="mt-1 text-sm text-muted">
                    {education.degree} · {education.concentration}
                  </p>
                  <p className="mt-1 text-sm text-muted">
                    GPA {education.gpa} · Expected {education.graduation} ·{" "}
                    {education.location}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {education.honors.map((honor) => (
                  <span
                    key={honor}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/50 px-3 py-1 text-xs text-muted"
                  >
                    <Award size={12} className="text-accent" />
                    {honor}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">
                Relevant Coursework
              </h4>
              <div className="flex flex-wrap gap-2">
                {education.coursework.map((course) => (
                  <span
                    key={course}
                    className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium text-foreground/90"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
