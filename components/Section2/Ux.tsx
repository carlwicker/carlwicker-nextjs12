import { AnimatePresence, motion } from "framer-motion";

export default function Ux() {
  const ulElement = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 1, duration: 2 },
      exit: { opacity: 0 },
    },
  };

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
        01
      </h2>
      <p className="text-2xl">
        I&apos;m a freelance graphic designer and web developer living in
        Brighton, UK.
      </p>
    </motion.div>
  );
}
