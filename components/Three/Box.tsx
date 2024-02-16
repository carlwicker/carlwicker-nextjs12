import { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";
import { useSpring, a } from "@react-spring/three";

export default function Box({ mousePosition, width, height, depth }: any) {
  const boxRef = useRef<Mesh>(null!);

  const [isHovered, setIsHovered] = useState(false);
  const [color, setColor] = useState("#222");
  const [isClicked, setIsClicked] = useState(false);
  const [rotationSpeed, setRotationSpeed] = useState(0.01); // Set rotation speed to a non-zero value

  const inertia = useRef({ x: 0, y: 1 });
  const { scale } = useSpring({
    scale: isHovered ? 2 : 1,
  });

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    const rotation = rotationSpeed * elapsedTime * 50; // Increase the rotation speed by multiplying with a factor

    inertia.current.x += (mousePosition.x - inertia.current.x) * 0.05; // Add inertia to the x-axis rotation
    inertia.current.y += (mousePosition.y - inertia.current.y) * 0.05; // Add inertia to the y-axis rotation

    boxRef.current.rotation.y = rotation + inertia.current.x * 0.01; // Update rotation based on mouse position on the x-axis with inertia
    boxRef.current.rotation.x = rotation + inertia.current.y * 0.01; // Update rotation based on mouse position on the y-axis with inertia
    boxRef.current.rotation.z = rotation; // Add rotation on the z-axis
  });

  const handleHover = (isHovered: boolean) => {
    setIsHovered(isHovered);
    setColor(isHovered ? "red" : "#555");
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <a.mesh
      scale={scale}
      ref={boxRef}
      position={[0, 5, 0]}
      castShadow
      onPointerOver={() => handleHover(true)}
      onPointerOut={() => handleHover(false)}
      onClick={handleClick}
    >
      <boxBufferGeometry attach="geometry" args={[height, width, depth]} />
      <meshPhysicalMaterial
        attach="material"
        color={color}
        metalness={0.1}
        roughness={0.5}
      />
    </a.mesh>
  );
}
