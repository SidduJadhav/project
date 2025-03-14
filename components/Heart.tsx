'use client';

import { Canvas } from '@react-three/fiber';
import { useGLTF, Environment, OrbitControls } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import { Group } from 'three';
import { useFrame } from '@react-three/fiber';

function HeartModel({ baseScale = 2, bounceHeight = 0.05, pumpIntensity = 0.05, pumpSpeed = 4 }) {
  const groupRef = useRef<Group | null>(null); // Correctly typed ref for Three.js Group
  const { scene } = useGLTF('/heart.glb');

  useFrame((state) => {
    if (groupRef.current) {
      // Pumping animation
      const pumpScale = Math.sin(state.clock.elapsedTime * pumpSpeed) * pumpIntensity + 1;
      groupRef.current.scale.set(baseScale * pumpScale, baseScale * pumpScale, baseScale * pumpScale);

      // Subtle bouncing animation
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * bounceHeight - 1;
    }
  });

  return (
    <group ref={groupRef}>
      <primitive object={scene} scale={1} /> {/* Default scale controlled via animation */}
    </group>
  );
}

export default function Heart() {
  return (
    <div className="w-full h-full">
      <Canvas>
        <Suspense fallback={null}>
          <Environment preset="city" />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <HeartModel baseScale={2.5} bounceHeight={0.07} pumpIntensity={0.1} pumpSpeed={3} />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Suspense>
      </Canvas>
    </div>
  );
}
