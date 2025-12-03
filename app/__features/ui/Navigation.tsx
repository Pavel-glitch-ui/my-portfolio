"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav id="site-header"
      className={
        "sticky top-0 z-50 w-full transition-colors duration-300" +
        (scrolled
          ? " bg-white/50 sm:bg-white/60 backdrop-blur-lg sm:backdrop-blur-md dark:bg-slate-300/50 sm:dark:bg-slate-300/60 border-b border-slate-200/40 rounded-b-md"
          : " bg-transparent")
      }
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
              Portfolio
            </p>
            <p className="text-base sm:text-lg font-semibold text-slate-900">
              Pavel Full Stack Developer
            </p>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-500">
            <a href="#work" className="hover:text-slate-900 transition-colors">
              Work
            </a>
            <a
              href="#projects"
              className="hover:text-slate-900 transition-colors"
            >
              Projects
            </a>
            <a href="#contact" className="hover:text-slate-900 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

