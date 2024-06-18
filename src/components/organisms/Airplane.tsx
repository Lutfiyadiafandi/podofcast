import Tag from "../atoms/Tag";
import { FaStar } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import data from "../../utils/data.json";
import { useState } from "react";

const Airplane = () => {
  const [airplanes] = useState(data.airplanes);
  return (
    <main className="mt-[98px] max-w-screen-xl px-4 md:px-6 lg:px-5 xxl:px-0 mx-auto flex flex-col md:flex-row gap-10 lg:gap-20 items-center">
      <section className="flex-none w-full md:w-[295px]">
        <h1 className="text-heading6 md:text-heading5 leading-[140%] font-bold text-basic-200 font-Kufam">
          {airplanes.title}
        </h1>
        <h3 className="mt-2.5 text-type-xl md:text-type-xxl leading-[150%] font-semibold text-basic-300">
          {airplanes.subTitle}
        </h3>
        <Tag size="small" className="mt-5 flex gap-2 items-center">
          <FaStar className="text-primary" size={24} />
          <span className="text-type-xl leading-[150%] font-medium">
            {airplanes.rating} Rating
          </span>
        </Tag>
      </section>
      <Marquee className="grow" speed={40} direction="right">
        {airplanes.airplane.map((airplane: any, index) => (
          <img
            key={index}
            src={airplane.image}
            alt="Airplane Image"
            className="w-full h-[77px] px-[25px]"
          />
        ))}
      </Marquee>
    </main>
  );
};

export default Airplane;
