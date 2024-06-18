import { FaStar } from "react-icons/fa";
import Tag from "../atoms/Tag";

type TestimonialProps = {
  image: string;
  name: string;
  quote: string;
  pkgClass: string;
  rating: string;
};

const CardTestimonial: React.FC<TestimonialProps> = ({
  image,
  name,
  quote,
  pkgClass,
  rating,
}) => {
  return (
    <div className="w-full md:w-[476px] md:h-[203px] py-5 px-[26px] flex gap-[23px] rounded-[10px] shadow-facilities">
      <div className="flex-none w-[100px]">
        <img
          src={image}
          alt="Image Testimonial"
          className="w-[100px] h-[100px] object-cover object-center rounded-[10px]"
        />
        <Tag
          size="xsmall"
          className="mt-[18px] flex gap-0.5 items-center mx-auto"
        >
          <FaStar className="text-primary" size={12} />
          <span className="">{rating}</span>
        </Tag>
      </div>
      <div className="grow">
        <Tag>{pkgClass}</Tag>
        <h3 className="mt-[14px] text-type-xxl leading-[150%] font-semibold text-basic-200 font-Kufam">
          {name}
        </h3>
        <p className="text-type-m leading-[150%] font-medium text-basic-300">
          {quote}
        </p>
      </div>
    </div>
  );
};

export default CardTestimonial;
