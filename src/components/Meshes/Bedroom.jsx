import { useGLTF } from '@react-three/drei'

export function Room(props) {
  const { nodes, materials } = useGLTF('./meshes/room/bedroom.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[3.447, 3.183, -3.397]} rotation={[Math.PI / 2, 0, 0.922]} scale={0.001}>
        <group position={[177.606, 35.504, -305.821]} rotation={[0.884, 0.298, -2.578]} scale={[10.024, 10.024, 13.13]}>
          <mesh geometry={nodes.gai1_geo001.geometry} material={materials.lambert1} position={[-0.008, 0.054, -0.088]} />
          <mesh geometry={nodes.gai1_geo10.geometry} material={materials.lambert1} position={[3.305, 8.751, -1.902]} rotation={[0.608, -0.537, 0.57]} scale={0.93} />
          <mesh geometry={nodes.gai1_geo12.geometry} material={materials.lambert1} position={[1.005, 10.106, -0.852]} rotation={[1.416, 0.365, -0.133]} scale={0.93} />
          <mesh geometry={nodes.gai1_geo14.geometry} material={materials.lambert1} position={[3.21, 4.812, -1.05]} rotation={[-0.374, -0.785, -0.319]} scale={0.93} />
          <mesh geometry={nodes.gai1_geo16.geometry} material={materials.lambert1} position={[-1.811, 5.603, 0.534]} rotation={[0.627, 1.03, -2.911]} />
          <mesh geometry={nodes.gai1_geo18.geometry} material={materials.lambert1} position={[-2.632, 1.51, 4.027]} rotation={[Math.PI, 1.065, 1.541]} />
          <mesh geometry={nodes.gai1_geo2.geometry} material={materials.lambert1} />
          <mesh geometry={nodes.gai1_geo20.geometry} material={materials.lambert1} position={[-2.192, -2.618, 4.297]} rotation={[-2.562, 1.115, -0.414]} />
          <mesh geometry={nodes.gai1_geo21.geometry} material={materials.lambert1} position={[3.21, 4.812, -1.05]} rotation={[-0.374, -0.785, -0.319]} scale={0.93} />
          <mesh geometry={nodes.gai1_geo3001.geometry} material={materials.lambert1} position={[3.305, 8.751, -1.902]} rotation={[0.608, -0.537, 0.57]} scale={0.93} />
          <mesh geometry={nodes.gai1_geo4001.geometry} material={materials.lambert1} position={[-2.632, 1.51, 4.027]} rotation={[Math.PI, 1.065, 1.541]} />
          <mesh geometry={nodes.gai1_geo5001.geometry} material={materials.lambert1} position={[-1.811, 5.603, 0.534]} rotation={[0.627, 1.03, -2.911]} />
          <mesh geometry={nodes.gai1_geo6001.geometry} material={materials.lambert1} position={[-2.192, -2.618, 4.297]} rotation={[-2.562, 1.115, -0.414]} />
          <mesh geometry={nodes.gai1_geo7001.geometry} material={materials.lambert1} position={[1.005, 10.106, -0.852]} rotation={[1.416, 0.365, -0.133]} scale={0.93} />
        </group>
        <mesh geometry={nodes.than_geo1.geometry} material={materials.lambert1} />
        <mesh geometry={nodes.gai2_geo001.geometry} material={materials.lambert1} position={[17.39, 4.422, -67.157]} scale={[0.832, 0.824, 0.832]} />
        <mesh geometry={nodes.gai2_geo2.geometry} material={materials.lambert1} position={[-11.175, 3.547, -42.99]} scale={0.891} />
        <mesh geometry={nodes.gai2_geo3.geometry} material={materials.lambert1} position={[-8.175, 6.375, -23.666]} rotation={[0, -0.119, 0]} scale={[0.832, 0.824, 0.832]} />
        <mesh geometry={nodes.gai2_geo4.geometry} material={materials.lambert1} position={[29.706, 11.348, -13.302]} rotation={[0, 0.138, 0]} scale={0.891} />
        <mesh geometry={nodes.gai3_geo3.geometry} material={materials.lambert1} position={[-31.843, 3.053, -17.199]} rotation={[0, -0.065, 0]} scale={0.946} />
        <mesh geometry={nodes.gai3_geo4.geometry} material={materials.lambert1} position={[-26.083, -1.277, -41.95]} rotation={[0.006, -0.065, 0.015]} scale={0.916} />
        <mesh geometry={nodes.gai4_geo001.geometry} material={materials.lambert1} />
        <mesh geometry={nodes.gai4_geo2.geometry} material={materials.lambert1} />
        <mesh geometry={nodes.gai4_geo3.geometry} material={materials.lambert1} rotation={[0, 0, 1.179]} />
        <mesh geometry={nodes.gai4_geo4.geometry} material={materials.lambert1} position={[-19.29, -26.613, -216.668]} rotation={[2.295, -0.498, -2.742]} />
        <mesh geometry={nodes.gai4_geo5.geometry} material={materials.lambert1} position={[-6.913, -45.209, -286.947]} rotation={[2.054, -0.318, -2.979]} />
        <mesh geometry={nodes.gai4_geo6.geometry} material={materials.lambert1} position={[-2.241, -4.96, -91.867]} rotation={[0, 0, 1.044]} />
        <mesh geometry={nodes.gai4_geo7.geometry} material={materials.lambert1} position={[-4.445, -6.209, -44.312]} rotation={[0, 0, 0.383]} />
        <mesh geometry={nodes.gai5_geo001.geometry} material={materials.lambert1} position={[0.346, -5.508, -74.005]} scale={0.85} />
        <mesh geometry={nodes.gai5_geo1.geometry} material={materials.lambert1} position={[-5.343, -111.863, -52.274]} rotation={[0.401, 0, 0]} scale={0.917} />
      </group>
      <group position={[1.874, 3.135, -3.885]} rotation={[-1.833, 0, 0]} scale={[0.197, 0.094, 0.197]}>
        <mesh geometry={nodes.Object_10.geometry} material={materials['case']} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.display} />
        <mesh geometry={nodes.Object_11001.geometry} material={materials['Material.004']} position={[0, 0.404, 2.799]} />
        <mesh geometry={nodes.Object_12.geometry} material={materials.bezel} />
      </group>
      <group position={[1.874, 3.123, -3.391]} scale={0.197}>
        <mesh geometry={nodes.Object_4.geometry} material={materials['case']} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.touchpad} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.ports} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.holes} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.ethernet_port} />
      </group>
      <mesh geometry={nodes.Radio.geometry} material={materials.Radio} position={[-3.901, 5.702, 4.128]} rotation={[-Math.PI, 1.316, -Math.PI]} scale={0.328} />
      <mesh geometry={nodes.Cylinder.geometry} material={materials['Material.006']} position={[-4.025, 5.702, 3.652]} rotation={[-Math.PI, 1.316, Math.PI / 2]} scale={0.098} />
      <mesh geometry={nodes.Cylinder001.geometry} material={materials['Material.006']} position={[-3.778, 5.702, 4.604]} rotation={[-Math.PI, 1.316, -Math.PI / 2]} scale={0.098} />
      <mesh geometry={nodes.BezierCurve001.geometry} material={materials['Material.007']} position={[-3.798, 5.95, 4.522]} rotation={[0, -1.316, 0]} scale={0.328} />
      <mesh geometry={nodes.Cylinder002.geometry} material={materials['Material.008']} position={[-3.901, 6.107, 4.128]} rotation={[-Math.PI, 1.316, Math.PI / 2]} scale={[0.042, 0.23, 0.042]} />
      <mesh geometry={nodes.VisorRadio.geometry} material={materials['Material.009']} position={[-3.783, 5.866, 4.097]} rotation={[-Math.PI, 1.316, -Math.PI]} scale={0.328} />
      <mesh geometry={nodes.Protecao.geometry} material={materials.Vermelho} position={[-3.711, 5.559, 4.078]} rotation={[-Math.PI, 1.316, -Math.PI]} scale={[0.504, 0.168, 0.012]} />
      <group position={[-3.779, 5.571, 3.859]} rotation={[-Math.PI / 2, 0, 1.826]} scale={[0.142, 0.074, 0.142]}>
        <mesh geometry={nodes.Cone001_1.geometry} material={materials['Verde.001']} />
        <mesh geometry={nodes.Cone001_2.geometry} material={materials.preto} />
      </group>
      <group position={[-3.664, 5.571, 4.303]} rotation={[-Math.PI / 2, 0, 1.826]} scale={[0.142, 0.074, 0.142]}>
        <mesh geometry={nodes.Cone002_1.geometry} material={materials['Verde.001']} />
        <mesh geometry={nodes.Cone002_2.geometry} material={materials.preto} />
      </group>
      <mesh geometry={nodes.Cylinder003.geometry} material={materials['Material.010']} position={[-3.66, 5.866, 4.404]} rotation={[Math.PI / 2, 0, -1.826]} scale={[0.068, 0.027, 0.068]} />
      <group position={[-3.734, 5.864, 4.127]} rotation={[-Math.PI, 1.316, -Math.PI]} scale={[0.032, 0.032, 0.014]}>
        <mesh geometry={nodes.Cube011.geometry} material={materials['Material.006']} />
        <mesh geometry={nodes.Cube011_1.geometry} material={materials.Verde} />
      </group>
      <group position={[-3.757, 5.864, 4.038]} rotation={[-Math.PI, 1.316, -Math.PI]} scale={[0.032, 0.032, 0.014]}>
        <mesh geometry={nodes.Cube012.geometry} material={materials['Material.006']} />
        <mesh geometry={nodes.Cube012_1.geometry} material={materials.Verde} />
      </group>
      <group position={[-3.78, 5.864, 3.953]} rotation={[-Math.PI, 1.316, -Math.PI]} scale={[0.032, 0.032, 0.014]}>
        <mesh geometry={nodes.Cube013.geometry} material={materials['Material.006']} />
        <mesh geometry={nodes.Cube013_1.geometry} material={materials.Verde} />
      </group>
      <group position={[-3.703, 5.859, 4.215]} rotation={[-2.615, 1.278, 2.634]} scale={0.021}>
        <mesh geometry={nodes.Cube014.geometry} material={materials.Verde} />
        <mesh geometry={nodes.Cube014_1.geometry} material={materials['Material.008']} />
      </group>
      <mesh geometry={nodes.wall.geometry} material={materials.Parede} position={[-2.661, 6.918, 1.878]} scale={5} />
      <mesh geometry={nodes.chao.geometry} material={materials.Chao} position={[0.262, 0.529, 0.175]} scale={5} />
      <mesh geometry={nodes.Cube002.geometry} material={nodes.Cube002.material} position={[2.881, 2.991, -3.521]} scale={[2.377, 0.09, 1]} />
      <mesh geometry={nodes.Cube001.geometry} material={materials['Material.001']} position={[4.228, 1.727, -3.015]} scale={[2.377, 0.09, 1]} />
      <mesh geometry={nodes.gaveta.geometry} material={materials.puxador} position={[4.259, 1.719, -2.461]} scale={[0.282, 0.029, 0.023]} />
      <mesh geometry={nodes.pe_da_mesa.geometry} material={nodes.pe_da_mesa.material} position={[0.437, 1.77, -3.565]} scale={0.082} />
      <group position={[1.846, 0.584, -2.018]} rotation={[Math.PI, 0, Math.PI]} scale={2.567}>
        <mesh geometry={nodes.Cylinder004.geometry} material={materials.Seat} />
        <mesh geometry={nodes.Cylinder004_1.geometry} material={materials['Chair Part']} />
        <mesh geometry={nodes.Cylinder004_2.geometry} material={materials.Wheel} />
      </group>
      <mesh geometry={nodes.estante.geometry} material={materials['Material.003']} position={[-4.024, 6.648, 2.204]} scale={[0.541, 0.099, 1.822]} />
      <mesh geometry={nodes.estante001.geometry} material={materials['Material.002']} position={[-4.024, 5.265, 3.462]} scale={[0.541, 0.099, 1.243]} />
      <mesh geometry={nodes.foto001.geometry} material={nodes.foto001.material} position={[-3.953, 7.092, 3.615]} rotation={[-Math.PI / 2, 1.451, Math.PI / 2]} scale={[0.238, 0.345, 0.035]} />
      <mesh geometry={nodes.foto002.geometry} material={nodes.foto002.material} position={[-3.953, 7.092, 2.231]} rotation={[-2.892, 1.065, 2.922]} scale={[0.238, 0.345, 0.035]} />
      <group position={[-3.985, 5.341, 2.632]} rotation={[Math.PI / 2, 0, -1.543]} scale={0.047}>
        <mesh geometry={nodes.KVRCmesh_Cylinder015_1.geometry} material={materials.BlackMetal} />
        <mesh geometry={nodes.KVRCmesh_Cylinder015_2.geometry} material={materials['Metalic oreang']} />
        <mesh geometry={nodes.KVRCmesh_Cylinder015_3.geometry} material={materials.Screen} />
        <mesh geometry={nodes.KVRCmesh_Cylinder015_4.geometry} material={materials.Glow} />
        <mesh geometry={nodes.KVRCmesh_Cylinder015_5.geometry} material={materials.Stripes} />
      </group>
      <mesh geometry={nodes.lampa.geometry} material={materials.lampiao} position={[4.487, 3.125, -3.642]} rotation={[Math.PI, -0.426, Math.PI]} scale={0.031} />
      <group position={[0.516, 3.07, -4.019]} rotation={[Math.PI / 2, 0, 0.902]} scale={[0.085, 0.097, 0.114]}>
        <mesh geometry={nodes.PictureFrame_1.geometry} material={materials['White Wood Frame']} />
        <mesh geometry={nodes.PictureFrame_2.geometry} material={materials.Picture} />
      </group>
      <mesh geometry={nodes.couch.geometry} material={materials.Material} position={[-2.802, 2.38, -0.237]} rotation={[0, Math.PI / 2, 0]} scale={0.05} />
      <mesh geometry={nodes.livro.geometry} material={nodes.livro.material} position={[4.052, 3.138, -2.988]} />
      <group position={[4.052, 3.228, -3.041]}>
        <mesh geometry={nodes.Cube006.geometry} material={materials['Material.011']} />
        <mesh geometry={nodes.Cube006_1.geometry} material={materials.capa} />
      </group>
      <group position={[0.08, 6.302, -4.431]}>
        <mesh geometry={nodes.Cube007.geometry} material={materials['Poster material']} />
        <mesh geometry={nodes.Cube007_1.geometry} material={materials['Material.005']} />
      </group>
      <group position={[-4.019, 6.781, 1.038]} rotation={[0, 0.761, 0]} scale={[0.317, 0.01, 0.317]}>
        <mesh geometry={nodes.Cube023.geometry} material={materials.cd} />
        <mesh geometry={nodes.Cube023_1.geometry} material={materials['capa.001']} />
      </group>
      <group position={[-4.266, 5.733, 3.171]} rotation={[Math.PI / 2, Math.PI / 4, -Math.PI / 2]} scale={[0.317, 0.01, 0.317]}>
        <mesh geometry={nodes.Cube024.geometry} material={materials.cd} />
        <mesh geometry={nodes.Cube024_1.geometry} material={materials.pearl} />
      </group>
      <mesh geometry={nodes.Icosphere.geometry} material={nodes.Icosphere.material} position={[3.438, 3.333, -3.368]} rotation={[0, -0.922, 0]} scale={0.293} />
      <mesh geometry={nodes.Plant.geometry} material={materials.Plant} position={[-3.104, 0.996, 3.829]} rotation={[-Math.PI, Math.PI / 4, -Math.PI]} scale={0.303} />
      <mesh geometry={nodes.Plant_Stand.geometry} material={materials['Plant Stand']} position={[-3.104, 0.996, 3.829]} rotation={[-Math.PI, Math.PI / 4, -Math.PI]} scale={0.303} />
      <mesh geometry={nodes.Object_14.geometry} material={materials.keyboard} position={[1.849, 3.15, -3.541]} scale={0.197} />
    </group>
  )
}

useGLTF.preload('./meshes/room/bedroom.glb')
