import Slider from "./Slider";
import { useState } from "react";
import Svg from "./Svg";

export default function TheCurve() {
  const [sliderValue, setSliderValue] = useState<any>(50);

  return (
    <section className="bg-black text-white py-20 overflow-hidden px-5">
      <div className="container mx-auto flex flex-col gap-20 relative">
        <div className="lg:flex-row flex py-20 gap-20 flex-col">
          <div className="flex flex-col xl:w-1/3 md:w-1/2 self-center lg:w-1/2 w-full">
            <div className="">
              <Svg sliderValue={sliderValue} />
            </div>

            <div>
              <Slider
                sliderValue={sliderValue}
                setSliderValue={setSliderValue}
              />
            </div>
          </div>

          <div className="font-thin text-xl flex-col flex gap-10 xl:w-1/3 w-full lg:w-1/2">
            {/* <p>
              SVG curves are a way to create smooth, curved lines and shapes in
              Scalable Vector Graphics (SVG) documents. These curves are defined
              using mathematical equations, and can be created using the path
              element in SVG. There are three main types of curves that can be
              used in SVG: quadratic Bézier curves, cubic Bézier curves, and
              arcs.
            </p>
            <p>
              Quadratic Bézier curves are defined by two control points, while
              cubic Bézier curves are defined by three control points. Arcs are
              defined by a center point, a radius, and an angle. Understanding
              how these curves work and how to manipulate the control points can
              help you create more complex and visually interesting shapes in
              your SVG documents.
            </p> */}
          </div>

          <div className="hidden xl:flex flex-col gap-10 xl:w-1/3"></div>
        </div>
      </div>
    </section>
  );
}
