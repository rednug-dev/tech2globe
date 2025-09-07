"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Text, OrbitControls } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

type Props = {
  title?: string;
  titleColor?: string;
  globeColor?: string;
  radius?: number;
  fontSize?: number;
  speed?: number;
};

function GlobeScene({
  title = "Tech2Globe",
  titleColor = "#e10600",
  globeColor = "#202020",
  radius = 1,
  fontSize = 0.16,
  speed = 0.12,
}: Props) {
  const group = useRef<THREE.Group>(null!);
  const chars = useMemo(() => title.split(""), [title]);
  const step = (Math.PI * 1.25) / Math.max(chars.length - 1, 1);
  const start = -((chars.length - 1) * step) / 2;

  useFrame((_, dt) => {
    if (group.current) group.current.rotation.y += speed * dt;
  });

  return (
    <group ref={group}>
      <mesh>
        <sphereGeometry args={[radius, 64, 64]} />
        <meshStandardMaterial color={globeColor} roughness={0.9} metalness={0.0} />
      </mesh>

      <lineSegments>
        <edgesGeometry args={[new THREE.SphereGeometry(radius, 32, 32)]} />
        <lineBasicMaterial color={"#0b0b0b"} linewidth={1} />
      </lineSegments>

      {chars.map((ch, i) => {
        const angle = start + i * step;
        const r = radius * 1.18;
        const x = Math.cos(angle) * r;
        const z = Math.sin(angle) * r;
        const rotY = -angle + Math.PI / 2;
        return (
          <Text
            key={i}
            position={[x, 0, z]}
            rotation={[0, rotY, 0]}
            fontSize={fontSize}
            color={titleColor}
            anchorX="center"
            anchorY="middle"
          >
            {ch}
          </Text>
        );
      })}
    </group>
  );
}

export default function GlobeWithEquatorTitle(props: Props) {
  return (
    <div className="w-full h-[520px] bg-black">
      <Canvas camera={{ position: [0, 0, 3.2], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[3, 2, 4]} intensity={0.7} />
        <directionalLight position={[-3, -2, -4]} intensity={0.3} />

        <color attach="background" args={["#000000"]} />
        <GlobeScene {...props} />

        <OrbitControls enablePan={false} enableZoom={false} />
      </Canvas>
    </div>
  );
}
