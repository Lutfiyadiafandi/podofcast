import data from "../../utils/data.json";
import { useState } from "react";

const Footer = () => {
  const [footer] = useState(data.footer);
  return (
    <footer className="mt-[100px] md:mt-[160px] bg-secondary-dark">
      <section className="pt-[74px] pb-10 px-4 flex flex-col justify-between items-center gap-[95px]">
        <div className="flex gap-5 md:gap-[41px] justify-center items-center">
          <img
            src={footer.logo.src}
            alt={footer.logo.alt}
            className="w-[150px] h-full cursor-pointer"
          />
          <hr className="h-[80px] w-[2px] bg-[#626381]" />
          <h2 className="text-type-xl font-semibold text-basic-50">
            Virtual Class
            <br />
            for Zoom
          </h2>
        </div>
        <div>
          <p className="text-type-xxl font-medium text-[#B2B3CF] text-center">
            Subscribe to get our Newsletter
          </p>
          <div className="mt-5 flex flex-wrap gap-5 justify-center">
            <input
              type="email"
              className="max-w-[400px] h-[60px] px-8 bg-transparent rounded-[80px] border border-[#83839A] stroke-1 stroke-[#83839A] text-type-l font-normal text-[#83839A] focus:outline-none"
              placeholder="Your Email"
            />
            <input
              type="button"
              value="Subscribe"
              className="w-[180px] h-[60px] rounded-[60px] bg-gradient-to-br from-[#545AE7] to-[#393FCF] text-type-xl font-medium text-basic-50 cursor-pointer"
            />
          </div>
        </div>
        <nav>
          <ul className="flex flex-col md:flex-row gap-5 justify-center">
            {footer.navigation.map((item: any, index) => (
              <li
                key={index}
                className={`text-type-l md:text-type-xl font-normal text-[#B2B3CF] text-center ${
                  index !== footer.navigation.length - 1
                    ? "md:border-r-[2px] md:border-[#626381] md:pr-5"
                    : ""
                }`}
              >
                {item.name}
              </li>
            ))}
          </ul>
          <p className="mt-10 text-type-l md:text-type-xl font-normal text-[#B2B3CF] text-center">
            {footer.copyright}
          </p>
        </nav>
      </section>
    </footer>
  );
};

export default Footer;
