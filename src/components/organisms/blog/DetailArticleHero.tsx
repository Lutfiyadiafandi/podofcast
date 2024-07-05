import Heading from "../../atoms/Heading";
import { IoChevronBackSharp } from "react-icons/io5";
import Tag from "../../atoms/Tag";
import data from "../../../utils/data.json";
import Socmed from "../../molecules/Socmed";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

interface IArticle {
  id: number;
  image: string;
  image_src: string;
  image_alt: string;
  title: string;
  slug: string;
  desc: string;
  type: string;
  date: string;
  category: { title: string }[];
}

const DetailArticleHero = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState<IArticle | null>(null);

  useEffect(() => {
    const foundArticle = data.article.find((article) => article.slug === slug);
    if (foundArticle) {
      setArticle(foundArticle);
    }
  }, [slug]);

  return (
    <main className="pt-20 relative z-0 bg-background-pink">
      <section className="max-w-screen-xl mx-auto">
        <div className="px-4 md:px-0 flex justify-between items-center">
          <Link to="/blog">
            <button className="flex gap-1 md:gap-2.5 text-type-m font-medium text-basic-500 hover:text-basic-900">
              <IoChevronBackSharp size={24} className="" />
              Back to article
            </button>
          </Link>
          <span className="text-type-m font-medium text-basic-500">
            {article?.date}
          </span>
        </div>
        <p className="mt-[47px] text-type-m font-bold text-primary text-center">
          {article?.type}
        </p>
        <Heading size="medium" className="mt-2.5 px-4 xl:px-0">
          {article?.title}
        </Heading>
        <div className="flex flex-col items-center">
          <div className="mt-10 flex gap-1.5">
            {article?.category.map((item: any, index) => (
              <Tag text={item.title} key={index} />
            ))}
          </div>
          <Socmed className="mt-10" />
        </div>
      </section>
      <section className="mt-[46px]">
        <img
          src={article?.image}
          alt={article?.image_alt}
          className="w-full aspect-[3/2] object-cover"
        />
      </section>

      {/* SHAPE */}
      <img
        src="/icons/HeroShapeLeft.svg"
        alt="icons"
        className="w-[326px] absolute -top-[60px] -left-[200px] lg:-top-[50px] lg:left-0 -z-10"
      />
      <img
        src="/icons/HeroShapeRightt.png"
        alt="icons"
        className="w-[120px] h-[166.96px] absolute top-[100px] -right-[80px] lg:top-[100px] lg:-right-[40px] -z-10"
      />
      {/* SHAPE */}
    </main>
  );
};

export default DetailArticleHero;
