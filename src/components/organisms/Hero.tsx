import Button from "../atoms/Button";
import Heading from "../atoms/Heading";
import data from "../../utils/data.json";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

const Hero = () => {
  const [hero] = useState(data.hero);
  return (
    <>
      <div className="bg-background h-screen md:h-[800px] absolute inset-0 -z-10"></div>
      <main className="max-w-screen-xl px-4 md:px-6 lg:px-5 xxl:px-0 mx-auto flex flex-col md:flex-row justify-between gap-[40px]">
        <section className="md:mt-[50px] lg:mt-[100px] grow w-full order-last md:order-first">
          <Heading size="large">
            <span className="text-primary">Studying</span> Online is now much
            easier
          </Heading>
          <p className="mt-5 md:mt-8 text-type-xl md:text-type-xxl font-normal leading-[160%] text-basic-100">
            {hero.subTitle}
          </p>
          <div className="mt-7 md:mt-12 flex gap-5 md:gap-8 items-center">
            <Button>{hero.button.text}</Button>
            <div className="w-20 h-20 flex justify-center items-center rounded-full bg-basic-50 cursor-pointer">
              <FaPlay size={30} color="#23BDEE" />
            </div>
            {/* <p className="hidden md:block text-type-xxl font-normal text-secondary-dark cursor-pointer">
              {hero.watch}
            </p> */}
          </div>
        </section>
        <section className="flex-none w-3/4 mx-auto md:w-2/4 lg:w-[]">
          <img src={hero.image.src} alt={hero.image.alt} className="w-full" />
        </section>
      </main>
    </>
  );
};

export default Hero;
