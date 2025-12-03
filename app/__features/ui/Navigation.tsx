"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import type { Variants } from "framer-motion";

const menuVariants: Variants = {
  hidden: { x: -300, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
  exit: {
    x: -300,
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href");
    if (href?.startsWith("#")) {
      setMobileMenuOpen(false);
      const target = document.getElementById(href.slice(1));
      if (target) {
        const header = document.getElementById("site-header");
        const headerHeight = header?.offsetHeight ?? 0;
        const targetTop = target.getBoundingClientRect().top + window.scrollY - headerHeight - 12;
        window.scrollTo({ top: targetTop, behavior: "smooth" });
      }
    }
  }, []);

  const menuItems = [
    { label: "Work", href: "#work" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Desktop Header */}
      <motion.nav
        id="site-header"
        className={
          "hidden sm:block sticky top-0 z-50 w-full transition-colors duration-300 " +
          (scrolled
            ? "bg-white/60 backdrop-blur-md dark:bg-slate-300/60 border-b border-slate-200/40 rounded-b-md"
            : "bg-transparent")
        }
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                Portfolio
              </p>
              <p className="text-lg font-semibold text-slate-900">
                Pavel Full Stack Developer
              </p>
            </div>

            <div className="flex items-center gap-6 text-sm text-slate-500">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleNavClick}
                  className="hover:text-slate-900 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Header with Hamburger */}
      <motion.nav
        id="site-header-mobile"
        className={
          "sm:hidden fixed top-0 left-0 right-0 z-40 transition-colors duration-300 " +
          (scrolled
            ? "bg-white/50 backdrop-blur-lg border-b border-slate-200/80"
            : "bg-transparent")
        }
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="px-4 py-3 flex items-center justify-between">
          <div className="flex-1">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
              Portfolio
            </p>
            <p className="text-base font-semibold text-slate-900">
              Pavel
            </p>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg hover:bg-slate-100 transition-colors text-slate-900 z-50"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <FaTimes size={24} />
            ) : (
              <FaBars size={24} />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setMobileMenuOpen(false)}
              className="sm:hidden fixed inset-0 z-30 bg-black/50"
            />

            {/* Drawer */}
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="sm:hidden fixed top-0 left-0 h-screen w-64 z-40 bg-white shadow-xl flex flex-col"
            >
              {/* Header in Drawer */}
              <div className="p-6 border-b border-slate-200">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-1">
                  Navigation
                </p>
                <p className="text-lg font-semibold text-slate-900">
                  Menu
                </p>
              </div>

              {/* Menu Items */}
              <div className="flex-1 flex flex-col gap-1 p-4">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={handleNavClick}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="px-4 py-3 rounded-lg text-slate-900 hover:bg-slate-100 transition-colors font-medium"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>

              {/* Footer in Drawer */}
              <div className="p-4 border-t border-slate-200">
                <p className="text-xs text-slate-500 text-center">
                  Pavel Full Stack Developer
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer for fixed mobile header */}
      <div className="sm:hidden h-16" />
    </>
  );
}