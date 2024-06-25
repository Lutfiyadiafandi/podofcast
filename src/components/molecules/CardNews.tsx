import Tag from "../atoms/Tag";

type NewsProps = {
  image: string;
  type: string;
  title: string;
  text: string;
};

const CardNews: React.FC<NewsProps> = ({ image, type, title, text }) => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center gap-5">
      <div className="relative w-full md:w-[260px] flex-none">
        <img
          src={image}
          alt={title}
          className="w-full h-[182px] md:h-full object-cover cursor-pointer rounded-[20px] transition-opacity hover:opacity-85 duration-300 ease-in-out"
        />
        <Tag className="hidden md:block absolute bottom-2 right-2">{type}</Tag>
      </div>
      <div className="grow">
        <Tag size="medium" className="mb-3 md:hidden">
          {type}
        </Tag>
        <h3 className="text-type-xl leading-[180%] font-medium text-secondary-dark line-clamp-2 cursor-pointer">
          {title}
        </h3>
        <p className="mt-3 md:mt-2 text-type-l leading-[180%] font-normal text-paragraph line-clamp-2">
          {text}
        </p>
      </div>
    </div>
  );
};

export default CardNews;
