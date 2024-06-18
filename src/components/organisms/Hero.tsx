import Button from "../atoms/Button";
import Heading from "../atoms/Heading";
import Tag from "../atoms/Tag";
import data from "../../utils/data.json";
import { useState } from "react";

const Hero = () => {
  const [hero] = useState(data.hero);
  return (
    <main className="mt-[78px] max-w-screen-xl px-4 md:px-6 lg:px-5 xxl:px-0 mx-auto flex flex-col md:flex-row justify-between gap-[30px]">
      <section className="grow w-full order-last md:order-first">
        <Tag size="large" className="mb-[30px] md:mb-[35px]">
          {hero.tagline}
        </Tag>
        <Heading
          title={hero.title}
          subTitle={hero.subTitle}
          className="gap-[15px] mb-8"
        />
        <Button size="large">{hero.cta.text}</Button>
      </section>
      <section className="flex-none w-4/5 mx-auto md:w-[398px] lg:w-[548px]">
        <img
          src={hero.image.src}
          alt={hero.image.alt}
          className="w-full md:w-[398px] md:h-[408px] lg:w-[548px] lg:h-[558px]"
        />
      </section>
    </main>
  );
};

export default Hero;
