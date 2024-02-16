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
import Xyz from "../components/Xyz/Xyz";
import PageTransition from "../components/pageTramsitionTest/pageTransition";
import PercentCounter from "../components/MsCounter/PercentCounter";
import ThreeCanvas from "../components/Three/ThreeCanvas";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const { scroll } = useLocomotiveScroll();
  const section1Ref = useRef<HTMLDivElement | null>(null);
  const xScrollRef = useRef<HTMLDivElement | null>(null);

  // Scroll Trigger & Locomotive Scroll
  useEffect(() => {
    let sectionOneContext: any;
    let xScrollContext: any;

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

      // Top Scroll Controller
      sectionOneContext = gsap.context(() => {
        gsap.to(section1Ref.current, {
          xPercent: -100,
          scrollTrigger: {
            trigger: section1Ref.current,
            scroller: scroll?.el,
            start: "top",
            end: "center",
            scrub: 1,
            markers: false,
            pin: true,
            onRefresh: (self) => console.log("refresh", self.start, self.end),
          },
        });

        // XScroll Controller
        xScrollContext = gsap.context(() => {
          gsap.to(xScrollRef.current, {
            xPercent: -200,
            scrollTrigger: {
              trigger: xScrollRef.current,
              scroller: scroll?.el,
              start: "top",
              end: "bottom",
              scrub: 1,
              markers: false,
              pin: true,
              onRefresh: (self) => console.log("refresh", self.start, self.end),
            },
          });
        });

        ScrollTrigger.refresh();
      }, [section1Ref, xScrollRef]);
    }
    return () => {
      sectionOneContext && sectionOneContext.revert();
      xScrollContext && xScrollContext.revert();
    };
  }, [scroll]);

  return (
    <div>
      <Head>
        <title>Carl Wicker : Home</title>
        <meta property="og:title" content="Carl Wicker : Home" key="title" />
      </Head>
      <div className="flex" ref={section1Ref}>
        {/* <Section1 />
        <Section1Right /> */}
      </div>
      {/* <Xyz /> */}
      {/* <div className="absolute top-0 left-0 w-full h-full z-50">
       
      </div> */}
      <Footer />
      <Section1 />
      {/* <PageTransition /> */}
      <ThreeCanvas />
      {/* <Section2 /> */}
      {/* <DurerCard /> */}
      <div className="w-[100vw] h-[100vh hidden lg:flex" ref={xScrollRef}>
        <Section1Right />
        <Section1Right />
        <Section1Right />
      </div>
      {/* <ContactForm /> */}
      {/* <div className="hidden lg:block">
        <BoldArticlePage />
      </div> */}

      <Footer />
      <PercentCounter />
    </div>
  );
}
