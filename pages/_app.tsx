import "../styles/globals.css";
import Header from "../components/Navbar/Header";
import type { AppProps } from "next/app";
import { useState } from "react";
import Head from "next/head";
import MobileMenu from "../components/Navbar/MobileMenu";
import { motion, useInView } from "framer-motion";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const [isOpen, setIsOpen] = useState(false);

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
          duration: 2,
        }}
        variants={{
          pageInitial: {
            opacity: 1,
            x: "100vw",
          },
          pageAnimate: {
            opacity: 1,
            x: "0",
          },
          pageExit: {
            opacity: 0,
            x: "100vw",
          },
        }}
      >
        <div className="container mx-auto">
          <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

        <Component {...pageProps} />
      </motion.div>
    </>
  );
}
