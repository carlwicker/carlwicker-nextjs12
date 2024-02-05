import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const contactData = [
    { label: "carlwicker@gmail.com", href: "mailto:carlwicker@gmail.com" },
    { label: "http://carlwicker.co.uk", href: "http://carlwicker.co.uk" },
    { label: "+44 (0) 7810 830 237", href: "tel:0781083027" },
  ];

  const link = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <footer className="flex bg-neutral-900 ">
      <motion.div
        ref={ref}
        className="p-10 pt-40 tracking-tight flex lg:flex-col xl:flex-col flex-col xl:text-5xl md:text-3xl font-bold uppercase text-neutral-300"
      >
        {contactData.map((item: any, i: number) => {
          return (
            <motion.a
              key={i}
              href={item.href}
              className="hover:text-red-400 hover:pl-5 transition-all w-fit"
              style={{ fontFamily: "arial" }}
              initial="hidden"
              whileInView="show"
              transition={{ duration: 1, delay: i * 0.25 }}
              variants={link}
            >
              {item.label}
            </motion.a>
          );
        })}
      </motion.div>
      <motion.div className="flex bg-neutral-900 w-full h-full p-10 pt-40 justify-end">
        <Link href="https://www.instagram.com/carlwicker" target="blank">
          <FaInstagram
            className="text-neutral-300 hover:text-red-400 duration-300 hover:scale-125"
            size={40}
          />
        </Link>
      </motion.div>
    </footer>
  );
}
