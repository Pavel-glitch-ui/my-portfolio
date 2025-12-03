'use client';

import { motion } from "framer-motion";
import { Card } from "../../__shared/ui";
import { ContactForm } from "./ContactForm";


export function ContactSection() {
  return (
    <section id="contact" className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Get in touch</p>
          <h2 className="text-3xl font-semibold text-slate-900">Let’s start a project</h2>
        </div>
        <p className="text-sm text-slate-500">
          Contact me directly at <span className="font-semibold text-slate-900">pavelsatete@mail.com</span>
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-8">
         <ContactForm />
        </Card>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="p-8 h-full flex flex-col justify-start">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-slate-400 mb-2">
                contact
              </p>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                Contact with Pavel
              </h3>
              <p className="text-slate-500 mb-6">
                Prefer email? I usually respond within 24 hours with a plan for next steps.
              </p>
            </div>
            <div className="space-y-2">
              <a
                href="mailto:pavelsatete@mail.ru"
                className="text-lg font-semibold text-slate-900 underline"
              >
                pavelsatete@mail.com
              </a>
              <p className="text-sm text-slate-500">Based in Eurasia · Available remotely</p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

