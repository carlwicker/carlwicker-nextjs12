import "../styles/globals.css";
import { useRef } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import Header from "../components/Navbar/Header";

export default function App({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();
  const containerRef = useRef(null);
  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        smartphone: {
          smooth: true,
        },
        tablet: {
          smooth: true,
        },
      }}
      watch={[]}
      location={asPath}
      onLocationChange={(scroll: any) =>
        scroll.scrollTo(0, { duration: 0, disableLerp: true })
      }
      containerRef={containerRef}
    >
      <div data-scroll-container ref={containerRef}>
        <div className="">
          <Header />
        </div>

        <Component {...pageProps} />
      </div>
    </LocomotiveScrollProvider>
  );
}
