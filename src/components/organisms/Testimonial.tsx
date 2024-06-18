import Heading from "../atoms/Heading";
import CardTestimonial from "../molecules/CardTestimonial";
import data from "../../utils/data.json";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { FreeMode, Navigation } from "swiper/modules";
// import  Navigation  from "swiper";

const Testimonial = () => {
  const [testimonial] = useState(data.testimonials);
  return (
    <main className="mt-[90px] pb-[40px] max-w-screen-xl px-4 md:px-6 lg:px-5 xxl:px-0 mx-auto">
      <Heading
        title={testimonial.title}
        subTitle={testimonial.subTitle}
        textAlign="center"
        className="gap-[10px]"
      />
      <section className="">
        <Swiper
          className="pt-[60px] pb-5"
          modules={[Navigation, FreeMode]}
          rewind={true}
          spaceBetween={49}
          slidesPerView={1}
          freeMode={true}
          // navigation={{
          //   nextEl: ".review-swiper-button-next",
          //   prevEl: ".review-swiper-button-prev",
          // }}
          breakpoints={{
            880: {
              slidesPerView: 2,
              spaceBetween: 49,
            },
          }}
        >
          {testimonial.testimoni.map((testi: any, index) => (
            <SwiperSlide className="max-w-[476px]">
              <CardTestimonial
                key={index}
                image={testi.image}
                name={testi.name}
                quote={testi.quote}
                pkgClass={testi.class}
                rating={testi.rating}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          className="pt-[32px] pb-5"
          modules={[Navigation, FreeMode]}
          rewind={true}
          spaceBetween={49}
          slidesPerView={1}
          freeMode={true}
          // navigation={{
          //   nextEl: ".review-swiper-button-next",
          //   prevEl: ".review-swiper-button-prev",
          // }}
          breakpoints={{
            880: {
              slidesPerView: 2,
              spaceBetween: 49,
            },
          }}
        >
          {testimonial.testimoni.reverse().map((testi: any, index) => (
            <SwiperSlide className="max-w-[476px]">
              <CardTestimonial
                key={index}
                image={testi.image}
                name={testi.name}
                quote={testi.quote}
                pkgClass={testi.class}
                rating={testi.rating}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </main>
  );
};

export default Testimonial;
