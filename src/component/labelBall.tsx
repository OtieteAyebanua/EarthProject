import { Text } from "@react-three/drei";
const LabelBall = () => {
  return (
    <group>
      <mesh scale={0.05} position={[0, 1.2, 0]}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial
          color={"white"}
          emissive={"white"}
          emissiveIntensity={0.5}
        />
      </mesh>
      <Text
        position={[0, 1.4, 0]}
        fontSize={0.1}
        color={"white"}
        anchorX={"center"}
        anchorY={"middle"}
        outlineColor={"#000000"}
        outlineWidth={0.02}
      >
        Earth
      </Text>
    </group>
  );
};

export default LabelBall;
