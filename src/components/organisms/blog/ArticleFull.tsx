import Heading from "../../atoms/Heading";
import data from "../../../utils/data.json";
import { useState } from "react";
import CardArticle from "../../molecules/CardArticle";
import Search from "../../atoms/Search";
import Categories from "../../molecules/Categories";
import Title from "../../atoms/Title";

const ArticleFull = () => {
  const [article] = useState(data.article);
  const Cate = [
    "all",
    "business",
    "news",
    "tips & tricks",
    "podcast",
    "productivity",
  ];
  return (
    <main className="pt-[178px] pb-[140px] px-4 xl:px-0 relative max-w-screen-xl mx-auto">
      <Search className="-mt-[215px] mx-auto" />
      <Title className="mt-[141px]">
        <Heading size="medium">Latest Posts</Heading>

        {/* SHAPE */}
        <img
          src="/icons/SubscribeShape.svg"
          alt="icons"
          className="size-[120px] absolute -top-[60px] -left-[75px] -z-10"
        />
        {/* SHAPE */}
      </Title>
      <Categories category={Cate} className="mt-[80px]" />
      <section className="mt-[100px] w-full grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-10">
        {article.map((item: any) => (
          <CardArticle
            key={item.id}
            image_src={item.image_src}
            image_alt={item.image_alt}
            title={item.title}
            slug={item.slug}
            desc={item.desc}
            type={item.type}
            date={item.date}
            category={item.category}
          />
        ))}
      </section>
    </main>
  );
};

export default ArticleFull;
