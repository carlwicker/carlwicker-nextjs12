import NextJsLogo from "./NextJsLogo";
import TailwindCssLogo from "./TailwindCssLogo";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#111",
        height: "300px",
        width: "100%",
        marginTop: "auto",
        display: "flex",
        alignItems: "center",
      }}
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
    </footer>
  );
}
