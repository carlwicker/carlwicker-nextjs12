"use client";

import { useEffect, useState } from "react";

export default function ContactTop() {
  const [pageWidth, setPageWidth]: any = useState();

  useEffect(() => {
    setPageWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setPageWidth(window.innerWidth);
    });
  }, [pageWidth]);

  return (
    <section
      className="flex flex-col w-full bg-cover items-center min-h-screen bg-[url('/img/pic3.webp')] fit bg-center break-all justify-center p-5 "
      style={{
        fontFamily: "Archivo",
        fontWeight: 900,
      }}
    >
      <div className="container  mix-blend-multiply">
        <h1
          data-scroll
          data-scroll-speed="2"
          className="text-white drop-shadow-lg tracking-[-0.06em] lg:text-[200px] md:text-[150px] text-[65px] bg-blue-400 uppercase"
        >
          CONTACT
        </h1>
      </div>
    </section>
  );
}
