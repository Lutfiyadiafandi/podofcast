import Heading from "../../atoms/Heading";
import data from "../../../utils/data.json";
import { useEffect, useState } from "react";
import Tagline from "../../atoms/Tagline";
import Button from "../../atoms/Button";
import { IoPlay } from "react-icons/io5";
import Host from "/images/Host1.png";
import Tag from "../../atoms/Tag";
import { useParams } from "react-router-dom";

interface IPodcast {
  id: number;
  image: string;
  image_src: string;
  image_alt: string;
  title: string;
  slug: string;
  desc: string;
  category: { title: string }[];
  hostby: string;
}
const DetailPodcastEps = () => {
  const { slug } = useParams();
  const [podcast, setPodcast] = useState<IPodcast | null>(null);

  useEffect(() => {
    const foundPodcast = data.podcast_eps.find(
      (podcast) => podcast.slug === slug
    );
    if (foundPodcast) {
      setPodcast(foundPodcast);
    }
  }, [slug]);

  return (
    <main className="pt-[100px] pb-10 px-4 xl:px-0 relative z-0 bg-background-pink">
      <section className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-[60px] md:gap-[118px] justify-between items-center">
        <img
          src={podcast?.image}
          alt={podcast?.image_alt}
          className="w-full flex-none md:size-[472px] rounded-lg shadow-card"
        />

        <article className="w-full grow">
          <div className="flex flex-wrap justify-between items-center">
            <span className="text-type-l font-bold text-primary">
              Episode {podcast?.id}
            </span>
            <Tagline size={"small"} textColor={"red"}>
              Featured Episode
            </Tagline>
          </div>
          <Heading size="small" className="mt-4">
            {podcast?.title}
          </Heading>
          <hr className="mt-[23px] w-full h-[2px] bg-basic-900" />
          <p className="mt-5 text-type-l font-medium text-basic-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud.
          </p>
          <div className="mt-10 flex justify-between items-center">
            <div className="flex gap-2.5 items-center">
              <img src={Host} className="size-[36px]" alt="Host" />
              <p className="text-type-m font-medium text-basic-500">
                Hosted by:{" "}
                <span className="font-semibold text-primary">Jane Doe</span>
              </p>
            </div>
            <span className="text-type-m font-medium text-basic-500">
              Sep 22, 2021
            </span>
          </div>
          <div className="mt-[60px] flex flex-wrap justify-center lg:justify-start gap-5">
            <Button href="#subscribe">Subscribe</Button>
            <Button variant="secondary" href="" className="flex md:gap-2.5">
              <IoPlay size={24} className="text-basic-900" />
              Listen Now
              <span className="text-primary lowercase">(46 min)</span>
            </Button>
          </div>
        </article>
      </section>
      <section className="mt-20 max-w-screen-xl mx-auto flex gap-[60px] items-center">
        <p className="text-type-m font-bold text-basic-500">Tags:</p>
        <div className="flex gap-1.5">
          {podcast?.category.map((item: any, index) => (
            <Tag key={index} text={item.title} />
          ))}
        </div>
      </section>

      {/* SHAPE */}
      <img
        src="/icons/HeroShapeLeft.svg"
        alt="icons"
        className="w-[326px] absolute -top-[90px] -left-[200px] lg:-top-[50px] lg:left-0 -z-10"
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

export default DetailPodcastEps;
