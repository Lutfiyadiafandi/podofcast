import { useState } from "react";
import data from "../../utils/data.json";

const Company = () => {
  const [company] = useState(data.companies);
  return (
    <main className="mt-[100px] max-w-screen-xl px-4 md:px-6 lg:px-5 xxl:px-0 mx-auto">
      <h3 className="text-heading6 font-medium leading-[160%] text-paragraph text-center">
        {company.title}
      </h3>
      <section className="mt-8 flex flex-wrap gap-[35px] md:gap-[50px] justify-center items-center">
        {company.company.map((comp: any, index) => (
          <img
            key={index}
            src={comp.image}
            alt="Logo Company"
            className="w-[160px] h-full"
          />
        ))}
      </section>
    </main>
  );
};

export default Company;
