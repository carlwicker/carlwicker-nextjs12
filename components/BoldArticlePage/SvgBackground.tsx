import { useEffect, useState } from "react";

interface ISvgBackground {
  color: string;
}

export default function SvgBackground({ color }: ISvgBackground) {
  const svg = {
    up: {
      d: "m.53.5h1920s-.5,366.79,0,585.65-544.5-207.15-557.5-389.15-832,855-957,465S.03,342.94.53,176.47.53.5.53.5Z",
    },
    down: {
      d: "m.53.5h1920s-.5,366.79,0,585.65-307.5-389.15-557.5-389.15S674.03,473,492.03,507,.03,342.94.53,176.47.53.5.53.5Z",
    },
  };

  const [currentSvgD, setSvgCurrentD] = useState<string>(svg.up.d);

  const BgSvgLoop = () => {
    setTimeout(() => {
      if (currentSvgD === svg.up.d) {
        setSvgCurrentD(svg.down.d);
      } else {
        setSvgCurrentD(svg.up.d);
      }
    }, 300);

    return () => {};
  };

  useEffect(() => {
    BgSvgLoop();
  }, [currentSvgD]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 800"
      className="absolute overflow-hidden lg:-mt-[200px] opacity-0 lg:opacity-50"
      fill={color}
    >
      <path
        style={{ transition: "0.3s ease-in-out" }}
        className="overflow-hidden"
        d={currentSvgD}
      ></path>
    </svg>
  );
}
