import { useState } from "react";
import Button from "../../atoms/Button";
import Heading from "../../atoms/Heading";
import data from "../../../utils/data.json";
import Paragraph from "../../atoms/Paragraph";
import Spotify from "/images/Spotify.png";
import GooglePodcast from "/images/GooglePodcast.png";
import Youtube from "/images/Youtube.png";
import SliderPodcast from "../../molecules/SliderPodcast";

const Hero = () => {
  const [podcast] = useState(data.podcast_eps);

  return (
    <main className="pt-16 pb-[140px] relative z-0 overflow-x-hidden flex flex-col gap-[120px] bg-background-pink">
      <section className="text-center">
        <Heading size="large">
          Your Daily <br />
          <span className="text-primary">Podcast</span>
        </Heading>
        <Paragraph size="small" className="mt-10">
          We cover all kinds of categories and <br />a weekly special guest.
        </Paragraph>
        <Button href="#subscribe" className="mt-[60px]">
          Subscribe
        </Button>
      </section>
      <section>
        <SliderPodcast data={podcast} />
      </section>
      <section className="w-full max-w-screen-xl mx-auto lg:px-5 xl:px-0 flex flex-col lg:flex-row items-center justify-between gap-5 py-5 border-y-[1.5px] border-y-basic-500">
        <h3 className="text-type-xl font-bold text-basic-900">Supported by:</h3>
        <div className="flex flex-col md:flex-row items-center gap-5 md:gap-16 xxl:gap-5">
          <figure className="max-w-[275px] xl:w-[275px] h-[84px] flex justify-center items-center">
            <img
              src={Spotify}
              alt={"Image Spotify"}
              className={`max-w-[128px] h-fit`}
            />
          </figure>
          <figure className="max-w-[275px] xl:w-[275px] h-[84px] flex justify-center items-center">
            <img
              src={GooglePodcast}
              alt={"Image Google Podcast"}
              className={`max-w-[198px] h-fit`}
            />
          </figure>
          <figure className="max-w-[275px] xl:w-[275px] h-[84px] flex justify-center items-center">
            <img
              src={Youtube}
              alt={"Image Youtube"}
              className={`max-w-[124px] h-fit`}
            />
          </figure>
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
        className="w-[155.3px] h-[216.08px] absolute top-[130px] -right-[80px] lg:right-[60px] -z-10"
      />
      {/* SHAPE */}
    </main>
  );
};

export default Hero;
