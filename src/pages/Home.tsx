import Navbar from "../components/organisms/Navbar";
import Hero from "../components/organisms/Hero";
import Company from "../components/organisms/Company";
import AllinOne from "../components/organisms/AllinOne";
import WhatIs from "../components/organisms/WhatIs";
import Features from "../components/organisms/Features";
import Integrations from "../components/organisms/Integrations";
import Testimonial from "../components/organisms/Testimonial";
import News from "../components/organisms/News";
import Footer from "../components/organisms/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Company />
      <AllinOne />
      <WhatIs />
      <Features />
      <Integrations />
      <Testimonial />
      <News />
      <Footer />
    </>
  );
};

export default Home;
