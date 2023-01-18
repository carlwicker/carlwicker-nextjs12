import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function Section1() {
  const h1Ref = useRef<null>(null);

  useEffect(() => {
    gsap.fromTo(h1Ref.current, { opacity: 0 }, { opacity: 1, duration: 1 });
  }, [h1Ref]);

  return (
    <div className="flex bg-red-300">
      <section
        className="flex flex-col w-[100vw] bg-cover items-center min-h-screen bg-[url('/img/pic3.webp')] fit bg-center break-all justify-center p-5 "
        style={{
          fontFamily: "Archivo",
          fontWeight: 900,
        }}
      >
        <div className="sections-container">
          <div className="container flex z-40">
            <h1
              data-scroll
              data-scroll-speed="2"
              ref={h1Ref}
              className="text-white drop-shadow-lg tracking-[-0.06em] xl:text-8xl fit text-6xl bg-red-400 box-border uppercase"
            >
              Adobe Creative / Figma / ReactJS / NextJS / JavaScript /
              TypeScript / CSS / TailwindCSS / Google Cloud Architechure
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
}
