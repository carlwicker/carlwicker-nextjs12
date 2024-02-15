import { Plane } from "@react-three/drei";

const GroundPlane = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshStandardMaterial attach="material" color="#222" />
    </mesh>
  );
};

export default GroundPlane;
