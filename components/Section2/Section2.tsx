export default function Section2() {
  return (
    <section
      style={{
        backgroundColor: "#ddd",
        borderTop: "1px solid white",
        boxShadow: "20px 25px 45px rgba(0, 0, 0, 0.25)",
      }}
      className="flex flex-col justify-center font-black w-full min-h-screen rotate-3 scale-125 overflow-hidden"
    >
      <div className="container mx-auto flex flex-col lg:flex-row p-5 scale-75 lg:gap-5 xl:gap-10">
        {/* UX */}
        <div className="p-5 -rotate-3 hover:scale-105 ease-in duration-200 ">
          <h2
            className="text-9xl text-stone-600 font-black"
            style={{ fontFamily: "times" }}
          >
            UX
          </h2>
          <hr className="border-t-[1px] border-stone-600 border-dashed" />
          <div className="font-thin">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Recusandae culpa sit, nesciunt optio explicabo at quo, quasi non
              illo debitis eveniet earum natus. Necessitatibus quia odit iure!
              Repudiandae, nam officia!
            </p>
            <p>
              Culpa facere doloribus, sapiente eligendi beatae, dolores
              assumenda minima quidem est sequi adipisci, excepturi atque
              dignissimos! Ratione assumenda eveniet, magni nulla quo animi hic
              pariatur porro, sequi itaque error vero?
            </p>
            <p>
              Ratione voluptate harum repudiandae necessitatibus? Tempora ad,
              quibusdam voluptates accusamus quo quidem, iusto ratione, impedit
              odit dignissimos dicta minima. Aut rerum distinctio, porro aliquid
              cupiditate tempore molestias repudiandae quia hic?
            </p>
            <p>
              Natus nostrum nemo animi earum officiis vero, rerum possimus
              asperiores expedita hic, corrupti commodi atque quo facere
              mollitia? Porro itaque cum quibusdam corporis debitis in ex
              facilis quae rem natus!
            </p>
          </div>
        </div>
        {/* UI */}
        <div className="p-5 -rotate-3 hover:scale-105 ease-in duration-200">
          <h2
            className="text-9xl text-stone-700 font-black "
            style={{ fontFamily: "times" }}
          >
            UI
          </h2>
          <hr className="border-t-[1px] border-stone-700 border-dashed" />
          <div className="font-thin">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
              repellendus deserunt voluptatem earum in dolores. Nulla ea nam
              veritatis commodi deserunt ab voluptas quas accusantium accusamus,
              necessitatibus distinctio deleniti nesciunt!
            </p>
            <p>
              Ut vitae eaque ratione ea illo aperiam sit molestias doloremque
              accusamus harum assumenda, perspiciatis neque et nobis animi minus
              enim, corporis, distinctio minima. Ad maiores eligendi culpa
              dolorem sint incidunt.
            </p>
            <p>
              Tempore delectus labore illum dolor pariatur architecto,
              perferendis necessitatibus est aliquid nihil, atque inventore
              praesentium, sequi quibusdam cumque cum illo repellendus sit
              maxime reiciendis nemo facere voluptatum aspernatur. Dolore,
              debitis.
            </p>
            <p>
              Vitae voluptatem ipsum dicta beatae nam earum eius, ea fugiat
              quibusdam minus fugit. Ex blanditiis, eaque sit consectetur
              corrupti maxime accusantium, tempora aut error temporibus dolorum
              tenetur, obcaecati mollitia veniam.
            </p>
          </div>
        </div>
        {/* DEV */}
        <div className="p-5 -rotate-3 hover:scale-105 ease-in duration-200">
          <h2
            className="text-9xl text-stone-800 font-black"
            style={{ fontFamily: "times" }}
          >
            DEV
          </h2>
          <hr className="border-t-[1px] border-stone-800 border-dashed" />
          <div className="font-thin">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum,
              qui vitae quos optio repellat inventore fugit exercitationem unde?
              Odio accusantium magni voluptatum dolor culpa adipisci tenetur rem
              quos cum debitis!
            </p>
            <p>
              Similique vel error animi doloremque obcaecati neque sed repellat
              vitae atque dicta recusandae, aperiam deleniti fuga officia itaque
              corrupti tenetur exercitationem sint necessitatibus odio eligendi
              nemo perspiciatis. Dignissimos, illum veritatis!
            </p>
            <p>
              Qui tempore, dicta amet est eaque sapiente eius culpa cupiditate.
              Facere necessitatibus harum vero veniam ad distinctio laborum
              cupiditate quia eveniet qui ex ipsam, dolor dicta. Delectus nemo
              voluptatem sequi!
            </p>
            <p>
              Alias libero delectus repellendus eum iste neque et laborum
              eligendi placeat. Magni inventore officia assumenda accusamus rem
              illo. Nisi ad eum iusto pariatur? Aliquid quibusdam optio ea nam,
              veniam aperiam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
