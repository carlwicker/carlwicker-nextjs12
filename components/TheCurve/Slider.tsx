interface ISlider {
  sliderValue: number;
  setSliderValue: any;
}

export default function Slider({ sliderValue, setSliderValue }: ISlider) {
  return (
    <div className="flex flex-col mx-auto">
      <div className="text-md text-center">
        SVG Curve Center X:50 Y: {sliderValue} <br />
      </div>
      <input
        style={{}}
        type="range"
        min="0"
        max="100"
        step="25"
        value={sliderValue}
        className="mt-5 cursor-pointer mx-auto"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setSliderValue(e.target.value);
        }}
      ></input>
    </div>
  );
}
