import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Description from "../components/description";
import TapIn from "../components/Tap-in";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Products from "../components/Product";
import Products2 from "../components/Product2";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Description />
      <Gallery />
      <Products />
      <TapIn />
      <Products2 />
      <Footer />
    </>
  );
};

export default Home;