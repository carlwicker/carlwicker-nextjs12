import "../styles/globals.css";
import Header from "../components/Navbar/Header";
import type { AppProps } from "next/app";
import { useState } from "react";
import Head from "next/head";
import MobileMenu from "../components/Navbar/MobileMenu";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const router = useRouter();

  return (
    <>
      <Head>
        <title>UX/UI/IO</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
      </Head>
      <div className="container">{isOpen && <MobileMenu />}</div>
      <motion.div
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        exit="pageExit"
        transition={{
          duration: 0.75,
        }}
        variants={{
          pageInitial: {
            opacity: 1,
            y: "-60vh",
          },
          pageAnimate: {
            opacity: 1,
            y: "0",
          },
          pageExit: {
            opacity: 0,
            // y: "-60vh",
          },
        }}
      >
        <div className="container mx-auto">
          <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

        <LocomotiveScrollProvider
          options={{
            smooth: true,
            // ... all available Locomotive Scroll instance options
          }}
        >
          <div data-scroll-container>
            <Component {...pageProps} />
          </div>
        </LocomotiveScrollProvider>
      </motion.div>
    </>
  );
}
