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
  const globeRef = useRef<any>(null);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const dpr = Math.min(window.devicePixelRatio ?? 1, 2);

    const getResponsiveScale = (w: number, h: number) => {
      // Width-based baseline (slightly larger on big screens)
      let widthScale = 1.12;
      if (w < 380) widthScale = 0.92;
      else if (w < 480) widthScale = 1.0;
      else if (w < 768) widthScale = 1.08;
      else if (w < 1024) widthScale = 1.16;
      else if (w < 1440) widthScale = 1.22;
      else widthScale = 1.26;

      // Height cap to prevent vertical clipping on wide screens
      const heightCap = (h / Math.max(1, w)) * 1.7;

      return Math.min(widthScale, heightCap);
    };

    const setCanvasSize = () => {
      const host = containerRef.current!;
      const rect = host.getBoundingClientRect();
      const el = canvasRef.current!;
      el.width = Math.max(1, Math.floor(rect.width * dpr));
      el.height = Math.max(1, Math.floor(rect.height * dpr));
    };

    const buildGlobe = () => {
      const hostRect = containerRef.current!.getBoundingClientRect();
      const responsiveScale = getResponsiveScale(hostRect.width, hostRect.height) * scale;
      const globe = createGlobe(canvasRef.current!, {
        devicePixelRatio: dpr,
        width: canvasRef.current!.width,
        height: canvasRef.current!.height,
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
          // smooth startup
          currentSpeedRef.current += (speed - currentSpeedRef.current) * 0.05;
          phiRef.current += currentSpeedRef.current;
          state.phi = phiRef.current;
        },
      });
      return globe;
    };

    setCanvasSize();
    currentSpeedRef.current = 0;
    globeRef.current = buildGlobe();

    let resizeTimer: number | null = null;
    const onResize = () => {
      setCanvasSize();
      if (globeRef.current) {
        globeRef.current.destroy();
        globeRef.current = null;
      }
      // small debounce to avoid thrashing during active resize
      if (resizeTimer) window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        globeRef.current = buildGlobe();
      }, 50);
    };

    const ro = new ResizeObserver(onResize);
    ro.observe(containerRef.current);

    return () => {
      if (resizeTimer) window.clearTimeout(resizeTimer);
      ro.disconnect();
      if (globeRef.current) globeRef.current.destroy();
    };
  }, [scale, speed]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`relative w-full h-[420px] sm:h-[520px] ${className}`}
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full transform lg:-translate-y-2 xl:-translate-y-4 2xl:-translate-y-6" />
    </motion.div>
  );
}
