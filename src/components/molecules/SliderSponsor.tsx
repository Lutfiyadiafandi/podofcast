// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";
import Left from "/icons/ArrowLeftCircle.svg";
import Right from "/icons/ArrowRightCircle.svg";
import Line from "../atoms/Line";

const SliderSponsor = ({ data }: any) => {
  return (
    <Splide
      // renderControls={() => (
      //   <div className="splide__arrows mt-[60px] flex gap-5">
      //     <div className="splide__arrow splide__arrow--prev" typeof="button">
      //       <img src={Left} alt="" className="size-20 bg-red-500" />
      //     </div>
      //     <div className="splide__arrow splide__arrow--next" typeof="button">
      //       <img src={Right} alt="" className="size-20" />
      //     </div>
      //   </div>
      // )}
      options={{
        perPage: 2,
        perMove: 1,
        type: "loop",
        // rewind: true,
        keyboard: "global",
        gap: "20px",
        autoWidth: true,
        pagination: false,
        arrows: 2,
      }}
    >
      {data.map((item: any, index: any) => (
        <SplideSlide key={index}>
          <article className="w-[350px] md:w-[570px] border-[1.6px] border-basic-900 bg-basic-100 rounded-xl">
            <div className="flex flex-col justify-center items-center pt-10 pb-[30px] px-10 md:px-16">
              <figure className="w-[355px]">
                <img
                  src={item.image_src}
                  alt={item.image_alt}
                  className="w-fit h-[54px] mx-auto"
                />
                <Line className="mt-5" />
              </figure>
              <p className="mt-[30px] text-type-m font-medium text-basic-500 text-center">
                {item.desc}
              </p>
            </div>
          </article>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default SliderSponsor;
