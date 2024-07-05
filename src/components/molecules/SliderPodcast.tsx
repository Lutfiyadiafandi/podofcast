// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";
import { Link } from "react-router-dom";

const SliderPodcast = ({ data }: any) => {
  return (
    <Splide
      options={{
        perPage: 3,
        perMove: 1,
        type: "loop",
        rewind: true,
        focus: "center",
        keyboard: "global",
        gap: "20px",
        autoWidth: true,
        arrows: false,
        pagination: false,
      }}
    >
      {data.map((item: any, index: any) => (
        <SplideSlide key={index}>
          <Link to={`/podcast/${item.slug}`}>
            <img
              src={item.image}
              alt={item.image_alt}
              className="w-[330px] sm:w-[373px] sm:h-[373px] rounded-xl cursor-pointer"
            />
          </Link>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default SliderPodcast;
