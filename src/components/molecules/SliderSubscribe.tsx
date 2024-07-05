// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";
import CardSubsribe from "./CardSubsribe";

const SliderSubscribe = ({ data }: any) => {
  return (
    <Splide
      options={{
        perPage: 3,
        perMove: 1,
        // type: "loop",
        // rewind: true,
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
          <CardSubsribe
            key={item.id}
            id={item.id}
            title={item.title}
            desc={item.desc}
            price={item.price}
            include={item.include}
          />
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default SliderSubscribe;
