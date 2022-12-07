import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Navbar/Header";
import { useState } from "react";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ overflow: "hidden" }}>
      <Head>
        <title>UX UI DEV</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="container mx-auto">
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      <Component {...pageProps} />
    </div>
  );
}
