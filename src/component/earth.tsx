import { OrbitControls } from "@react-three/drei";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader } from "three";
import LabelBall from "./labelBall";
import Atmosphere from "./atmosphere";

const Earth = () => {
  const earthTexture = useLoader(TextureLoader, "./public/earth.jpg");
  const ref = useRef<any>(null);
  const { pointer } = useThree();

  // useFrame(() => {
  //   if (ref.current) {
  //     ref.current.rotation.y += pointer.x * 0.05
  //     ref.current.rotation.x += pointer.y * 0.05
  //   }
  // })
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshPhongMaterial map={earthTexture} />
      <pointLight intensity={10} />
      <directionalLight position={[5, 3, 5]} intensity={3} />
      <pointLight intensity={2} />
      <OrbitControls />
      <LabelBall />
      <Atmosphere/>
    </mesh>
  );
};

export default Earth;
