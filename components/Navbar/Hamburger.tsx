interface IHamburger {
  isOpen: Boolean;
}

export default function Hamburger({ isOpen }: IHamburger) {
  return (
    <svg
      className={`cursor-pointer transition ease-in duration-200 lg:hidden ${
        isOpen
          ? "fill-stone-200 hover:fill-red-400"
          : "fill-stone-700 hover:fill-blue-500"
      }`}
      width="25px"
      height="25px"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Menu</title>
      <path
        d="M2 3h12a1 1 0 0 1 0 2H2a1 1 0 1 1 0-2zm0 4h12a1 1 0 0 1 0 2H2a1 1 0 1 1 0-2zm0 4h12a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2z"
        id="a"
      />
    </svg>
  );
}
