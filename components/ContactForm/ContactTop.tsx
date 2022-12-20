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
      className="flex flex-col w-full bg-cover items-center min-h-screen bg-[url('/img/pic3.webp')] fit bg-center break-all justify-center p-5 "
      style={{
        fontFamily: "Archivo",
        fontWeight: 900,
      }}
    >
      <div className="container pointer-events-none">
        <h1 className="text-white drop-shadow-lg tracking-[-0.06em] -rotate-3 lg:text-[200px] md:text-[150px] text-[65px] bg-blue-400 box-border p-0 m-0 uppercase mix-blend-multiply">
          CONTACT
        </h1>
      </div>
    </section>
  );
}
