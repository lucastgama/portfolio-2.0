/* eslint-disable react/no-unknown-property */
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const Earth = () => {
  const { nodes, materials } = useGLTF("./meshes/earth/earth.glb");

  return (
    <>
      <Canvas>
        <OrbitControls
          makeDegault
          target={[0, 0, 0]}
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.8}
        />
        <PerspectiveCamera makeDegault fov={50} />
        <group scale={6.5} dispose={null}>
          <mesh
            geometry={nodes.MASH1_ReproMesh.geometry}
            material={materials.lambert2}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          />
        </group>
        <Environment resolution={214} preset="city" />
      </Canvas>
    </>
  );
};

useGLTF.preload("./meshes/earth/earth.glb");

export default Earth;
