import { useState } from "react";
import data from "../../../utils/data.json";
import Heading from "../../atoms/Heading";
import Paragraph from "../../atoms/Paragraph";
import SliderSponsor from "../../molecules/SliderSponsor";
import Title from "../../atoms/Title";

const Sponsor = () => {
  const [sponsor] = useState(data.supported);
  return (
    <main className="pt-[140px] pb-[248px] px-4 xl:px-0 bg-background-pink">
      <Title>
        <Heading size="medium">Our Sponsor</Heading>

        {/* SHAPE */}
        <img
          src="/icons/SponsorShape.svg"
          alt="icons"
          className="size-[74px] absolute -top-[40px] -left-[70px] -z-10"
        />
        {/* SHAPE */}
      </Title>
      <Paragraph size="large" className="mt-5">
        Our current official sponsor
      </Paragraph>
      <section className="relative mt-[100px] xl:ml-[100px] xxl:ml-[140px]">
        <SliderSponsor data={sponsor} />
      </section>
    </main>
  );
};

export default Sponsor;
