"use client";

import { motion } from "framer-motion";

export default function ServicesSection() {
  return (
    <section id="services" className="w-full max-w-6xl mx-auto px-4 py-16 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
          Services
        </h2>
        <p className="mt-3 text-white/70 max-w-2xl mx-auto">
          High-level overview of offerings. Replace with real content.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { title: "3D Experiences", body: "Interactive 3D visuals built with WebGL and modern tooling." },
          { title: "Web Apps", body: "Performance-focused applications using Next.js and TypeScript." },
          { title: "Design Systems", body: "Consistent UI with Tailwind CSS and component libraries." },
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
          </motion.div>
        ))}
      </div>
    </section>
  );
}