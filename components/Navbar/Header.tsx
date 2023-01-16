import Link from "next/link";

interface IHeader {}

export default function Header({}: IHeader) {
  return (
    <header className="container flex justify-between items-center p-5 fixed z-50">
      <div
        className="text-base font-bold hover:scale-105 transition ease-out duration-500 lg:invisible"
        id="ident"
      ></div>
      <nav className="flex gap-3 font-thin">
        <Link href={"/"}>
          <button className="bg-black text-xs p-2 text-white font-bold hover:text-red-400 transition ease-in duration-200 -rotate-6">
            HOME
          </button>
        </Link>

        {/* <Link href={"/experimental"}>
          <button className="bg-black text-xs p-2 text-white font-bold hover:text-green-400 transition ease-in duration-200 -rotate-12">
            EXPERIMENTAL SVG
          </button>
        </Link> */}

        <Link href={"/contact"}>
          <button className="bg-black text-xs p-2 text-white font-bold hover:text-blue-400 transition ease-in duration-200 -rotate-3">
            CONTACT
          </button>
        </Link>

        <a
          href="https://github.com/carlwicker"
          target="_blank"
          rel="noreferrer"
          className="bg-black text-xs p-2 text-white font-bold hover:text-green-400 transition ease-in duration-200 -rotate-3 cursor-pointer"
        >
          GITHUB
        </a>
      </nav>
      <div className="lg:hidden">{/* <Hamburger isOpen={isOpen} /> */}</div>
    </header>
  );
}
