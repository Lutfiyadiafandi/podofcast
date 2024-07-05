import Navbar from "../components/organisms/Navbar";
import Hero from "../components/organisms/home/Hero";
import Inspired from "../components/organisms/home/Inspired";
import Testimonial from "../components/organisms/home/Testimonial";
import Footer from "../components/organisms/Footer";
import Membership from "../components/organisms/home/Membership";
import PodcastEps from "../components/organisms/home/PodcastEps";
import Subsribe from "../components/organisms/home/Subsribe";
import Article from "../components/organisms/home/Article";
import CTA from "../components/organisms/CTA";

const Home = () => (
  <>
    <Navbar />
    <Hero />
    <Inspired />
    <Testimonial />
    <Membership />
    <PodcastEps />
    <Subsribe />
    <Article />
    <CTA />
    <Footer />
  </>
);

export default Home;
