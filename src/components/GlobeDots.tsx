"use client";

import { useEffect, useRef } from "react";
import createGlobe from "cobe";
import { motion } from "framer-motion";

type GlobeDotsProps = {
  className?: string;
  speed?: number;
  scale?: number;
};

export default function GlobeDots({
  className = "",
  speed = 0.002,
  scale = 1.15,
}: GlobeDotsProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const phiRef = useRef(0);
  const currentSpeedRef = useRef(0);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const dpr = Math.min(window.devicePixelRatio ?? 1, 2);

    const getResponsiveScale = (w: number) => {
      if (w < 380) return 0.9;
      if (w < 480) return 0.98;
      if (w < 768) return 1.05;
      if (w < 1024) return 1.12;
      return 1.18;
    };

    const setCanvasSize = () => {
      const host = containerRef.current!;
      const rect = host.getBoundingClientRect();
      const el = canvasRef.current!;
      el.width = Math.max(1, Math.floor(rect.width * dpr));
      el.height = Math.max(1, Math.floor(rect.height * dpr));
    };

    setCanvasSize();
    const ro = new ResizeObserver(setCanvasSize);
    ro.observe(containerRef.current);

    currentSpeedRef.current = 0;

    const hostRect = containerRef.current.getBoundingClientRect();
    const responsiveScale = getResponsiveScale(hostRect.width);

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: dpr,
      width: canvasRef.current.width,
      height: canvasRef.current.height,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.0,
      scale: responsiveScale,
      mapSamples: 24000,
      mapBrightness: 9,
      baseColor: [0.12, 0.12, 0.12],
      glowColor: [0, 0, 0],
      markerColor: [1, 1, 1],
      markers: [],
      onRender: (state) => {
        // ease current speed toward target for a smooth startup
        currentSpeedRef.current += (speed - currentSpeedRef.current) * 0.05;
        phiRef.current += currentSpeedRef.current;
        state.phi = phiRef.current;
      },
    });

    return () => {
      ro.disconnect();
      globe.destroy();
    };
  }, [speed]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`relative w-full h-[420px] sm:h-[520px] ${className}`}
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </motion.div>
  );
}
