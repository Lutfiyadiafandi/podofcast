import Heading from "../atoms/Heading";
import data from "../../utils/data.json";
import { useState } from "react";
import Paragraph from "../atoms/Paragraph";
import CardAllinOne from "../molecules/CardAllinOne";

const AllinOne = () => {
  const [supremacy] = useState(data.allInOne);
  return (
    <main className="mt-[100px] md:mt-[160px] max-w-screen-xl px-4 md:px-6 lg:px-5 xxl:px-0 mx-auto">
      <Heading size="small" className="text-center">
        All-In-One <span className="text-primary">Cloud Software.</span>
      </Heading>
      <Paragraph
        text={supremacy.subTitle}
        size={"large"}
        className="mt-5 text-center max-w-[700px] mx-auto"
      />
      <section className="mt-[100px] md:mt-[150px] flex flex-col lg:flex-row gap-20 lg:gap-10">
        {supremacy.supremacy.map((spr: any, index) => (
          <CardAllinOne
            key={index}
            icon={spr.image}
            title={spr.title}
            description={spr.description}
          />
        ))}
      </section>
    </main>
  );
};

export default AllinOne;
