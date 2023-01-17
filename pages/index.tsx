import Section1 from "../components/Section1/Section1";
import Section2 from "../components/Section2/Section2";
import Footer from "../components/Footer/Footer";
import ContactForm from "../components/ContactForm/ContactForm";
import BoldArticlePage from "../components/BoldArticlePage/BoldArticlePage";
import DurerCard from "../components/DurerCard/DurerCard";
import { useRef, useEffect } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import Head from "next/head";
import Section1Right from "../components/Section1/Section1RIght";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const { scroll } = useLocomotiveScroll();
  const section1Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let sectionOneContext: any;
    if (scroll) {
      const element = scroll?.el;
      scroll.on("scroll", ScrollTrigger.update);

      ScrollTrigger.scrollerProxy(element, {
        scrollTop(value) {
          return arguments.length
            ? scroll.scrollTo(value, { duration: 0, disableLerp: true })
            : scroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: element.style.transform ? "transform" : "fixed",
      });
      ScrollTrigger.addEventListener("refresh", () => scroll?.update());

      sectionOneContext = gsap.context(() => {
        let sections = gsap.utils.toArray(".section-container");
        gsap.to(section1Ref.current, {
          xPercent: -100,

          scrollTrigger: {
            trigger: section1Ref.current,
            scroller: scroll?.el,
            start: "top",
            end: "bottom",
            scrub: 0.5,
            markers: true,

            pin: true,
            onRefresh: (self) => console.log("refresh", self.start, self.end),
          },
        });
        ScrollTrigger.refresh();
      }, section1Ref);
    }
    return () => sectionOneContext && sectionOneContext.revert();
  }, [scroll]);

  return (
    <div>
      <Head>
        <title>Carl Wicker : Home</title>
        <meta property="og:title" content="Carl Wicker : Home" key="title" />
      </Head>

      <div className="section-container flex" ref={section1Ref}>
        <Section1 />
        <Section1Right />
      </div>

      <Section2 />

      <DurerCard />

      <ContactForm />

      <BoldArticlePage />

      <Footer />
    </div>
  );
}
