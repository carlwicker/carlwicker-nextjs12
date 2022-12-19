// IMPROVE ROTATION CSS, SHOULD COUNTER ROTATE DIV CONTAINING ELEMENTS

export default function Section2() {
  return (
    <section
      style={{
        boxShadow: "20px 25px 45px rgba(0, 0, 0, 0.25)",
      }}
      className="bg-[#ddd] flex flex-col justify-center font-black w-full"
    >
      <div className="container flex self-center  xl:gap-10">
        <div className="flex flex-col lg:flex-row lg:gap-10 w-full justify-center lg:py-0 lg:my-10 text-white font-thin text-lg">
          {/* UX */}
          <div className="flex gap-5 self-center lg:self-start w-full flex-col p-10 bg-stone-500 lg:w-1/3 hover:bg-blue-500 transition ease-in-out duration-200 lg:hover:scale-110">
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

            <p>
              I&apos;m a freelance graphic designer, photographer and web
              developer living in Brighton, UK.
            </p>
            <p>
              My current stack is React, NextJS & TailwindCSS built on Google
              Cloud Architecture.
            </p>
            <p>Currently looking for a full time role.</p>
          </div>

          {/* UI */}
          <div className="flex gap-5 self-center lg:self-start flex-col p-10 text-stone-700 h lg:w-1/3">
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
            <p>
              Actually trust fund pok pok unicorn YOLO edison bulb. Ugh art
              party 8-bit church-key brunch, snackwave cardigan af iPhone. Small
              batch sustainable flannel plaid gatekeep flexitarian mumblecore
              artisan. Godard microdosing scenester affogato synth flexitarian,
              four loko typewriter readymade pinterest actually 3 wolf moon air
              plant swag.
            </p>
            <p>
              La croix fashion axe live-edge, typewriter ascot enamel pin
              snackwave flannel try-hard echo park. Cardigan pitchfork put a
              bird on it skateboard normcore.
            </p>
          </div>

          {/* DEV */}
          <div className="flex gap-5 justify-center flex-col p-10 text-stone-900 lg:w-1/3">
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

            <p>
              Offal tumblr big mood knausgaard Brooklyn taiyaki iceland
              wayfarers schlitz readymade artisan. Pour-over brunch cold-pressed
              fanny pack cloud bread snackwave. Jean shorts same green juice
              pour-over sartorial tumeric.
            </p>
            <p>
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
