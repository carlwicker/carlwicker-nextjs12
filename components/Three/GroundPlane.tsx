import { Plane } from "@react-three/drei";

const GroundPlane = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow position={[0, -4, -50]}>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshPhysicalMaterial attach="material" color="#fff" />
    </mesh>
  );
};

export default GroundPlane;
