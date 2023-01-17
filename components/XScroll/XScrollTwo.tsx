import Image from "next/image";

export default function XScrollTwo() {
  return (
    <div className="w-[100vw] h-[100vh] bg-black text-white -z-10">
      <Image
        src="./img/pic2.webp"
        alt="Image"
        quality={100}
        sizes="100%"
        fill
      />
    </div>
  );
}
