import NextJsLogo from "../Footer/NextJsLogo";
import TailwindCssLogo from "../Footer/TailwindCssLogo";

export default function Section3() {
  return (
    <section
      style={{
        height: "400px",
        backgroundImage: `url("/img/pic2.webp")`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container flex gap-2  text-white text-xs mx-auto my-0 px-5 items-center z-10">
        <div className="whitespace-nowrap">Made with</div>
        <NextJsLogo />
        <div> & </div>

        <TailwindCssLogo />
      </div>
    </section>
  );
}
