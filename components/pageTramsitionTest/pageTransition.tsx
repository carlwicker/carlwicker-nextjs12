import { motion as m } from "framer-motion";
import { useEffect, useState } from "react";

export default function PageTransition() {
  const [elementArr, setElementArr] = useState<string[]>(Array(5).fill("line"));

  useEffect(() => {
    console.log(elementArr);
  }, [elementArr]);

  const container: any = {
    hidden: { x: "100%" },
    show: {
      x: 0,
      transition: {
        staggerChildren: 0.1,
        staggerDirection: 1,
      },
    },
    hover: { backgroundColor: "red" },
  };

  const item = {
    hidden: { x: "100%" },
    show: { x: 0 },
  };

  return (
    <m.div variants={container} initial="hidden" animate="show">
      {elementArr.map((el: string, idx: number) => {
        return (
          <m.div
            key={idx}
            variants={item}
            className="bg-black h-[20vh]"
          ></m.div>
        );
      })}
    </m.div>
  );
}
