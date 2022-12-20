import NextJsLogo from "./NextJsLogo";
import TailwindCssLogo from "./TailwindCssLogo";

export default function Footer() {
  return (
    <footer
      className="flex mx-auto bg-neutral-900 lg:h-[400px] py-20 leading-5 "
      style={{ fontFamily: "Archivo", fontWeight: "400" }}
    >
      <div className="container flex lg:flex-row flex-col mx-auto text-xs text-neutral-600 ">
        <div
          className=" flex flex-col lg:flex-row justify-end lg:gap-20 w-full "
          id="contact"
        >
          <div>
            <div className="justify-left w-full lg:border-l-green-500 lg:border-l-2 lg:pl-20 pl-10">
              Carl Wicker <br />
              10B Bloomsbury Place
              <br />
              Brighton
              <br />
              BN2 1DA
              <br />
              United Kingdom
            </div>
          </div>

          <div>
            <div className="justify-left w-full  pl-10">
              Tel: +44 (0) 1273 244736 <br /> Mobile: +44 (0) 7810 830237
            </div>
            <div className="justify-left w-full  pl-10">
              <br /> Email:{" "}
              <a
                href="mailto:carlwicker@gmail.com"
                className="hover:text-green-500 duration-200 ease-in transition"
              >
                carlwicker@gmail.com
              </a>
            </div>

            <div className="justify-left w-full pl-10">
              Web:{" "}
              <a
                href="http://carlwicker.co.uk"
                className="hover:text-green-500 duration-200 ease-in transition"
              >
                http://carlwicker.co.uk
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
