import React, { useEffect, useState } from "react";
import ThreeCanvas from "../Three/ThreeCanvas";

export default function Combined() {
  const [userAgent, setUserAgent] = useState("");

  useEffect(() => {
    setUserAgent(navigator.userAgent);
  }, []);

  return (
    <div>
      <div></div>
      <ThreeCanvas />
    </div>
  );
}
