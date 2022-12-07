import NextJsLogo from "../Footer/NextJsLogo";
import TailwindCssLogo from "../Footer/TailwindCssLogo";

export default function Section3() {
  return (
    <section
      style={{
        height: "500px",
        backgroundImage: `url("/img/pic2.webp")`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        width: "100%",
        backgroundColor: "red",
        marginTop: "auto",
        display: "flex",
        alignItems: "flex-end",
      }}
      className=""
    ></section>
  );
}
