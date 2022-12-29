import { useEffect, useState } from "react";

export default function Svg() {
  const [arcNumber, setArcNumber] = useState<number>(0);
  const [sliderValue, setSliderValue] = useState<any>(70);

  useEffect(() => {
    setTimeout(() => {
      if (arcNumber === 0) {
        setArcNumber(100);
      } else setArcNumber(0);
    }, 1000);
  }, [arcNumber]);

  return (
    <div>
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        className=""
      >
        <path
          stroke="black"
          strokeDasharray="10 10 10 10"
          d={`M 0,0 q50, ${sliderValue} ,100, 0`}
          className="duration-200"
        />

        <path
          stroke="grey"
          strokeDasharray="5 5 5 5"
          d={`M 0,0 q50, ${sliderValue - 10} ,100, 0`}
          className="duration-200 "
        />

        <path
          stroke="lightgrey"
          strokeDasharray="2 2 2 2"
          d={`M 0,0 q50, ${sliderValue - 20} ,100, 0`}
          className="duration-200 "
        />

        <circle
          cx="50"
          cy={sliderValue}
          r="5"
          fill="darkgrey"
          className="duration-200"
        />

        <path
          stroke="rgba(255, 255, 255, 0.15)"
          strokeDasharray="20 2"
          d={`M 0,0 l50, ${sliderValue}`}
          className="duration-200"
        />

        <path
          stroke="rgba(255, 255, 255, 0.15)"
          strokeDasharray="20 2"
          d={`M 100,0 l-50, ${sliderValue}`}
          className="duration-200"
        />
      </svg>
      <div className="flex flex-col mx-auto">
        <div className="mx-auto">
          View Box: 100x100 - Curve Center X:50 Y: {sliderValue}
        </div>
        <input
          type="range"
          min="0"
          max="90"
          step="1"
          value={sliderValue}
          className="slider"
          id="range-slider"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setSliderValue(e.target.value);
          }}
        ></input>
      </div>
    </div>
  );
}
