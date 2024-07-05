import { Link } from "react-router-dom";
import Line from "../atoms/Line";
import Tag from "../atoms/Tag";

type PodcastProps = {
  id: number;
  image_src: string;
  image_alt: string;
  title: string;
  desc: string;
  host: string;
  category: string[];
  slug: string;
};

const CardPodcast = ({
  id,
  image_src,
  image_alt,
  title,
  desc,
  host,
  category,
  slug,
}: PodcastProps) => {
  return (
    <article className="max-w-[570px] p-4 rounded-xl border-2 border-basic-900 bg-basic-100 hover:shadow-cardblue transition-all duration-300 ease-in-out">
      <figure className="flex flex-col md2:flex-row gap-5 justify-center items-start lg:items-center">
        <Link to={`/podcast/${slug}`} className="flex-none">
          <img
            src={image_src}
            alt={image_alt}
            className="flex-none w-full md2:size-[166px] aspect-square rounded-lg cursor-pointer"
          />
        </Link>
        <div className="grow">
          <span className="text-type-s font-bold text-primary">Eps. {id}</span>
          <Link to={`/podcast/${slug}`}>
            <h5 className="mt-1 text-type-xl font-bold text-basic-900 hover:text-primary transition-all duration-300 ease-in-out cursor-pointer">
              {title}
            </h5>
          </Link>
          <Line className="mt-[15px]" />
          <p className="mt-2.5 text-type-m font-medium text-basic-500">
            {desc}
          </p>
        </div>
      </figure>
      <div className="mt-5 flex flex-wrap md:flex-nowrap gap-2.5 justify-between md:items-center">
        <div className="flex gap-1.5">
          {category.map((item: any, index) => (
            <Tag text={item.title} key={index} />
          ))}
        </div>
        <div className="flex gap-2.5 items-center">
          <span className="text-type-s font-bold text-basic-500">
            Hosted by:
          </span>
          <img src={host} className="w-[46px]" alt="Host" />
        </div>
      </div>
    </article>
  );
};

export default CardPodcast;
