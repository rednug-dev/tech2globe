"use client";

import { useEffect, useRef } from "react";
import createGlobe from "cobe";

type GlobeDotsProps = {
  className?: string;
  speed?: number; 
  scale?: number;  
};

export default function GlobeDots({
  className,
  speed = 0.002,
  scale = 1.15,
}: GlobeDotsProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const phiRef = useRef(0);

  useEffect(() => {
    if (!canvasRef.current) return;

    const dpr = Math.min(window.devicePixelRatio ?? 1, 2);

    const setCanvasSize = () => {
      const el = canvasRef.current!;
      const rect = el.getBoundingClientRect();
      el.width = Math.max(1, Math.floor(rect.width * dpr));
      el.height = Math.max(1, Math.floor(rect.height * dpr));
    };

    setCanvasSize();
    const ro = new ResizeObserver(setCanvasSize);
    ro.observe(canvasRef.current);

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: dpr,
      width: canvasRef.current.width,
      height: canvasRef.current.height,
      phi: 0,
      theta: 0,
       dark: 1,
  diffuse: 1.0,          
  scale: scale,
  mapSamples: 24000,     
  mapBrightness: 9,      
  baseColor: [0.12, 0.12, 0.12], 
  glowColor: [0, 0, 0],
  markerColor: [1, 1, 1],
  markers: [],
  onRender: (state) => {
    phiRef.current += speed;
    state.phi = phiRef.current;
      },
    });

    return () => {
      ro.disconnect();
      globe.destroy();
    };
  }, [scale, speed]);

  return (
    <div className={`relative w-full h-[520px] ${className ?? ""}`}>
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}
