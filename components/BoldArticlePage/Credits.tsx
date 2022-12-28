export default function Credits() {
  return (
    <div className="text-thin text-black text-sm">
      <p>
        Content created with{" "}
        <a
          href="https://openai.com"
          target="_blank"
          className="text-black"
          rel="noreferrer"
        >
          OpenAI ChatGPT
        </a>
        .
      </p>
      <p>Responsive TailwindCSS Typographical Article Element</p>
      <div className="lg:hidden">
        SVG Animation background has been disabled for mobile/tablet performance
      </div>
      <div className="hidden lg:block">SVG Animated Background Enabled</div>
      <p>&#169; All rights reserved</p>
    </div>
  );
}
