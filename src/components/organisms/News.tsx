import { useState } from "react";
import data from "../../utils/data.json";
import Heading from "../atoms/Heading";
import Paragraph from "../atoms/Paragraph";
import CardNews from "../molecules/CardNews";
import Tag from "../atoms/Tag";

const News = () => {
  const [news] = useState(data.allnews);
  return (
    <main className="mt-[380px] md:mt-[150px] max-w-screen-xl px-4 md:px-6 lg:px-5 xxl:px-0 mx-auto">
      <Heading size="small" className="text-center">
        <span className="text-primary">Lastest News</span> and Resources
      </Heading>
      <Paragraph
        text={news.subTitle}
        size={"large"}
        className="mt-5 text-center"
      />
      <section className="mt-[100px] flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-1/2">
          <img
            src={news.news[0].image}
            alt={news.news[0].title}
            className="w-full object-cover cursor-pointer rounded-[20px] transition-opacity hover:opacity-85 duration-300 ease-in-out"
          />
          <div className="mt-5 md:mt-10 flex flex-col gap-3 md:gap-5">
            <Tag size="medium">{news.news[0].type}</Tag>
            <h3 className="text-type-xl leading-[180%] font-medium text-secondary-dark cursor-pointer">
              {news.news[0].title}
            </h3>
            <p className="text-type-l leading-[180%] font-normal text-paragraph">
              {news.news[0].text}
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-10">
          {news.news.slice(1).map((news: any, index) => (
            <CardNews
              key={index}
              image={news.image}
              type={news.type}
              title={news.title}
              text={news.text}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default News;
