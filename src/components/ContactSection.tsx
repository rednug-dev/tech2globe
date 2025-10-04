"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section id="contact" className="w-full max-w-6xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
          Contact
        </h2>
        <p className="mt-3 text-white/70 max-w-2xl mx-auto">
          Placeholder contact section. Replace with your contact details or form.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="rounded-xl border border-white/10 bg-white/5 p-6 text-white/90"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-white/70 mb-1">Name</label>
            <input className="w-full bg-transparent border border-white/15 rounded-lg px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:border-white/30" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-sm text-white/70 mb-1">Email</label>
            <input type="email" className="w-full bg-transparent border border-white/15 rounded-lg px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:border-white/30" placeholder="you@example.com" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm text-white/70 mb-1">Message</label>
            <textarea rows={4} className="w-full bg-transparent border border-white/15 rounded-lg px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:border-white/30" placeholder="How can we help?" />
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <button className="inline-flex items-center rounded-lg bg-white/10 hover:bg-white/15 text-white px-4 py-2 border border-white/15 transition-colors">
            Send
          </button>
        </div>
      </motion.div>
    </section>
  );
}