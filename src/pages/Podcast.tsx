import CTA from "../components/organisms/CTA";
import Footer from "../components/organisms/Footer";
import Navbar from "../components/organisms/Navbar";
import PodcastEpsFull from "../components/organisms/podcast/PodcastEpsFull";
import DetailPodcastEps from "../components/organisms/podcast/DetailPodcastEps";

const Podcast = () => {
  return (
    <>
      <Navbar />
      <DetailPodcastEps />
      <PodcastEpsFull />
      <CTA />
      <Footer />
    </>
  );
};

export default Podcast;
