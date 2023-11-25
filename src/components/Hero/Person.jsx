import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Ring from "../Meshes/Ring";

function Person() {
  return (
    <Canvas
      gl={{ logarithmicDepthBuffer: true, antialias: false }}
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 4], fov: 50 }}
    >
      <color attach="background" args={["#191920"]} />
      <fog attach="fog" args={["#191920", 5, 13]} />
      <Ring />
      <OrbitControls
        target={[0, 1.2, 0]}
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 2.2}
        maxPolarAngle={Math.PI / 2.2}
        minAzimuthAngle={4.5}
        maxAzimuthAngle={Math.PI / 1.5}
      />
    </Canvas>
  );
}

export default Person;
