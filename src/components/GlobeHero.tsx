"use client";

import GlobeDots from "@/components/GlobeDots";
import EquatorText3D from "@/components/EquatorText3D";

export default function GlobeHero() {
  return (
    <div className="relative w-full h-[520px]">
      <GlobeDots className="absolute inset-0" scale={1.15} speed={0.002} />

      <div className="absolute inset-0 pointer-events-none">
        <EquatorText3D
            text="Tech2Globe"
            fontUrl="https://unpkg.com/@fontsource/inter@5.0.8/files/inter-latin-900-normal.woff2"
            primaryColor="#e10600"
            secondaryColor="#9b9b9b"
            splitIndex={5}
            repeat={4}
            separator="   "
            spacing={0.90}
            fontSize={0.18}
            textRadius={1.18}
            globeRadius={1.12}
            speed={0.10}
            outline
        />
      </div>
    </div>
  );
}
