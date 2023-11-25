import { Environment, Plane } from "@react-three/drei";
import { Effects } from "../Effect";
import GroundSolid from "./GroundSolid";
import { Idle } from "./Idle";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three"; // Certifique-se de adicionar esta linha
import { Hangar } from "./Hangar";

function Ring() {
  const planeRef = useRef();

  useFrame(() => {
    const time = performance.now() * 0.001;
    const { array } = planeRef.current.geometry.attributes.position;

    for (let i = 2; i < array.length; i += 3) {
      array[i] = Math.sin(i * 0.8 + time) * 0.1;
    }

    planeRef.current.geometry.attributes.position.needsUpdate = true;
    const color = new THREE.Color();
    const material = planeRef.current.material;

    const hue = (Math.sin(time / 3) + 1) / 3;
    const saturation = 0.5;
    const lightness = 0.8 + 0.1 * Math.sin(time);

    color.setHSL(hue, saturation, lightness);
    material.color.copy(color);
  });


  return (
    <>
      <hemisphereLight intensity={1.5} />
      <Plane position={[0, 1.9, -2.7]} args={[2.3, 2, 30, 30]} ref={planeRef}>
        <meshBasicMaterial attach="material" color={0xffffff} wireframe />
      </Plane>
      <Hangar position={[0, 0, 9]} />
      <Idle />
      <GroundSolid />
      <Environment preset="city" resolution={512} />

      <mesh
        scale={0.8}
        position={[0, 0, 0]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}
      >
        <ringGeometry args={[0.9, 1, 36, 5]} />
        <meshStandardMaterial color="white" roughness={1} />
      </mesh>
      <Effects />
    </>
  );
}

export default Ring;
