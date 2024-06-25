import { Key } from "react";
import Heading from "../atoms/Heading";
import TextIcon from "../atoms/TextIcon";

const FeatureUI = ({ data }: any) => {
  return (
    <section className="w-full flex flex-col lg:flex-row items-center gap-5">
      <div className="w-full md:w-3/4 lg:w-[60%]">
        <img
          src={data.image}
          alt={"Feature UI"}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full lg:w-[40%]">
        <Heading>
          A <span className="text-primary">user interface</span> designed for
          the classroom
        </Heading>
        <div className="mt-6 md:mt-[50px] flex flex-col gap-5">
          {data.option.map((option: any, index: Key | null | undefined) => (
            <TextIcon key={index} icon={option.icon} text={option.text} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureUI;
