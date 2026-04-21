"use client";

import { motion } from "framer-motion";
import { Button } from "../../__shared/ui";
import { useCallback } from "react";
import Image from "next/image";
import img from '../../imgs/PavelImg.jpg'
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
      {/* Gradient background */}
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
        className="mt-10 lg:mt-0 relative"
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ ease: 'easeInOut', duration: 0.6, delay: 0.4, type: "spring", stiffness: 80 }}
      >
        <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full p-1 bg-linear-to-tr from-pink-500 via-purple-500 to-indigo-500 shadow-2xl hover:scale-105 transition-transform duration-500 mx-auto">
          <div className="w-full h-full rounded-full border-4 border-white overflow-hidden relative bg-slate-100">
            <Image
              src={img}
              alt="Pavel"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        {/* Decorative background glow */}
        <div className="absolute -inset-4 bg-indigo-500/20 blur-3xl -z-10 rounded-full opacity-50" />
      </motion.div>
    </section>
  );
}
