import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Box from "./Box";
import GroundPlane from "./GroundPlane";
import React, { useEffect, useState } from "react";

const MyCanvas = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      <Canvas
        style={{ height: "100vh", backgroundColor: "#111" }}
        shadows={{ softShadows: true }}
      >
        <PerspectiveCamera makeDefault position={[0, 5, 20]} fov={60} />
        <pointLight position={[0, 10, 0]} castShadow intensity={0.75} />
        <Box mousePosition={mousePosition} />
        <GroundPlane />
        {/* <OrbitControls /> */}
      </Canvas>
    </div>
  );
};

export default MyCanvas;
