import Link from "next/link";

export default function MobileMenu() {
  return (
    <div className="absolute bg-stone-300 text-white w-full z-10 h-full font-extralight uppercase lg:hidden p-5">
      <div className="container  mx-auto ">
        {/* <div className="flex flex-col">
          <Link
            href={"/"}
            className="block cursor-pointer text-xs py-1 hover:text-gray-500 transition ease-in duration-200 capitalize"
          >
            Home
          </Link>

          <div className="text-xs py-1 hover:text-gray-500 transition ease-in duration-200 capitalize">
            <Link href={"/about"}>About</Link>
          </div>
          <div className="text-xs py-1 hover:text-gray-500 transition ease-in duration-200 capitalize">
            <Link href={"/projects"}>Projects</Link>
          </div>
          <div className="text-xs py-1 hover:text-gray-500 transition ease-in duration-200 capitalize">
            <Link href={"/resume"}>Resume</Link>
          </div>
          <div className="text-xs py-1 hover:text-gray-500 transition ease-in duration-200 capitalize">
            <Link href={"/contact"}>Contact</Link>
          </div>
        </div> */}
      </div>
    </div>
  );
}
