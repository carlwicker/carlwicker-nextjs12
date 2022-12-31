"use client";

export default function Section1() {
  return (
    <section
      className="flex flex-col w-full bg-cover items-center min-h-screen bg-[url('/img/pic3.webp')] fit bg-center break-all justify-center p-5 "
      style={{
        fontFamily: "Archivo",
        fontWeight: 900,
      }}
    >
      <div className="container">
        <h1
          className="text-white drop-shadow-lg tracking-[-0.06em] xl:text-8xl fit text-6xl bg-red-400 box-border uppercase mix-blend-multiply"
          data-scroll
          data-scroll-speed="2"
        >
          Adobe Creative / Figma / ReactJS / NextJS / JavaScript / TypeScript /
          CSS / TailwindCSS / Google Cloud Architechure
        </h1>
      </div>
    </section>
  );
}
