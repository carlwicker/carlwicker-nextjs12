import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function XScroller() {
  const scroller = useRef(null);
  const block = useRef(null);

  useEffect(() => {
    let blockSet = gsap.utils.toArray(".block-set");

    let to = gsap.to(blockSet, {
      xPercent: () => -100 * (blockSet.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: scroller.current,
        markers: true,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        snap: 1 / (blockSet.length - 1),

        end: () => "+=" + window.innerWidth,
      },
    });

    return () => {
      to.kill();
    };
  }, []);

  return (
    <div className="overflow-hidden flex">
      <div className="overflow-hidden ">
        <div
          id="block"
          ref={scroller}
          className=" flex overflow-x-hidden text-white w-[400vw] m-0 bg-gray-900  relative h-screen"
        >
          <section
            ref={block}
            className="skill-set px-12 w-screen h-full bg-transparent ns-horizontal-section__item flex items-center z-50"
          >
            <Image
              src="https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="1st image"
              width={800}
              height={400}
              className="max-w-[70vw] max-h-[60vh] m-auto"
            />
          </section>
          <section
            ref={block}
            className="skill-set px-12 w-screen h-full bg-transparent ns-horizontal-section__item flex items-center z-50"
          >
            <Image
              src="https://images.pexels.com/photos/2902536/pexels-photo-2902536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="2ndimage"
              width={800}
              height={400}
              className="max-w-[70vw] max-h-[60vh] m-auto"
            />
          </section>
          <section
            ref={block}
            className="skill-set px-12 w-screen h-full bg-transparent ns-horizontal-section__item flex items-center z-50"
          >
            <Image
              src="https://images.pexels.com/photos/1089194/pexels-photo-1089194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="2ndimage"
              width={800}
              height={400}
              className="max-w-[70vw] max-h-[60vh] m-auto"
            />
          </section>
          <section
            ref={block}
            className="skill-set px-12 w-screen h-full bg-transparent ns-horizontal-section__item flex items-center z-50"
          >
            <Image
              src="https://images.pexels.com/photos/1601775/pexels-photo-1601775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="2ndimage"
              width={800}
              height={400}
              className="max-w-[70vw] max-h-[60vh] m-auto"
            />
          </section>
        </div>
      </div>
    </div>
  );
}
