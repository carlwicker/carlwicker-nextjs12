// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = isSupported().then((yes) => (yes ? getAnalytics(app) : null));

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
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let ctx: any;
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

      ctx = gsap.context(() => {
        let sections = gsap.utils.toArray(".section-container");
        gsap.to(ref.current, {
          xPercent: -100,

          scrollTrigger: {
            trigger: ref.current,
            scroller: scroll?.el,
            start: "top",
            end: "center",
            scrub: 0.5,
            markers: false,

            pin: true,
            onRefresh: (self) => console.log("refresh", self.start, self.end),
          },
        });
        ScrollTrigger.refresh();
      }, ref);
    }
    return () => ctx && ctx.revert();
  }, [scroll]);

  return (
    <div>
      <Head>
        <title>Carl Wicker : Home</title>
        <meta property="og:title" content="Carl Wicker : Home" key="title" />
      </Head>

      <div className="section-container flex" ref={ref}>
        <Section1 />
        <Section1Right />
      </div>
      <div className="section-container">
        <Section2 />
      </div>
      <div className="section-container">
        <DurerCard />
      </div>
      <div className="section-container">
        <ContactForm />
      </div>
      <div className="section-container">
        <BoldArticlePage />
      </div>
      <div className="section-container">
        <Footer />
      </div>
    </div>
  );
}
