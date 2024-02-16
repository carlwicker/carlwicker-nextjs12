import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, Text } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import Box from "./Box";
import React, { useEffect, useState } from "react";
import GroundPlane from "./GroundPlane";

const ThreeCanvas = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [lightPosition, setLightPosition] = useState<[number, number, number]>([
    0, 0, 0,
  ]);

  const [userAgent, setUserAgent] = useState("");

  useEffect(() => {
    setUserAgent(navigator.userAgent);
  }, []);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
      setLightPosition([
        event.clientX,
        event.clientY,
        -2, // added third number to the tuple
      ]);
    };

    console.log("MyCanvas -> lightPosition", lightPosition);

    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", handleMouseMove);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, [lightPosition]);

  return (
    <div className=" text-9xl">
      <Canvas
        style={{
          height: "100vh",
          backgroundColor: "#444",
          position: "relative",
        }}
      >
        <PerspectiveCamera makeDefault position={[0, 5, 35]} fov={60} />

        <Physics>
          <pointLight intensity={0.1} position={lightPosition} castShadow />
          <Text
            color="white" // default
            anchorX="center" // default
            anchorY="middle" // default
            position={[0, -3, -6]}
            castShadow
            fontSize={1}
            maxWidth={30}
          >
            {userAgent.toUpperCase()}
          </Text>

          <Box mousePosition={mousePosition} width={6} height={6} depth={6} />
        </Physics>
      </Canvas>
    </div>
  );
};

export default ThreeCanvas;
