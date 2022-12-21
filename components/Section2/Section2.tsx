// IMPROVE ROTATION CSS, SHOULD COUNTER ROTATE DIV CONTAINING ELEMENTS

import { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function Section2() {
  const { ref, inView, entry } = useInView({ threshold: 1 });

  useEffect(() => {
    console.log("Element is in view: ", inView);
  }, [inView]);

  return (
    <section
      style={{
        boxShadow: "20px 25px 45px rgba(0, 0, 0, 0.25)",
      }}
      className="bg-[#ddd] flex flex-col justify-center w-full py-20"
    >
      <div className="container flex self-center xl:gap-10 p-5">
        <div
          className={`flex flex-col lg:flex-row xl:gap-20 w-full justify-center lg:py-0 lg:my-10 text-white text-lg gap-10`}
        >
          {/* UX */}
          <motion.div
            ref={ref}
            className={`flex gap-5 self-center lg:self-start flex-col font-lg font-normal lg:w-1/3 transition duration-200 ${
              inView ? "text-blue-500" : "text-stone-500"
            }`}
          >
            <h2
              style={{
                fontFamily: "Archivo",
                letterSpacing: "-15px",
              }}
              className="text-9xl font-black"
            >
              UX
            </h2>
            <p className="text-2xl">
              I&apos;m a freelance graphic designer and web developer living in
              Brighton, UK.
            </p>
            <p>
              I use React / NextJS on a daily basis for clients and my own
              personal projects. I love CSS, Framer Motion & TailwindCSS!!!! I
              build on Google Cloud Architecture.
            </p>
            <p className="font-medium">
              Currently looking for a full time front end developer role.
            </p>
          </motion.div>

          {/* UI */}
          <div className="flex gap-5 self-center lg:self-start flex-col font-normal text-stone-700 h lg:w-1/3 text-lg">
            <h2
              style={{
                fontFamily: "Archivo",
                letterSpacing: "-15px",
              }}
              className="text-9xl font-black"
            >
              UI
            </h2>
            <p className="text-2xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
              illo alias voluptate rem aliquam, id doloribus repellat
              perspiciatis autem corporis ipsa.
            </p>
            <p>
              Illum accusantium eligendi maxime voluptatum temporibus. Ea,
              doloremque? Possimus eaque voluptas reprehenderit? Pour-over
              brunch cold-pressed fanny pack cloud bread snackwave. Jean shorts
              same green juice pour-over sartorial tumeric.
            </p>
          </div>

          {/* DEV */}
          <div className="flex gap-5 justify-center font-normal flex-col text-stone-900 lg:w-1/3">
            <h2
              style={{
                fontFamily: "Archivo",
                letterSpacing: "-15px",
              }}
              className="text-9xl font-black"
            >
              IO
            </h2>

            <p className="text-2xl">
              Offal tumblr big mood knausgaard Brooklyn taiyaki iceland
              wayfarers schlitz readymade artisan. Pour-over brunch cold-pressed
              fanny pack cloud bread snackwave.
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
