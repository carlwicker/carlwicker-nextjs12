interface ISlider {
  sliderValue: number;
  setSliderValue: any;
}

export default function Slider({ sliderValue, setSliderValue }: ISlider) {
  return (
    <div className="flex flex-col mx-auto">
      <div className="text-md text-center py-10">
        SVG View Box: 100x100 <br />
        Curve Center X:50 Y: {sliderValue}
      </div>
      <input
        style={{ accentColor: "pink", outline: "none", background: "blue" }}
        type="range"
        min="0"
        max="90"
        step="1"
        value={sliderValue}
        className="bg-pink-300  cursor-pointer"
        id="slider"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setSliderValue(e.target.value);
        }}
      ></input>
    </div>
  );
}
