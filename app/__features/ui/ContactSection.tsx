'use client';

import { motion } from "framer-motion";
import { Card, Button } from "../../__shared/ui";

export function ContactSection() {
  return (
    <section id="contact" className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Get in touch</p>
          <h2 className="text-3xl font-semibold text-slate-900">Let’s start a project</h2>
        </div>
        <p className="text-sm text-slate-500">
          Contact me directly at <span className="font-semibold text-slate-900">alex@example.com</span>
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-8">
          <form className="space-y-4">
            {["Name", "Email", "Project"].map((label) => (
              <div key={label} className="space-y-2">
                <label className="text-sm font-medium text-slate-600">{label}</label>
                <input
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
                  placeholder={`Enter your ${label.toLowerCase()}`}
                />
              </div>
            ))}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-600">Message</label>
              <textarea
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
                rows={4}
                placeholder="Tell me a bit about your idea…"
              />
            </div>
            <Button className="w-full rounded-xl">Send message</Button>
          </form>
        </Card>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="p-8 h-full flex flex-col justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-slate-400 mb-2">
                contact
              </p>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                Contact with Luka
              </h3>
              <p className="text-slate-500 mb-6">
                Prefer email? I usually respond within 24 hours with a plan for next steps.
              </p>
            </div>
            <div className="space-y-2">
              <a
                href="mailto:alex@example.com"
                className="text-lg font-semibold text-slate-900 underline"
              >
                email@example.com
              </a>
              <p className="text-sm text-slate-500">Based in Europe · Available remotely</p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

