// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";
import Coma from "../atoms/Coma";
import Left from "/icons/ArrowLeftCircle.svg";
import Right from "/icons/ArrowRightCircle.svg";

const SliderTestimoni = ({ data }: any) => {
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
        perPage: 3,
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
          <article className="w-[350px] md:w-[570px] bg-basic-100 rounded-lg">
            <div className="flex flex-col justify-center p-10">
              <Coma />
              <h5 className="text-type-xl font-medium text-basic-900">
                {item.quote}
              </h5>
              <figure className="mt-10 flex flex-col md:flex-row gap-[10px] items-center justify-center md:justify-start">
                <img
                  src={item.image}
                  alt={"Avatar"}
                  className="size-12 rounded-full"
                />
                <p className="text-type-m font-medium text-basic-900">
                  {item.name},
                </p>
                <img
                  src={item.platform}
                  alt={"Platform"}
                  className="w-fit h-[22px]"
                />
              </figure>
            </div>
          </article>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default SliderTestimoni;
