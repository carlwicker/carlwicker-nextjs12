import { useRef, useEffect } from "react";
import gsap from "gsap";
import { Power4 } from "gsap";

export default function Section1() {
  const h1Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.fromTo(
      h1Ref.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5, ease: Power4.easeIn }
    );
  }, []);

  return (
    <div className="flex bg-white z-10">
      <div></div>
      <section
        style={{
          fontFamily: "Arial",
          fontWeight: 800,
          opacity: 1,
        }}
        className="flex flex-col w-[100vw] bg-cover items-center min-h-screen bg-[url('/img/subway.jpg')] fit bg-center justify-center p-5 z-10 uppercase"
      >
        <div className="container flex z-40">
          <h1
            data-scroll
            data-scroll-speed="2"
            ref={h1Ref}
            className="text-white drop-shadow-lg tracking-[-0.06em] xl:text-8xl text-3xl bg-red-400 box-border break-all"
          >
            Adobe Creative / Figma / ReactJS / NextJS / JavaScript / TypeScript
            / CSS / TailwindCSS / Google Firebase
          </h1>
        </div>
      </section>
    </div>
  );
}
