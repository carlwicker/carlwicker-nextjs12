import NextJsLogo from "./NextJsLogo";
import TailwindCssLogo from "./TailwindCssLogo";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#111",
        height: "300px",
        width: "100%",
      }}
    >
      <div className="container flex flex-col text-stone-600 text-xs mx-auto items-center ">
        <div className="flex flex-col gap-5 w-full" id="contact">
          <div className="flex flex-col gap-1 py-10">
            <div className="justify-left w-full">Carl Wicker</div>
            <div className="justify-left w-full">
              10B Bloomsbury Place, Brighton, BN2 1DA, UK.
            </div>
            <div className="justify-left w-full">Tel: +44 (0) 1273 244736</div>
            <div className="justify-left w-full">
              Mobile: +44 (0) 7810 830237
            </div>
            <br />
            <div className="justify-left w-full">
              Email:{" "}
              <a
                href="mailto:carlwicker@gmail.com"
                className="hover:text-white duration-500 ease-in transition"
              >
                carlwicker@gmail.com
              </a>
            </div>
            <div className="justify-left w-full">
              Web:{" "}
              <a
                href="http://carlwicker.co.uk"
                className="hover:text-white duration-500 ease-in transition"
              >
                http://carlwicker.co.uk{" "}
              </a>
            </div>
          </div>
          <hr className="border-t-1 border-stone-600 opacity-30 w-full border-solid" />
          <div className=" flex items-center gap-2 px-5 justify-center">
            <div className="whitespace-nowrap">Made with</div>
            <NextJsLogo />
            <div> & </div>

            <TailwindCssLogo />
          </div>
        </div>
      </div>
    </footer>
  );
}
