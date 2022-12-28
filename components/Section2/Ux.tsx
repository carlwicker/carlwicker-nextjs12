import { motion } from "framer-motion";

export default function Ux() {
  return (
    <motion.div
      whileInView={{ color: "#60a5fa" }}
      transition={{ duration: 0.25, delay: 0.25 }}
      exit={{ color: "#78716c" }}
      className={`flex gap-5 self-center lg:self-start flex-col font-lg font-normal text-stone-500`}
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
        I build beautiful web sites with clean functional code. I have a passion
        for layout, typography, CSS, TailwindCSS, Framer Motion and all things
        front end. I currently build using ReactJS/NextJS & TailwindCSS on
        Google Cloud Architecture.
      </p>
      <p className="font-medium">
        I&apos;m currently looking for a creative developer role in a Brighton
        agency.
      </p>
    </motion.div>
  );
}
