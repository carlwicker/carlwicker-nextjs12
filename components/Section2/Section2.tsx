// IMPROVE ROTATION CSS, SHOULD COUNTER ROTATE DIV CONTAINING ELEMENTS

export default function Section2() {
  return (
    <section
      style={{
        boxShadow: "20px 25px 45px rgba(0, 0, 0, 0.25)",
      }}
      className="bg-[#ddd] flex flex-col justify-center font-black w-full pb-20"
    >
      <div className="container flex self-center xl:gap-10">
        <div className="flex flex-col lg:flex-row xl:gap-20 w-full justify-center lg:py-0 lg:my-10 text-white font-thin text-lg ">
          {/* UX */}
          <div className="flex gap-5 self-center lg:self-start w-full flex-col p-10 bg-stone-500 lg:w-1/3 hover:bg-blue-500 transition ease-in-out duration-200 lg:hover:scale-110 cursor-pointer">
            <h2
              style={{
                fontFamily: "Archivo",
                fontWeight: 900,
                letterSpacing: "-15px",
              }}
              className="text-9xl font-black"
            >
              UX
            </h2>

            <p className="leading-1 text-lg">
              I&apos;m a freelance graphic designer and web developer living in
              Brighton, UK.
            </p>
            <p className="leading-1 text-lg">
              I use React / NextJS on a daily basis for clients and my own
              personal projects. I love CSS, Framer Motion & TailwindCSS!!!! I
              build on Google Cloud Architecture.
            </p>
            <p className="font-medium">
              Currently looking for a full time front end developer role.
            </p>
          </div>

          {/* UI */}
          <div className="flex gap-5 self-center lg:self-start flex-col  text-stone-700 h lg:w-1/3">
            <h2
              style={{
                fontFamily: "Archivo",
                fontWeight: 900,
                letterSpacing: "-15px",
              }}
              className="text-9xl font-black flex"
            >
              UI
            </h2>
            <p className="leading-1 text-3xl lg:text-2xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
              illo alias voluptate rem aliquam, id doloribus repellat
              perspiciatis autem corporis ipsa harum unde iusto temporibus,
              adipisci minus itaque accusantium commodi.
            </p>
            <p className="leading-1 text-lg">
              Illum accusantium eligendi maxime voluptatum temporibus. Ea,
              doloremque? Possimus eaque voluptas reprehenderit?
            </p>
          </div>

          {/* DEV */}
          <div className="flex gap-5 justify-center flex-col  text-stone-900 lg:w-1/3">
            <h2
              style={{
                fontFamily: "Archivo",
                fontWeight: 900,
                letterSpacing: "-15px",
              }}
              className="text-9xl font-black flex"
            >
              IO
            </h2>

            <p className="leading-1 text-3xl lg:text-2xl">
              Offal tumblr big mood knausgaard Brooklyn taiyaki iceland
              wayfarers schlitz readymade artisan. Pour-over brunch cold-pressed
              fanny pack cloud bread snackwave. Jean shorts same green juice
              pour-over sartorial tumeric.
            </p>
            <p className="leading-1 text-lg">
              8-bit kale chips green juice roof party. Artisan irony retro swag.
              Swag ennui messenger bag JOMO, fam tousled offal pork belly woke
              bitters brunch cliche pour-over art party. Deep v you probably
              havent heard of them hot chicken, pour-over waistcoat gluten-free
              neutra +1 Brooklyn XOXO. Photo booth enamel pin listicle
              single-origin coffee, pabst plaid tattooed +1 venmo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
