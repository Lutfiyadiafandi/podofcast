import CTA from "../components/organisms/CTA";
import Footer from "../components/organisms/Footer";
import Navbar from "../components/organisms/Navbar";
import DetailArticle from "../components/organisms/blog/DetailArticle";
import DetailArticleHero from "../components/organisms/blog/DetailArticleHero";
import RelatedArticle from "../components/organisms/blog/RelatedArticle";

const BlogDetail = () => {
  return (
    <>
      <Navbar />
      <DetailArticleHero />
      <DetailArticle />
      <RelatedArticle />
      <CTA />
      <Footer />
    </>
  );
};

export default BlogDetail;
