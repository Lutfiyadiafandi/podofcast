import ArticleFull from "../components/organisms/blog/ArticleFull";
import CTA from "../components/organisms/CTA";
import Footer from "../components/organisms/Footer";
import HeroBlog from "../components/organisms/blog/HeroBlog";
import Navbar from "../components/organisms/Navbar";

const Blog = () => (
  <>
    <Navbar />
    <HeroBlog />
    <ArticleFull />
    <CTA />
    <Footer />
  </>
);

export default Blog;
