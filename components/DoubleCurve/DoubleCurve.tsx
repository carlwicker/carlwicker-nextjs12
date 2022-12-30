import DoubleCurveSvg from "./DoubleCurveSvg";
import { useState } from "react";

export default function DoubleCurve() {
  const [curveYPos, setCurveYPos] = useState<number>(100);

  return (
    <section className="bg-gray-900 py-20 text-white px-5">
      <div className="container mx-auto">
        <DoubleCurveSvg curveYPos={curveYPos} />

        <div className="slidecontainer text-center mt-10">
          <div>Amplitude</div>
          <input
            type="range"
            min="0"
            max="200"
            step="25"
            value={curveYPos}
            className="slider"
            id="myRange"
            onChange={(e: any) => {
              let num = e.target.value;
              setCurveYPos(Math.max(0, num));
            }}
          />
        </div>
      </div>
    </section>
  );
}
