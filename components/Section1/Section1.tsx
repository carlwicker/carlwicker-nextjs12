"use client";

import { useEffect } from "react";

export default function Section1() {
  useEffect(() => {
    const parallax: any = document.getElementById("paralax");

    window.addEventListener("scroll", () => {
      let offset = window.pageYOffset - 400;
      parallax.style.backgroundPositionY = offset * 0.7 + "px";
    });
  }, []);

  return (
    <section
      id="paralax"
      style={{
        // backgroundSize: "fit",
        backgroundPositionY: "-280px",
      }}
      className="flex w-full bg-cover items-center min-h-screen justify-center bg-[url('/img/pic1.webp')] fit bg-top"
    >
      <div className="flex flex-col ease-in duration-1000  mx-auto justify-center align-middle">
        <h1
          className="uppercase font-black text-white text-9xl tracking-tighter scale-150 drop-shadow-md mx-auto"
          style={{ fontFamily: "times" }}
        >
          UX UI DEV
        </h1>
        <p className="p-5 text-black drop-shadow-lg tracking-widest text-sm">
          Adobe Creative, Figma, HTML, CSS, TailwindCSS, JavaScript, ReactJS,
          NextJS & Google Cloud Architechure
        </p>
      </div>
    </section>
  );
}
