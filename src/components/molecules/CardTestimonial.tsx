import { FaStar } from "react-icons/fa";

type TestimonialProps = {
  image: string;
  name: string;
  quote: string;
  review: string;
};

const CardTestimonial: React.FC<TestimonialProps> = ({
  image,
  name,
  quote,
  review,
}) => {
  return (
    <div className="relative max-w-[500px] pb-[120px]">
      <img
        src={image}
        alt="Image Testimonial"
        className="w-full h-full object-cover rounded-[20px]"
      />
      <div className="max-w-[600px] absolute md:-right-[145px] -bottom-1/2 md:bottom-0 bg-basic-50 py-5 px-6 md:py-[40px] md:px-[50px] rounded-[20px] shadow-testimoni stroke-[#BDBDD1] stroke-1">
        <p className="text-type-l md:text-type-xl leading-[180%] font-normal text-[#5F5F7E] stroke-[#BDBDD1] stroke-1">
          “{quote}”
        </p>
        <div className="mt-5 md:mt-[30px] flex flex-col md:flex-row gap-5 justify-between items-center">
          <h3 className="mt-[14px] text-type-xl md:text-type-xxl leading-[180%] font-semibold text-[#5F5F7E] stroke-[#BDBDD1] stroke-1">
            {name}
          </h3>
          <div>
            <div className="flex justify-center gap-0.5 mb-3">
              <FaStar className="text-[#FBA333]" size={23} />
              <FaStar className="text-[#FBA333]" size={23} />
              <FaStar className="text-[#FBA333]" size={23} />
              <FaStar className="text-[#FBA333]" size={23} />
              <FaStar className="text-[#FBA333]" size={23} />
            </div>
            <span className="text-type-l leading-[180%] font-semibold text-[#5F5F7E] stroke-[#BDBDD1] stroke-1">
              {review}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTestimonial;
