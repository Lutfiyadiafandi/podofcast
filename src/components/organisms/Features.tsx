import { useState } from "react";
import data from "../../utils/data.json";
import Heading from "../atoms/Heading";
import Paragraph from "../atoms/Paragraph";
import FeatureUI from "../molecules/FeatureUI";
import FeatureTools from "../molecules/FeatureTools";
import FeatureQuiz from "../molecules/FeatureQuiz";
import FeatureClass from "../molecules/FeatureClass";
import FeatureOneonOne from "../molecules/FeatureOneonOne";
import Button from "../atoms/Button";

const Features = () => {
  const [feature] = useState(data.ourFeatures);
  return (
    <main className="mt-[100px] md:mt-[160px] max-w-screen-xl px-4 md:px-6 lg:px-5 xxl:px-0 mx-auto">
      <Heading size="small" className="text-center">
        Our <span className="text-primary">Features</span>
      </Heading>
      <Paragraph
        text={feature.subTitle}
        size={"large"}
        className="mt-5 text-center"
      />
      <section className="mt-[100px] flex flex-col gap-20 md:gap-[100px]">
        <FeatureUI data={feature.features1} />
        <FeatureTools data={feature.features2} />
        <FeatureQuiz data={feature.features3} />
        <FeatureClass data={feature.features4} />
        <FeatureOneonOne data={feature.features5} />
        <Button variant="secondary" size="large" className="mx-auto">
          See more features
        </Button>
      </section>
    </main>
  );
};

export default Features;
