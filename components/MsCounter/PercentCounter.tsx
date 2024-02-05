"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function PercentCounter() {
  const [num, setNum] = useState(0);
  const [nav, setNav] = useState() as any;

  useEffect(() => {
    function plusOne() {
      setNum(num + 1);
    }

    setTimeout(plusOne, 10);
  }, [num]);

  useEffect(() => {
    setNav(navigator?.userAgent);
  }, []);

  return (
    <section
      className="flex w-full  overflow-hidden transform-gpu bg-[#333] text-[#999] "
      style={{ fontFamily: "Arial" }}
    >
      <motion.div
        whileInView={{
          scale: 1,
          rotate: -0,
          transition: { duration: 0.33 },
        }}
        whileHover={{ scale: 1 }}
        whileTap={{ scale: 1 }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        className="flex text-[100px] transform-gpu flex-col bg-neutral-900 font-bold text-neutral-500 p-10 w-full border-box]"
        style={{ rotate: 0 }}
      >
        <div className="flex">
          {num}
          <div className="self-center font-light  text-3xl tracking-normal">
            ms
          </div>
        </div>

        <div className="text-sm w-full font-light">{nav}</div>
      </motion.div>
    </section>
  );
}
