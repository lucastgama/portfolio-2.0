import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Room } from "../Meshes/Bedroom";
import GroundRoom from "../Meshes/GroundRoom";

const Bedroom = () => {
  return (
    <Canvas
      gl={{ logarithmicDepthBuffer: true, antialias: false }}
      dpr={[1, 1.5]}
      camera={{ position: [3.5, 1, 3.5], fov: 50 }}
    >
      <color attach="background" args={["#191920"]} />
      <fog attach="fog" args={["#191920", 5, 13]} />
      <Room scale={0.3} />
      <GroundRoom />
      <Environment resolution={512} preset="forest" />
      
      <OrbitControls
        makeDefault
        maxDistance={5}
        minDistance={0.4}
        maxPolarAngle={1.2}
        minPolarAngle={0.8}
        dampingFactor={0.18}
        target={[0, 1, 0]}
      />
    </Canvas>
  );
};

export default Bedroom;
