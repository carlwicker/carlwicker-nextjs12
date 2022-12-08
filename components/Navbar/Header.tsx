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
  }, [isOpen]);

  return (
    <div className="absolute container flex p-5 text-black justify-between items-center">
      <div className="text-base font-thin titlecase">
        <Link href={"/"} className="cursor-pointer">
          Carl Wicker
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
      <div className={`lg:hidden z-40`} onClick={() => setIsOpen(!isOpen)}>
        <Hamburger isOpen={isOpen} />
      </div>
    </div>
  );
}
