import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <footer className="bg-neutral-900 lg:h-[400px] py-10 h-[600px]">
      <div
        ref={ref}
        className={`container mx-auto flex lg:flex-row flex-col text-xs text-neutral-600 gap-20 justify-end px-5 md:px-0 ${
          isInView ? "mt-0 opacity-100" : "mt-10 opacity-0"
        } duration-500 ease-in`}
      >
        <div className="md:w-1/2 xl:w-1/3">
          <div className="">
            Email:{" "}
            <a href="mailto:carlwicker@gmail.com">carlwicker@gmail.com</a>
          </div>
          <div className="">
            Web: <a href="http://carlwicker.co.uk">http://carlwicker.co.uk</a>
          </div>
        </div>
        <div className="hidden xl:w-1/3 xl:block"></div>

        <div className="flex flex-col w-full xl:w-1/3 md:w-1/2 gap-5">
          <div className="">
            Carl Wicker
            <br />
            10B Bloomsbury Place
            <br />
            Brighton
            <br />
            BN2 1DA
            <br />
            United Kingdom
          </div>

          <div className="">
            Tel: +44 (0) 1273 244736
            <br />
            Mobile: +44 (0) 7810 830237
          </div>
        </div>
      </div>
    </footer>
  );
}
