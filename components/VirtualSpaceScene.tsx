import * as THREE from 'three';
import { useEffect, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshWobbleMaterial, useGLTF } from '@react-three/drei';
import { useSpring, a } from '@react-spring/three';

const modelUrl = '/space.glb';

function isCustomMesh(object: THREE.Object3D): object is THREE.Mesh {
  return (object as THREE.Mesh).geometry !== undefined;
}

export function Level() {
  const { nodes } = useGLTF(modelUrl);
  const levelMesh = nodes.Level;
  return (
    isCustomMesh(levelMesh) && (
      <mesh
        geometry={levelMesh.geometry}
        material={levelMesh.material}
        position={[-0.38, 0.69, 0.62]}
        rotation={[Math.PI / 2, -Math.PI / 9, 0]}
      />
    )
  );
}

export function HeaderBoard() {
  const { nodes } = useGLTF(modelUrl);
  const levelMesh = nodes.headerBoard;
  return (
    isCustomMesh(levelMesh) && (
      <mesh
        geometry={levelMesh.geometry}
        material={levelMesh.material}
        position={[-0.506, 0.818, 0.616]}
        rotation={[-Math.PI / 2, Math.PI * 0.43, Math.PI / 2]}
        scale={[0.38, 0.38, 1]}
      />
    )
  );
}
export function SkillBoard() {
  const { nodes } = useGLTF(modelUrl);
  const levelMesh = nodes.skillBoard;
  return (
    isCustomMesh(levelMesh) && (
      <mesh
        geometry={levelMesh.geometry}
        material={levelMesh.material}
        position={[0.156, 1.083, -0.919]}
        scale={[1.5, 1.5, 1]}
      />
    )
  );
}
export function AboutBoard() {
  const { nodes } = useGLTF(modelUrl);
  const levelMesh = nodes.aboutBoard;
  return (
    isCustomMesh(levelMesh) && (
      <mesh
        geometry={levelMesh.geometry}
        material={levelMesh.material}
        position={[0.156, 1.083, -0.929]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1.5, 1.5, 1]}
      />
    )
  );
}
export function Plane() {
  const { nodes } = useGLTF(modelUrl);
  const levelMesh = nodes.plane;
  return (
    isCustomMesh(levelMesh) && (
      <mesh
        geometry={levelMesh.geometry}
        material={levelMesh.material}
        position={[0.119, 0.152, 0.292]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[1.49, 1.24, 1]}
      />
    )
  );
}
export function Cabinet() {
  const { nodes } = useGLTF(modelUrl);
  const levelMesh = nodes.cabinet;
  return (
    isCustomMesh(levelMesh) && (
      <mesh
        geometry={levelMesh.geometry}
        material={levelMesh.material}
        position={[0.976, 0.212, -0.717]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.004, 0.004, 0.007]}
      />
    )
  );
}

export function Sudo() {
  const { nodes } = useGLTF(modelUrl);
  const levelMeshSudo = nodes.Sudo;
  const levelMeshSudoHead = nodes.SudoHead;

  const [spring, api] = useSpring(
    () => ({
      rotation: [Math.PI / 2, 0, -Math.PI / 3.6],
      config: { friction: 40 },
    }),
    []
  );
  useEffect(() => {
    let timeout: any;
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
    isCustomMesh(levelMeshSudo) &&
    isCustomMesh(levelMeshSudoHead) && (
      <>
        <mesh
          geometry={levelMeshSudo.geometry}
          material={levelMeshSudo.material}
          position={[-0.086, 0.312, 0.454]}
          rotation={[Math.PI / 2, 0, -Math.PI / 3.6]}
        />
        <a.mesh
          geometry={levelMeshSudoHead.geometry}
          material={levelMeshSudoHead.material}
          position={[-0.086, 0.312, 0.454]}
          rotation={spring.rotation as unknown as [number, number, number]}
        />
        )
      </>
    )
  );
}

export function Camera() {
  const { nodes, materials } = useGLTF(modelUrl);
  const levelMeshCamera = nodes.Camera;
  const levelMeshCameraFirst = nodes.Camera_1;
  const [spring, api] = useSpring(
    () => ({ 'rotation-z': 0, config: { friction: 40 } }),
    []
  );
  useEffect(() => {
    let timeout: any;
    const wander = () => {
      api.start({ 'rotation-z': Math.random() });
      timeout = setTimeout(wander, (1 + Math.random() * 2) * 800);
    };
    wander();
    return () => clearTimeout(timeout);
  }, []);
  return (
    isCustomMesh(levelMeshCamera) &&
    isCustomMesh(levelMeshCameraFirst) && (
      <a.group
        position={[-0.58, 0.83, -0.03]}
        rotation={[Math.PI / 2, 0, 0.47]}
        {...spring}
      >
        <mesh
          geometry={levelMeshCamera.geometry}
          material={levelMeshCamera.material}
        />

        <mesh
          geometry={levelMeshCameraFirst.geometry}
          material={materials.Lens}
        />
      </a.group>
    )
  );
}

// export function Cactus() {
//   const { nodes, materials } = useGLTF(modelUrl);
//   return (
//     <mesh
//       geometry={nodes.Cactus.geometry}
//       position={[-0.42, 0.51, -0.62]}
//       rotation={[Math.PI / 2, 0, 0]}
//     >
//       <MeshWobbleMaterial factor={0.4} map={materials.Cactus.map} />
//     </mesh>
//   );
// }

export function Basketball({ scale = 1, ...props }) {
  const { nodes } = useGLTF(modelUrl);
  const levelMeshBasketball = nodes.basketball;
  const levelMeshBasketballLine = nodes.basketballLine;
  const ref = useRef<THREE.Mesh>(null);
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * (clicked ? 5 : 1);
      ref.current.rotation.y += delta * (clicked ? 5 : 1);
    }
  });
  return (
    isCustomMesh(levelMeshBasketball) &&
    isCustomMesh(levelMeshBasketballLine) && (
      <mesh
        ref={ref}
        geometry={levelMeshBasketball.geometry}
        material={levelMeshBasketball.material}
        position={[-0.8, 1.292, 0.204]}
        scale={0.14}
        onClick={() => click(!clicked)}
        onPointerOver={(event) => (event.stopPropagation(), hover(true))}
        onPointerOut={(event) => hover(false)}
      >
        <mesh
          geometry={levelMeshBasketballLine.geometry}
          material={levelMeshBasketballLine.material}
        />

        <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
      </mesh>
    )
  );
}
