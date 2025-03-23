import { useRef, useEffect } from "react";
import { InstancedMesh, Object3D } from "three";
import { useFrame } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

interface IStar {
  x: number;
  y: number;
  z: number;
}
interface Props {
  stars: IStar[];
}

export const Stars = ({ stars }: Props) => {
  const meshRef = useRef<InstancedMesh>(null!);
  const dummy = useRef(new Object3D()).current;

  useEffect(() => {
    stars.forEach((star, i) => {
      dummy.position.set(star.x, star.y, star.z);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  }, [stars]);

  useFrame(() => {
    meshRef.current.rotation.y += 0.0005;
  });

  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[0, 0, 0]} intensity={2} color="white" />

      <instancedMesh
        ref={meshRef}
        args={[
          new THREE.SphereGeometry(0.5, 8, 8),
          new THREE.MeshStandardMaterial({
            color: "orange",
            emissive: "white",
            emissiveIntensity: 1,
            roughness: 0.4,
            metalness: 0.5,
          }),
          stars.length,
        ]}
      />
     
      <EffectComposer>
        <Bloom luminanceThreshold={1} luminanceSmoothing={1} intensity={0.5} />
      </EffectComposer>
    </>
  );
};
