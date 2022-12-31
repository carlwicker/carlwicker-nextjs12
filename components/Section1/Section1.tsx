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

  return (
    <section
      id="paralax"
      className="flex flex-col w-full bg-cover items-center min-h-screen bg-[url('/img/pic3.webp')] fit bg-center break-all justify-center p-5 "
      style={{
        fontFamily: "Archivo",
        fontWeight: 900,
      }}
    >
      <div className="container">
        <h1
          data-scroll
          className="text-white drop-shadow-lg tracking-[-0.06em] xl:text-7xl lg:-rotate-6 text-6xl bg-red-400 box-border p-0 m-0 uppercase mix-blend-multiply"
        >
          Adobe Creative / Figma / ReactJS / NextJS / JavaScript / TypeScript /
          CSS / TailwindCSS / Framer Motion / Google Cloud Architechure
        </h1>
      </div>
    </section>
  );
}
