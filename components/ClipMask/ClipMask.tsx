import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Power4 } from "gsap";

export default function ClipMask() {
  const clipPathRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.to(clipPathRef.current, {
      duration: 1,
      clipPath: `polygon(5% 5%, 93% 5%, 95% 90%, 10% 95%)`,
      ease: Power4.easeInOut,
    });
  }, []);

  return (
    <div
      ref={clipPathRef}
      style={{
        clipPath: `polygon(58% 57%, 73% 85%, 80% 90%, 40% 60%)`,
      }}
      className="flex justify-center align-middle h-screen w-full bg-[url('/img/pic3.webp')] "
    ></div>
  );
}
