// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import Section1 from "../components/Section1/Section1";
import Section2 from "../components/Section2/Section2";
import Section3 from "../components/Section3/Section3";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div
      style={{
        overflow: "hidden",
        // transform: "rotate3d(1, 2, 3, 36deg)",
      }}
    >
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </div>
  );
}
