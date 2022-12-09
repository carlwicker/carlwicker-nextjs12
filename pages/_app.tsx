import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Navbar/Header";
import { useState } from "react";
import Head from "next/head";
import MobileMenu from "../components/Navbar/MobileMenu";

export default function App({ Component, pageProps }: AppProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Head>
        <title>UX/UI/IO</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
      </Head>
      <div className="container">{isOpen && <MobileMenu />}</div>
      <div style={{ overflow: "hidden" }}>
        <div className="container mx-auto">
          <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

        <Component {...pageProps} />
      </div>
    </>
  );
}
