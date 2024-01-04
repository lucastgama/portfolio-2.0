import { Environment, Plane, SpotLight } from "@react-three/drei";
import { MathUtils } from "three";
import { Effects } from "../Effect";
import GroundSolid from "./GroundSolid";
import { Idle } from "./Idle";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three"; // Certifique-se de adicionar esta linha
import { Hangar } from "./Hangar";

function Ring() {
  const planeRef = useRef();
  const point = useRef();
  const light = useRef();
  const frontLight = useRef();

  useFrame(() => {
    const time = performance.now() * 0.0015;
    const { array } = planeRef.current.geometry.attributes.position;

    for (let i = 2; i < array.length; i += 3) {
      array[i] = Math.sin(i * 0.3 + time) * 0.1;
    }

    planeRef.current.geometry.attributes.position.needsUpdate = true;
    const color = new THREE.Color();
    const material = planeRef.current.material;

    const hue = (Math.sin(time / 3) + 1) / 3;
    const saturation = 1;
    const lightness = 0.5 + 0.1 * Math.sin(time);

    color.setHSL(hue, saturation, lightness -0.1);
    material.color.copy(color);
    material.emissive.copy(color);
    light.current.color.copy(color);
    frontLight.current.color.copy(color);

    light.current.target = point.current;
    frontLight.current.target = point.current;
  });

  return (
    <>
      <hemisphereLight intensity={0.8} />
      <Plane
        position={[0, 1.87, -2.6]}
        args={[2.3, 1.85, 30, 30]}
        ref={planeRef}
      >
        <meshStandardMaterial
          attach="material"
          color={0xffffff}
          emissive={0xffffff}
          emissiveIntensity={2.2}
          wireframe
        />
      </Plane>
      <Plane ref={point} position={[0, 1.87, 0]} args={[0.001, 0.001, 1, 1]}>
        <meshStandardMaterial />
      </Plane>
      <Hangar position={[0, 0, 9]} />
      <Idle />
      <GroundSolid />
      <SpotLight
        ref={light}
        angle={MathUtils.degToRad(90)}
        position={[0, 1.87, -3]}
        distance={10}
        intensity={90}
        volumetric={false}
      />
      <SpotLight
        ref={frontLight}
        angle={MathUtils.degToRad(90)}
        position={[0, 1.87, 10]}
        distance={40}
        intensity={60}
        volumetric={false}
      />
      <Effects />
      <mesh
        scale={0.8}
        position={[0, 0, 0]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}
      >
        <ringGeometry args={[0.9, 1, 36, 5]} />
        <meshStandardMaterial color={"#ffffff"} roughness={1} />
      </mesh>
    </>
  );
}

export default Ring;
