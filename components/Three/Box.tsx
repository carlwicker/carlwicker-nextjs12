import { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

export default function Box({ mousePosition }: any) {
  const boxRef = useRef<Mesh>(null!);

  return (
    <mesh
      position={[0, 4, 0]}
      castShadow
      rotation={[mousePosition.y / 250, mousePosition.x / 250, 0]}
    >
      <boxBufferGeometry attach="geometry" args={[4, 4, 4]} />
      <meshStandardMaterial attach="material" color="#444" />
    </mesh>
  );
}
