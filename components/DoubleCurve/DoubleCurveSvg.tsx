interface IDoubleCurve {
  curveYPos: number;
}

export default function DoubleCurveSvg({ curveYPos }: IDoubleCurve) {
  return (
    <svg
      viewBox="0 0 200 100"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className="w-full"
    >
      {/* Grid */}
      <path
        d="M50,0 v0,100"
        stroke="grey"
        strokeDasharray="1"
        strokeWidth={0.1}
      />

      <path
        d="M100,0 v0,100"
        stroke="grey"
        strokeDasharray="1"
        strokeWidth={0.1}
      />

      <path
        d="M150,0 v0,100"
        stroke="grey"
        strokeDasharray="1"
        strokeWidth={0.1}
      />

      <path
        d="M0,50 h0,200"
        stroke="grey"
        strokeDasharray="1"
        strokeWidth={0.1}
      />

      {/* 0 - 100 */}
      <path
        d={`M0, 50 q50,-${curveYPos === 0 ? 0 : curveYPos / 2 - 10} 100, 0`}
        stroke="blue"
        strokeWidth={0.25}
        strokeDasharray="2 1"
      />

      <path
        d={`M0, 50 q50,-${curveYPos <= 25 ? 0 : curveYPos / 2 - 20} 100, 0`}
        stroke="green"
        strokeWidth={0.25}
        strokeDasharray="1 1"
      />

      <path
        d={`M0, 50 q50,-${curveYPos === 0 ? 0 : curveYPos / 2} 100, 0`}
        stroke="red"
        strokeWidth={0.25}
        strokeDasharray="3 1"
      />

      {/* 100-200 */}
      <path
        d={`M100, 50 q50,${
          curveYPos <= 0 ? curveYPos : curveYPos / 2 - 10
        } 100, 0`}
        stroke="blue"
        strokeWidth={0.25}
        strokeDasharray="2 1"
      />

      <path
        d={`M100, 50 q50,${curveYPos <= 25 ? 0 : curveYPos / 2 - 20} 100, 0`}
        stroke="green"
        strokeWidth={0.25}
        strokeDasharray="1 1"
      />

      <path
        d={`M100, 50 q50,${curveYPos === 0 ? 0 : curveYPos / 2} 100, 0`}
        stroke="red"
        strokeWidth={0.25}
        strokeDasharray="3 1"
      />
    </svg>
  );
}
