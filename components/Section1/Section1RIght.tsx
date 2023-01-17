"use client";

export default function Section1Right() {
  return (
    <div className="flex w-[200vw] bg-red-300 z-0">
      <section
        className="flex flex-col w-[100vw] bg-cover bg-top items-center min-h-screen bg-[url('/img/pic9.webp')] justify-center p-20 "
        style={{
          fontFamily: "Archivo",
          fontWeight: 900,
        }}
      >
        <div className="container">
          <h1
            data-scroll
            data-scroll-speed="-3"
            className="text-white text-left drop-shadow-lg justify-left flex -rotate-6 tracking-[-0.06em] xl:text-[160px] fit text-6xl  align-middle bg-black box-border uppercase mix-blend-multiply overflow-y-hidden z-0"
          >
            TESTING EXPERIMENTAL SCROLL
          </h1>
        </div>
      </section>
    </div>
  );
}
