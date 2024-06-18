import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import data from "../../utils/data.json";
import { useState } from "react";

const Footer = () => {
  const [footer] = useState(data.footer);
  return (
    <footer className="mt-[100px] pt-[60px] pb-7 bg-secondary-dark">
      <main className="max-w-screen-xl px-4 md:px-6 lg:px-5 xxl:px-0 mx-auto text-basic-50 flex flex-col lg:flex-row gap-[49px]">
        <section className="w-[294px] mx-auto">
          <div className="w-[294px] h-[79px] py-[14px] px-7 rounded-[10px] bg-basic-50">
            <img
              src={footer.logo.src}
              alt={footer.logo.alt}
              className="w-full h-full cursor-pointer"
            />
          </div>
          <p className="mt-5 text-type-l font-semibold">{footer.about}</p>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center lg:text-left gap-6 lg:gap-5">
          <div>
            <h4 className="text-type-xxl font-bold">Quick Link</h4>
            <ul className="mt-3 lg:mt-5 flex flex-col gap-[10px]">
              {footer.links.map((path, index) => (
                <li
                  key={index}
                  className="text-type-xl font-medium cursor-pointer"
                >
                  {path.name}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-type-xxl font-bold">Package Umrah</h4>
            <ul className="mt-3 lg:mt-5 flex flex-col gap-[10px]">
              {footer.packageUmrah.map((pkg, index) => (
                <li
                  key={index}
                  className="text-type-xl font-medium cursor-pointer"
                >
                  {pkg.name}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-type-xxl font-bold">Package Hajj</h4>
            <ul className="mt-3 lg:mt-5 flex flex-col gap-[10px]">
              {footer.packageHajj.map((pkg, index) => (
                <li
                  key={index}
                  className="text-type-xl font-medium cursor-pointer"
                >
                  {pkg.name}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-type-xxl font-bold">Office Place</h4>
            <ul className="mt-3 lg:mt-5 flex flex-col gap-[10px]">
              {footer.place.map((loc, index) => (
                <li
                  key={index}
                  className="text-type-xl font-medium cursor-pointer"
                >
                  {loc.address}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <div className="max-w-screen-xl px-4 md:px-6 lg:px-5 xxl:px-0 mx-auto border-t-2 rounded-[10px] my-[25px] border-basic-50"></div>
      <div className="max-w-screen-xl px-4 md:px-6 lg:px-5 xxl:px-0 mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-type-l font-semibold text-basic-50 text-center">
          {footer.copyright}
        </p>
        <div className="order-first md:order-last flex gap-[11px]">
          <div className="w-9 h-9 rounded-[10px] bg-basic-50 flex justify-center items-center cursor-pointer">
            <FaInstagram size={24} className="text-secondary-dark" />
          </div>
          <div className="w-9 h-9 rounded-[10px] bg-basic-50 flex justify-center items-center cursor-pointer">
            <FaFacebook size={24} className="text-secondary-dark" />
          </div>
          <div className="w-9 h-9 rounded-[10px] bg-basic-50 flex justify-center items-center cursor-pointer">
            <FaTwitter size={24} className="text-secondary-dark" />
          </div>
          <div className="w-9 h-9 rounded-[10px] bg-basic-50 flex justify-center items-center cursor-pointer">
            <FaYoutube size={24} className="text-secondary-dark" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
