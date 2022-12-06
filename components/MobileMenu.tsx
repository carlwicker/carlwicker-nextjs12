import Link from "next/link";

export default function MobileMenu() {
  return (
    <div className=" text-black font-extralight uppercase lg:hidden z-40">
      <div className="container  mx-auto p-5">
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
