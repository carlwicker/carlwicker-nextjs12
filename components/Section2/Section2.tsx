// IMPROVE ROTATION CSS, SHOULD COUNTER ROTATE DIV CONTAINING ELEMENTS

export default function Section2() {
  return (
    <section
      style={{
        boxShadow: "20px 25px 45px rgba(0, 0, 0, 0.25)",
      }}
      className="bg-[#ddd] border-t-[2px] flex flex-col justify-center font-black w-full  rotate-3 scale-125 overflow-hidden"
    >
      <div className="container mx-auto scale-75  xl:gap-10">
        {/* UX */}
        <div className="-rotate-3 flex flex-col lg:flex-row lg:gap-5">
          <div className="p-5">
            <h2
              className="text-9xl text-stone-600 font-black"
              style={{ fontFamily: "times" }}
            >
              UX
            </h2>
            <hr className="border-t-[1px] border-stone-600 border-solid" />
            <div className="font-thin pt-5">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Recusandae culpa sit, nesciunt optio explicabo at quo, quasi non
                illo debitis eveniet earum natus. Necessitatibus quia odit iure!
                Repudiandae, nam officia!
              </p>
              <p>
                Culpa facere doloribus, sapiente eligendi beatae, dolores
                assumenda minima quidem est sequi adipisci, excepturi atque
                dignissimos! Ratione assumenda eveniet, magni nulla quo animi
                hic pariatur porro, sequi itaque error vero?
              </p>
            </div>
          </div>
          {/* UI */}
          <div className="p-5">
            <h2
              className="text-9xl text-stone-700 font-black "
              style={{ fontFamily: "times" }}
            >
              UI
            </h2>
            <hr className="border-t-[1px] border-stone-700 border-solid" />
            <div className="font-thin pt-5">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
                repellendus deserunt voluptatem earum in dolores. Nulla ea nam
                veritatis commodi deserunt ab voluptas quas accusantium
                accusamus, necessitatibus distinctio deleniti nesciunt!
              </p>
              <p>
                Ut vitae eaque ratione ea illo aperiam sit molestias doloremque
                accusamus harum assumenda, perspiciatis neque et nobis animi
                minus enim, corporis, distinctio minima. Ad maiores eligendi
                culpa dolorem sint incidunt.
              </p>
            </div>
          </div>
          {/* DEV */}
          <div className="p-5">
            <h2
              className="text-9xl text-stone-800 font-black"
              style={{ fontFamily: "times" }}
            >
              DEV
            </h2>
            <hr className="border-t-[1px] border-stone-800 border-solid" />
            <div className="font-thin pt-5">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum,
                qui vitae quos optio repellat inventore fugit exercitationem
                unde? Odio accusantium magni voluptatum dolor culpa adipisci
                tenetur rem quos cum debitis!
              </p>
              <p>
                Similique vel error animi doloremque obcaecati neque sed
                repellat vitae atque dicta recusandae, aperiam deleniti fuga
                officia itaque corrupti tenetur exercitationem sint
                necessitatibus odio eligendi nemo perspiciatis. Dignissimos,
                illum veritatis!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
