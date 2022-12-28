interface IColorSelector {
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
}

export default function ColorSelector({ color, setColor }: IColorSelector) {
  return (
    <div className="flex gap-2 justify-end">
      <div
        id="white"
        className={`w-[25px] h-[25px] bg-white hover:scale-125 transition rounded-md ${
          color === "white" ? "border-white" : "border-black"
        } cursor-pointer border-[2px] hover:border-black`}
        onClick={() => {
          setColor("white");
        }}
      ></div>
      <div
        id="pink"
        className={`w-[25px] h-[25px] bg-pink-300 hover:scale-125 transition ${
          color === "pink" ? "border-white" : "border-black"
        }  rounded-md cursor-pointer border-[2px] hover:border-black `}
        onClick={() => {
          setColor("pink");
        }}
      ></div>
    </div>
  );
}
