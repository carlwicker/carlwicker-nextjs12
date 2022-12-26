import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function BoldArticlePage() {
  const chatGpt = [
    "The Master of the Digital Domain is a title that is given to a person who is highly skilled in the field of web design and development. This person is an expert at creating stunning, functional websites that are able to capture the attention and engage the audience of their users.",
    "The Master of the Digital Domain is someone who is constantly learning and staying up-to-date with the latest technologies and best practices in web design and development. They are always seeking out new challenges and opportunities to improve their skills and push the boundaries of what is possible in the digital world.",
    "In addition to their technical expertise, the Master of the Digital Domain is also a skilled problem-solver and strategic thinker. They are able to take a project from concept to completion, working closely with clients to understand their needs and create a website that meets their goals.",
    "The Master of the Digital Domain is a true professional, and is highly respected in the industry for their knowledge, skills, and dedication to their craft. They are the go-to person for any organization or individual looking to create a top-quality website that stands out from the competition.",
    "Overall, the Master of the Digital Domain is a valuable asset to any team or project, and is someone who truly understands the power of the digital world and how to harness it to create truly epic websites.",
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, transition: { duration: 2 } },
    show: {
      opacity: 1,
      transition: { duration: 1 },
    },
  };

  const svg = {
    up: {
      d: "m.53.5h1920s-.5,366.79,0,585.65-544.5-207.15-557.5-389.15-832,855-957,465S.03,342.94.53,176.47.53.5.53.5Z",
    },
    down: {
      d: "m.53.5h1920s-.5,366.79,0,585.65-307.5-389.15-557.5-389.15S674.03,473,492.03,507,.03,342.94.53,176.47.53.5.53.5Z",
    },
  };

  const [currentSvgD, setSvgCurrentD] = useState<string>(svg.up.d);

  const BgSvgLoop = () => {
    setTimeout(() => {
      if (currentSvgD === svg.up.d) {
        setSvgCurrentD(svg.down.d);
      } else {
        setSvgCurrentD(svg.up.d);
      }
    }, 300);

    return currentSvgD;
  };

  useEffect(() => {
    BgSvgLoop();
  }, [currentSvgD]);

  const [color, setColor] = useState<string>("pink");

  return (
    <div className="relative overflow-hidden p-0 m-0">
      <section className="min-h-screen bg-pink-300 text-black text-xl font-thin overflow-hidden	 flex bg-gradient-to-r from-indigo-500 lg:p-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 800"
          className="absolute overflow-hidden lg:-mt-[200px] opacity-0 lg:opacity-50"
          fill={color}
        >
          <motion.path
            // variants={svg}
            // initial="up"
            // animate="down"
            // transition={{ type: "spring" }}
            style={{ transition: "0.3s ease-in-out" }}
            className="overflow-hidden"
            d={currentSvgD}
          ></motion.path>
        </svg>

        <div className="container flex lg:flex-row flex-col mx-auto md:py-40 px-5 md:px-0 py-20 gap-20">
          <div className="xl:w-1/3 justify-start flex flex-col text-right lg:w-1/2 z-10">
            <div className=" flex gap-20 text-xs justify-end">
              <p className="text-thin text-black">
                Content created with{" "}
                <a
                  href="https://openai.com"
                  target="_blank"
                  className="text-black"
                  rel="noreferrer"
                >
                  OpenAI ChatGPT
                </a>
                .
                <br />
                Responsive TailwindCSS Typographical Article Element.
                <br />
                SVG Animated Background
                <br />
                All rights reserved.
              </p>
            </div>
            <div className="gap-2 mt-5 justify-end hidden lg:flex">
              <div
                id="white"
                className={`w-[25px] h-[25px] bg-white hover:scale-125 transition rounded-md ${
                  color === "white" ? "border-white" : "border-black"
                } cursor-pointer border-[2px] hover:border-black`}
                onClick={() => {
                  setColor("white");
                }}
              ></div>
              <div
                id="pink"
                className={`w-[25px] h-[25px] bg-pink-300 hover:scale-125 transition ${
                  color === "pink" ? "border-white" : "border-black"
                }  rounded-md cursor-pointer border-[2px] hover:border-black `}
                onClick={() => {
                  setColor("pink");
                }}
              ></div>
            </div>
          </div>

          <div className="flex flex-col gap-20 xl:w-1/3 lg:w-1/2 z-20">
            <h1 className="md:text-[100px] text-[70px] leading-[55px] font-extrabold uppercase tracking-tighter md:leading-[80px] ml-[-5px] mt-[-5px] transform-gpu transition duration-500 ease-out skew-y-12">
              Master of the Digital Domain
            </h1>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              exit="hidden"
              transition={{ duration: 1 }}
              className={`gap-10 flex flex-col`}
            >
              {chatGpt.map((para, index) => (
                <motion.p variants={item} key={index}>
                  {para}
                </motion.p>
              ))}
            </motion.div>
          </div>
          <div className="xl:w-1/3 hidden xl:flex" />
        </div>
      </section>
    </div>
  );
}
