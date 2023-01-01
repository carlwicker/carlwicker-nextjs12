import { motion } from "framer-motion";
import { useState } from "react";
import ColorSelector from "./ColorSelector";
import Credits from "./Credits";
import SvgBackground from "./SvgBackground";

export default function BoldArticlePage() {
  const [color, setColor] = useState<string>("pink");

  const chatGpt = [
    "The Master of the Digital Domain is a title that is given to a person who is highly skilled in the field of web design and development. This person is an expert at creating stunning, functional websites that are able to capture the attention and engage the audience of their users.",
    "The Master of the Digital Domain is someone who is constantly learning and staying up-to-date with the latest technologies and best practices in web design and development. They are always seeking out new challenges and opportunities to improve their skills and push the boundaries of what is possible in the digital world.",
    "In addition to their technical expertise, the Master of the Digital Domain is also a skilled problem-solver and strategic thinker. They are able to take a project from concept to completion, working closely with clients to understand their needs and create a website that meets their goals.",
    "The Master of the Digital Domain is a true professional, and is highly respected in the industry for their knowledge, skills, and dedication to their craft. They are the go-to person for any organization or individual looking to create a top-quality website that stands out from the competition.",
    "Overall, the Master of the Digital Domain is a valuable asset to any team or project, and is someone who truly understands the power of the digital world and how to harness it to create truly epic websites.",
  ];

  // Framer Motion Content Stager Controllers
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

  return (
    <div className="relative overflow-hidden p-0 m-0 ">
      <section className="min-h-screen bg-pink-300 text-black text-xl font-thin flex bg-gradient-to-r from-indigo-500 lg:p-0">
        <div className="absolute w-full">
          <SvgBackground color={color} />
        </div>

        <div className="container flex lg:flex-row flex-col mx-auto md:py-40 px-5 py-20 gap-20">
          <div className="xl:w-1/3 justify-start flex flex-col text-right lg:w-1/2 z-10">
            <div className="gap-2 mt-5 justify-end  lg:flex flex-col">
              <Credits />

              <div className="hidden lg:flex lg:justify-end">
                <ColorSelector color={color} setColor={setColor} />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-20 xl:w-1/3 lg:w-1/2 z-20">
            <h1 className="md:text-[90px] text-[70px] leading-[55px] font-extrabold uppercase tracking-tighter md:leading-[80px] ml-[-5px] mt-[-5px] transform-gpu transition duration-500 ease-out skew-y-12">
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

          <div className="xl:flex xl:w-1/3 hidden" />
        </div>
      </section>
    </div>
  );
}
