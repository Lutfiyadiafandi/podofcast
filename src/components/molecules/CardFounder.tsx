import Line from "../atoms/Line";
import Tiktok from "/icons/TiktokL.svg";
import Twitter from "/icons/TwitterL.svg";
import Instagram from "/icons/InstagramL.svg";

type FounderProps = {
  id: number;
  image_src: string;
  image_alt: string;
  name: string;
  desc: string;
  icon: string;
};

const CardFounder = ({
  id,
  image_src,
  image_alt,
  name,
  desc,
  icon,
}: FounderProps) => {
  return (
    <article className="max-w-[570px] flex flex-col md2:flex-row gap-5 p-4 rounded-lg border-2 border-basic-900 bg-basic-100 shadow-cardblack">
      <div className="md2:w-1/2 md2:flex-none flex justify-between">
        <img
          src={image_src}
          alt={image_alt}
          className="w-1/2 md2:w-full lg:w-[259px] h-full rounded-lg object-cover"
        />
        <img
          src={icon}
          alt={"Icon"}
          className="size-[130px] block md2:hidden"
        />
      </div>
      <figure className="w-full flex flex-col items-end justify-between">
        <img
          src={icon}
          alt={"Icon"}
          className="size-[130px] hidden md2:block"
        />
        <div className="">
          <span className="text-type-m font-medium text-basic-900">
            Host {id}
          </span>
          <h5 className="mt-1.5 text-heading3 font-bold text-basic-900">
            {name}
          </h5>
          <p className="mt-5 text-type-m font-medium text-basic-500">{desc}</p>
          <Line className="mt-5" />
          <div className="mt-2.5 flex gap-5 items-center justify-end">
            <span className="text-type-s font-bold text-basic-500">
              follow me:
            </span>
            <div className="flex gap-2.5">
              <img src={Tiktok} className="size-5" alt="Tiktok" />
              <img src={Twitter} className="size-5" alt="Twitter" />
              <img src={Instagram} className="size-5" alt="Instagram" />
            </div>
          </div>
        </div>
      </figure>
    </article>
  );
};

export default CardFounder;
