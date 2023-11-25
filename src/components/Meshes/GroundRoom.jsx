const GroundRoom = () => {
  return (
    <mesh position={[0, -0.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[25, 25]} />
      <meshStandardMaterial color="#171525" />
    </mesh>
  );
};

export default GroundRoom;
