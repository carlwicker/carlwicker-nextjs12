import Image from "next/image";

export default function DurerCard() {
  return (
    <section className="flex bg-stone-300">
      <div className="container min-h-full mx-auto flex py-20 flex-col p-5">
        <Image
          src={"./img/carl_durer.png"}
          width={492}
          height={512}
          alt="Carl Durer"
          className="rounded-[50%] self-center"
        />

        <div className="text-sm p-5 text-center">
          Created by DALL·E 2 AI from a photographic self portrait <br /> In the
          style of Albrecht Dürer. <br />
          &#169; All Rights Reserved.
        </div>
      </div>
    </section>
  );
}
