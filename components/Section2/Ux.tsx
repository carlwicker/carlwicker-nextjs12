import { motion } from "framer-motion";

export default function Ux() {
  return (
    <motion.div
      whileInView={{ color: "#60a5fa" }}
      transition={{ duration: 0.25, delay: 0.75 }}
      exit={{ color: "#78716c" }}
      className={`flex gap-5 self-center lg:self-start flex-col font-lg font-normal text-stone-500 xl:pr-10 lg:pl-0 lg:pr-10`}
    >
      <h2
        style={{
          fontFamily: "Archivo",
          letterSpacing: "-15px",
          marginLeft: "-10px",
        }}
        className="text-9xl font-black"
      >
        UX
      </h2>
      <p className="text-2xl">
        I&apos;m a freelance graphic designer and web developer living in
        Brighton, UK.
      </p>
      <p className="text-stone-700">
        IDebitis mollitia odio unde quisquam dolorum porro corporis eos officiis
        ex? Quaerat dolore magnam provident aliquid at consequatur fugiat rem
        laborum aperiam?
      </p>
    </motion.div>
  );
}
