import { useState } from "react";
import data from "../../../utils/data.json";
import Heading from "../../atoms/Heading";
import Paragraph from "../../atoms/Paragraph";
import SliderTestimoni from "../../molecules/SliderTestimoni";
import IconSection from "../../atoms/IconSection";
import Title from "../../atoms/Title";

const Testimonial = () => {
  const [testimonial] = useState(data.testimonials);
  return (
    <main
      id="testimonials"
      className="pt-[140px] pb-[208px] px-4 xl:px-0 relative z-0 bg-background-blue"
    >
      <IconSection variant="black" />
      <Title>
        <Heading size="medium">What our listeners say</Heading>

        {/* SHAPE */}
        <img
          src="/icons/TestimoniShape.svg"
          alt="icons"
          className="size-[105px] absolute -top-[70px] -left-[50px] md:-left-[100px] -z-10"
        />
        {/* SHAPE */}
      </Title>
      <Paragraph size="large" className="mt-5">
        Their experience throughout every platform
      </Paragraph>
      <section className="relative mt-[100px] xl:ml-[100px] xxl:ml-[140px]">
        <SliderTestimoni data={testimonial} />
      </section>
    </main>
  );
};

export default Testimonial;
