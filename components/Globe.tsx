'use client'

import { Canvas } from '@react-three/fiber'
import { useGLTF, Environment, OrbitControls } from '@react-three/drei'
import { Suspense, useRef } from 'react'
import { Group } from 'three'
import { useFrame } from '@react-three/fiber'

function GlobeModel() {
  const groupRef = useRef<Group>(null)
  const { scene } = useGLTF('/earth.glb')

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2
    }
  })

  return (
    <group ref={groupRef}>
      <primitive object={scene} scale={1.5} />
    </group>
  )
}

export default function Globe() {
  return (
    <div className="w-full h-full">
      <Canvas>
        <Suspense fallback={null}>
          <Environment preset="city" />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <GlobeModel />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Suspense>
      </Canvas>
    </div>
  )
}

