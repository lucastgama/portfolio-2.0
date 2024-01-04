import { MeshReflectorMaterial } from "@react-three/drei";

const GroundSolid = () => {
  return (
    <mesh position={[0, -0.001, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[25, 25]} />
      <MeshReflectorMaterial
        blur={[300, 100]}
        resolution={206}
        mixBlur={1}
        mixStrength={80}
        roughness={1}
        depthScale={10}
        minDepthThreshold={0.2}
        maxDepthThreshold={2}
        color="#050505"
        metalness={0.7}
      />
    </mesh>
  );
};

export default GroundSolid;
