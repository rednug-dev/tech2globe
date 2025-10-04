"use client";

import { motion } from "framer-motion";

export default function GetStartedSection() {
  return (
    <section id="get-started" className="w-full max-w-6xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
          Get Started
        </h2>
        <p className="mt-3 text-white/70 max-w-2xl mx-auto">
          CTA placeholder. Invite users to begin a conversation, request a quote, or explore your work.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <a className="inline-flex items-center rounded-lg bg-white/10 hover:bg-white/15 text-white px-4 py-2 border border-white/15 transition-colors" href="#contact">
            Contact Us
          </a>
          <a className="inline-flex items-center rounded-lg bg-white text-black hover:bg-white/90 px-4 py-2 transition-colors" href="#services">
            View Services
          </a>
        </div>
      </motion.div>
    </section>
  );
}