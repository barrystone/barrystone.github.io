import { Canvas } from '@react-three/fiber';
import { Html, useProgress } from '@react-three/drei';
import {
  Fisheye,
  CameraControls,
  PerspectiveCamera,
  Environment,
} from '@react-three/drei';
import {
  Level,
  Sudo,
  Camera,
  // Cactus,
  Basketball,
  Plane,
  HeaderBoard,
  SkillBoard,
  AboutBoard,
  Cabinet,
} from './VirtualSpaceScene';
import { Suspense } from 'react';

function Loader() {
  const { active, progress } = useProgress();
  return active ? (
    <Html
      center
      style={{
        fontSize: '5rem',
        textAlign: 'center',
        lineHeight: '10rem',
      }}
    >{`Loading ${progress.toFixed(2)}%`}</Html>
  ) : null;
}

export default function Main() {
  return (
    <Canvas flat>
      <Suspense fallback={<Loader />}>
        <Fisheye zoom={0}>
          <CameraControls minPolarAngle={0} maxPolarAngle={Math.PI / 1.6} />
          <ambientLight intensity={Math.PI / 2} />
          <group scale={20} position={[5, -11, -5]}>
            <Level />
            <Plane />
            <HeaderBoard />
            <SkillBoard />
            <AboutBoard />
            <Sudo />
            <Camera />
            <Cabinet />
            {/* <Cactus /> */}
            <Basketball />
          </group>
          <Environment preset="apartment" background blur={2} />
          <PerspectiveCamera makeDefault position={[0, 0, 18.5]} />
        </Fisheye>
      </Suspense>
    </Canvas>
  );
}
