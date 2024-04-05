import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshWobbleMaterial, useGLTF } from "@react-three/drei";
import { useSpring, a } from "@react-spring/three";

const modelUrl = "/space.glb";

export function Level() {
  const { nodes } = useGLTF(modelUrl);
  return (
    <mesh
      geometry={nodes.Level.geometry}
      material={nodes.Level.material}
      position={[-0.38, 0.69, 0.62]}
      rotation={[Math.PI / 2, -Math.PI / 9, 0]}
    />
  );
}

export function HeaderBoard() {
  const { nodes } = useGLTF(modelUrl);
  return (
    <mesh
      geometry={nodes.headerBoard.geometry}
      material={nodes.headerBoard.material}
      position={[-0.506, 0.818, 0.616]}
      rotation={[-Math.PI / 2, Math.PI * 0.43, Math.PI / 2]}
      scale={[0.38, 0.38, 1]}
    />
  );
}
export function SkillBoard() {
  const { nodes } = useGLTF(modelUrl);
  return (
    <mesh
      geometry={nodes.skillBoard.geometry}
      material={nodes.skillBoard.material}
      position={[0.156, 1.083, -0.919]}
      scale={[1.5, 1.5, 1]}
    />
  );
}
export function AboutBoard() {
  const { nodes } = useGLTF(modelUrl);
  return (
    <mesh
      geometry={nodes.aboutBoard.geometry}
      material={nodes.aboutBoard.material}
      position={[0.156, 1.083, -0.929]}
      rotation={[Math.PI, 0, Math.PI]}
      scale={[1.5, 1.5, 1]}
    />
  );
}
export function Plane() {
  const { nodes } = useGLTF(modelUrl);
  return (
    <mesh
      geometry={nodes.plane.geometry}
      material={nodes.plane.material}
      position={[0.119, 0.152, 0.292]}
      rotation={[-Math.PI / 2, 0, 0]}
      scale={[1.49, 1.24, 1]}
    />
  );
}
export function Cabinet() {
  const { nodes } = useGLTF(modelUrl);
  return (
    <mesh
      geometry={nodes.cabinet.geometry}
      material={nodes.cabinet.material}
      position={[0.976, 0.212, -0.717]}
      rotation={[0, -Math.PI / 2, 0]}
      scale={[0.004, 0.004, 0.007]}
    />
  );
}

export function Sudo() {
  const { nodes } = useGLTF(modelUrl);
  const [spring, api] = useSpring(
    () => ({
      rotation: [Math.PI / 2, 0, -Math.PI / 3.6],
      config: { friction: 40 },
    }),
    []
  );
  useEffect(() => {
    let timeout;
    const wander = () => {
      api.start({
        rotation: [
          Math.PI / 2 + THREE.MathUtils.randFloatSpread(2) * 0.3,
          0,
          -Math.PI / 3.6 + THREE.MathUtils.randFloatSpread(2) * 0.2,
        ],
      });
      timeout = setTimeout(wander, (1 + Math.random() * 2) * 800);
    };
    wander();
    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      <mesh
        geometry={nodes.Sudo.geometry}
        material={nodes.Sudo.material}
        position={[-0.086, 0.312, 0.454]}
        rotation={[Math.PI / 2, 0, -Math.PI / 3.6]}
      />
      <a.mesh
        geometry={nodes.SudoHead.geometry}
        material={nodes.SudoHead.material}
        position={[-0.086, 0.312, 0.454]}
        rotation={[Math.PI / 2, 0, -Math.PI / 3.6]}
        {...spring}
      />
    </>
  );
}

export function Camera() {
  const { nodes, materials } = useGLTF(modelUrl);
  const [spring, api] = useSpring(
    () => ({ "rotation-z": 0, config: { friction: 40 } }),
    []
  );
  useEffect(() => {
    let timeout;
    const wander = () => {
      api.start({ "rotation-z": Math.random() });
      timeout = setTimeout(wander, (1 + Math.random() * 2) * 800);
    };
    wander();
    return () => clearTimeout(timeout);
  }, []);
  return (
    <a.group
      position={[-0.58, 0.83, -0.03]}
      rotation={[Math.PI / 2, 0, 0.47]}
      {...spring}
    >
      <mesh geometry={nodes.Camera.geometry} material={nodes.Camera.material} />
      <mesh geometry={nodes.Camera_1.geometry} material={materials.Lens} />
    </a.group>
  );
}

export function Cactus() {
  const { nodes, materials } = useGLTF(modelUrl);
  return (
    <mesh
      geometry={nodes.Cactus.geometry}
      position={[-0.42, 0.51, -0.62]}
      rotation={[Math.PI / 2, 0, 0]}
    >
      <MeshWobbleMaterial factor={0.4} map={materials.Cactus.map} />
    </mesh>
  );
}

export function Basketball({ scale = 1, ...props }) {
  const { nodes } = useGLTF(modelUrl);
  const ref = useRef();
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  useFrame(
    (state, delta) =>
      (ref.current.rotation.x = ref.current.rotation.y +=
        delta * (clicked ? 5 : 1))
  );
  return (
    <mesh
      ref={ref}
      geometry={nodes.basketball.geometry}
      material={nodes.basketball.material}
      position={[-0.8, 1.292, 0.204]}
      scale={0.14}
      onClick={() => click(!clicked)}
      onPointerOver={(event) => (event.stopPropagation(), hover(true))}
      onPointerOut={(event) => hover(false)}
    >
      <mesh
        geometry={nodes.basketballLine.geometry}
        material={nodes.basketballLine.material}
      />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}
