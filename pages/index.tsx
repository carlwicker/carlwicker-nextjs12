// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-9F5ADsRl1ehqvlp5yaGDG0T8K69VqOA",
  authDomain: "carlwicker-nextjs12.firebaseapp.com",
  projectId: "carlwicker-nextjs12",
  storageBucket: "carlwicker-nextjs12.appspot.com",
  messagingSenderId: "54906668271",
  appId: "1:54906668271:web:e5a0ecf6153405d1b1871a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import Section1 from "../components/Section1/Section1";
import Section2 from "../components/Section2/Section2";
import Section3 from "../components/Section3/Section3";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </div>
  );
}
