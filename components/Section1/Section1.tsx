import { useRef, useEffect } from "react";
import gsap from "gsap";
import { Power4 } from "gsap";

export default function Section1() {
  const h1Ref = useRef<HTMLDivElement | null>(null);
  const clipPathRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.fromTo(h1Ref.current, { opacity: 0 }, { opacity: 1, duration: 1 });
  }, []);

  useEffect(() => {
    gsap.to(clipPathRef.current, {
      opacity: 1,
      duration: 3,
      clipPath: `polygon(5% 10%, 93% 5%, 95% 90%, 5% 95%)`,
      ease: Power4.easeOut,
    });
  }, []);

  return (
    <div className="flex bg-white z-10">
      <div></div>
      <section
        ref={clipPathRef}
        style={{
          fontFamily: "Archivo",
          fontWeight: 900,
          clipPath: `polygon(10% 50%, 95% 55%, 89% 50%, 5% 50%)`,
          opacity: 0,
        }}
        className="flex flex-col w-[100vw] bg-cover items-center min-h-screen bg-[url('/img/pic3.webp')] fit bg-center break-all justify-center p-5 z-10 "
      >
        <div className="container flex z-40">
          <h1
            data-scroll
            data-scroll-speed="2"
            ref={h1Ref}
            className="text-white drop-shadow-lg tracking-[-0.06em] xl:text-8xl fit text-6xl bg-red-400 box-border uppercase"
          >
            Adobe Creative / Figma / ReactJS / NextJS / JavaScript / TypeScript
            / CSS / TailwindCSS / Google Cloud Architechure
          </h1>
        </div>
      </section>
    </div>
  );
}
