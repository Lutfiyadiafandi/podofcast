import About from "../components/organisms/About";
import Airplane from "../components/organisms/Airplane";
import Facilities from "../components/organisms/Facilities";
import Footer from "../components/organisms/Footer";
import Gallery from "../components/organisms/Gallery";
import Hero from "../components/organisms/Hero";
import Navbar from "../components/organisms/Navbar";
import Package from "../components/organisms/Package";
import Testimonial from "../components/organisms/Testimonial";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Package />
      <Airplane />
      <Facilities />
      <Testimonial />
      <Gallery />
      <Footer />
    </>
  );
};

export default Home;
