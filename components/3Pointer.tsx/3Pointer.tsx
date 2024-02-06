import { motion } from "framer-motion";

export default function ThreePointer() {
  return (
    <motion.section
      className="bg-zinc-900 xl:text-9xl md:text-6xl text-5xl uppercase font-semibold py-40 px-10"
      style={{ fontFamily: "Arial" }}
    >
      <motion.div
        initial={{ x: 200 }}
        animate={{ x: 0, rotate: 0, transition: { duration: 0 } }}
      >
        <div data-scroll data-scroll-speed="-0.75">
          I architect digital realms, crafting lines of logic to shape the
          virtual landscape. I&apos;m a visionary artisan, weaving imagination
          into existence, sculpting ideas into vibrant tapestries that captivate
          and inspire. I am the steadfast anchor, dependable in every storm, a
          beacon of trust and consistency, unwavering in my commitments.
        </div>
        {/* <div data-scroll data-scroll-speed="2">
          I&apos;m a visionary artisan, weaving imagination into existence,
          sculpting ideas into vibrant tapestries that captivate and inspire.
        </div>
        <div data-scroll data-scroll-speed="2">
          I am the steadfast anchor, dependable in every storm, a beacon of
          trust and consistency, unwavering in my commitments.
        </div> */}
      </motion.div>
    </motion.section>
  );
}
