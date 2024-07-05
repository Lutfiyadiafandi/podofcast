import { useState } from "react";
import Box from "../../atoms/Box";
import Heading from "../../atoms/Heading";
import Line from "../../atoms/Line";
import Paragraph from "../../atoms/Paragraph";
import About from "/images/AboutHistory.png";
import data from "../../../utils/data.json";
import CardFounder from "../../molecules/CardFounder";
import Title from "../../atoms/Title";

const AboutHistory = () => {
  const [founder] = useState(data.founder);
  return (
    <main className="py-[140px] px-4 xl:px-0 relative z-0 max-w-screen-xl mx-auto">
      <section className="-mt-[255px] grid grid-cols-3 gap-3 sm:gap-5 z-10">
        <Box total={76} title={"Community Members"} />
        <Box total={128} title={"Podcast Subscribers"} />
        <Box total={59} title={"Daily Listeners"} />
      </section>
      <Heading size="medium" className="mt-5">
        What our listeners say
      </Heading>
      <Paragraph size="large" className="mt-5">
        Their experience throughout every platform
      </Paragraph>
      <img
        src={About}
        alt="Image About"
        className="mt-8 w-full max-h-[640px] rounded-lg"
      />
      <section className="mt-[60px]">
        <Title>
          <Heading size="small" className="text-center">
            About and History
          </Heading>

          {/* SHAPE */}
          <img
            src="/icons/SubscribeShape.svg"
            alt="icons"
            className="size-[120px] absolute -top-[60px] -left-[75px] -z-10"
          />
          {/* SHAPE */}
        </Title>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-5">
          <p className="text-type-l font-medium text-basic-500">
            Eu non <span className="font-bold">diam</span> phasellus vestibulum
            lorem. Fringilla est ullamcorper eget nulla facilisi etiam
            dignissim. Id diam vel quam
            <span className="font-bold"> elementum pulvinar.</span>
            <br />
            <br />
            Elementum eu facilisis sed odio morbi quis commodo. Sed odio morbi
            quis commodo odio aenean sed adipiscing odio diam. uno fablotoson
            louw uit.
          </p>
          <p className="text-type-l font-medium text-basic-500">
            Lorem ipsum dolor sit amet,
            <span className="font-bold"> consectetur adipiscing</span> elit.
            Quam pellentesque at bibendum euismod tellus duis cursus dignissim
            odio. Sit vulputate et integer in. Sit vel, senectus iaculis morbi.
            <span className="font-bold"> Amet </span>
            interdum imperdiet laoreet
            <span className="font-bold"> morbi </span>
            tincidunt fermentum, libero. Ante enim eget.
            <br />
            <br />
            Viverra at porttitor accumsan. Orci non here
          </p>
        </div>
      </section>
      <Line className="mt-[81px]" />
      <section className="mt-[100px]">
        <Title>
          <Heading size="small" className="text-center">
            Founder and Main Host
          </Heading>

          {/* SHAPE */}
          <img
            src="/icons/AboutShape.svg"
            alt="icons"
            className="size-[98.89px] absolute -top-[80px] -right-[25px] md:-top-[50px] md:-right-[50px] -z-10"
          />
          {/* SHAPE */}
        </Title>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-5">
          {founder.map((item: any) => (
            <CardFounder
              key={item.id}
              id={item.id}
              image_src={item.image_src}
              image_alt={item.image_alt}
              name={item.name}
              desc={item.desc}
              icon={item.icon}
            />
          ))}
        </div>
      </section>

      {/* SHAPE */}
      <img
        src="/icons/QuoteShapeLeft.svg"
        alt="icons"
        className="size-[120px] hidden xxl:block absolute -top-[69px] -right-[150px] -z-10"
      />
      {/* SHAPE */}
    </main>
  );
};

export default AboutHistory;
