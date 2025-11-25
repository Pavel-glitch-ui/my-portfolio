'use client';

import { motion } from "framer-motion";
import { Button } from "../../__shared/ui";

export function Navigation() {
  return (
    <motion.nav
      className="mb-12"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
            Portfolio
          </p>
          <p className="text-lg font-semibold text-slate-900">
            Alex Dev Studio
          </p>
        </div>

        <div className="flex items-center gap-6 text-sm text-slate-500">
          <a href="#work" className="hover:text-slate-900 transition-colors">
            Work
          </a>
          <a href="#projects" className="hover:text-slate-900 transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-slate-900 transition-colors">
            Contact
          </a>
          <Button className="rounded-full px-5 py-2 text-sm">View my projects</Button>
        </div>
      </div>
    </motion.nav>
  );
}

