import Svg from "./Svg";

export default function TheCurve() {
  return (
    <section
      className="bg-gray-600 text-white py-20 overflow-hidden px-5"
      //   style={{ fontFamily: "times" }}
    >
      <div className="container mx-auto flex flex-col gap-20 relative">
        {/* <h2
          className="text-[50px] font-black uppercase leading-[40px] w-fit"
          //   style={{ fontFamily: "times" }}
        >
          Learning <br />
          The SVG <br />
          Curve
        </h2> */}

        <div className="flex py-20 gap-20">
          <div className="lg:flex lg:w-1/3 hidden"></div>
          <div className="font-thin text-xl flex-col flex gap-10 lg:w-1/3 w-full">
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
            <Svg />
          </div>

          <div className="font-thin text-xl flex-col lg:flex gap-10 lg:w-1/3 hidden"></div>
        </div>
      </div>
    </section>
  );
}
