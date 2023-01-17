import Image from "next/image";

export default function XScrollOne() {
  return (
    <div className="w-[100vw] h-[100vh] bg-black text-white overflow-hidden -z-10">
      <Image
        src="./img/pic8.webp"
        alt="Image"
        quality={100}
        sizes="100%"
        fill
      />
    </div>
  );
}
