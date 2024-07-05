import Heading from "../../atoms/Heading";
import data from "../../../utils/data.json";
import { useState } from "react";
import Paragraph from "../../atoms/Paragraph";
import Button from "../../atoms/Button";
import CardPodcast from "../../molecules/CardPodcast";
import IconSection from "../../atoms/IconSection";

const PodcastEps = () => {
  const [podcast] = useState(data.podcast_eps);
  return (
    <main
      id="recent-episodes"
      className="py-[140px] px-4 xl:px-0 relative z-0 bg-background-pink"
    >
      <IconSection variant="black" />
      <Heading size="medium">Recent Episodes</Heading>
      <Paragraph size="large" className="mt-5">
        Available on your favorite platform
      </Paragraph>
      <section className="mt-[100px] relative z-0 overflow-x-hidden xl:overflow-x-visible max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-10 xl:gap-y-5">
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
          src="/icons/PodcastShape.svg"
          alt="icons"
          className="size-[240px] absolute -top-[170px] -right-[150px] -z-10"
        />
        {/* SHAPE */}
      </section>
      <section className="mt-[100px] text-center">
        <Button href="podcast/are-you-a-perplexed-mind-person">
          Browse All Episodes
        </Button>
      </section>
    </main>
  );
};

export default PodcastEps;
