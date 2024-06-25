import { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { FreeMode, Navigation } from "swiper/modules";
// import "swiper/css/navigation";
// import "swiper/css";
import data from "../../utils/data.json";
import CardTestimonial from "../molecules/CardTestimonial";
import Heading from "../atoms/Heading";
import LineHeading from "../atoms/LineHeading";
import Paragraph from "../atoms/Paragraph";
import Button from "../atoms/Button";
import { FaArrowRight } from "react-icons/fa6";

const Testimonial = () => {
  const [testimonial] = useState(data.testimonials);
  return (
    <main className="mt-[100px] md:mt-[170px] max-w-screen-xl px-4 md:px-6 lg:px-5 xxl:px-0 mx-auto flex flex-col lg:flex-row items-start gap-10">
      <section className="w-full lg:w-1/2">
        <LineHeading text="Testimonial" />
        <Heading size="large">What They Say?</Heading>
        <Paragraph
          text={testimonial.subTitle}
          size={"large"}
          className="mt-4 md:mt-[29px]"
        />
        <Paragraph
          text={testimonial.subTitle2}
          size={"large"}
          className="mt-4 md:mt-[26px]"
        />
        <Paragraph
          text={testimonial.subTitle3}
          size={"large"}
          className="mt-5 md:mt-[36px]"
        />
        <Button
          variant="secondary"
          size="large"
          className="mt-6 md:mt-[43px] w-full md:w-[403px] flex justify-between items-center pl-8 group"
        >
          {testimonial.button.text}
          <div className="w-20 h-20 flex justify-center items-center rounded-[99px] border-primary border cursor-pointer">
            <FaArrowRight
              size={26}
              className="text-primary group-hover:text-basic-50"
            />
          </div>
        </Button>
      </section>
      <section className="w-full lg:w-1/2">
        <CardTestimonial
          image={testimonial.testimoni[0].image}
          name={testimonial.testimoni[0].name}
          review={testimonial.testimoni[0].review}
          quote={testimonial.testimoni[0].quote}
        />
        {/* <Swiper
          className="bg-blac"
          modules={[Navigation, FreeMode]}
          rewind={true}
          spaceBetween={100}
          slidesPerView={1}
          // navigation={{
          //   nextEl: ".review-swiper-button-next",
          //   prevEl: ".review-swiper-button-prev",
          // }}
        >
          {testimonial.testimoni.map((testi: any, index) => (
            <SwiperSlide key={index}>
              <CardTestimonial
                image={testi.image}
                name={testi.name}
                review={testi.review}
                quote={testi.quote}
              />
            </SwiperSlide>
          ))}
        </Swiper> */}
      </section>
    </main>
  );
};

export default Testimonial;
