import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Map } from "../Meshes/Map";

const Airplane = () => {
  return (
    <Canvas
      gl={{ logarithmicDepthBuffer: true, antialias: false }}
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 0], fov: 50 }}
    >
      <Environment
        resolution={120}
        background={true}
        files="./meshes/game/sky.hdr"
      />
      <Map scale={1} position={[0,-9,0]} />
      <OrbitControls
        makeDefault
        maxDistance={5}
        minDistance={0.4}
        dampingFactor={0.18}
        target={[0, 1, 0]}
      />
    </Canvas>
  );
};

export default Airplane;
