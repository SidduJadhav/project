'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { Suspense } from 'react'

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>
      <OrbitControls />
    </>
  )
}

export default function ThreeDScene() {
  return (
    <div className="w-full h-screen">
      <Canvas>
        <Suspense fallback={null}>
          <Scene />
          <Environment preset="sunset" background />
        </Suspense>
      </Canvas>
    </div>
  )
}

