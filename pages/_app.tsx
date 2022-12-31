import "../styles/globals.css";
import Header from "../components/Navbar/Header";
import type { AppProps } from "next/app";
import { useState } from "react";
import Head from "next/head";
import MobileMenu from "../components/Navbar/MobileMenu";
import { useRouter } from "next/router";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { asPath } = useRouter(); // With next/router
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
      <div key={router.route}>
        <div className="container mx-auto">
          <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

        <LocomotiveScrollProvider
          options={{
            smooth: true,
            // ... all available Locomotive Scroll instance options
          }}
          watch={[router.asPath]}
          location={asPath}
          containerRef={containerRef}
        >
          <div data-scroll-container ref={containerRef}>
            <Component {...pageProps} />
          </div>
        </LocomotiveScrollProvider>
      </div>
    </>
  );
}
