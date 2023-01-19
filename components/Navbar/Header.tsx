export default function Header({}) {
  return (
    <div>
      <div className="container flex">
        <div className="flex justify-center w-full py-5 fixed z-50">
          <nav className="flex gap-3 text-white font-bold uppercase text-xs">
            <a
              href="https://www.linkedin.com/in/carl-wicker-55968611"
              target="_blank"
              rel="noreferrer"
              className="bg-black p-2 hover:text-blue-400 transition ease-in duration-200 -rotate-3 cursor-pointer"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/carlwicker"
              target="_blank"
              rel="noreferrer"
              className="bg-black p-2 hover:text-slate-400 transition ease-in duration-200 -rotate-6 cursor-pointer"
            >
              GitHub
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
