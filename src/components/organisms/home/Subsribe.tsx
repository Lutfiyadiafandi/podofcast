import Heading from "../../atoms/Heading";
import data from "../../../utils/data.json";
import { useState } from "react";
import Paragraph from "../../atoms/Paragraph";
import CardSubsribe from "../../molecules/CardSubsribe";
import IconSection from "../../atoms/IconSection";
import Title from "../../atoms/Title";
import SliderSubscribe from "../../molecules/SliderSubscribe";

const Subsribe = () => {
  const [subsribe] = useState(data.subscribe);
  return (
    <main
      id="subscribe"
      className="py-[140px] px-4 xl:px-0 relative z-0 max-w-screen-xl mx-auto"
    >
      <IconSection variant="black" />
      <Title>
        <Heading size="medium">Become our sponsor</Heading>

        {/* SHAPE */}
        <img
          src="/icons/SubscribeShape.svg"
          alt="icons"
          className="size-[120px] absolute -top-[60px] -left-[75px] -z-10"
        />
        {/* SHAPE */}
      </Title>
      <Paragraph size="large" className="mt-5">
        Get exclusive episodes, merch and more
      </Paragraph>
      <section className="mt-[100px] relative z-0 lg:hidden">
        <SliderSubscribe data={subsribe} />
      </section>
      <section className="mt-[100px] relative z-0 hidden lg:grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-5">
        {subsribe.map((item: any) => (
          <CardSubsribe
            key={item.id}
            id={item.id}
            title={item.title}
            desc={item.desc}
            price={item.price}
            include={item.include}
          />
        ))}

        {/* SHAPE */}
        <img
          src="/icons/SubscribeShapeLeft.svg"
          alt="icons"
          className="size-[120px] absolute -bottom-[50px] -left-[70px] -z-10"
        />
        <img
          src="/icons/QuoteShapeRight.svg"
          alt="icons"
          className="size-[200px] absolute -top-[90px] -right-[100px] -z-10"
        />
        {/* SHAPE */}
      </section>
    </main>
  );
};

export default Subsribe;
