import Top from "../../components/ContactForm/ContactTop";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";
import Head from "next/head";

export default function ContactPage() {
  return (
    <div>
      <Head>
        <title>Carl Wicker : Contact</title>
        <meta property="og:title" content="Carl Wicker : Contact" key="title" />
      </Head>

      <div data-scroll-section>
        <Top />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
}
