"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function R3FTest() {
  return (
    <div className="w-full h-[420px] bg-black">
      <Canvas camera={{ position: [2, 2, 2], fov: 50 }}>
        <color attach="background" args={["#000000"]} />
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshBasicMaterial color="#ff3366" />
        </mesh>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
