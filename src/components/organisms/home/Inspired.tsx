import { useState } from "react";
import data from "../../../utils/data.json";
import Heading from "../../atoms/Heading";
import IconSection from "../../atoms/IconSection";
import Quote from "../../molecules/Quote";

const Inspired = () => {
  const [inspired] = useState(data.inspired);
  return (
    <main className="py-[140px] px-4 xl:px-0 relative z-0 max-w-screen-xl mx-auto overflow-x-hidden">
      <IconSection variant="red" />
      <Heading size="medium">
        Talk. Listen. Get inspired <br />
        by every minute of it.
      </Heading>
      <section className="mt-[100px] flex flex-col md:flex-row gap-5 xl:gap-[216px] justify-between items-center">
        {inspired.map((item: any, index) => (
          <div
            key={index}
            className="flex flex-col gap-10 justify-center items-center"
          >
            <img
              src={item.image_src}
              alt={item.image_alt}
              className="size-[275px]"
            />
            <p className="text-type-l font-medium text-basic-900 text-center">
              {item.text}
            </p>
          </div>
        ))}
      </section>
      <Quote className="mt-[120px]">
        One of the best daily podcasts that
        <br />
        covers every topic on Spotify.
      </Quote>
    </main>
  );
};

export default Inspired;
