import Io from "./Io";
import Ui from "./Ui";
import Ux from "./Ux";

export default function Section2() {
  return (
    <section
      style={{
        boxShadow: "20px 25px 45px rgba(0, 0, 0, 0.25)",
      }}
      className="bg-[#ddd] flex flex-col w-full p-5"
    >
      <div className="container flex self-center">
        <div
          className={`flex lg:flex-wrap lg:flex-row flex-col w-full my-20 text-white text-lg gap-10 lg:gap-0`}
        >
          <div className="w-full xl:w-1/3 lg:w-1/2">
            <Ux />
          </div>

          <div className="w-full xl:w-1/3 lg:w-1/2">
            <Ui />
          </div>

          <div className="w-full xl:w-1/3 lg:w-1/2">
            <Io />
          </div>
        </div>
      </div>
    </section>
  );
}
