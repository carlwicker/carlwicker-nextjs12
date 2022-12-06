import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Navbar/Header";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="container mx-auto">
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      <Component {...pageProps} />
    </>
  );
}
