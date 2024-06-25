import Heading from "../atoms/Heading";
import data from "../../utils/data.json";
import { useState } from "react";
import Paragraph from "../atoms/Paragraph";
import CardWhatIs from "../molecules/CardWhatIs";
import Ellipse from "../../assets/Ellipse.svg";

const WhatIs = () => {
  const [about] = useState(data.whatIs);
  return (
    <main className="mt-[100px] md:mt-[160px] max-w-screen-xl px-4 md:px-6 lg:px-5 xxl:px-0 mx-auto">
      <Heading size="medium" className="text-center">
        What is <span className="text-primary">Skilline?</span>
      </Heading>
      <Paragraph
        text={about.subTitle}
        size={"large"}
        className="mt-5 text-center"
      />
      <section className="mt-16 md:mt-20 w-full flex flex-col md:flex-row gap-10 lg:gap-20">
        {about.types.map((type: any, index) => (
          <CardWhatIs
            key={index}
            image={type.image}
            buttonText={type.button.text}
            title={type.text}
          />
        ))}
      </section>
      <section className="mt-[100px] md:mt-[160px] w-full flex flex-col lg:flex-row items-center gap-5">
        <div className="relative w-full lg:w-1/2 order-last lg:order-first">
          <img
            src={Ellipse}
            alt="Elipse"
            className="absolute -top-3 -left-7 -z-10"
          />
          <Heading size="small">
            Everything you can do in a physical classroom,
            <span className="text-primary">you can do with Skilline</span>
          </Heading>
          <Paragraph
            text={about.youCanDo.subTitle}
            size={"large"}
            className="mt-[30px]"
          />
          <p className="mt-[30px] text-type-xl font-normal leading-[180%] text-paragraph underline cursor-pointer">
            {about.youCanDo.button.text}
          </p>
          <img
            src={Ellipse}
            alt="Elipse"
            className="absolute top-60 right-0 -z-10 w-[30px] h-[30px]"
          />
        </div>
        <div className="w-full md:w-3/4 lg:w-1/2">
          <img
            src={about.youCanDo.image.src}
            alt={about.youCanDo.image.alt}
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </main>
  );
};

export default WhatIs;
