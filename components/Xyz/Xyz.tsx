import { Canvas, extend } from "@react-three/fiber";
import { OrbitControls, TransformControls } from "three-stdlib";
extend({ OrbitControls, TransformControls });

export default function Xyz() {
  return (
    <div className="">
      <Canvas
        shadows={true}
        camera={{ fov: 35, near: 0.1, far: 1000, position: [0, 0, 5] }}
      >
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />

        <mesh>
          <sphereGeometry />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </div>
  );
}
