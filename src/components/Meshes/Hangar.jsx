import { useGLTF } from "@react-three/drei";

export function Hangar(props) {
  const { nodes, materials } = useGLTF("./meshes/hangar/hangar.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Cube001_Cube002.geometry}
        material={materials.None}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Cube002_Cube003.geometry}
        material={materials.None}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Cube003_Cube012.geometry}
        material={materials.None}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Cube004_Cube006.geometry}
        material={materials.None}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Cube005_Cube007.geometry}
        material={materials.None}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Cube006_Cube010.geometry}
        material={materials.None}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Cube007_Cube013.geometry}
        material={materials.None}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Cube008_Cube011.geometry}
        material={materials.None}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Cube009_Cube014.geometry}
        material={materials.None}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Cube010_Cube015.geometry}
        material={materials.None}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Cube011_Cube016.geometry}
        material={materials.None}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Cube012_Cube017.geometry}
        material={materials.None}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Cube013_Cube018.geometry}
        material={materials.None}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Cube014_Cube019.geometry}
        material={materials.None}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Cube015_Cube.geometry}
        material={materials.None}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Cube_Cube004.geometry}
        material={materials.None}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Cylinder.geometry}
        material={materials.None}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Cylinder001.geometry}
        material={materials.None}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Cylinder002.geometry}
        material={materials.None}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Cylinder003.geometry}
        material={materials.None}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Cylinder004.geometry}
        material={materials.None}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Plane001.geometry}
        material={materials.None}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Plane002.geometry}
        material={materials.None}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Plane008_Plane016.geometry}
        material={materials.None}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Plane011_Plane017.geometry}
        material={materials.None}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Plane021_Plane023.geometry}
        material={materials.None}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Plane023_Plane025.geometry}
        material={materials.None}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Plane027_Plane036.geometry}
        material={materials.None}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Plane028_Plane037.geometry}
        material={materials.None}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Plane029_Plane038.geometry}
        material={materials.None}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Cube.geometry}
        material={materials.None}
        position={[0, 1.86, -11.735]}
        scale={[1.316, 1.044, 0.145]}
      />
    </group>
  );
}

useGLTF.preload("./meshes/hangar/hangar.glb");
