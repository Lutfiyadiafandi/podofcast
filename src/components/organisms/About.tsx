import Button from "../atoms/Button";
import Heading from "../atoms/Heading";
import TextIcon from "../atoms/TextIcon";
import data from "../../utils/data.json";
import { useState } from "react";

const About = () => {
  const [about] = useState(data.about);
  return (
    <div className="mt-[100px] bg-background pt-[100px] pb-[120px]">
      <main className="max-w-screen-xl px-4 md:px-6 lg:px-5 xxl:px-0 mx-auto flex flex-col md:flex-row justify-between items-center gap-[34px] lg:gap-[54px]">
        <section className="flex-none w-4/5 md:w-[306px] lg:w-[506px] mx-auto md:mx-0">
          <img
            src={about.image.src}
            alt={about.image.alt}
            className="w-full md:w-[306px] md:h-[391px] lg:w-[506px] lg:h-[591px]"
          />
        </section>
        <section className="grow w-full">
          <Heading
            title={about.title}
            subTitle={about.subTitle}
            className="gap-[15px] lg:gap-[25px] mb-8 lg:mb-10"
          />
          <div className="flex flex-col gap-4 lg:gap-5 mb-8 lg:mb-10">
            {about.benefits.map((benefit: any, index) => (
              <TextIcon key={index} icon={benefit.icon} text={benefit.text} />
            ))}
          </div>
          <div className="flex flex-col md:flex-row gap-8 lg:gap-10">
            <Button size="large">{about.cta.text}</Button>
            <Button variant="secondary" size="large">
              {about.cta2.text}
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
