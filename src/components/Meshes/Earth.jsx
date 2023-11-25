/* eslint-disable react/no-unknown-property */
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
} from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { Suspense, useEffect } from "react";
import { Mesh } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Earth = () => {
  const earth = useLoader(GLTFLoader, "./meshes/earth/earth.gltf");

  useEffect(() => {
    earth.scene.scale.set(6.5, 6.5, 6.5);
    earth.scene.position.set(0, 0, 0);
    earth.scene.traverse((object) => {
      if (object instanceof Mesh) {
        object.castShadow = false;
        object.receiveShadow = false;
        object.material.onvMapIntensity = 1;
      }
    });
  }, [earth]);

  return (
    <Canvas>
      <OrbitControls
        makeDegault
        target={[0, 0, 0]}
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.8}
      />
      <PerspectiveCamera makeDegault fov={50} />
      <Suspense fallback={null}>
        <primitive object={earth.scene} />
      </Suspense>
      <Environment resolution={214} preset="city" />
    </Canvas>
  );
};

export default Earth;
