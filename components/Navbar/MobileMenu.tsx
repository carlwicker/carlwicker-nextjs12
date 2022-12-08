import Link from "next/link";

export default function MobileMenu() {
  return (
    <div className="absolute bg-stone-700 text-white w-full z-30 h-1/ font-extralight uppercase lg:hidden p-5 h-[400px]">
      <div className="container  mx-auto ">
        <div className="flex flex-col">
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
        </div>
      </div>
    </div>
  );
}
