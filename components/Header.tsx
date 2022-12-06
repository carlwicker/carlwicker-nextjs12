import Link from "next/link";
import Hamburger from "./Hamburger";

interface IHeader {
  setIsOpen: any;
  isOpen: any;
}

export default function Header({ setIsOpen, isOpen }: IHeader) {
  return (
    <div className="container flex mx-auto p-5 text-black justify-between bg-transparent items-center font-1 h-5">
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
        <Link href={"/contact"}>
          <button className="text-xs p-2 hover:text-gray-500 transition ease-in duration-200">
            Contact
          </button>
        </Link>
      </nav>
      <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
        <Hamburger />
      </div>
    </div>
  );
}
