import Hero from "../components/Hero";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import TrustBar from "../components/Trustbar";

const Home = () => {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;