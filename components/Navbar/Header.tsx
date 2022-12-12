import Link from "next/link";
import Hamburger from "./Hamburger";
import { useEffect } from "react";

interface IHeader {
  setIsOpen: any;
  isOpen: Boolean;
}

export default function Header({ setIsOpen, isOpen }: IHeader) {
  useEffect(() => {
    console.log(isOpen);
    document.body.style.overflowY = isOpen ? "hidden" : "scroll";
  }, [isOpen]);

  return (
    <div className=" container flex justify-between items-center p-5 h-[50px] fixed z-50">
      <div className="text-base font-bold hover:scale-105 transition ease-out duration-500 lg:invisible">
        <Link
          href={"/"}
          className="cursor-pointer text-white"
          style={{ fontFamily: "times" }}
        >
          UX UI IO
        </Link>
      </div>
      <nav className="hidden lg:flex gap-3 font-thin">
        <Link href={"/about"}>
          <button className="text-xs p-2 hover:text-gray-500 transition ease-in duration-200 ">
            About
          </button>
        </Link>
        <Link href={"/projects"}>
          <button className="text-xs p-2 hover:text-gray-500 transition ease-in duration-200 ">
            Projects
          </button>
        </Link>
        <Link href={"/resume"}>
          <button className="text-xs p-2 hover:text-gray-500 transition ease-in duration-200">
            Resume
          </button>
        </Link>
        <Link href={"/#contact"}>
          <button className="text-xs p-2 hover:text-gray-500 transition ease-in duration-200">
            Contact
          </button>
        </Link>
      </nav>
      <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
        <Hamburger isOpen={isOpen} />
      </div>
    </div>
  );
}
