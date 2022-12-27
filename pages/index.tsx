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
import Section3 from "../components/Section3/Section3";
import Footer from "../components/Footer/Footer";
import ContactForm from "../components/ContactForm/ContactForm";
import ArticlePage from "../components/ArticlePage/ArticlePage";
import BoldArticlePage from "../components/BoldArticlePage/BoldArticlePage";
import DurerCard from "../components/DurerCard/DurerCard";

export default function Home() {
  return (
    <div
      style={{
        overflow: "hidden",
        // transform: "rotate3d(1, 2, 5, 20deg)",
      }}
    >
      <Section1 />
      <Section2 />
      <DurerCard />
      <ContactForm />
      <BoldArticlePage />
      <ArticlePage />
      <Section3 />
      <Footer />
    </div>
  );
}
