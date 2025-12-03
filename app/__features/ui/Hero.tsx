"use client";

import { motion } from "framer-motion";
import { Button } from "../../__shared/ui";
import { useCallback } from "react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function Hero() {
  return (
    <section className="relative rounded-2xl sm:rounded-4xl bg-white/70 backdrop-blur-xl shadow-xl p-6 sm:p-10 lg:flex lg:items-center lg:justify-between overflow-hidden">
      {/* Фон с градиентом */}
      <div className="absolute inset-0 bg-linear-to-tr from-indigo-100 via-pink-50 to-white opacity-60 pointer-events-none" />

      <motion.div
        className="max-w-2xl relative z-10"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p
          className="text-sm uppercase tracking-[0.4em] text-slate-400 mb-4"
          variants={item}
        >
          Frontend & Backend · UI/UX
        </motion.p>

        <motion.h1
          className="text-4xl md:text-5xl font-extrabold leading-tight mb-4"
          variants={item}
        >
          Hello, I’m{" "}
          <span className="bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent gradient-text">
            Pavel
          </span>
          , <br /> Web developer
        </motion.h1>

        <motion.p
          className="text-lg text-slate-600 mb-8"
          variants={item}
        >
          I build beautiful and performant web applications using modern
          technologies.
        </motion.p>

        <motion.div className="flex flex-wrap gap-4" variants={item}>
          <Button
            className="px-6 py-3 bg-gray-900 border-slate-200 text-amber-50 rounded-lg font-medium transition-all duration-100 hover:scale-105"
            onClick={useCallback(() => {
              const target = document.getElementById("projects");
              if (!target) return;
              const header = document.getElementById("site-header");
              const headerHeight = header?.offsetHeight ?? 0;
              const targetTop =
                target.getBoundingClientRect().top +
                window.scrollY -
                headerHeight -
                12;
              window.scrollTo({ top: targetTop, behavior: "smooth" });
            }, [])}
          >
            View my projects
          </Button>
          <Button onClick={useCallback(() => {
              const target = document.getElementById("contact");
              if (!target) return;
              const header = document.getElementById("site-header");
              const headerHeight = header?.offsetHeight ?? 0;
              const targetTop =
                target.getBoundingClientRect().top +
                window.scrollY -
                headerHeight -
                12;
              window.scrollTo({ top: targetTop, behavior: "smooth" });
            }, [])} className="px-6 py-3 rounded-full border border-slate-200 text-slate-900 hover:border-slate-400 hover:scale-105 transition-all">
            Get in touch
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-10 lg:mt-0 w-48 h-48 md:w-64 md:h-64 rounded-full bg-slate-100 border border-slate-200 overflow-hidden relative mx-auto shadow-lg hover:scale-105 transition-transform"
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ ease: 'easeInOut', duration: 0.6, delay: 0.4, type: "spring", stiffness: 80 }}
      >
        <div className="absolute inset-6 rounded-full bg-slate-200" />
        <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-semibold">
          Your photo
        </div>
      </motion.div>
    </section>
  );
}
