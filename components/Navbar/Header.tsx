import Link from "next/link";
import Hamburger from "./Hamburger";
import { useEffect } from "react";

interface IHeader {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: Boolean;
}

export default function Header({ setIsOpen, isOpen }: IHeader) {
  useEffect(() => {
    document.body.style.overflowY = isOpen ? "hidden" : "scroll";
  }, [isOpen]);

  return (
    <header className="container flex justify-between items-center py-5 h-[50px] fixed z-50">
      <div className="text-base font-bold hover:scale-105 transition ease-out duration-500 lg:invisible">
        <Link
          href={"/"}
          className={`cursor-pointer text-white ${!isOpen && "hidden"} `}
          style={{ fontFamily: "times" }}
        >
          UX UI IO
        </Link>
      </div>
      <nav className="flex gap-3 font-thin">
        <Link href={"/"}>
          <button className="bg-black text-xs p-2 text-white font-bold hover:text-gray-500 transition ease-in duration-200">
            HOME
          </button>
        </Link>

        <Link href={"/experimental"}>
          <button className="bg-black text-xs p-2 text-white font-bold hover:text-gray-500 transition ease-in duration-200">
            EXPERIMENTAL SVG
          </button>
        </Link>

        <Link href={"/contact"}>
          <button className="bg-black text-xs p-2 text-white font-bold hover:text-gray-500 transition ease-in duration-200">
            CONTACT
          </button>
        </Link>
      </nav>
      <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
        {/* <Hamburger isOpen={isOpen} /> */}
      </div>
    </header>
  );
}
