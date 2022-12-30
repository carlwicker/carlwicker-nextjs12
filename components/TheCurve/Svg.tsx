export default function Svg({ sliderValue }: any) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className=""
    >
      <path
        stroke="white"
        strokeWidth={0.5}
        d={`M 0,50 h100, 50`}
        strokeDasharray="1 1"
      />

      <path
        stroke="pink"
        strokeWidth="0.5"
        strokeDasharray="5 1"
        d={`M 0,0 q50, ${sliderValue} ,100, 0`}
        className="duration-200"
      />

      <path
        stroke="grey"
        strokeDasharray="5 5 5 5"
        strokeWidth="0.5"
        d={`M 0,0 q50, ${sliderValue - 20} ,100, 0`}
        className="duration-200 opacity-50"
      />

      <path
        stroke="lightgrey"
        strokeWidth="0.5"
        strokeDasharray="2 2 2 2"
        d={`M 0,0 q50, ${sliderValue - 10} ,100, 0`}
        className="duration-200 opacity-50"
      />

      <circle
        cx="50"
        cy={sliderValue}
        r="2"
        fill="pink"
        className="duration-200"
      />

      <path
        stroke="rgba(255, 255, 255, 0.5)"
        strokeDasharray="1 1"
        strokeWidth="0.5"
        d={`M 0,0 l50, ${sliderValue}`}
        className="duration-200 opacity-50"
      />

      <path
        stroke="rgba(255, 255, 255, 0.5)"
        strokeDasharray="1 1"
        strokeWidth="0.5"
        d={`M 100,0 l-50, ${sliderValue}`}
        className="duration-200 opacity-50"
      />
    </svg>
  );
}
