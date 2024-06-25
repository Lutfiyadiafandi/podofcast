import Heading from "../atoms/Heading";
import data from "../../utils/data.json";
import { useState } from "react";
import Paragraph from "../atoms/Paragraph";
import Button from "../atoms/Button";
import LineHeading from "../atoms/LineHeading";

const Integrations = () => {
  const [integration] = useState(data.integrations);
  return (
    <main className="mt-[100px] md:mt-[160px] max-w-screen-xl px-4 md:px-6 lg:px-5 xxl:px-0 mx-auto flex flex-col md:flex-row items-center gap-10">
      <section className="w-full md:w-1/2">
        <LineHeading text="Integrations" />
        <Heading size="small">
          200+ educational tools and <br />
          platform
          <span className="text-primary"> integrations</span>
        </Heading>
        <Paragraph
          text={integration.subTitle}
          size={"large"}
          className="mt-5 md:mt-[30px]"
        />
        <Button variant="secondary" size="large" className="mt-8 md:mt-11">
          {integration.button.text}
        </Button>
      </section>
      <section className="w-full md:w-1/2 grid grid-cols-2 gap-x-[100px] md:gap-x-0 gap-y-[70px] order-last md:order-first">
        {integration.platforms.map((platform: any, index) => (
          <img
            key={index}
            src={platform.image}
            alt="Image Platform"
            className="w-[150px] h-fit"
          />
        ))}
      </section>
    </main>
  );
};

export default Integrations;
