import "../styles/globals.css";

import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
};

const app = initializeApp(firebaseConfig);
const analytics = isSupported().then((yes) => (yes ? getAnalytics(app) : null));

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
