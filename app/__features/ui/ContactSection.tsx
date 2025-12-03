'use client';

import { motion } from "framer-motion";
import { Card } from "../../__shared/ui";
import { ContactForm } from "./ContactForm";
import { FaGithub } from "react-icons/fa";


export function ContactSection() {
  return (
    <section id="contact" className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 sm:gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-2">Let's start a project</h2>
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-slate-400">Get in touch</p>
        </div>
        <p className="text-xs sm:text-sm text-slate-500">
          Contact me directly at <span className="font-semibold text-slate-900">pavelsatete@mail.com</span>
        </p>
      </div>

      <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2">
        <Card className="p-6 sm:p-8">
         <ContactForm />
        </Card>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="p-6 sm:p-8 h-full flex flex-col justify-start">
            <div>
              <p className="text-xs sm:text-sm uppercase tracking-[0.4em] text-slate-400 mb-2">
                contact
              </p>
              <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-3 sm:mb-4">
                Contact with Pavel
              </h3>
              <p className="text-sm sm:text-base text-slate-500 mb-4 sm:mb-6">
                Prefer email? I usually respond within 24 hours with a plan for next steps.
              </p>
            </div>
            <div className="space-y-3">
              <a
                href="mailto:pavelsatete@mail.ru"
                className="text-base sm:text-lg font-semibold text-slate-900 hover:text-blue-600 transition-colors underline inline-block"
              >
                pavelsatete@mail.com
              </a>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 pt-2">
                <span className="text-xs sm:text-sm text-slate-500">Also in</span>
                <a
                  href="https://github.com/Pavel-glitch-ui"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-900 hover:text-blue-600 transition-colors group"
                  aria-label="GitHub"
                >
                  <FaGithub size={18} className="sm:w-5 sm:h-5" />
                  <span className="text-base sm:text-lg font-semibold group-hover:underline">GitHub</span>
                </a>
              </div>
              <p className="text-xs sm:text-sm text-slate-500">Based in Eurasia · Available remotely</p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

