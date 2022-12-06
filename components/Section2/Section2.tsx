export default function Section2() {
  return (
    <section
      style={{ backgroundColor: "#ddd" }}
      className="flex flex-col justify-center font-black w-full min-h-screen rotate-3 scale-125 overflow-hidden"
    >
      <div className="container mx-auto flex flex-col lg:flex-row p-5 scale-75">
        {/* UX */}
        <div className="p-5 -rotate-3">
          <h2
            className="text-9xl text-stone-600 font-black"
            style={{ fontFamily: "times" }}
          >
            UX
          </h2>
          <hr className="border-t-[1px] border-stone-600 border-solid" />
          <p className="font-thin">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
            odit ut quas culpa aut debitis et dolorem magni quae numquam quasi
            cumque! Placeat eos unde, assumenda fugiat saepe rem autem!
          </p>
        </div>
        {/* UI */}
        <div className="p-5 -rotate-3">
          <h2
            className="text-9xl text-stone-700 font-black "
            style={{ fontFamily: "times" }}
          >
            UI
          </h2>
          <hr className="border-t-[1px] border-stone-600 border-solid" />
          <p className="font-thin">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            possimus reprehenderit reiciendis, nesciunt quos nam molestias
            ratione adipisci, voluptates eligendi saepe aspernatur culpa sequi
            delectus velit perspiciatis odio tenetur architecto.
          </p>
        </div>
        {/* DEV */}
        <div className="p-5 -rotate-3">
          <h2
            className="text-9xl text-stone-800 font-black"
            style={{ fontFamily: "times" }}
          >
            DEV
          </h2>
          <hr className="border-t-[1px] border-stone-600 border-solid" />
          <p className="font-thin">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            possimus reprehenderit reiciendis, nesciunt quos nam molestias
            ratione adipisci, voluptates eligendi saepe aspernatur culpa sequi
            delectus velit perspiciatis odio tenetur architecto.
          </p>
        </div>
      </div>
    </section>
  );
}
