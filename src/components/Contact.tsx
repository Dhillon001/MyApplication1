"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Loader2, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { siteConfig } from "@/lib/data";

type FormState = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: (formData.get("subject") as string) || undefined,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setFormState("success");
      form.reset();
    } catch (err) {
      setFormState("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong"
      );
    }
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Contact
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Let&apos;s work together
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Open to internships, full-time roles, and collaborations in AI,
              machine learning, and data engineering. Send a message — it goes
              straight to my backend database.
            </p>

            <div className="mt-8 space-y-4 text-sm">
              <div>
                <p className="text-muted">Email</p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-medium text-foreground hover:text-accent"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div>
                <p className="text-muted">Phone</p>
                <p className="font-medium text-foreground">{siteConfig.phone}</p>
              </div>
              <div>
                <p className="text-muted">LinkedIn</p>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-foreground hover:text-accent"
                >
                  harsharandeep-dhillon
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-surface/60 p-6 backdrop-blur sm:p-8"
            >
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm text-muted">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    disabled={formState === "loading"}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent/60 focus:ring-1 focus:ring-accent/30 disabled:opacity-60"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm text-muted">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    disabled={formState === "loading"}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent/60 focus:ring-1 focus:ring-accent/30 disabled:opacity-60"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="mb-1.5 block text-sm text-muted">
                    Subject <span className="text-muted/60">(optional)</span>
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    disabled={formState === "loading"}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent/60 focus:ring-1 focus:ring-accent/30 disabled:opacity-60"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm text-muted">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    disabled={formState === "loading"}
                    className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent/60 focus:ring-1 focus:ring-accent/30 disabled:opacity-60"
                    placeholder="Tell me about the opportunity or project..."
                  />
                </div>
              </div>

              {formState === "success" && (
                <div className="mt-4 flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
                  <CheckCircle2 size={16} />
                  Message sent successfully! I&apos;ll get back to you soon.
                </div>
              )}

              {formState === "error" && (
                <div className="mt-4 flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                  <AlertCircle size={16} />
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={formState === "loading"}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-background transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {formState === "loading" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
