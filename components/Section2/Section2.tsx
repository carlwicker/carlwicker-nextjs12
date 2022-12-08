// IMPROVE ROTATION CSS, SHOULD COUNTER ROTATE DIV CONTAINING ELEMENTS

export default function Section2() {
  return (
    <section
      style={{
        boxShadow: "20px 25px 45px rgba(0, 0, 0, 0.25)",
      }}
      className="bg-[#ddd] border-t-[2px] flex flex-col justify-center font-black w-full lg:rotate-3 lg:scale-125 overflow-hidden"
    >
      <div className="container mx-auto lg:scale-75 xl:gap-10">
        {/* UX */}
        <div className="lg:-rotate-3 lg:gap-5 py-[200px] lg:py-0">
          <div className="flex gap-5 justify-center flex-col mx-auto p-5  lg:flex-row">
            <h2
              style={{ fontFamily: "times" }}
              className="text-9xl text-stone-400 font-black flex lg:w-[200px] lg:justify-center"
            >
              UX
            </h2>
            <div className="font-thin lg:p-4 lg:w-1/3">
              <p>
                Photo booth narwhal tofu la croix kogi letterpress activated
                charcoal crucifix umami ethical fit single-origin coffee art
                party kinfolk. Biodiesel etsy la croix tumblr organic
                vexillologist subway tile vegan pinterest. Kitsch flexitarian
                trust fund disrupt. Kickstarter you probably havent heard of
                them lomo viral. Shoreditch crucifix YOLO, cardigan viral venmo
                vinyl brunch vexillologist chicharrones shaman bitters. Shabby
                chic blog fanny pack chambray mustache. Coloring book retro
                hashtag selfies slow-carb tonx, craft beer vexillologist mukbang
                keffiyeh distillery mumblecore 8-bit austin.
              </p>
              <p>
                Ugh meh roof party, readymade lo-fi tumblr skateboard yes plz
                whatever. Green juice tonx neutra, VHS DSA distillery palo santo
                next level kickstarter affogato put a bird on it fam tilde.
              </p>
            </div>
          </div>

          {/* UI */}
          <div className="flex gap-5 justify-center flex-col lg:flex-row mx-auto p-5">
            <h2
              style={{ fontFamily: "times" }}
              className="text-9xl text-stone-500 font-black flex lg:justify-center lg:w-[200px]"
            >
              UI
            </h2>
            <div className="font-thin lg:p-4 lg:w-1/3">
              <p>
                Actually trust fund pok pok unicorn YOLO edison bulb. Ugh art
                party 8-bit church-key brunch, snackwave cardigan af iPhone.
                Small batch sustainable flannel plaid gatekeep flexitarian
                mumblecore artisan. Godard microdosing scenester affogato synth
                flexitarian, four loko typewriter readymade pinterest actually 3
                wolf moon air plant swag.
              </p>
              <p>
                La croix fashion axe live-edge, typewriter ascot enamel pin
                snackwave flannel try-hard echo park. Cardigan pitchfork put a
                bird on it skateboard normcore.
              </p>
            </div>
          </div>

          {/* DEV */}
          <div className="flex gap-5 justify-center flex-col lg:flex-row mx-auto p-5">
            <h2
              style={{ fontFamily: "times" }}
              className="text-9xl text-stone-600 font-black flex  lg:w-[200px] lg:justify-center"
            >
              IO
            </h2>
            <div className="font-thin lg:p-4 lg:w-1/3">
              <p>
                Offal tumblr big mood knausgaard Brooklyn taiyaki iceland
                wayfarers schlitz readymade artisan. Pour-over brunch
                cold-pressed fanny pack cloud bread snackwave. Jean shorts same
                green juice pour-over sartorial tumeric.
              </p>
              <p>
                8-bit kale chips green juice roof party. Artisan irony retro
                swag. Swag ennui messenger bag JOMO, fam tousled offal pork
                belly woke bitters brunch cliche pour-over art party. Deep v you
                probably havent heard of them hot chicken, pour-over waistcoat
                gluten-free neutra +1 Brooklyn XOXO. Photo booth enamel pin
                listicle single-origin coffee, pabst plaid tattooed +1 venmo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
