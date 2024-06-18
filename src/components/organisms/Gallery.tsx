import Heading from "../atoms/Heading";
import data from "../../utils/data.json";
import { useState } from "react";

const Gallery = () => {
  const [galleries] = useState(data.galleries);
  return (
    <div className="mt-[138px] bg-background py-[90px]">
      <main className="max-w-screen-xl px-4 md:px-6 lg:px-5 xxl:px-0 mx-auto">
        <Heading
          title={galleries.title}
          subTitle={galleries.subTitle}
          textAlign="center"
          className="gap-[10px]"
        />
        <section className="mt-[70px] grid grid-cols-1 md:grid-cols-11 grid-rows-gallery gap-x-[25px] gap-y-[37px]">
          {galleries.gallery.map((gal: any, index) => (
            <div
              key={index}
              className={`relative w-full h-full rounded-[10px] shadow-facilities overflow-hidden group cursor-pointer 
                ${
                  index === 0
                    ? "col-span-1 md:col-span-5 row-span-2"
                    : "col-span-1 md:col-span-3 row-span-1"
                }`}
            >
              <img
                src={gal.image}
                alt="Image Gallery"
                className="w-full h-full scale-[1.15] object-cover object-center rounded-[10px] group-hover:scale-[1.2] transition-all ease-in-out duration-300"
              />
              <div className="absolute inset-0 bg-black opacity-20 rounded-[10px]"></div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Gallery;
