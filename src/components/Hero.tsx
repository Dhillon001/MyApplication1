"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      <div className="glow-orb animate-pulse-glow -left-32 top-20 h-96 w-96 bg-sky-500/20" />
      <div className="glow-orb animate-pulse-glow -right-32 bottom-20 h-80 w-80 bg-indigo-500/15" />
      <div className="grid-bg absolute inset-0 opacity-60" />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/80 bg-surface/80 px-4 py-1.5 text-sm text-muted backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            {siteConfig.availability}
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Hi, I&apos;m{" "}
            <span className="gradient-text">{siteConfig.name.split(" ")[0]}</span>
            <br />
            {siteConfig.title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            {siteConfig.tagline}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted">
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={15} className="text-accent" />
              {siteConfig.location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Mail size={15} className="text-accent" />
              {siteConfig.email}
            </span>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background transition hover:brightness-110"
            >
              View Projects
              <ArrowDown size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition hover:border-accent/50 hover:bg-surface"
            >
              Get in Touch
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-border p-2.5 text-muted transition hover:border-accent/50 hover:text-accent"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-border p-2.5 text-muted transition hover:border-accent/50 hover:text-accent"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="rounded-lg border border-border p-2.5 text-muted transition hover:border-accent/50 hover:text-accent"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
