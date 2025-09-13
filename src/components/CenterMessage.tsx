"use client";

import { motion } from "framer-motion";

type Props = {
  title: string;
  subtitle?: string;
};

export default function CenterMessage({ title, subtitle }: Props) {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 110, damping: 16, mass: 0.6, delay: 0.2 }}
        className="text-center px-4"
      >
        <div className="inline-flex flex-col items-center">
          <span className="text-white/90 text-xs uppercase tracking-[0.2em] mb-2">Fokus</span>
          <h1 className="text-white font-semibold text-2xl md:text-3xl leading-tight drop-shadow">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-3 max-w-[60ch] text-sm md:text-base text-neutral-300 leading-relaxed drop-shadow">
              {subtitle}
            </p>
          )}
        </div>
      </motion.div>
    </div>
  );
}
