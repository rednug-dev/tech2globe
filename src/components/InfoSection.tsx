"use client";

import { motion } from "framer-motion";

export default function InfoSection() {
  return (
    <section id="about" className="w-full max-w-6xl mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
          About <span className="text-white/70">Tech</span>
          <span className="text-[#e10600]">2</span>
          <span className="text-white/70">Globe</span>
        </h2>
        <p className="mt-3 text-white/70 max-w-2xl mx-auto">
          Placeholder content about Tech2Globe. Use this section to briefly introduce your mission,
          value proposition, and the technology powering your experiences.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { title: "Mission", body: "Empowering global experiences with modern web technologies." },
          { title: "What We Do", body: "3D visuals, interactive content, and performant web apps." },
          { title: "Get In Touch", body: "Reach out to collaborate, explore, or launch." },
        ].map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.08 * i, duration: 0.45 }}
            whileHover={{ y: -3 }}
            className="rounded-xl border border-white/10 bg-white/5 p-5 text-white/90"
          >
            <h3 className="text-lg font-medium text-white">{card.title}</h3>
            <p className="mt-1 text-sm text-white/70">{card.body}</p>
            <div className="mt-4 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white cursor-pointer">
              <span>Learn more</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}