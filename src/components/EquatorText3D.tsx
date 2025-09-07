"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

type Props = {
  text?: string;              // "Tech2Globe"
  primaryColor?: string;      // farge for "Tech2"
  secondaryColor?: string;    // farge for "Globe" + separator
  splitIndex?: number;        // antall første tegn som skal ha primaryColor (5 for "Tech2")
  repeat?: number;            // hvor mange ganger teksten gjentas rundt ringen
  separator?: string;         // mellom hver repetisjon, f.eks. " • "
  spacing?: number;           // 1.0 = normalt, 0.9 = tettere, 1.1 = løsere
  fontUrl?: string;           // /fonts/Inter-Black.woff2
  fontSize?: number;          // 0.14–0.22 passer ofte
  speed?: number;             // rotasjonshastighet
  textRadius?: number;        // radius for tekst-ringen
  globeRadius?: number;       // depth-mask sfære (LITT mindre enn textRadius)
  arc?: number;               // bue i radianer (2π = full sirkel)
  startAngle?: number;        // hvor på ringen teksten starter (0 = front midt)
  outline?: boolean;          // subtile konturer for lesbarhet
};

function TextRing({
  text = "Tech2Globe",
  primaryColor = "#e10600",
  secondaryColor = "#b3b3b3",
  splitIndex = 5,           // "Tech2" = 5 tegn
  repeat = 3,
  separator = " • ",
  spacing = 0.92,           // strammere tracking
  fontUrl,
  fontSize = 0.16,
  speed = 0.12,
  textRadius = 1.18,
  globeRadius = 1.12,
  arc = Math.PI * 2,        // full sirkel
  startAngle = 0,           // roter hvor ringen begynner
  outline = true,
}: Props) {
  const group = useRef<THREE.Group>(null!);

  // Bygg gjentatt streng
  const fullText = useMemo(() => {
    return Array.from({ length: repeat })
      .map(() => text)
      .join(separator);
  }, [text, repeat, separator]);

  const chars = useMemo(() => fullText.split(""), [fullText]);

  // For fargemapping: tell posisjon i basestringen, ignorér separator-tegn
  const colorForIndex = (i: number) => {
    // hvor langt inn i base-ordet vi er (0..text.length-1), resetter ved separator
    let baseIdx = 0;
    for (let k = 0; k <= i; k++) {
      const ch = chars[k];
      if (separator.includes(ch)) continue; // ikke tell separator-tegn
      baseIdx = (baseIdx + 1) % text.length;
    }
    // Farge: første splitIndex tegn = primary, resten = secondary
    return baseIdx <= splitIndex - 1 ? primaryColor : secondaryColor;
  };

  // Jevn vinkel for hvert tegn langs buen; "spacing" strammer/løsner tettheten
  const step = (arc / chars.length) * spacing;

  useFrame((_, dt) => {
    if (group.current) group.current.rotation.y += speed * dt;
  });

  return (
    <group>
      {/* Depth mask: usynlig sfære som skjuler tekst bak Cobe-globen */}
      <mesh renderOrder={0}>
        <sphereGeometry args={[globeRadius, 64, 64]} />
        <meshBasicMaterial colorWrite={false} depthWrite depthTest />
      </mesh>

      <group ref={group} renderOrder={1}>
        {chars.map((ch, i) => {
          const angle = startAngle + i * step;
          const x = Math.sin(angle) * textRadius;
          const z = Math.cos(angle) * textRadius;
          const rotY = angle; // peker utover, ikke speilvendt
          const color = separator.includes(ch) ? secondaryColor : colorForIndex(i);

          return (
            <Text
              key={`${ch}-${i}`}
              position={[x, 0, z]}
              rotation={[0, rotY, 0]}
              font={fontUrl}
              fontSize={fontSize}
              color={color}
              anchorX="center"
              anchorY="middle"
              material-side={THREE.FrontSide}
              material-depthTest
              material-depthWrite
              outlineWidth={outline ? 0.004 : 0}
              outlineColor="black"
              outlineOpacity={0.9}
              fillOpacity={1}
            >
              {ch}
            </Text>
          );
        })}
      </group>
    </group>
  );
}

export default function EquatorText3D(props: Props) {
  return (
    <Canvas
      gl={{ alpha: true, antialias: true }}
      dpr={[1, 2]}
      camera={{ position: [0, 0, 3.2], fov: 45 }}
    >
      <TextRing {...props} />
    </Canvas>
  );
}
