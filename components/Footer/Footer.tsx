export default function Footer() {
  return (
    <footer className="bg-neutral-900 lg:h-[400px] py-20">
      <div className="container mx-auto flex lg:flex-row flex-col text-xs text-neutral-600 gap-0 md:gap-20 justify-end">
        <div className="hidden md:w-1/2 xl:w-1/3 md:block"></div>
        <div className="hidden xl:w-1/3 xl:block"></div>

        <div className="flex flex-col w-full xl:w-1/3 md:w-1/2">
          <div className="">
            Carl Wicker
            <br />
            10B Bloomsbury Place
            <br />
            Brighton
            <br />
            BN2 1DA
            <br />
            United Kingdom
          </div>

          <div className="">
            Tel: +44 (0) 1273 244736 <br /> Mobile: +44 (0) 7810 830237
          </div>

          <div className="">
            <br /> Email:{" "}
            <a href="mailto:carlwicker@gmail.com">carlwicker@gmail.com</a>
          </div>

          <div className="">
            Web: <a href="http://carlwicker.co.uk">http://carlwicker.co.uk</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
