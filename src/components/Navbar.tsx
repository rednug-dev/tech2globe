"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
<motion.nav
        initial={{ y: -12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 160, damping: 20 }}
        className="mx-auto w-full max-w-6xl px-4 py-3 flex items-center justify-between backdrop-blur bg-black/30 border-b border-white/10 rounded-b-xl"
      >
        <a href="#hero" className="flex items-center gap-2 select-none">
          <span className="text-xl font-semibold text-white tracking-tight">
            Tech<span className="text-[#e10600]">2</span>Globe
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a className="text-white/80 hover:text-white transition-colors" href="#hero">Home</a>
          <a className="text-white/80 hover:text-white transition-colors" href="#about">About</a>
          <a className="text-white/80 hover:text-white transition-colors" href="#services">Services</a>
          <a className="text-white/80 hover:text-white transition-colors" href="#contact">Contact</a>
          <a className="inline-flex items-center gap-2 rounded-lg bg-white/10 hover:bg-white/15 text-white px-3 py-1.5 border border-white/10 transition-colors" href="#get-started">
            Get Started
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          aria-label="Toggle menu"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 border border-white/10 text-white"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </motion.nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="md:hidden mx-auto w-full max-w-6xl px-4"
          >
            <div className="mt-2 rounded-xl border border-white/10 bg-black/60 backdrop-blur p-3 text-sm text-white/90">
              <a className="block px-3 py-2 rounded-lg hover:bg-white/10" href="#hero" onClick={() => setOpen(false)}>Home</a>
              <a className="block px-3 py-2 rounded-lg hover:bg-white/10" href="#about" onClick={() => setOpen(false)}>About</a>
              <a className="block px-3 py-2 rounded-lg hover:bg-white/10" href="#services" onClick={() => setOpen(false)}>Services</a>
              <a className="block px-3 py-2 rounded-lg hover:bg-white/10" href="#contact" onClick={() => setOpen(false)}>Contact</a>
              <div className="mt-2 px-3">
                <a className="inline-flex items-center rounded-lg bg-white/10 hover:bg-white/15 text-white px-3 py-1.5 border border-white/10 transition-colors" href="#get-started" onClick={() => setOpen(false)}>
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}