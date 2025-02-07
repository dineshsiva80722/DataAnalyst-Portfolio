import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text3D, OrbitControls } from '@react-three/drei';
import { FONT_URL } from '../utils/constants';
import * as THREE from 'three';

const Text = () => {
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      <Text3D
        font={FONT_URL}
        size={3}
        height={0.2}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}
        position={[-4, -1, 0]}
      >
        DATA
        <meshPhongMaterial
          color="#4F46E5"
          emissive="#2B2678"
          specular="#ffffff"
          shininess={100}
        />
      </Text3D>
    </group>
  );
};

const Background3D = () => {
  return (
    <div className="canvas-container">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        gl={{ antialias: true }}
      >
        <color attach="background" args={['#03071e']} />
        <fog attach="fog" args={['#03071e', 5, 25]} />
        
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight
          position={[0, 10, 0]}
          angle={0.3}
          penumbra={1}
          intensity={2}
          castShadow
        />
        
        <Suspense fallback={null}>
          <Text />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
          autoRotate={false}
        />
      </Canvas>
    </div>
  );
};

export default Background3D;