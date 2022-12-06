import NextJsLogo from "../../components/NextJsLogo";
import TailwindCssLogo from "../../components/TailwindCssLogo";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#111", height: "400px" }}>
      <div className="container flex gap-2  text-white text-xs mx-auto my-0 px-5 items-center z-10">
        <div className="whitespace-nowrap">Made with</div>
        <NextJsLogo />
        <div> & </div>

        <TailwindCssLogo />
      </div>
    </footer>
  );
}
