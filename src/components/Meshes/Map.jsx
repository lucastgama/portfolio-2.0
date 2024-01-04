import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Map(props) {
  const { nodes, materials } = useGLTF('./meshes/game/map.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[6.404, 7.686, 1.435]} scale={0.064}>
        <mesh geometry={nodes.Cube_1.geometry} material={materials['Dark Blue']} />
        <mesh geometry={nodes.Cube_2.geometry} material={materials.Purple} />
        <mesh geometry={nodes.Cube_3.geometry} material={materials.Pink} />
        <mesh geometry={nodes.Cube_4.geometry} material={materials[' Yellow']} />
        <mesh geometry={nodes.Cube_5.geometry} material={materials['Light Yellow']} />
        <mesh geometry={nodes.Cube_6.geometry} material={materials['Light Blue']} />
      </group>
      <mesh geometry={nodes.Cube001.geometry} material={materials.Pink} position={[6.404, 7.686, 1.435]} scale={0.064} />
      <mesh geometry={nodes.Cube002.geometry} material={materials.Pink} position={[3.835, 7.718, 1.352]} rotation={[0, 0.892, 0]} scale={0.064} />
      <mesh geometry={nodes.Cube003.geometry} material={materials.Pink} position={[4.619, 7.718, 0.953]} rotation={[Math.PI, -0.074, Math.PI]} scale={0.064} />
      <mesh geometry={nodes.Cube004.geometry} material={materials.Pink} position={[4.733, 7.718, 2.027]} rotation={[Math.PI, -1.231, Math.PI]} scale={0.064} />
      <mesh geometry={nodes.Cube005.geometry} material={materials[' Yellow']} position={[6.404, 7.686, 1.435]} scale={0.064} />
      <mesh geometry={nodes.Cube009.geometry} material={materials.Pink} position={[-4.35, 8.083, 1.513]} rotation={[0, -1.566, 0]} scale={0.117} />
      <mesh geometry={nodes.Cube006.geometry} material={materials['Dark Grey']} position={[6.404, 7.686, 1.435]} scale={0.064} />
      <mesh geometry={nodes.Cylinder001.geometry} material={materials.Pink} position={[1.992, 8.585, 1.441]} rotation={[0, 0, -Math.PI / 2]} scale={[0.15, 0.041, 0.15]} />
      <mesh geometry={nodes.Cube007.geometry} material={materials['Dark Grey']} position={[0.123, 8.236, 1.435]} scale={0.064} />
      <mesh geometry={nodes.Cylinder002.geometry} material={materials.Pink} position={[0.182, 8.435, 1.435]} rotation={[0, 0, -Math.PI / 2]} scale={[0.09, 0.025, 0.09]} />
      <mesh geometry={nodes.Cylinder003.geometry} material={materials.Pink} position={[0.182, 8.435, 1.081]} rotation={[0.607, 0, -Math.PI / 2]} scale={[0.09, 0.025, 0.09]} />
      <mesh geometry={nodes.Cylinder004.geometry} material={materials.Pink} position={[0.182, 8.435, 1.782]} rotation={[0.653, 0, -Math.PI / 2]} scale={[0.09, 0.025, 0.09]} />
      <mesh geometry={nodes.Cube008.geometry} material={materials[' Yellow']} position={[-1.057, 8.545, 1.435]} scale={[0.064, 0.064, 0.061]} />
      <mesh geometry={nodes.Cube010.geometry} material={materials['Dark Grey']} position={[-1.057, 8.237, 1.434]} scale={[0.064, 0.064, 0.081]} />
      <mesh geometry={nodes.Cylinder005.geometry} material={materials.Pink} position={[-0.972, 8.778, 1.435]} rotation={[0, 0, -Math.PI / 2]} scale={[0.15, 0.041, 0.142]} />
      <mesh geometry={nodes.Cube011.geometry} material={materials['Dark Grey']} position={[-0.201, 8.237, 1.434]} rotation={[0, Math.PI / 2, 0]} scale={[0.064, 0.064, 0.081]} />
      <mesh geometry={nodes.Cube012.geometry} material={materials['Dark Grey']} position={[-1.669, 8.237, 1.434]} rotation={[0, -Math.PI / 2, 0]} scale={[0.064, 0.064, 0.081]} />
      <mesh geometry={nodes.Circle.geometry} material={materials.Pink} position={[-5.572, 8.367, 1.435]} rotation={[0, 0, -Math.PI / 2]} scale={0.173} />
      <mesh geometry={nodes.Cube013.geometry} material={materials[' Yellow']} position={[-6.85, 8.803, 1.435]} scale={[0.051, 0.029, 0.044]} />
      <mesh geometry={nodes.Cube014.geometry} material={materials[' Yellow']} position={[6.404, 7.686, 1.435]} scale={0.064} />
      <mesh geometry={nodes.Cube015.geometry} material={materials[' Yellow']} position={[6.254, 7.686, 1.736]} scale={0.064} />
      <group position={[6.397, 7.687, 1.419]} scale={[0.064, 0.042, 0.064]}>
        <mesh geometry={nodes.Cube007_2.geometry} material={materials['Dark Blue']} />
        <mesh geometry={nodes.Cube007_3.geometry} material={materials.Purple} />
      </group>
      <mesh geometry={nodes.Plane.geometry} material={materials.background} position={[0, 5.438, 0]} scale={37.828} />
      <mesh geometry={nodes.Cube017.geometry} material={materials[' Yellow']} position={[-2.529, 8.558, 1.435]} scale={[0.064, 0.064, 0.059]} />
      <mesh geometry={nodes.Cylinder006.geometry} material={materials.Pink} position={[-2.444, 8.778, 1.435]} rotation={[0, 0, -Math.PI / 2]} scale={[0.15, 0.041, 0.142]} />
    </group>
  )
}

useGLTF.preload('./meshes/game/map.glb')
