import Heading from "../../atoms/Heading";
import data from "../../../utils/data.json";
import { useState } from "react";
import Paragraph from "../../atoms/Paragraph";
import Button from "../../atoms/Button";
import IconSection from "../../atoms/IconSection";
import Title from "../../atoms/Title";

const Membership = () => {
  const [membership] = useState(data.membership);
  return (
    <main className="py-[140px] px-4 xl:px-0 relative z-0 max-w-screen-xl mx-auto">
      <IconSection variant="black" />
      <Title>
        <Heading size="medium">Membership benefits</Heading>

        {/* SHAPE */}
        <img
          src="/icons/MembershipShape.svg"
          alt="icons"
          className="size-[240px] absolute -top-[150px] -right-[110px] -z-10"
        />
        {/* SHAPE */}
      </Title>
      <Paragraph size="large" className="mt-5">
        Become our sponsor and get all benefits
      </Paragraph>
      <section className="mt-[100px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-20">
        {membership.map((item: any, index) => (
          <div
            key={index}
            className="max-w-[473px] flex flex-col gap-[30px] justify-center items-center text-center"
          >
            <img
              src={item.image}
              alt={"Image Membership"}
              className="size-[78px]"
            />
            <div>
              <h5 className="text-type-xl font-bold text-basic-900">
                {item.title}
              </h5>
              <p className="mt-[10px] text-type-l font-medium text-basic-900">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </section>
      <section className="mt-[100px] text-center">
        <Button href="#subscribe">See Pricing</Button>
      </section>
    </main>
  );
};

export default Membership;
