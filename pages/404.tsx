export default function FourZeroFour() {
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
          className="text-white drop-shadow-lg tracking-[-0.06em] lg:text-[400px] xl:text-[550px] md:text-[300px] sm:text-[250px] text-[150px] bg-red-400 uppercase"
        >
          404
        </h1>
      </div>
    </section>
  );
}
