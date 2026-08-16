"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";
import type { Mesh } from "three";

function GoldGem() {
  const meshRef = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += delta * 0.15;
    meshRef.current.rotation.x += delta * 0.05;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.5} floatIntensity={0.9}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.6, 1]} />
        <MeshDistortMaterial
          color="#c8a24d"
          roughness={0.25}
          metalness={0.6}
          distort={0.25}
          speed={1.2}
        />
      </mesh>
    </Float>
  );
}

export function ThreeScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 5.5], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 4, 5]} intensity={1.4} color="#f6f1e7" />
      <directionalLight position={[-4, -2, -3]} intensity={0.4} color="#164173" />
      <GoldGem />
    </Canvas>
  );
}
