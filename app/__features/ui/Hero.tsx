"use client";

import { motion } from "framer-motion";
import { Button } from "../../__shared/ui";

export function Hero() {
  return (
    <section className="rounded-[32px] bg-white shadow-lg p-10 lg:flex lg:items-center lg:justify-between">
      <div className="max-w-2xl">
        <motion.p
          className="text-sm uppercase tracking-[0.4em] text-slate-400 mb-4"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Frontend & Backend · UI/UX
        </motion.p>
        <motion.h1
          className="text-4xl md:text-5xl font-semibold text-slate-900 leading-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Hello, I’m Alex, <br /> Web developer
        </motion.h1>
        <motion.p
          className="text-lg text-slate-500 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
        >
          I help tech companies launch thoughtful experiences with a clean codebase and clear communication.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
        >
          <Button className="rounded-full px-6 py-3">View my projects</Button>
          <button className="px-6 py-3 rounded-full border border-slate-200 text-slate-900 hover:border-slate-400 transition-colors">
            Get in touch
          </button>
        </motion.div>
      </div>

      <motion.div
        className="mt-10 lg:mt-0 w-48 h-48 md:w-64 md:h-64 rounded-full bg-slate-100 border border-slate-200 overflow-hidden relative mx-auto"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, type: "spring", stiffness: 80 }}
      >
        <div className="absolute inset-6 rounded-full bg-slate-200" />
        <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-semibold">
          Your photo
        </div>
      </motion.div>
    </section>
  );
}
