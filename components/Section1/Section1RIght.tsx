"use client";

export default function Section1Right() {
  return (
    <div className="flex w-[200vw] bg-red-300 ">
      <section
        className="flex flex-col w-[100vw] bg-cover bg-top items-center min-h-screen bg-[url('/img/pic9.webp')] break-all justify-center p-5 "
        style={{
          fontFamily: "Archivo",
          fontWeight: 900,
        }}
      >
        <div className="container">
          <h1 className="text-white text-center drop-shadow-lg justify-center flex -rotate-6 tracking-[-0.06em] xl:text-[290px] fit text-6xl  align-middle bg-black box-border uppercase mix-blend-darken overflow-y-hidden">
            TESTING!
          </h1>
        </div>
      </section>
    </div>
  );
}
