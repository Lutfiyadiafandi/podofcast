import Heading from "../../atoms/Heading";
import data from "../../../utils/data.json";
import { useState } from "react";
import Paragraph from "../../atoms/Paragraph";
import Button from "../../atoms/Button";
import CardArticle from "../../molecules/CardArticle";

const RelatedArticle = () => {
  const [article] = useState(data.article);
  return (
    <main className="py-[140px] px-4 xl:px-0 relative z-0 bg-background-pink">
      <Heading size="medium">Related Article</Heading>
      <Paragraph size="large" className="mt-5">
        News, tips, tricks and more
      </Paragraph>
      <section className="mt-[100px] relative z-0 max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-10">
        {article.slice(0, 2).map((item: any) => (
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

        {/* SHAPE */}
        <img
          src="/icons/ArticleShapeLeft.svg"
          alt="icons"
          className="size-[185px] absolute -top-[85px] -left-[85px] -z-10"
        />
        <img
          src="/icons/ArticleShapeRight.svg"
          alt="icons"
          className="size-[240px] absolute -bottom-[100px] -right-[0px] xxl:-bottom-[150px] xxl:-right-[130px] -z-10"
        />
        {/* SHAPE */}
      </section>
      <section className="mt-[100px] text-center">
        <Button href="blog">Browse All</Button>
      </section>
    </main>
  );
};

export default RelatedArticle;
