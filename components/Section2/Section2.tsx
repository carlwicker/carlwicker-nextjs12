import Io from "./Io";
import Ui from "./Ui";
import Ux from "./Ux";

export default function Section2() {
  return (
    <section
      style={{
        boxShadow: "20px 25px 45px rgba(0, 0, 0, 0.25)",
      }}
      className="bg-[#ddd] flex flex-col justify-center w-full py-20 px-5 md:px-0"
    >
      <div className="container flex self-center xl:gap-10">
        <div
          className={`flex flex-col lg:flex-row xl:gap-20 w-full justify-center lg:py-0 lg:my-10 text-white text-lg gap-10`}
        >
          <div className="w-full lg:w-1/3">
            <Ux />
          </div>

          <div className="w-full lg:w-1/3">
            <Ui />
          </div>

          <div className="w-full lg:w-1/3">
            <Io />
          </div>
        </div>
      </div>
    </section>
  );
}
