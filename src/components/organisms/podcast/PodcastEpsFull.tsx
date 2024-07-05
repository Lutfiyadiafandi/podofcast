import Heading from "../../atoms/Heading";
import data from "../../../utils/data.json";
import { useState } from "react";
import Categories from "../../molecules/Categories";
import CardPodcast from "../../molecules/CardPodcast";
import Title from "../../atoms/Title";

const PodcastEpsFull = () => {
  const [podcast] = useState(data.podcast_eps);
  const Cate = [
    "all",
    "business",
    "comedy",
    "education",
    "health",
    "news",
    "tech",
  ];
  return (
    <main
      id="full-episodes"
      className="py-[140px] px-4 xl:px-0 relative z-0 max-w-screen-xl mx-auto"
    >
      <Title>
        <Heading size="medium">Latest Episode</Heading>

        {/* SHAPE */}
        <img
          src="/icons/SubscribeShape.svg"
          alt="icons"
          className="size-[120px] absolute -top-[60px] -left-[75px] -z-10"
        />
        {/* SHAPE */}
      </Title>
      <Categories category={Cate} className="mt-[100px]" />
      <section className="mt-[100px] relative z-0 grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-10 xl:gap-y-5">
        {[...podcast].reverse().map((item: any) => (
          <CardPodcast
            key={item.id}
            id={item.id}
            image_src={item.image_src}
            image_alt={item.image_alt}
            title={item.title}
            slug={item.slug}
            desc={item.desc}
            host={item.hostby}
            category={item.category}
          />
        ))}

        {/* SHAPE */}
        <img
          src="/icons/PodcastFullShape.svg"
          alt="icons"
          className="size-[240px] absolute -bottom-[150px] -left-[130px] -z-10"
        />
        {/* SHAPE */}
      </section>

      {/* SHAPE */}
      <img
        src="/icons/QuoteShapeLeft.svg"
        alt="icons"
        className="size-[120px] absolute -top-[69px] -right-[150px] -z-10"
      />
      {/* SHAPE */}
    </main>
  );
};

export default PodcastEpsFull;
