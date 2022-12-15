"use client";

import { useEffect, useState } from "react";

export default function Section1() {
  const [pageWidth, setPageWidth]: any = useState();

  useEffect(() => {
    setPageWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setPageWidth(window.innerWidth);
    });
  }, [pageWidth]);

  useEffect(() => {
    const parallax: any = document.getElementById("paralax");

    if (pageWidth > 870) {
      parallax.style.backgroundPositionY = "-280px";
    } else {
      parallax.style.backgroundPositionY = "0px";
    }

    window.addEventListener("scroll", () => {
      let offset = window.pageYOffset - 400;

      if (pageWidth > 870) {
        parallax.style.backgroundPositionY = offset * 0.7 + "px";
      } else {
        parallax.style.backgroundPositionY = 0 + "px";
      }
    });
  }, [pageWidth]);

  return (
    <section
      id="paralax"
      className="flex flex-col w-full bg-cover items-center min-h-screen justify-center bg-[url('/img/pic3.webp')] fit bg-center"
    >
      <div className="pointer-events-none">
        <h1
          className="uppercase font-black flex text-center text-white tracking-tighter drop-shadow-md justify-center mx-auto break-words md:text-[200px] text-[200px] "
          style={{ lineHeight: "0.7" }}
        >
          <div className="flex flex-col md:flex-row w-full gap-5 justify-center">
            <div>UX</div>
            <div>UI</div>
            <div>IO</div>
          </div>
        </h1>

        <p className="p-5 text-black drop-shadow-lg tracking-widest text-sm hidden lg:flex ">
          Adobe Creative, Figma, HTML, CSS, TailwindCSS, JavaScript, ReactJS,
          NextJS & Google Cloud Architechure
        </p>
      </div>
    </section>
  );
}
