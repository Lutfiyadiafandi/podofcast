import { Link } from "react-router-dom";
import Line from "../atoms/Line";
import Tag from "../atoms/Tag";

type ArticleProps = {
  // id: number;
  image_src: string;
  image_alt: string;
  title: string;
  desc: string;
  type: string;
  date: string;
  category: string[];
  slug: string;
};

const CardNews = ({
  // id,
  image_src,
  image_alt,
  title,
  desc,
  type,
  date,
  category,
  slug,
}: ArticleProps) => {
  return (
    <article className="max-w-[570px] p-4 rounded-lg border-2 border-basic-900 bg-basic-100 hover:shadow-cardblack transition-all duration-300 ease-in-out">
      <figure className="max-w-[538px] h-full flex flex-col gap-10">
        <Link to={`/blog/${slug}`}>
          <img
            src={image_src}
            alt={image_alt}
            className="w-full md:max-w-[538px] md:max-h-[320px] rounded-lg cursor-pointer"
          />
        </Link>
        <div className="h-full flex flex-col justify-between">
          <span className="text-type-m font-bold text-basic-500 uppercase">
            {type}
          </span>
          <Link to={`/blog/${slug}`}>
            <h3 className="mt-1.5 text-heading3 font-bold text-basic-900 hover:text-primary transition-all duration-300 ease-in-out cursor-pointer">
              {title}
            </h3>
          </Link>
          <p className="mt-5 text-type-m font-medium text-basic-500">{desc}</p>
          <div>
            <Line className="mt-[26px]" />
            <div className="mt-5 flex justify-between items-center">
              <div className="flex gap-1.5">
                {category.map((item: any, index) => (
                  <Tag text={item.title} key={index} />
                ))}
              </div>
              <span className="text-type-s font-bold text-basic-500">
                {date}
              </span>
            </div>
          </div>
        </div>
      </figure>
    </article>
  );
};

export default CardNews;
