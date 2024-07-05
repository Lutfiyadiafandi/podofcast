import AboutHistory from "../components/organisms/about/AboutHistory";
import CTA from "../components/organisms/CTA";
import Contact from "../components/organisms/about/Contact";
import Footer from "../components/organisms/Footer";
import HeroAbout from "../components/organisms/about/HeroAbout";
import Navbar from "../components/organisms/Navbar";
import Sponsor from "../components/organisms/about/Sponsor";

const About = () => (
  <>
    <Navbar />
    <HeroAbout />
    <AboutHistory />
    <Sponsor />
    <Contact />
    <CTA />
    <Footer />
  </>
);

export default About;
