import Heading from "../atoms/Heading";
import CardFacilities from "../molecules/CardFacilities";
import data from "../../utils/data.json";
import { useState } from "react";

const Facilities = () => {
  const [facilities] = useState(data.facilities);
  return (
    <div className="mt-[97px] bg-background py-[90px]">
      <main className="max-w-screen-xl px-4 md:px-6 lg:px-5 xxl:px-0 mx-auto">
        <Heading
          title={facilities.title}
          subTitle={facilities.subTitle}
          textAlign="center"
          className="gap-[10px]"
        />
        <section className="mt-[50px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-x-[27px] gap-y-[27px] md:gap-y-[35px] lg:gap-x-[37px] lg:gap-y-[50px]">
          {facilities.facility.map((facility: any, index) => (
            <CardFacilities
              key={index}
              icon={facility.icon}
              title={facility.title}
              description={facility.desc}
            />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Facilities;
