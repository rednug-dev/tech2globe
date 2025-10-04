"use client";

import GlobeDots from "@/components/GlobeDots";
import { motion } from "framer-motion";

export default function GlobeHero() {
  return (
    <div className="relative w-full h-[520px]">
      {/* COBE (DOM-canvas) nederst */}
      <GlobeDots className="absolute inset-0 z-0" scale={1.15} speed={0.002} />

      {/* Static DOM header overlay */}
      <div
        className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none z-10"
      >
        <motion.h1
          initial={{ opacity: 0, y: -12, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-white text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight"
        >
          Tech<span className="text-[#e10600]">2</span>Globe
        </motion.h1>
      </div>
    </div>
  );
}
