import Slider from "./Slider";
import { useState } from "react";
import Svg from "./Svg";

export default function TheCurve() {
  const [sliderValue, setSliderValue] = useState<any>(50);

  return (
    <section className="bg-black text-white py-20 overflow-hidden px-5">
      <div className="container mx-auto flex flex-col gap-20 relative w-full">
        <div className="flex flex-col w-[400px] self-center">
          <Svg sliderValue={sliderValue} />
          <Slider sliderValue={sliderValue} setSliderValue={setSliderValue} />
        </div>
      </div>
    </section>
  );
}
