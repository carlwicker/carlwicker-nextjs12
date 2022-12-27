import Image from "next/image";

export default function DurerCard() {
  return (
    <section className="flex bg-stone-300">
      <div className="container min-h-full mx-auto flex py-20 flex-col p-5">
        <Image
          src={"./img/carl_durer.png"}
          width={400}
          height={400}
          alt="Carl Durer"
          className="rounded-[50%] mx-auto"
        />
        <div className="text-center text-sm p-5">
          Created by DALL·E 2 AI from a photographic self portrait <br /> In the
          style of Albrecht Dürer. <br /> All Rights Reserved.
        </div>
      </div>
    </section>
  );
}
