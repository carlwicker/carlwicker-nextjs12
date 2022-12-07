import NextJsLogo from "../Footer/NextJsLogo";
import TailwindCssLogo from "../Footer/TailwindCssLogo";

export default function Section3() {
  return (
    <section
      style={{
        height: "500px",
        backgroundImage: `url("/img/pic2.webp")`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        width: "100%",
        backgroundColor: "red",
        marginTop: "auto",
        display: "flex",
        alignItems: "flex-end",
      }}
      className=""
    >
      <div
        className="flex flex-col text-stone-600 text-xs mx-auto px-10 items-center  scale-100 container p-10"
        style={{
          backgroundColor: "#111",
          height: "250px",
          left: "150px",
        }}
      >
        <div className="container flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <div className="justify-left w-full">Carl Wicker</div>
            <div className="justify-left w-full">
              10B Bloomsbury Place, Brighton, BN2 1DA, UK
            </div>
            <div className="justify-left w-full">Tel: +44 (0) 1273 244736</div>
            <div className="justify-left w-full">
              Mobile: +44 (0) 7810 830237
            </div>
            <div className="justify-left w-full hover:text-white duration-500 ease-in transition">
              <a href="mailto:carlwicker@gmail.com">carlwicker@gmail.com</a>
            </div>
          </div>
          <hr className="border-t-1 border-stone-600 opacity-30 w-full border-dashed" />
          <div className=" flex items-center gap-2 justify-end">
            <div className="whitespace-nowrap">Made with</div>
            <NextJsLogo />
            <div> & </div>

            <TailwindCssLogo />
          </div>
        </div>
      </div>
    </section>
  );
}
