"use client";

import { useEffect, useState } from "react";

export default function Section1() {
  const [pageWidth, setPageWidth]: any = useState();

  useEffect(() => {
    const parallax: any = document.getElementById("paralax");
    parallax.style.backgroundPositionY = "-280px";

    if (pageWidth < 870) {
      parallax.style.backgroundPositionY = "0px";
    }

    window.addEventListener("scroll", () => {
      let offset = window.pageYOffset - 400;
      parallax.style.backgroundPositionY = offset * 0.7 + "px";
    });
  }, [pageWidth]);

  useEffect(() => {
    setPageWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setPageWidth(window.innerWidth);
    });

    console.log(pageWidth);
  }, [pageWidth]);

  return (
    <section
      id="paralax"
      className="flex w-full bg-cover items-center min-h-screen justify-center bg-[url('/img/pic3.webp')] fit bg-center"
    >
      <div className="flex flex-col ease-in duration-1000  mx-auto justify-center align-middle pointer-events-none">
        <h1
          className="uppercase font-black text-white text-9xl tracking-tighter scale-150 drop-shadow-md mx-auto"
          style={{ fontFamily: "times" }}
        >
          UX UI IO
        </h1>
        <p className="p-5 text-black drop-shadow-lg tracking-widest text-sm">
          Adobe Creative, Figma, HTML, CSS, TailwindCSS, JavaScript, ReactJS,
          NextJS & Google Cloud Architechure
        </p>
      </div>
    </section>
  );
}
