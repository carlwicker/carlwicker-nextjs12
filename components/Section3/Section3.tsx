export default function Section3() {
  return (
    <section className=" bg-[url('/img/pic2.webp')] bg-cover h-[390px] bg-fixed w-full flex justify-center align-middle">
      <div className="container flex">
        <div
          className="flex xl:w-1/3 py-20 text-stone-700 text-5xl leading-[0.8em] font-bold lg:w-auto flex-col gap-5 self-center hidden "
          style={{
            fontFamily: "Times",
          }}
        >
          <h2 className="uppercase text-5xl leading-[0.8em] font-normal bg-white w-fit  p-5">
            Brighton <br /> Marina
          </h2>

          <div className="font-thin lg:leading-1 text-lg bg-white w-fit p-5">
            <p className="lg:text-3xl mix-blend-normal ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              nesciunt, autem doloribus.
            </p>
            <br />
            <p>
              Quos dignissimos excepturi voluptatum, voluptates ea ipsum
              officia. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Cumque assumenda, recusandae itaque odio provident magni officia
              nemo repellendus, quam eligendi beatae a ipsa quibusdam harum
              suscipit corporis cum aliquam.
            </p>
          </div>
        </div>
        <div className="flex w-1/3 xl:w-2/3 justify-end py-20"></div>
      </div>
    </section>
  );
}
