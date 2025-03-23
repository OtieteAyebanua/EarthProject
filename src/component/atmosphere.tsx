const Atmosphere = () => {
  return (
    <mesh scale={1.05}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial
        color="blue"
        transparent
        opacity={0.03}
        emissive={"#87CEEB"}
        emissiveIntensity={0.5}
      />
      <ambientLight />
    </mesh>
  );
};

export default Atmosphere;
