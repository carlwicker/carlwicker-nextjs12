export default function Section1() {
  return (
    <div className="flex w-[200vw] bg-red-300">
      <section
        className="flex flex-col w-[100vw] bg-cover items-center min-h-screen bg-[url('/img/pic3.webp')] fit bg-center break-all justify-center p-5 "
        style={{
          fontFamily: "Archivo",
          fontWeight: 900,
        }}
      >
        <div className="sections-container">
          <div className="container">
            <h1
              className="text-white drop-shadow-lg tracking-[-0.06em] xl:text-8xl fit text-6xl bg-red-400 box-border uppercase mix-blend-multiply"
              // data-scroll
              // data-scroll-speed="2"
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
