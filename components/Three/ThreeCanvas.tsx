import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import Box from "./Box";
import React, { useEffect, useState } from "react";

const MyCanvas = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", handleMouseMove);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, []);

  return (
    <Canvas style={{ height: "100vh", backgroundColor: "#111" }}>
      <PerspectiveCamera makeDefault position={[0, 5, 35]} fov={60} />

      <pointLight intensity={0.6} position={[0, 5, 10]} castShadow />

      <Box mousePosition={mousePosition} width={6} height={6} depth={6} />
    </Canvas>
  );
};

export default MyCanvas;
